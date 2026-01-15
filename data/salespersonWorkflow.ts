import { WorkflowPhase } from '../types';

export const SALESPERSON_WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "SP_PHASE_1",
    title: "1. Role & Responsibilities",
    description: "Intermediary and concierge between Employer and Candidate.",
    color: "blue",
    steps: [
      {
        id: "1.1",
        title: "Overview",
        actions: [
          { 
            actor: "SP", 
            description: [
              "The Salesperson serves as the intermediary and concierge between the Employer and the Candidate.",
              "Key Responsibilities:",
              "Account Management: overseeing a portfolio of Employer clients.",
              "Requirement Translation: Turning rough job needs into professional Job Postings.",
              "Process Facilitation: Scheduling interviews and managing application status.",
              "Closing: Ensuring the hiring process concludes successfully."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_2",
    title: "2. Capabilities, Abilities & Features",
    description: "Permissions over specific Employer accounts.",
    color: "indigo",
    steps: [
      {
        id: "2.1",
        title: "Core Features",
        actions: [
          { 
            actor: "SYS", 
            description: [
              "The Salesperson dashboard provides specific permissions over Employer accounts.",
              "Client Assignment: Ability to claim or create new Client profiles.",
              "Proxy Actions: View the dashboard exactly as the Employer sees it.",
              "Pipeline Control: CRM-style view to push candidates through hiring stages.",
              "Schedule Management: Ability to manage interview times manually."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_3",
    title: "3. Detailed Breakdown: A. The Employers Tab",
    description: "To manage the portfolio of clients.",
    color: "purple",
    steps: [
      {
        id: "3.A.1",
        title: "Employer Management List",
        actions: [
          { 
            actor: "SYS", 
            description: [
              "Assign Control: Dropdown for unassigned employers.",
              "Client Grid: List of managed employers showing Name, Contact, and Status.",
              "Manage Button: Enters Employer Manager Mode."
            ] 
          }
        ]
      },
      {
        id: "3.A.2",
        title: "Employer Manager Mode",
        actions: [
          { 
            actor: "SP", 
            description: [
              "Active Jobs List: Manage current postings for the specific client.",
              "Matched Candidates: View AI matches and invite for interview on behalf of the client."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_4",
    title: "4. Breakdown: B. The Interviews Tab",
    description: "Manage the logistics of meetings.",
    color: "teal",
    steps: [
      {
        id: "3.B.1",
        title: "Interview Management",
        actions: [
          { 
            actor: "SYS", 
            description: [
              "Table View: List of upcoming interviews with reschedule and completion actions."
            ] 
          }
        ]
      },
      {
        id: "3.B.2",
        title: "Rescheduling & Completion",
        actions: [
          { 
            actor: "SP", 
            description: [
              "Updates times based on client requests.",
              "Marks as completed to advance the candidate in the pipeline."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_5",
    title: "5. Breakdown: C. The Pipeline Tab",
    description: "CRM view to track candidate progress.",
    color: "orange",
    steps: [
      {
        id: "3.C.1",
        title: "Funnel Visualization",
        actions: [
          { 
            actor: "SYS", 
            description: [
              "Candidate Cards: Showing status badges and a 4-step visual progress bar."
            ] 
          }
        ]
      },
      {
        id: "3.C.2",
        title: "Pipeline Controls",
        actions: [
          { 
            actor: "SP", 
            description: [
              "Mark Complete: Advances the application to the next milestone.",
              "Reject/Revert: Manages application status errors or changes.",
              "Contract Upload: Triggers finalization when the candidate reaches the end of the pipeline."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_6",
    title: "6. Summary of Salesperson Workflow",
    description: "End-to-end process summary.",
    color: "emerald",
    steps: [
      {
        id: "6.1",
        title: "Workflow Summary",
        actions: [
          { 
            actor: "SP", 
            description: [
              "Onboard: Add or assign client.",
              "Define Needs: Create Job Postings based on consultation.",
              "Invite: View matches and send invitations.",
              "Schedule: Coordinate and mark interviews as completed.",
              "Progress: Move candidates through the CRM pipeline.",
              "Finalize: Upload contract to mark candidate as HIRED."
            ] 
          }
        ]
      }
    ]
  }
];