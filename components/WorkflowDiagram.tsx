import React, { useRef, useState } from 'react';
import { WorkflowPhase, WorkflowStep } from '../types';
import { Download, ZoomIn, ZoomOut, ArrowDown } from 'lucide-react';

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

  const handleDownloadPdf = () => {
    const element = contentRef.current;
    if (!element) return;

    // @ts-ignore
    const html2pdf = window.html2pdf;
    if (html2pdf) {
      const opt = {
        margin: [10, 10, 10, 10], // top, left, bottom, right
        filename: `${title.replace(/\s+/g, '_')}_Workflow.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(element).save();
    } else {
      alert("PDF library loading... please try again in a moment.");
    }
  };

  // Flatten steps for sequential rendering
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
      {/* Toolbar */}
      <div className="bg-white p-4 border-b border-slate-200 flex justify-between items-center z-10 shadow-sm">
        <h3 className="font-bold text-slate-700 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
          Process Flow Map
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
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors shadow-sm font-medium text-sm"
          >
            <Download className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Diagram Canvas */}
      <div className="flex-1 overflow-auto p-8 relative bg-slate-50/50" id="diagram-container">
        <div 
          ref={contentRef}
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
          className="max-w-3xl mx-auto bg-white p-12 rounded-lg shadow-sm border border-slate-100 min-h-full"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{title}</h1>
            <p className="text-slate-500">Business Process Workflow Diagram</p>
          </div>

          <div className="flex flex-col items-center relative space-y-8">
            {/* Central Line */}
            <div className="absolute top-4 bottom-4 left-1/2 w-0.5 bg-slate-300 -translate-x-1/2 z-0"></div>

            {allSteps.map((item, index) => {
              const type = getNodeType(item.step, index, allSteps.length, false);
              
              // Define Styles based on Shape
              let shapeClass = "";
              let contentClass = "";
              let icon = null;

              if (type === 'START') {
                 shapeClass = "w-32 h-32 rounded-full bg-emerald-100 border-4 border-emerald-500 flex items-center justify-center z-10 shadow-lg";
                 contentClass = "text-center";
              } else if (type === 'END') {
                 shapeClass = "w-40 h-24 rounded-[50px] bg-rose-100 border-4 border-rose-500 flex items-center justify-center z-10 shadow-lg mt-8";
                 contentClass = "text-center";
              } else if (type === 'DECISION') {
                 shapeClass = "w-40 h-40 bg-amber-100 border-4 border-amber-500 z-10 shadow-lg rotate-45 flex items-center justify-center my-8";
                 contentClass = "-rotate-45 text-center flex flex-col items-center justify-center w-48"; // Counter-rotate content
              } else {
                 // Process Box
                 shapeClass = "w-full max-w-xl bg-white border-2 border-slate-200 rounded-lg z-10 shadow-md flex overflow-hidden";
                 contentClass = "p-0 w-full";
              }

              return (
                <div key={index} className="flex flex-col items-center w-full z-10 group transition-all duration-300">
                  
                  {/* Connector Arrow (Except first) */}
                  {index > 0 && (
                     <div className="w-0.5 h-8 bg-slate-300 relative">
                        <ArrowDown className="w-4 h-4 text-slate-400 absolute -bottom-2 -left-[7px] bg-white rounded-full" />
                     </div>
                  )}

                  {/* Node */}
                  <div className={`${shapeClass} hover:scale-105 transition-transform duration-200`}>
                    
                    {/* Content Logic */}
                    {type === 'START' && (
                      <div className={contentClass}>
                        <div className="font-bold text-emerald-800 text-lg">START</div>
                        <div className="text-xs text-emerald-600 mt-1">Entry Point</div>
                      </div>
                    )}

                    {type === 'END' && (
                      <div className={contentClass}>
                        <div className="font-bold text-rose-800 text-lg">END</div>
                        <div className="text-xs text-rose-600 mt-1">Process Complete</div>
                      </div>
                    )}

                    {type === 'DECISION' && (
                      <div className={contentClass}>
                         <div className="font-bold text-amber-800 text-sm">{item.step.title}</div>
                         <div className="text-[10px] text-amber-600 leading-tight mt-1 max-w-[120px]">
                           {item.step.description?.substring(0, 50)}...
                         </div>
                         <div className="text-[9px] font-bold text-slate-400 mt-2 bg-white px-1 rounded border border-slate-200">Decision Point</div>
                      </div>
                    )}

                    {type === 'PROCESS' && (
                       <div className="flex w-full">
                          <div className={`w-2 ${
                            item.phaseColor.includes('blue') ? 'bg-blue-500' : 
                            item.phaseColor.includes('purple') ? 'bg-purple-500' :
                            item.phaseColor.includes('indigo') ? 'bg-indigo-500' :
                            item.phaseColor.includes('teal') ? 'bg-teal-500' :
                            item.phaseColor.includes('emerald') ? 'bg-emerald-500' :
                            'bg-slate-500'
                          }`}></div>
                          <div className="p-4 flex-1">
                             <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-slate-800">{item.step.title}</h4>
                                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                                  {item.id}
                                </span>
                             </div>
                             
                             {/* Phase Label */}
                             <div className="mb-2">
                               <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                                 item.phaseColor.includes('blue') ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'
                               }`}>
                                 {item.phaseTitle}
                               </span>
                             </div>

                             <ul className="space-y-1">
                               {item.step.actions.slice(0, 3).map((action, i) => (
                                 <li key={i} className="text-xs text-slate-600 flex gap-2">
                                   <span className="w-1 h-1 bg-slate-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                   <span>
                                     <strong className="text-slate-700 mr-1">{action.actor}:</strong>
                                     {action.description[0].substring(0, 100)}
                                     {action.description[0].length > 100 && "..."}
                                   </span>
                                 </li>
                               ))}
                             </ul>
                          </div>
                       </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
             <div>Generated by MingHwee Workflow System</div>
             <div>{new Date().toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
