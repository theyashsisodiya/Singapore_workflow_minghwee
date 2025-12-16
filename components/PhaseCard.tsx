import React, { useState } from 'react';
import { WorkflowPhase } from '../types';
import { StepDetail } from './StepDetail';
import { ChevronDown, ChevronRight, Layers } from 'lucide-react';

interface PhaseCardProps {
  phase: WorkflowPhase;
  isOpen: boolean;
  onToggle: () => void;
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
};

export const PhaseCard: React.FC<PhaseCardProps> = ({ phase, isOpen, onToggle }) => {
  const [activeNationality, setActiveNationality] = useState("Myanmar");

  return (
    <div className={`bg-white rounded-xl shadow-sm mb-6 border-l-4 transition-all duration-300 ${COLOR_MAP[phase.color] || "border-l-slate-500"}`}>
      <div 
        className="p-5 flex items-start md:items-center justify-between cursor-pointer group"
        onClick={onToggle}
      >
        <div className="flex gap-4">
          <div className={`p-3 rounded-lg flex-shrink-0 ${BG_MAP[phase.color]}`}>
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
             
             {phase.steps.map((step, idx) => (
               <StepDetail 
                key={step.id} 
                step={step} 
                isLast={idx === phase.steps.length - 1} 
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
