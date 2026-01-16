import React, { useState } from 'react';
import { 
  Bell, ShieldCheck, Layers, MessageCircle, Zap, Clock, 
  Smartphone, Mail, AlertTriangle, Phone, Users, CheckCircle, 
  ArrowRight, ShieldAlert, FileText, Settings 
} from 'lucide-react';
import { NOTIFICATION_SYSTEM_DATA } from '../data/notificationSystem';

const PRIORITY_MAP: Record<string, { bg: string, text: string, border: string, icon: any }> = {
  P1: { bg: "bg-red-600", text: "text-white", border: "border-red-700", icon: AlertTriangle },
  P2: { bg: "bg-orange-500", text: "text-white", border: "border-orange-600", icon: Zap },
  P3: { bg: "bg-blue-500", text: "text-white", border: "border-blue-600", icon: Clock },
  P4: { bg: "bg-slate-500", text: "text-white", border: "border-slate-600", icon: Bell },
};

const CHANNEL_ICONS: Record<string, any> = {
  "SMS": Smartphone,
  "WhatsApp": MessageCircle,
  "Email": Mail,
  "In-App": Bell,
  "Manual Call": Phone
};

export const NotificationPage = () => {
  const [activeActor, setActiveActor] = useState(NOTIFICATION_SYSTEM_DATA.matrices[0].actor);

  return (
    <div className="space-y-12 pb-24">
      {/* Hero Section */}
      <header className="relative bg-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Bell className="w-64 h-64 text-white rotate-12" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full font-black uppercase tracking-widest border border-blue-500/30">
              System Core v2.4
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-6">
            NOTIFICATION <span className="text-blue-500">ORCHESTRATION</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium leading-relaxed">
            Precise multi-channel requirement mapping across the entire recruitment lifecycle. 
            Ensuring zero communication drop-off through automated retries and manual escalation.
          </p>
        </div>
      </header>

      {/* Architecture Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Priority Levels */}
        <div className="lg:col-span-8 space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-4 h-4" /> Delivery Tiers & Priority
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NOTIFICATION_SYSTEM_DATA.architecture.priorities.map((p, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-xl ${PRIORITY_MAP[p.level].bg} flex items-center justify-center text-white shadow-lg shadow-blue-500/10`}>
                    {React.createElement(PRIORITY_MAP[p.level].icon, { className: "w-5 h-5" })}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Tier {p.level}</span>
                </div>
                <h4 className="text-lg font-black text-slate-800 uppercase tracking-tight mb-1">{p.label}</h4>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-bold text-blue-600">{p.delivery}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.channels.map((ch, ci) => (
                    <span key={ci} className="text-[9px] font-black bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200 uppercase">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Overview */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Smartphone className="w-4 h-4" /> Channel Logic
          </h3>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full">
            <div className="space-y-6">
              {NOTIFICATION_SYSTEM_DATA.architecture.channels.map((ch, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-500 group-hover:border-blue-200 transition-all">
                    {React.createElement(CHANNEL_ICONS[ch.name] || Smartphone, { className: "w-4 h-4" })}
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-800">{ch.name}</div>
                    <div className="text-[11px] text-slate-500 mb-1 leading-tight">{ch.description}</div>
                    <div className="text-[10px] font-bold text-slate-400 italic">Rules: {ch.logic}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Matrix Tabs */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b-2 border-slate-100">
           <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Event Matrices</h2>
              <p className="text-sm text-slate-500 font-medium">Actor-specific triggers and template assignments.</p>
           </div>
           <div className="flex bg-slate-100 p-1.5 rounded-2xl gap-1">
             {NOTIFICATION_SYSTEM_DATA.matrices.map((m) => (
               <button
                 key={m.actor}
                 onClick={() => setActiveActor(m.actor)}
                 className={`px-5 py-2.5 rounded-xl text-xs font-black transition-all tracking-wider ${
                   activeActor === m.actor ? 'bg-white text-slate-900 shadow-md ring-1 ring-slate-200' : 'text-slate-500 hover:text-slate-800'
                 }`}
               >
                 {m.actor}
               </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {NOTIFICATION_SYSTEM_DATA.matrices.find(m => m.actor === activeActor)?.categories.map((cat, ci) => (
            <div key={ci} className="space-y-6 animate-in fade-in duration-500">
              <div className="flex items-center gap-4">
                 <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter whitespace-nowrap">{cat.title}</h4>
                 <div className="h-px bg-slate-200 flex-1"></div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{cat.items.length} EVENTS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-400 transition-all group flex flex-col">
                    {/* Item Header */}
                    <div className="p-6 pb-4 border-b border-slate-50 flex justify-between items-start gap-4">
                       <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                             <span className={`text-[9px] font-black px-2 py-0.5 rounded ${PRIORITY_MAP[item.priority].bg} ${PRIORITY_MAP[item.priority].text}`}>
                               {item.priority} {NOTIFICATION_SYSTEM_DATA.architecture.priorities.find(p => p.level === item.priority)?.label}
                             </span>
                             <span className="text-[10px] font-bold text-slate-300">#E-{ii + 1}</span>
                          </div>
                          <h5 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                            {item.event}
                          </h5>
                          <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">Trigger: {item.trigger}</p>
                       </div>
                       <div className="flex flex-col gap-1 items-end">
                          {item.channels.map((ch, idx) => (
                             <div key={idx} className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-400">
                                {React.createElement(CHANNEL_ICONS[ch] || Zap, { className: "w-3 h-3" })}
                             </div>
                          ))}
                       </div>
                    </div>

                    {/* Item Content Body */}
                    <div className="p-6 bg-slate-50/30 space-y-4 flex-1">
                       <div>
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block">Recipients</label>
                          <div className="flex flex-wrap gap-2">
                             {item.recipients.map((r, ri) => (
                               <span key={ri} className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-100 rounded-full text-[11px] font-bold text-slate-700 shadow-sm">
                                 <Users className="w-2.5 h-2.5 text-blue-500" /> {r}
                               </span>
                             ))}
                          </div>
                       </div>
                       
                       <div className="pt-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 block">Template Assignment</label>
                          <div className="flex items-center gap-2 p-3 bg-white border border-dashed border-slate-300 rounded-xl">
                             <FileText className="w-4 h-4 text-slate-400" />
                             <span className="text-xs font-black text-slate-800 tracking-tight">{item.template}</span>
                          </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manual Protocols Section */}
      <section className="bg-blue-600 rounded-[32px] p-8 md:p-12 text-white shadow-2xl shadow-blue-500/20">
         <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="lg:max-w-sm">
               <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-white" />
               </div>
               <h2 className="text-3xl font-black uppercase tracking-tight leading-tight mb-4">Manual Follow-Up Protocols</h2>
               <p className="text-blue-100 font-medium leading-relaxed">
                  When automation fails or SLA limits are exceeded, human intervention is mandatory. 
                  Below are the rigid escalation paths for critical event triggers.
               </p>
               <div className="mt-8 flex items-center gap-3 p-4 bg-white/10 rounded-2xl border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-blue-300" />
                  <div className="text-sm font-bold">Protocol strict adherence required for compliance</div>
               </div>
            </div>

            <div className="flex-1 w-full space-y-3">
               <div className="grid grid-cols-12 gap-4 px-4 py-2 text-[10px] font-black text-blue-200 uppercase tracking-widest">
                  <div className="col-span-4">Event Context</div>
                  <div className="col-span-3">Trigger Window</div>
                  <div className="col-span-2">First Call</div>
                  <div className="col-span-3">Escalate To</div>
               </div>
               {NOTIFICATION_SYSTEM_DATA.manualProtocols.map((p, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 p-5 bg-white/10 hover:bg-white/15 transition-all rounded-2xl border border-white/5 items-center group">
                     <div className="col-span-4 font-black text-lg tracking-tight uppercase">{p.event}</div>
                     <div className="col-span-3">
                        <span className="px-3 py-1 bg-blue-500/50 rounded-full text-xs font-bold ring-1 ring-blue-400/30">
                          {p.trigger}
                        </span>
                     </div>
                     <div className="col-span-2 font-bold text-sm text-blue-100">{p.firstCall}</div>
                     <div className="col-span-3 flex items-center gap-2 font-black text-xs text-blue-200">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        {p.escalateTo}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer / System Config */}
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Retry Logic</h5>
            <div className="space-y-3">
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-xs font-bold text-slate-700">3 Attempts per Primary</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-xs font-bold text-slate-700">5-minute intervals</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-xs font-bold text-slate-700">Fallback to secondary channel</span>
               </div>
            </div>
         </div>
         <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Localization</h5>
            <div className="flex flex-wrap gap-2">
               {["English", "Tagalog", "Bahasa", "Mandarin", "Burmese"].map(l => (
                 <span key={l} className="text-[10px] font-black bg-white border border-slate-200 px-2 py-1 rounded-lg text-slate-600">{l}</span>
               ))}
            </div>
         </div>
         <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl">
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Audit Frequency</h5>
            <div className="space-y-2">
               <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500">Channel Health</span>
                  <span className="text-blue-600">Daily</span>
               </div>
               <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500">SLA Performance</span>
                  <span className="text-blue-600">Weekly</span>
               </div>
               <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-500">Compliance Audit</span>
                  <span className="text-blue-600">Monthly</span>
               </div>
            </div>
         </div>
         <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col justify-center items-center text-center">
            <Settings className="w-8 h-8 text-slate-600 mb-2" />
            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest">Global Config</h5>
            <p className="text-[10px] text-slate-500 mt-2">All notifications are PDPA/GDPR compliant with TLS encryption.</p>
         </div>
      </footer>
    </div>
  );
};