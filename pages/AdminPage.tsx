import React, { useState } from 'react';
import { ADMIN_WORKFLOW_PHASES } from '../data/adminWorkflow';
import { PhaseCard } from '../components/PhaseCard';
import { FileCheck } from 'lucide-react';

export const AdminPage = () => {
  const [openPhases, setOpenPhases] = useState<Record<string, boolean>>({ "AD_PHASE_1": true });

  const togglePhase = (id: string) => {
    setOpenPhases(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    ADMIN_WORKFLOW_PHASES.forEach(p => all[p.id] = true);
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
               <span className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wide flex items-center gap-1">
                 <FileCheck className="w-3 h-3"/> Admin View
               </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Admin Dashboard & Management</h2>
            <p className="text-slate-500 mt-2">
              Comprehensive oversight of platform operations, approvals, and financials.
            </p>
        </div>
        <div className="flex gap-2">
          <button onClick={expandAll} className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm">Expand All</button>
          <button onClick={collapseAll} className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm">Collapse All</button>
        </div>
      </header>

      {/* Vertical timeline line */}
      <div className="hidden md:block absolute left-8 top-32 bottom-8 w-0.5 bg-slate-200 -z-10" />

      {ADMIN_WORKFLOW_PHASES.map((phase) => (
        <div key={phase.id} id={phase.id} className="scroll-mt-24">
          <PhaseCard 
            phase={phase} 
            isOpen={!!openPhases[phase.id]} 
            onToggle={() => togglePhase(phase.id)}
            currentView="AD"
          />
        </div>
      ))}
    </div>
  );
};