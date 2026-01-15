import { WorkflowPhase } from '../types';

export const ADMIN_WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "AD_PHASE_1",
    title: "Phase 1: Admin Daily Operations Setup & Dashboard Management",
    description: "Admin login, system overview, and daily task prioritization.",
    color: "slate",
    steps: [
      {
        id: "1.1",
        title: "Admin Login & Dashboard Initialization",
        actions: [
          { actor: "AD", description: ["Logs into admin portal using secure credentials", "Reviews pending tasks and priority alerts", "Checks overnight registrations and system notifications"] },
          { actor: "SYS", description: ["Authenticates credentials and logs access time", "Displays admin dashboard with customizable widgets", "Shows pending verification counts and critical alerts", "Highlights expired documents and upcoming deadlines"] }
        ]
      },
      {
        id: "1.2",
        title: "Platform Statistics & Status Overview",
        actions: [
          { actor: "AD", description: ["Reviews total counts: Candidates, Employers, Active Salespersons", "Monitors registration trends (daily, weekly, monthly)", "Checks system health indicators", "Prioritizes tasks based on urgency"] },
          { actor: "SYS", description: ["Updates real-time statistics every 15 minutes", "Flags unusual activity patterns or spikes", "Provides comparative metrics against previous periods"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_2",
    title: "Phase 2: Candidate Management & Document Verification",
    description: "Candidate profile oversight and document compliance verification.",
    color: "emerald",
    steps: [
      {
        id: "2.1",
        title: "Candidate Profile Review & Access Management",
        actions: [
          { actor: "AD", description: ["Views complete candidate list with filtering options", "Reviews individual profiles and application history", "Updates candidate status based on process stage"] },
          { actor: "SYS", description: ["Provides search and filter tools", "Shows candidate status progression through workflow", "Logs all access changes with timestamp and reason"] }
        ]
      },
      {
        id: "2.2",
        title: "Document Verification & Status Tracking",
        actions: [
          { actor: "AD", description: ["Verifies Medical Reports (BP, X-ray, UTI tests)", "Verifies Passport and ID documents", "Verifies certificates (TESDA, PDOS, OWWA, PEOS)", "Updates status (Verified/Rejected/Pending)"] },
          { actor: "SYS", description: ["Notification Trigger: Alert when docs uploaded (to CAN, BM, SA)", "Notification Trigger: Alert when verification status changes (to CAN, BM, SA)", "Maintains document audit trail and expiry tracking"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_3",
    title: "Phase 3: Employer Management & Account Verification",
    description: "Employer account oversight and verification processing.",
    color: "blue",
    steps: [
      {
        id: "3.1",
        title: "Employer Account Management",
        actions: [
          { actor: "AD", description: ["Reviews new employer registrations", "Verifies documents (UOM, NRIC, Proof of Address)", "Activates or deactivates accounts based on verification"] },
          { actor: "SYS", description: ["Provides employer verification checklist", "Logs all verification actions and status changes", "Sends welcome emails and verification status updates"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_4",
    title: "Phase 4: Process & Workflow Management",
    description: "Overseeing candidate progress through hiring and pre-departure processes.",
    color: "purple",
    steps: [
      {
        id: "4.1",
        title: "Workflow Stage Monitoring",
        actions: [
          { actor: "AD", description: ["Tracks Pre-MOM, MOM, and Post-MOM phases", "Updates stage completion status", "Monitors timelines and flags delays"] },
          { actor: "SYS", description: ["Provides visual workflow tracker with stage indicators", "Automates transitions when criteria are met", "Sends stage completion notifications"] }
        ]
      },
      {
        id: "4.2",
        title: "Course Booking & Training Management",
        actions: [
          { actor: "AD", description: ["Books required courses (TESDA, PDOS, OWWA, PEOS)", "Coordinates with training centers for scheduling", "Uploads completion certificates to profiles"] },
          { actor: "SYS", description: ["Notification Trigger: Sends course booking confirmations and reminders", "Tracks attendance and completion status"] }
        ]
      },
      {
        id: "4.3",
        title: "Employment Contract & Insurance Processing (Offline Coordination)",
        actions: [
          { actor: "AD", description: ["Logs receipt of EC Courier from Singapore", "Contacts candidate for physical signing in office", "Manually completes insurance forms and coordinates payment", "Uploads insurance policy to system"] },
          { actor: "SYS", description: ["Tracks EC courier status", "Sends automated reminders for signing appointments", "Logs insurance application and policy details"] }
        ]
      },
      {
        id: "4.4",
        title: "OEC Processing & Government Submissions",
        actions: [
          { actor: "AD", description: ["Guides candidate through online DMW registration", "Compiles document package (EC, Certs, Passport, Insurance)", "Submits via DMW portal and coordinates physical delivery", "Emails OEC copy to SG office for flight arrangement"] },
          { actor: "SYS", description: ["Provides OEC application checklist", "Tracks approval timeline and flags delays", "Maintains government submission audit trail"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_5",
    title: "Phase 5: Financial Monitoring & Payment Verification",
    description: "Payment tracking, verification, and financial compliance.",
    color: "teal",
    steps: [
      {
        id: "5.1",
        title: "Payment Status Monitoring & Verification",
        actions: [
          { actor: "AD", description: ["Monitors payment status (Paid/Pending/Overdue)", "Verifies receipts against bank statements", "Confirms payer details match employer info", "Updates status to 'Payment Verified'"] },
          { actor: "SYS", description: ["Automatically matches payments to cases based on reference", "Notification Triggers: Sends confirmations to EMP, SP, CAN, BM", "Maintains payment audit trail with receipt attachments"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_6",
    title: "Phase 6: System Configuration & Template Management",
    description: "Managing communication templates and system notifications.",
    color: "orange",
    steps: [
      {
        id: "6.1",
        title: "Template Management & Editing",
        actions: [
          { actor: "AD", description: ["Edits email, SMS, and WhatsApp templates", "Tests template functionality before deployment", "Manages version control and rollback"] },
          { actor: "SYS", description: ["Notification Trigger: Alert when templates updated (to SP, BM, SA)", "Provides template editor with WYSIWYG interface", "Maintains template change history"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_7",
    title: "Phase 7: Support & Escalation Management",
    description: "Handling system escalations and support coordination.",
    color: "rose",
    steps: [
      {
        id: "7.1",
        title: "Salesperson Functionality Access",
        actions: [
          { actor: "AD", description: ["Performs SP functions when needed (covering absence, auditing)", "Accesses client consultation tools and matching history"] },
          { actor: "SYS", description: ["Logs all actions when performing SP functions", "Maintains clear audit trail of role switching"] }
        ]
      },
      {
        id: "7.2",
        title: "Escalation System Management",
        actions: [
          { actor: "AD", description: ["Monitors automated escalations for missing docs or payment delays", "Manually escalates cases to Manager (BM) when required"] },
          { actor: "SYS", description: ["Automated Triggers: Stage 1 (X days) to AD, Stage 2 (Y days) to BM", "Provides escalation timeline tracking"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_8",
    title: "Phase 8: Salesperson Management & Workload Balancing",
    description: "Sales team oversight and workload distribution.",
    color: "indigo",
    steps: [
      {
        id: "8.1",
        title: "Performance Monitoring & Reassignment",
        actions: [
          { actor: "AD", description: ["Monitors individual SP workload and capacity", "Reassigns employers between SPs during absence or handovers", "Ensures specialized cases go to appropriate team members"] },
          { actor: "SYS", description: ["Notification Trigger: Sends reassignment alerts to SPs, BM, EMP", "Provides workload distribution analytics"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_9",
    title: "Phase 9: Quality Assurance & Compliance Auditing",
    description: "Ensuring process adherence and regulatory compliance.",
    color: "cyan",
    steps: [
      {
        id: "9.1",
        title: "Process & Document Compliance Audits",
        actions: [
          { actor: "AD", description: ["Conducts random audits of doc verification and payments", "Reviews image clarity and expiry date validation", "Requests document resubmission for inadequate quality"] },
          { actor: "SYS", description: ["Provides audit sampling and tracking tools", "Automatically flags potential compliance violations"] }
        ]
      }
    ]
  }
];