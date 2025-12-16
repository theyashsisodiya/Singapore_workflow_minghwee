import React, { useState } from 'react';
import { WORKFLOW_PHASES, KPIS, QA_ITEMS } from './constants';
import { PhaseCard } from './components/PhaseCard';
import { Activity, ShieldCheck, PieChart, Menu, X, Filter } from 'lucide-react';
import { ActorBadge } from './components/ActorBadge';

function App() {
  const [openPhases, setOpenPhases] = useState<Record<string, boolean>>({ "PHASE_1": true });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const togglePhase = (id: string) => {
    setOpenPhases(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    WORKFLOW_PHASES.forEach(p => all[p.id] = true);
    setOpenPhases(all);
  };

  const collapseAll = () => {
    setOpenPhases({});
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 font-sans">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4 flex justify-between items-center sticky top-0 z-30 shadow-sm">
        <h1 className="font-bold text-slate-800 text-lg">MingHwee Workflow</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-slate-600">
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`fixed md:sticky md:top-0 inset-y-0 left-0 z-20 w-72 bg-white border-r border-slate-200 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto shadow-lg md:shadow-none`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="text-white w-5 h-5" />
            </div>
            <h1 className="font-bold text-xl text-slate-800 tracking-tight">MingHwee<span className="text-blue-600">Flow</span></h1>
          </div>

          <nav className="space-y-1">
            {WORKFLOW_PHASES.map((phase) => (
              <button
                key={phase.id}
                onClick={() => {
                  togglePhase(phase.id);
                  if (window.innerWidth < 768) setSidebarOpen(false);
                  // Scroll to view
                  const el = document.getElementById(phase.id);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  openPhases[phase.id] 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 bg-${phase.color}-500`} />
                <span className="truncate text-left">{phase.title.split(':')[0]}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Legend</h4>
            <div className="flex flex-wrap gap-2">
              <ActorBadge actor="EMP" className="text-[10px]" />
              <ActorBadge actor="SP" className="text-[10px]" />
              <ActorBadge actor="AD" className="text-[10px]" />
              <ActorBadge actor="SYS" className="text-[10px]" />
              <ActorBadge actor="OA" className="text-[10px]" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        
        <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Process Workflow</h2>
            <p className="text-slate-500 mt-2">Interactive visualization of the recruitment lifecycle.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={expandAll} className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm">
              Expand All
            </button>
            <button onClick={collapseAll} className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm">
              Collapse All
            </button>
          </div>
        </header>

        {/* Workflow Phases */}
        <div className="space-y-6 relative">
          {/* Vertical timeline line behind cards (desktop only visual) */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 -z-10" />

          {WORKFLOW_PHASES.map((phase) => (
            <div key={phase.id} id={phase.id} className="scroll-mt-24">
              <PhaseCard 
                phase={phase} 
                isOpen={!!openPhases[phase.id]} 
                onToggle={() => togglePhase(phase.id)} 
              />
            </div>
          ))}
        </div>

        {/* Footer Stats / QA */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* KPIs Section */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-emerald-600">
              <PieChart className="w-5 h-5" />
              <h3 className="font-bold text-lg">Key Performance Indicators</h3>
            </div>
            <div className="space-y-4">
              {KPIS.map((kpi, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">{kpi.role}</h4>
                  <div className="flex flex-wrap gap-2">
                    {kpi.metrics.map((m, i) => (
                      <span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded border border-emerald-100">{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QA Checklist */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
             <div className="flex items-center gap-2 mb-4 text-blue-600">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-bold text-lg">Quality Assurance</h3>
            </div>
            <div className="space-y-4">
              {QA_ITEMS.map((qa, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">{qa.category}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {qa.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        <footer className="mt-12 text-center text-slate-400 text-sm pb-8">
          © 2024 MingHwee Recruitment Agency System. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;