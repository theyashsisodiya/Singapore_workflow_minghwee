import { WorkflowPhase } from '../types';

export const SUPER_ADMIN_WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "SA_PHASE_1",
    title: "Phase 1: System Administration & Global Configuration",
    description: "Complete control over system settings, features, workflows, and integrations.",
    color: "red",
    steps: [
      {
        id: "SA_1.1",
        title: "System Access & Global Dashboard Initialization",
        actions: [
          { actor: "SA", description: ["Logs into platform using highest-level secure credentials", "Views comprehensive system control dashboard with all modules", "Accesses global configuration panel"] },
          { actor: "SYS", description: ["Authenticates with enhanced security protocols", "Grants unrestricted access to all administrative functions", "Logs SA access with full session tracking"] }
        ]
      },
      {
        id: "SA_1.2",
        title: "System-Wide Settings & Rule Modification",
        actions: [
          { actor: "SA", description: ["Modifies global system settings and business rules", "Updates platform-wide parameters and thresholds"] },
          { actor: "SYS", description: ["Records all setting changes in Audit Log (old vs new value)", "Shows impact analysis of changes before implementation"] }
        ]
      },
      {
        id: "SA_1.3",
        title: "Platform Feature Management",
        actions: [
          { actor: "SA", description: ["Enables or disables any platform module", "Manages feature flags and gradual rollouts"] },
          { actor: "SYS", description: ["Tracks feature state changes and notifies relevant teams", "Provides quick reversal/rollback capability"] }
        ]
      },
      {
        id: "SA_1.4",
        title: "Global Workflow Redesign",
        actions: [
          { actor: "SA", description: ["Redesigns global workflows and process transition rules", "Modifies approval chains and escalation paths"] },
          { actor: "SYS", description: ["Provides drag-and-drop workflow designer interface", "Simulates new workflows before production deployment"] }
        ]
      },
      {
        id: "SA_1.5",
        title: "Third-Party Integration Control",
        actions: [
          { actor: "SA", description: ["Configures payment gateways (PayNow, Credit Card)", "Manages communication services (WhatsApp, SMS, Email)", "Integrates with Gov systems (MOM, DMW, POEA)"] },
          { actor: "SYS", description: ["Encrypts and protects API keys and tokens", "Monitors integration health and performance"] }
        ]
      }
    ]
  },
  {
    id: "SA_PHASE_2",
    title: "Phase 2: Complete User Management & Role Administration",
    description: "Absolute control over all user accounts, roles, and permissions.",
    color: "rose",
    steps: [
      {
        id: "SA_2.1",
        title: "Unrestricted User Account Management",
        actions: [
          { actor: "SA", description: ["Views, edits, or deletes ANY user account without restriction", "Accesses complete user history and activity logs"] },
          { actor: "SYS", description: ["Logs all account modifications for permanent audit", "Requires confirmation for irreversible delete actions"] }
        ]
      },
      {
        id: "SA_2.2",
        title: "User Impersonation & Debugging Access",
        actions: [
          { actor: "SA", description: ["Impersonates any user to view their experience for support", "Specifies reason for each impersonation session"] },
          { actor: "SYS", description: ["Records all impersonation sessions with start/end timestamps", "Displays clear indicator to SA during impersonation mode"] }
        ]
      },
      {
        id: "SA_2.3",
        title: "Custom Role Creation & Permission Architecture",
        actions: [
          { actor: "SA", description: ["Creates new user roles and defines granular permission sets", "Establishes role hierarchies and inheritance rules"] },
          { actor: "SYS", description: ["Provides visual permission matrix editor", "Prevents permission conflicts or security gaps"] }
        ]
      }
    ]
  },
  {
    id: "SA_PHASE_3",
    title: "Phase 3: Financial System Authority & Transaction Control",
    description: "Complete control over all financial operations and monetary transactions.",
    color: "emerald",
    steps: [
      {
        id: "SA_3.1",
        title: "Financial Transaction Management & Overrides",
        actions: [
          { actor: "SA", description: ["Modifies or deletes any financial transaction record", "Adjusts payment statuses and overrides gateway rules"] },
          { actor: "SYS", description: ["Maintains secondary approval flow for large amount overrides", "Generates transaction modification reports"] }
        ]
      },
      {
        id: "SA_3.2",
        title: "Unrestricted Refund Processing",
        actions: [
          { actor: "SA", description: ["Processes refunds without amount or frequency restrictions", "Approves exceptional cases outside standard policy"] },
          { actor: "SYS", description: ["Automatically reconciles financial records and generates receipts", "Alerts on unusually large refund thresholds"] }
        ]
      },
      {
        id: "SA_3.3",
        title: "Pricing & Commission Structure Control",
        actions: [
          { actor: "SA", description: ["Modifies all pricing structures and fee schedules", "Adjusts commission models and promotional discounts"] },
          { actor: "SYS", description: ["Supports future-dated pricing changes", "Calculates revenue impact of proposed pricing shifts"] }
        ]
      }
    ]
  },
  {
    id: "SA_PHASE_4",
    title: "Phase 4: Data Management & Analytics Control",
    description: "Complete access to all data, reporting, and analytical functions.",
    color: "cyan",
    steps: [
      {
        id: "SA_4.1",
        title: "Raw Data Access & Matching Configuration",
        actions: [
          { actor: "SA", description: ["Accesses raw database tables and runs direct queries", "Modifies AI matching algorithm weights and parameters"] },
          { actor: "SYS", description: ["Provides safe read-only query execution environment", "Maintains algorithm version history and rollback"] }
        ]
      },
      {
        id: "SA_4.2",
        title: "Custom Report Creation & Bulk Operations",
        actions: [
          { actor: "SA", description: ["Creates custom reports with any data combination", "Performs bulk data migrations or cleansing operations"] },
          { actor: "SYS", description: ["Provides drag-and-drop report designer", "Requires backup before initiating bulk data transformations"] }
        ]
      }
    ]
  },
  {
    id: "SA_PHASE_5",
    title: "Phase 5: Security & Compliance Override Authority",
    description: "Ability to bypass security controls and modify compliance requirements.",
    color: "orange",
    steps: [
      {
        id: "SA_5.1",
        title: "Security & Authentication Modification",
        actions: [
          { actor: "SA", description: ["Bypasses security restrictions for exceptional cases", "Updates password policies and MFA settings"] },
          { actor: "SYS", description: ["Logs all security overrides in tamper-evident secure log", "Ensures changes don't create system-wide vulnerabilities"] }
        ]
      },
      {
        id: "SA_5.2",
        title: "Compliance Override & Audit Management",
        actions: [
          { actor: "SA", description: ["Creates temporary compliance exceptions", "Manages audit log retention and storage policies"] },
          { actor: "SYS", description: ["Automatically expires temporary exceptions", "Verifies log integrity and completeness via hashing"] }
        ]
      }
    ]
  },
  {
    id: "SA_PHASE_6",
    title: "Phase 6: Special Executive Tools & Emergency Control",
    description: "Advanced tools for system management, simulation, and crisis response.",
    color: "indigo",
    steps: [
      {
        id: "SA_6.1",
        title: "Real-Time System Override Console",
        actions: [
          { actor: "SA", description: ["Accesses live console to intervene in active processes", "Pauses or terminates system operations during emergencies"] },
          { actor: "SYS", description: ["Provides real-time system status and intervention UI", "Logs all console activities with high priority"] }
        ]
      },
      {
        id: "SA_6.2",
        title: "User Journey Simulation & Emergency Recovery",
        actions: [
          { actor: "SA", description: ["Simulates user journeys as any persona for testing", "Executes emergency rollbacks to previous stable states"] },
          { actor: "SYS", description: ["Provides safe simulation/sandbox environment", "Maintains system-wide recovery backup points"] }
        ]
      }
    ]
  },
  {
    id: "SA_PHASE_7",
    title: "Phase 7: Advanced System Monitoring & Diagnostics",
    description: "Comprehensive system oversight and performance management.",
    color: "slate",
    steps: [
      {
        id: "SA_7.1",
        title: "Infrastructure & Diagnostic Management",
        actions: [
          { actor: "SA", description: ["Manages server infrastructure and domain/DNS settings", "Performs root cause analysis for system errors"] },
          { actor: "SYS", description: ["Aggregates and analyzes logs across all environments", "Suggests performance optimizations based on trends"] }
        ]
      }
    ]
  }
];