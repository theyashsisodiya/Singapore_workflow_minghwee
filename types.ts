export type ActorType = 
  | 'EMP' // Employer
  | 'SYS' // System
  | 'SP'  // Salesperson
  | 'AD'  // Admin
  | 'DR'  // Document Reviewer
  | 'CAN' // Candidate
  | 'OA'  // Overseas Agent
  | 'TC'  // Transport Company
  | 'BM'  // Branch Manager
  | 'SA'; // Super Admin

export type ViewType = 'ALL' | 'EMP' | 'CAN' | 'SP' | 'AD';

export interface WorkflowAction {
  actor: ActorType;
  description: string[];
  automationOpportunity?: string;
  critical?: boolean;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description?: string;
  actions: WorkflowAction[];
  subProcess?: {
    title: string;
    steps: WorkflowStep[];
  }[]; // For branching logic like Country Specific
}

export interface WorkflowPhase {
  id: string;
  title: string;
  description: string;
  steps: WorkflowStep[];
  color: string;
}

export interface KPI {
  role: string;
  metrics: string[];
}

export interface QAItem {
  category: string;
  items: string[];
}