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
              "The Salesperson serves as the intermediary and concierge between the Employer and the Candidate. While the platform allows for self-service, the Salesperson’s role is to manage high-touch clients, ensure the hiring pipeline moves smoothly, and perform administrative tasks on behalf of busy employers.",
              "Key Responsibilities:",
              "Account Management: overseeing a portfolio of Employer clients.",
              "Requirement Translation: Taking rough job needs from employers and turning them into professional Job Postings.",
              "Process Facilitation: Scheduling interviews, chasing documents, and managing the status of applications.",
              "Closing: Sending contracts and ensuring the hiring process concludes successfully."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_2",
    title: "2. Capabilities, Abilities & Features",
    description: "God Mode permissions over specific Employer accounts.",
    color: "indigo",
    steps: [
      {
        id: "2.1",
        title: "Core Features",
        actions: [
          { 
            actor: "SYS", 
            description: [
              "The Salesperson dashboard gives the user \"God Mode\" permissions over specific Employer accounts.",
              "Client Assignment: Ability to claim an unmanaged Employer account or create a new Client profile from scratch.",
              "Proxy Actions: The ability to view the dashboard exactly as the Employer sees it, allowing them to post jobs and invite candidates on the Employer's behalf.",
              "Pipeline Control: A simplified \"CRM-style\" view to drag/push candidates through the hiring stages (Interview -> Selected -> Docs -> Contract).",
              "Schedule Management: Ability to override interview times and mark interviews as completed manually.",
              "Admin Communication: A direct \"Help Request\" channel to the Super Admin for critical issues."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_3",
    title: "3. Detailed Breakdown: A. The Employers Tab",
    description: "To manage the portfolio of clients and access specific employer profiles.",
    color: "purple",
    steps: [
      {
        id: "3.A.1",
        title: "Content on Webpage",
        actions: [
          { 
            actor: "SYS", 
            description: [
              "Header: Title \"Employer Management\" and an \"+ Add Client\" button or they get auto assigned the new employer.",
              "Assign Control: A dropdown menu labeled \"Assign Employer to Manage\". It lists employers registered in the system but not yet assigned to a salesperson.",
              "Client Grid: A list of cards representing every employer managed by this salesperson. Each card shows:",
              "Client Name / Household Name.",
              "Contact Details (Phone/Email).",
              "Tag: \"Registered User\" (Client signed up themselves) vs \"Manual Entry\" (Salesperson created the profile).",
              "\"Manage ->\" Button: The critical action button."
            ] 
          }
        ]
      },
      {
        id: "3.A.2",
        title: "How it Works",
        actions: [
          { 
            actor: "SP", 
            description: [
              "Add Client: Opens a prompt to enter a Name and Email. This creates a placeholder account for an employer who called via phone.",
              "Assign: If an employer registered online, the Salesperson selects them from the dropdown to add them to their portfolio.",
              "Manage: Clicking this enters the Employer Manager Mode."
            ] 
          }
        ]
      },
      {
        id: "3.A.3",
        title: "Employer Manager Mode (The Drill-Down View)",
        actions: [
          { 
            actor: "SP", 
            description: [
              "When \"Manage\" is clicked, the view changes to simulate the Employer's account.",
              "Yellow Alert Box (Pending Requirements): Shows raw data submitted by the employer during onboarding (e.g., \"I need a cook, hourly rate $20/hr\").",
              "Action: Clicking \"Create Job Posting\" auto-fills the job creation form with this data.",
              "Active Jobs List: Shows current job postings for this specific client.",
              "Post Job Button: Opens the PostJobForm. The salesperson fills out the job title, hourly rate, and description for the client.",
              "Matched Candidates: Allows the salesperson to see who the AI matched and click \"Invite for Interview\" on behalf of the client."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_4",
    title: "3. Detailed Breakdown: B. The Interviews Tab",
    description: "To manage the logistics of meetings and update system times.",
    color: "teal",
    steps: [
      {
        id: "3.B.1",
        title: "Content on Webpage",
        actions: [
          { 
            actor: "SYS", 
            description: [
              "Table View: A clear list of all upcoming interviews across all clients.",
              "Columns: Candidate Name, Job Title, Employer Name, Date & Time.",
              "Actions Column:",
              "Reschedule: Opens a modal to change the date/time of the interview.",
              "Mark as Completed: A green button."
            ] 
          }
        ]
      },
      {
        id: "3.B.2",
        title: "How it Works",
        actions: [
          { 
            actor: "SP", 
            description: [
              "The Salesperson sees an interview is set for 10:00 AM.",
              "The Client calls and says, \"Can we move it to 2:00 PM?\"",
              "The Salesperson clicks \"Reschedule\", updates the time, and the system notifies the parties (mocked).",
              "Once the interview happens, the Salesperson clicks \"Mark as Completed\".",
              "Result: This automatically advances the candidate's status from \"Invited\" to \"Candidate Selected\" in the pipeline."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_5",
    title: "3. Detailed Breakdown: C. The Pipeline Tab",
    description: "A CRM view to track where every candidate is in the hiring funnel.",
    color: "orange",
    steps: [
      {
        id: "3.C.1",
        title: "Content on Webpage",
        actions: [
          { 
            actor: "SYS", 
            description: [
              "Filters: A Search Bar (search by candidate/client name) and a Dropdown to filter by specific Client.",
              "Candidate Cards: Each active application is displayed as a card containing:",
              "Candidate Photo & Name.",
              "Job Title & Client Name.",
              "Status Badge: e.g., \"PENDING\", \"HIRED\", \"REJECTED\".",
              "Visual Timeline: A 4-step progress bar:",
              "Interview Invite Sent.",
              "Candidate Selected.",
              "Upload Other Documents.",
              "Send Contract."
            ] 
          }
        ]
      },
      {
        id: "3.C.2",
        title: "How it Works & Workflow",
        actions: [
          { 
            actor: "SP", 
            description: [
              "The timeline visualizes the status of the application.",
              "Control Panel: At the bottom of each card, there are action buttons:",
              "Mark Complete: Advances the candidate to the next bubble (e.g., moves from \"Selected\" to \"Upload Docs\").",
              "Reject: Immediately marks the application as \"Rejected\" (Red badge).",
              "Revert Step: If a mistake was made, moves the candidate back one step (e.g., from \"Hired\" back to \"Contract\").",
              "Send Contract Feature: When the candidate reaches step 4 (\"Send Contract\"), the \"Mark Complete\" button changes to \"Send Contract PDF\". Clicking this opens a file picker to upload the PDF contract, simulating the finalization of the deal."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_6",
    title: "3. Detailed Breakdown: D. Help & Support",
    description: "Internal communication tool.",
    color: "cyan",
    steps: [
      {
        id: "3.D.1",
        title: "Help & Support (Modal)",
        actions: [
          { 
            actor: "SP", 
            description: [
              "Content: Accessible via the Sidebar \"Help & Support\" button. It opens a modal with a text area.",
              "Function: The Salesperson types a message (e.g., \"Admin, Client X payment is stuck\").",
              "Result: This sends a help_request notification to the Admin Dashboard, which the Admin can view and act upon (linking back to the Salesperson's profile)."
            ] 
          }
        ]
      }
    ]
  },
  {
    id: "SP_PHASE_7",
    title: "Summary of Salesperson Workflow",
    description: "End-to-end process summary.",
    color: "emerald",
    steps: [
      {
        id: "7.1",
        title: "Workflow Summary",
        actions: [
          { 
            actor: "SP", 
            description: [
              "Onboard: Salesperson logs in, adds a new Client \"Mr. Tan\".",
              "Define Needs: Mr. Tan calls and says he needs a helper. Salesperson enters \"Employer Manager\" mode and creates a Job Posting.",
              "Invite: Salesperson views matches, sees \"Maria\", and clicks Invite.",
              "Schedule: Maria accepts. The interview appears in the Interviews tab. Salesperson confirms the time.",
              "Interview: After the call, Salesperson clicks Mark as Completed.",
              "Progress: Salesperson goes to the Pipeline tab. They see Maria is now at \"Candidate Selected\".",
              "Finalize: They click \"Mark Complete\" to move her through Document Verification. Finally, they upload the contract PDF.",
              "Result: Maria is marked as HIRED."
            ] 
          }
        ]
      }
    ]
  }
];