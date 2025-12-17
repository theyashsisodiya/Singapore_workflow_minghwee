import React, { useState } from 'react';
import { CANDIDATE_WORKFLOW_PHASES } from '../data/candidateWorkflow';
import { PhaseCard } from '../components/PhaseCard';
import { Users, List, GitMerge } from 'lucide-react';
import { WorkflowDiagram } from '../components/WorkflowDiagram';

export const CandidatePage = () => {
  const [openPhases, setOpenPhases] = useState<Record<string, boolean>>({ "CAN_PHASE_1": true });
  const [viewMode, setViewMode] = useState<'list' | 'diagram'>('list');

  const togglePhase = (id: string) => {
    setOpenPhases(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    CANDIDATE_WORKFLOW_PHASES.forEach(p => all[p.id] = true);
    setOpenPhases(all);
  };

  const collapseAll = () => {
    setOpenPhases({});
  };

  return (
    <div className="space-y-6 relative">
      <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
           <div className="flex items-center gap-2 mb-2">
               <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wide flex items-center gap-1">
                 <Users className="w-3 h-3"/> Candidate View
               </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Candidate Journey</h2>
            <p className="text-slate-500 mt-2">
              From registration to deployment: Your path to employment in Singapore.
            </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-sm flex">
             <button 
               onClick={() => setViewMode('list')}
               className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${viewMode === 'list' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:text-slate-700'}`}
             >
               <List className="w-4 h-4" /> List
             </button>
             <button 
               onClick={() => setViewMode('diagram')}
               className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${viewMode === 'diagram' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:text-slate-700'}`}
             >
               <GitMerge className="w-4 h-4" /> Flow Chart
             </button>
          </div>

          {viewMode === 'list' && (
            <div className="flex gap-2">
              <button onClick={expandAll} className="px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm">Expand</button>
              <button onClick={collapseAll} className="px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm">Collapse</button>
            </div>
          )}
        </div>
      </header>

      {viewMode === 'list' && <div className="hidden md:block absolute left-8 top-32 bottom-8 w-0.5 bg-slate-200 -z-10" />}

      {viewMode === 'list' ? (
        CANDIDATE_WORKFLOW_PHASES.map((phase) => (
          <div key={phase.id} id={phase.id} className="scroll-mt-24">
            <PhaseCard 
              phase={phase} 
              isOpen={!!openPhases[phase.id]} 
              onToggle={() => togglePhase(phase.id)}
              currentView="CAN"
            />
          </div>
        ))
      ) : (
        <WorkflowDiagram phases={CANDIDATE_WORKFLOW_PHASES} title="Candidate Journey Map" />
      )}
    </div>
  );
};
