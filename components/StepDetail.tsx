import React, { useState } from 'react';
import { WorkflowStep } from '../types';
import { ActorBadge } from './ActorBadge';
import { ChevronDown, ChevronRight, AlertCircle, Zap } from 'lucide-react';

interface StepDetailProps {
  step: WorkflowStep;
  isLast: boolean;
  activeNationality?: string;
  setActiveNationality?: (nat: string) => void;
}

export const StepDetail: React.FC<StepDetailProps> = ({ step, isLast, activeNationality, setActiveNationality }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative pl-8 md:pl-12 py-2">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-[15px] md:left-[23px] top-8 bottom-[-8px] w-0.5 bg-slate-200" />
      )}
      
      {/* Step Node Circle */}
      <div 
        className="absolute left-[6px] md:left-[14px] top-3 w-5 h-5 rounded-full border-4 border-white bg-slate-400 shadow-sm cursor-pointer z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-full h-full rounded-full ${isOpen ? 'bg-slate-600' : 'bg-slate-400'}`} />
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
        <div 
          className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{step.id}</span>
              <h4 className="font-semibold text-slate-800 text-sm md:text-base">{step.title}</h4>
            </div>
            {step.description && <p className="text-xs text-slate-500 mt-1">{step.description}</p>}
          </div>
          {isOpen ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
        </div>

        {isOpen && (
          <div className="border-t border-slate-100 p-4 bg-slate-50/50 space-y-3">
            
            {/* Standard Actions */}
            {step.actions.length > 0 && (
              <div className="space-y-3">
                {step.actions.map((action, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row gap-3 p-3 rounded-md border ${action.critical ? 'bg-red-50 border-red-100' : 'bg-white border-slate-200'}`}>
                    <div className="md:w-32 flex-shrink-0">
                      <ActorBadge actor={action.actor} />
                    </div>
                    <div className="flex-1">
                      <ul className="list-disc list-inside space-y-1 text-sm text-slate-700 marker:text-slate-400">
                        {action.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      {action.automationOpportunity && (
                        <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded inline-block">
                          <Zap className="w-3 h-3" />
                          <span>Automation: {action.automationOpportunity}</span>
                        </div>
                      )}
                      {action.critical && (
                        <div className="mt-2 flex items-center gap-1.5 text-xs text-red-600 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>CRITICAL STEP</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-processes (e.g. Country Specific) */}
            {step.subProcess && activeNationality && setActiveNationality && (
              <div className="mt-4">
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                  {step.subProcess.map((sub) => (
                    <button
                      key={sub.title}
                      onClick={() => setActiveNationality(sub.title)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap transition-colors ${
                        activeNationality === sub.title
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-slate-600 border-slate-300 hover:border-blue-400'
                      }`}
                    >
                      {sub.title} Workflow
                    </button>
                  ))}
                </div>
                
                <div className="bg-white rounded-lg border border-slate-200 p-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  {step.subProcess.find(s => s.title === activeNationality)?.steps.map((subStep, idx) => (
                     <StepDetail key={idx} step={subStep} isLast={idx === (step.subProcess?.find(s => s.title === activeNationality)?.steps.length || 0) - 1} />
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};
