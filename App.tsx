import React, { useState } from 'react';
import { KPIS, QA_ITEMS } from './data/shared';
import { EmployerPage } from './pages/EmployerPage';
import { CandidatePage } from './pages/CandidatePage';
import { SalespersonPage } from './pages/SalespersonPage';
import { AdminPage } from './pages/AdminPage';
import { ManagerPage } from './pages/ManagerPage';
import { SuperAdminPage } from './pages/SuperAdminPage';
import { Activity, ShieldCheck, PieChart, Menu, X, Users, User, Briefcase, FileCheck, LayoutDashboard, ShieldAlert } from 'lucide-react';
import { ActorBadge } from './components/ActorBadge';
import { ViewType } from './types';

const VIEWS: { id: ViewType | 'MGR' | 'SA'; label: string; icon: React.FC<any> }[] = [
  { id: 'EMP', label: 'Employer', icon: User },
  { id: 'CAN', label: 'Candidate', icon: Users },
  { id: 'SP', label: 'Salesperson', icon: Briefcase },
  { id: 'AD', label: 'Admin', icon: FileCheck },
  { id: 'MGR', label: 'Manager', icon: LayoutDashboard },
  { id: 'SA', label: 'Super Admin', icon: ShieldAlert },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType | 'MGR' | 'SA'>('EMP');

  const renderPage = () => {
    switch (currentView) {
      case 'EMP': return <EmployerPage />;
      case 'CAN': return <CandidatePage />;
      case 'SP': return <SalespersonPage />;
      case 'AD': return <AdminPage />;
      case 'MGR': return <ManagerPage />;
      case 'SA': return <SuperAdminPage />;
      default: return <EmployerPage />;
    }
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

          <div className="mb-8">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Workflow Selection</h4>
            <div className="space-y-1">
              {VIEWS.map((view) => (
                <button
                  key={view.id}
                  onClick={() => {
                    setCurrentView(view.id as any);
                    if (window.innerWidth < 768) setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentView === view.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <view.icon className={`w-4 h-4 ${currentView === view.id ? 'text-blue-100' : 'text-slate-500'}`} />
                  {view.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Legend</h4>
            <div className="flex flex-wrap gap-2">
              <ActorBadge actor="EMP" className="text-[10px]" />
              <ActorBadge actor="SP" className="text-[10px]" />
              <ActorBadge actor="AD" className="text-[10px]" />
              <ActorBadge actor="BM" className="text-[10px]" />
              <ActorBadge actor="SA" className="text-[10px]" />
              <ActorBadge actor="SYS" className="text-[10px]" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        
        {renderPage()}

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
          <p>© 2026 MingHwee Recruitment Agency System. All rights reserved.</p>
          <p className="mt-1 font-medium text-slate-500">flow by Growwstacks - Yashraj singh sisodiya</p>
        </footer>
      </main>
    </div>
  );
}

export default App;