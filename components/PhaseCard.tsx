import React, { useState, useMemo } from 'react';
import { WorkflowPhase, ActorType } from '../types';
import { StepDetail } from './StepDetail';
import { ChevronDown, ChevronRight, Layers } from 'lucide-react';

interface PhaseCardProps {
  phase: WorkflowPhase;
  isOpen: boolean;
  onToggle: () => void;
  currentView: string; // 'ALL' | 'EMP' | 'CAN' | 'SP' | 'AD'
}

const COLOR_MAP: Record<string, string> = {
  blue: "border-l-blue-500 shadow-blue-100",
  indigo: "border-l-indigo-500 shadow-indigo-100",
  purple: "border-l-purple-500 shadow-purple-100",
  teal: "border-l-teal-500 shadow-teal-100",
  orange: "border-l-orange-500 shadow-orange-100",
  cyan: "border-l-cyan-500 shadow-cyan-100",
  emerald: "border-l-emerald-500 shadow-emerald-100",
  rose: "border-l-rose-500 shadow-rose-100",
  slate: "border-l-slate-500 shadow-slate-100",
  gray: "border-l-gray-500 shadow-gray-100",
};

const BG_MAP: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700",
  indigo: "bg-indigo-50 text-indigo-700",
  purple: "bg-purple-50 text-purple-700",
  teal: "bg-teal-50 text-teal-700",
  orange: "bg-orange-50 text-orange-700",
  cyan: "bg-cyan-50 text-cyan-700",
  emerald: "bg-emerald-50 text-emerald-700",
  rose: "bg-rose-50 text-rose-700",
  slate: "bg-slate-50 text-slate-700",
  gray: "bg-gray-50 text-gray-700",
};

export const PhaseCard: React.FC<PhaseCardProps> = ({ phase, isOpen, onToggle, currentView }) => {
  const [activeNationality, setActiveNationality] = useState("Myanmar");

  const filteredSteps = useMemo(() => {
    // If we are in 'ALL' view, or specifically in 'CAN', 'AD', or 'SP' view (which have their own custom workflow data),
    // we do NOT want to filter steps out. The workflow is already designed end-to-end for these roles.
    if (currentView === 'ALL' || currentView === 'CAN' || currentView === 'AD' || currentView === 'SP') return phase.steps;

    return phase.steps.filter(step => {
      // Logic: Show step if any action involves the current actor
      // OR if the system notifies the current actor
      const relevantAction = step.actions.some(action => {
        if (action.actor === currentView) return true;
        
        // Check if System notifies the selected role based on text
        if (action.actor === 'SYS') {
            const desc = action.description.join(' ').toLowerCase();
            if (currentView === 'EMP' && desc.includes('employer')) return true;
            if (currentView === 'CAN' && desc.includes('candidate')) return true;
            if (currentView === 'SP' && (desc.includes('salesperson') || desc.includes('lead'))) return true;
            if (currentView === 'AD' && (desc.includes('admin') || desc.includes('staff'))) return true;
        }

        // Special case: Document reviewers are relevant to Admins and SPs
        if (action.actor === 'DR' && (currentView === 'AD' || currentView === 'SP')) return true;

        // Special case: Transport company relevant to Admin and Employer
        if (action.actor === 'TC' && (currentView === 'AD' || currentView === 'EMP')) return true;
        
        return false;
      });

      // Also check sub-processes
      const relevantSub = step.subProcess && step.subProcess.some(sub => 
        sub.steps.some(subStep => subStep.actions.some(a => a.actor === currentView || (a.actor === 'SYS' && a.description.join(' ').toLowerCase().includes(currentView === 'EMP' ? 'employer' : ''))))
      );

      return relevantAction || relevantSub;
    });
  }, [phase.steps, currentView]);

  if (filteredSteps.length === 0) return null;

  return (
    <div className={`bg-white rounded-xl shadow-sm mb-6 border-l-4 transition-all duration-300 ${COLOR_MAP[phase.color] || "border-l-slate-500"}`}>
      <div 
        className="p-5 flex items-start md:items-center justify-between cursor-pointer group"
        onClick={onToggle}
      >
        <div className="flex gap-4">
          <div className={`p-3 rounded-lg flex-shrink-0 ${BG_MAP[phase.color] || "bg-slate-100 text-slate-600"}`}>
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{phase.title}</h3>
            <p className="text-sm text-slate-500 mt-1 leading-relaxed">{phase.description}</p>
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 mt-2 md:mt-0">
          {isOpen ? (
            <ChevronDown className="w-6 h-6 text-slate-400" />
          ) : (
            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 p-2 md:p-6 bg-slate-50/30">
          <div className="relative">
             {/* Main timeline line background for steps */}
             <div className="absolute left-[22px] md:left-[30px] top-4 bottom-4 w-0.5 bg-slate-200/50" />
             
             {filteredSteps.map((step, idx) => (
               <StepDetail 
                key={step.id} 
                step={step} 
                isLast={idx === filteredSteps.length - 1} 
                activeNationality={activeNationality}
                setActiveNationality={setActiveNationality}
              />
             ))}
          </div>
        </div>
      )}
    </div>
  );
};