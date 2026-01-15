import React, { useRef, useState } from 'react';
import { WorkflowPhase, WorkflowStep } from '../types';
import { Download, ZoomIn, ZoomOut } from 'lucide-react';

interface WorkflowDiagramProps {
  phases: WorkflowPhase[];
  title: string;
}

// Helper to determine node type
const getNodeType = (step: WorkflowStep, index: number, totalSteps: number, isSubStep: boolean) => {
  if (index === 0 && !isSubStep) return 'START';
  if (index === totalSteps - 1 && !isSubStep) return 'END';
  
  const text = (step.description || "") + step.actions.map(a => a.description.join(" ")).join(" ");
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('decide') || lowerText.includes('decision') || lowerText.includes('if ') || lowerText.includes('option') || lowerText.includes('choose')) {
    return 'DECISION';
  }
  
  return 'PROCESS';
};

export const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ phases, title }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  const handleDownloadPdf = async () => {
    const element = contentRef.current;
    if (!element) return;

    // Save current style to restore later
    const originalTransform = element.style.transform;
    const originalWidth = element.style.width;
    const originalMaxWidth = element.style.maxWidth;
    const originalMargin = element.style.margin;

    // Reset styles for capture
    element.style.transform = 'none';
    element.style.width = '1200px'; 
    element.style.maxWidth = 'none';
    element.style.margin = '0';

    // @ts-ignore
    const html2pdf = window.html2pdf;
    if (html2pdf) {
      const heightPx = element.scrollHeight;
      const widthPx = 1200;
      const mmPerPx = 0.264583;
      const heightMm = heightPx * mmPerPx;
      const widthMm = widthPx * mmPerPx;

      const opt = {
        margin: 10, // Small margin for aesthetic
        filename: `${title.replace(/\s+/g, '_')}_Workflow.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          logging: false,
          letterRendering: true,
          width: widthPx,
          height: heightPx,
          windowWidth: widthPx,
          windowHeight: heightPx
        },
        jsPDF: { 
          unit: 'mm', 
          format: [widthMm + 20, heightMm + 20], 
          orientation: 'portrait',
          compress: true
        }
      };

      try {
        await html2pdf().set(opt).from(element).save();
      } catch (err) {
        console.error("PDF Export failed", err);
      } finally {
        element.style.transform = originalTransform;
        element.style.width = originalWidth;
        element.style.maxWidth = originalMaxWidth;
        element.style.margin = originalMargin;
      }
    } else {
      alert("PDF library is still loading...");
    }
  };

  const allSteps: { step: WorkflowStep; phaseColor: string; phaseTitle: string; id: string }[] = [];
  phases.forEach(phase => {
    phase.steps.forEach(step => {
      allSteps.push({ step, phaseColor: phase.color, phaseTitle: phase.title, id: step.id });
      if (step.subProcess) {
        step.subProcess.forEach(sub => {
           sub.steps.forEach(subStep => {
             allSteps.push({ step: subStep, phaseColor: phase.color, phaseTitle: `Sub: ${sub.title}`, id: subStep.id });
           });
        });
      }
    });
  });

  return (
    <div className="w-full bg-slate-100 rounded-xl border border-slate-200 shadow-inner overflow-hidden flex flex-col h-[800px]">
      <div className="bg-white p-4 border-b border-slate-200 flex justify-between items-center z-10 shadow-sm">
        <h3 className="font-bold text-slate-700 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
          Single-Page Process Flow Map
        </h3>
        <div className="flex gap-2">
           <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="py-2 text-sm font-mono text-slate-500 w-12 text-center">{(zoom * 100).toFixed(0)}%</span>
          <button onClick={() => setZoom(z => Math.min(1.5, z + 0.1))} className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
            <ZoomIn className="w-5 h-5" />
          </button>
          <div className="w-px h-8 bg-slate-200 mx-2"></div>
          <button 
            onClick={handleDownloadPdf}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium text-sm"
          >
            <Download className="w-4 h-4" />
            Export PDF (Single Page)
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-8 relative bg-slate-50/50">
        <div 
          ref={contentRef}
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
          className="max-w-5xl mx-auto bg-white p-16 rounded-lg shadow-sm border border-slate-100 min-h-full"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">{title}</h1>
            <p className="text-slate-400 font-medium">BUSINESS PROCESS WORKFLOW ARCHITECTURE</p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-col items-center">
            {allSteps.map((item, index) => {
              const type = getNodeType(item.step, index, allSteps.length, false);
              
              let shapeClass = "";
              let contentClass = "";

              if (type === 'START') {
                 shapeClass = "w-32 h-32 rounded-full bg-white border-4 border-emerald-500 flex items-center justify-center z-20 shadow-xl";
                 contentClass = "text-center p-2";
              } else if (type === 'END') {
                 shapeClass = "w-48 h-20 rounded-[100px] bg-white border-4 border-rose-500 flex items-center justify-center z-20 shadow-xl";
                 contentClass = "text-center";
              } else if (type === 'DECISION') {
                 shapeClass = "w-56 h-56 bg-white border-4 border-amber-500 z-20 shadow-xl rotate-45 flex items-center justify-center";
                 contentClass = "-rotate-45 text-center flex flex-col items-center justify-center p-4 w-full";
              } else {
                 shapeClass = "w-full max-w-3xl bg-white border-2 border-slate-200 rounded-xl z-20 shadow-lg flex overflow-hidden ring-4 ring-white";
                 contentClass = "p-0 w-full";
              }

              return (
                <React.Fragment key={index}>
                  {/* Segmental Connector - Ensures perfect alignment regardless of PDF scaling */}
                  {index > 0 && (
                     <div className="flex flex-col items-center">
                        <div className="w-0.5 h-12 bg-slate-300 relative z-10">
                           <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 border-r-2 border-b-2 border-slate-300 rotate-45 bg-white"></div>
                        </div>
                     </div>
                  )}

                  <div className="flex flex-col items-center w-full z-20">
                    <div className={`${shapeClass} transition-all duration-300`}>
                      
                      {type === 'START' && (
                        <div className={contentClass}>
                          <div className="font-black text-emerald-600 text-xl">START</div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Entry Point</div>
                        </div>
                      )}

                      {type === 'END' && (
                        <div className={contentClass}>
                          <div className="font-black text-rose-600 text-xl">COMPLETE</div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Process End</div>
                        </div>
                      )}

                      {type === 'DECISION' && (
                        <div className={contentClass}>
                           <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2 px-2 py-0.5 bg-amber-50 rounded border border-amber-200">Decision Required</div>
                           <div className="font-bold text-slate-800 text-sm leading-snug px-4">
                             {item.step.title}
                           </div>
                           <div className="text-[11px] text-slate-500 mt-2 font-medium">
                             {item.step.description ? item.step.description : "Evaluate criteria to proceed"}
                           </div>
                        </div>
                      )}

                      {type === 'PROCESS' && (
                         <div className="flex w-full">
                            <div className={`w-3 ${
                              item.phaseColor.includes('blue') ? 'bg-blue-600' : 
                              item.phaseColor.includes('purple') ? 'bg-purple-600' :
                              item.phaseColor.includes('indigo') ? 'bg-indigo-600' :
                              item.phaseColor.includes('teal') ? 'bg-teal-600' :
                              item.phaseColor.includes('emerald') ? 'bg-emerald-600' :
                              item.phaseColor.includes('orange') ? 'bg-orange-600' :
                              item.phaseColor.includes('rose') ? 'bg-rose-600' :
                              item.phaseColor.includes('red') ? 'bg-red-600' :
                              'bg-slate-600'
                            }`}></div>
                            <div className="p-6 flex-1 bg-white">
                               <div className="flex justify-between items-start mb-3">
                                  <h4 className="font-black text-slate-800 text-lg tracking-tight uppercase">{item.step.title}</h4>
                                  <span className="text-xs font-black text-slate-300 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md">
                                    STEP {item.id}
                                  </span>
                               </div>
                               
                               <div className="mb-4">
                                 <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${
                                   item.phaseColor.includes('blue') ? 'bg-blue-100 text-blue-700 border border-blue-200' : 
                                   item.phaseColor.includes('red') ? 'bg-red-100 text-red-700 border border-red-200' :
                                   'bg-slate-100 text-slate-700 border border-slate-200'
                                 }`}>
                                   {item.phaseTitle}
                                 </span>
                               </div>

                               <div className="grid grid-cols-1 gap-3">
                                 {item.step.actions.map((action, i) => (
                                   <div key={i} className="bg-slate-50/50 p-3 rounded-lg border border-slate-100 group">
                                     <div className="flex items-center gap-2 mb-2">
                                       <span className="text-[10px] font-black text-white bg-slate-800 px-2 py-0.5 rounded-sm uppercase tracking-wider">{action.actor}</span>
                                     </div>
                                     <ul className="space-y-1.5 pl-1">
                                       {action.description.map((desc, di) => (
                                         <li key={di} className="text-[12px] text-slate-600 flex gap-2 leading-relaxed">
                                           <span className="text-blue-500 font-bold">•</span>
                                           <span>{desc}</span>
                                         </li>
                                       ))}
                                     </ul>
                                   </div>
                                 ))}
                               </div>
                            </div>
                         </div>
                      )}

                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          
          <div className="mt-24 pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">
             <div className="flex items-center gap-4">
               <span>MingHwee Recruitment Agency</span>
               <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
               <span>Process Documentation</span>
             </div>
             <div className="text-slate-900">© 2026 | Flow by Growwstacks - Yashraj singh sisodiya</div>
             <div className="bg-slate-100 px-3 py-1 rounded text-slate-500">VERSION 2.4.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};