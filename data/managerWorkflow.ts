import { WorkflowPhase } from '../types';

export const MANAGER_WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "MGR_PHASE_1",
    title: "Phase 1: Manager System Access & Daily Operations Setup",
    description: "Manager daily login, dashboard review, and team oversight initialization.",
    color: "blue",
    steps: [
      {
        id: "1.1",
        title: "Manager Login & Dashboard Overview",
        actions: [
          { actor: "BM", description: ["Logs into platform using secure admin credentials", "Views primary dashboard with real-time team metrics", "Reviews urgent alerts and pending escalations", "Checks daily schedule and team meeting calendar"] },
          { actor: "SYS", description: ["Authenticates credentials and logs access time", "Displays customized dashboard with Manager-specific metrics", "Highlights critical alerts requiring immediate attention", "Shows team availability and activity status"] }
        ]
      },
      {
        id: "1.2",
        title: "Daily Performance Review & Team Status Check",
        actions: [
          { actor: "BM", description: ["Reviews overnight team activities and completed tasks", "Checks Sales team pipeline updates and new client acquisitions", "Monitors Admin team document processing backlog", "Reviews yesterday's KPIs against targets", "Identifies potential bottlenecks or delays"] },
          { actor: "SYS", description: ["Provides daily performance summary report", "Flags below-target metrics with visual indicators", "Shows team member login times and active hours", "Displays pending approvals requiring Manager attention", "Highlights SLA breaches or compliance risks"] }
        ]
      },
      {
        id: "1.3",
        title: "Team Communication & Daily Briefing",
        actions: [
          { actor: "BM", description: ["Sends morning briefing message to team via broadcast system", "Reviews team response rates and acknowledgment", "Schedules ad-hoc meetings for urgent matters", "Distributes daily priorities and focus areas", "Monitors team chat for operational issues"] },
          { actor: "SYS", description: ["Logs all broadcast messages and recipient status", "Tracks message open rates and engagement", "Integrates with team communication tools", "Provides read receipts and response tracking", "Archives all team communications"] }
        ]
      }
    ]
  },
  {
    id: "MGR_PHASE_2",
    title: "Phase 2: Staff Management & Performance Monitoring",
    description: "Team supervision, individual performance tracking, and staff administration.",
    color: "indigo",
    steps: [
      {
        id: "2.1",
        title: "Staff Account Management & Role Assignment",
        actions: [
          { actor: "BM", description: ["Creates new Salesperson or Admin accounts as needed", "Assigns appropriate permissions and access levels", "Sets initial performance targets and quotas", "Configures territory assignments and lead distribution", "Activates or deactivates staff accounts based on needs"] },
          { actor: "SYS", description: ["Generates temporary passwords and account setup instructions", "Sends welcome notifications to new staff members", "Logs all permission changes with audit trail", "Updates organizational charts and reporting lines", "Maintains version history of role assignments"] }
        ]
      },
      {
        id: "2.2",
        title: "Individual Performance Monitoring & Coaching",
        actions: [
          { actor: "BM", description: ["Reviews individual team member performance dashboards", "Identifies top performers and areas for improvement", "Schedules one-on-one coaching sessions", "Provides feedback through integrated evaluation system", "Approves or adjusts individual targets as needed"] },
          { actor: "SYS", description: ["Generates individual performance reports", "Calculates performance scores against benchmarks", "Schedules automatic reminder for review sessions", "Stores feedback and coaching notes", "Tracks performance improvement over time"] }
        ]
      },
      {
        id: "2.3",
        title: "Team Performance Analysis & Strategy Adjustment",
        actions: [
          { actor: "BM", description: ["Analyzes team-level performance trends", "Identifies process bottlenecks or training needs", "Adjusts team strategies based on performance data", "Allocates resources to high-priority areas", "Reviews and updates team workflows"] },
          { actor: "SYS", description: ["Provides team comparison analytics", "Generates heat maps of performance distribution", "Suggests optimization opportunities based on data", "Tracks strategy changes and their impact", "Maintains historical performance data"] }
        ]
      }
    ]
  },
  {
    id: "MGR_PHASE_3",
    title: "Phase 3: Operational Escalation Handling",
    description: "Managing exceptions, disputes, and complex case resolutions.",
    color: "purple",
    steps: [
      {
        id: "3.1",
        title: "Escalation Triage & Priority Assessment",
        actions: [
          { actor: "BM", description: ["Reviews escalated cases from Sales and Admin teams", "Assesses urgency and business impact of each escalation", "Assigns priority levels and resolution timelines", "Determines appropriate handling approach", "Documents escalation context and stakeholder concerns"] },
          { actor: "SYS", description: ["Flags escalated cases in Manager dashboard", "Provides case history and previous interactions", "Shows related documents and communications", "Calculates SLA breach risk for each escalation", "Suggests similar past resolutions for reference"] }
        ]
      },
      {
        id: "3.2",
        title: "Exception Approval & Special Case Handling",
        actions: [
          { actor: "BM", description: ["Reviews exception requests outside standard workflows", "Evaluates business justification and risk assessment", "Consults compliance guidelines and policy documents", "Approves or denies exceptions with documented reasoning", "Updates process guidelines based on exception patterns"] },
          { actor: "SYS", description: ["Presents exception request with supporting documentation", "Highlights compliance risks and policy violations", "Requires mandatory reason entry for all decisions", "Logs approval chain and decision timeline", "Updates case status and notifies relevant parties"] }
        ]
      },
      {
        id: "3.3",
        title: "Dispute Resolution & Mediation",
        actions: [
          { actor: "BM", description: ["Reviews disputes between team members or with clients", "Gathers all relevant information and perspectives", "Facilitates resolution discussions", "Documents agreed solutions and action items", "Monitors implementation of resolution agreements"] },
          { actor: "SYS", description: ["Provides secure communication channel for dispute resolution", "Archives all dispute-related communications", "Tracks resolution implementation progress", "Generates dispute resolution reports", "Maintains confidentiality of sensitive discussions"] }
        ]
      }
    ]
  },
  {
    id: "MGR_PHASE_4",
    title: "Phase 4: Financial Oversight & Refund Management",
    description: "Payment monitoring, refund approvals, and financial compliance.",
    color: "teal",
    steps: [
      {
        id: "4.1",
        title: "Daily Financial Review & Transaction Monitoring",
        actions: [
          { actor: "BM", description: ["Reviews daily payment transactions and revenue reports", "Monitors payment verification backlog and aging", "Flags suspicious transactions or payment discrepancies", "Approves high-value transactions requiring dual authorization", "Reviews commission calculations and payout reports"] },
          { actor: "SYS", description: ["Generates daily financial summary dashboard", "Highlights transactions requiring Manager review", "Calculates commission amounts based on configured rules", "Provides payment trend analysis and forecasting", "Flags recurring payment issues or patterns"] }
        ]
      },
      {
        id: "4.2",
        title: "Refund Request Review & Approval Process",
        actions: [
          { actor: "BM", description: ["Receives notifications of refund initiation by Sales/Admin", "Reviews refund justification and supporting documentation", "Evaluates impact on client relationships and business rules", "Approves, rejects, or requests additional information", "Documents decision reasoning for audit purposes"] },
          { actor: "SYS", description: ["Routes refund requests to Manager based on amount or type", "Presents complete case history and payment details", "Calculates refund impact on revenue and commissions", "Sends status updates to all relevant parties", "Maintains refund approval audit trail"] }
        ]
      },
      {
        id: "4.3",
        title: "Budget Monitoring & Cost Control",
        actions: [
          { actor: "BM", description: ["Monitors departmental expenses against allocated budgets", "Reviews vendor invoices and service charges", "Approves operational expenses within authority limits", "Identifies cost-saving opportunities", "Adjusts budget allocations based on operational needs"] },
          { actor: "SYS", description: ["Tracks expenses by category and department", "Compares actual spending against budget projections", "Flags overspending or unusual expense patterns", "Provides vendor performance and cost analysis", "Generates budget utilization reports"] }
        ]
      }
    ]
  },
  {
    id: "MGR_PHASE_5",
    title: "Phase 5: Vendor & Partner Management",
    description: "Overseeing third-party service providers and compliance partners.",
    color: "orange",
    steps: [
      {
        id: "5.1",
        title: "Vendor Performance Monitoring",
        actions: [
          { actor: "BM", description: ["Reviews vendor SLA compliance reports", "Monitors service quality metrics for training centers, clinics, agencies", "Addresses vendor performance issues or delays", "Approves vendor payments based on service delivery", "Documents vendor relationship management activities"] },
          { actor: "SYS", description: ["Integrates with vendor systems for real-time performance data", "Calculates SLA compliance percentages and breach counts", "Generates vendor performance scorecards", "Sends automated alerts for SLA breaches", "Maintains vendor contract and service level documentation"] }
        ]
      },
      {
        id: "5.2",
        title: "Government Agency Coordination Oversight",
        actions: [
          { actor: "BM", description: ["Monitors processing times at DMW, POEA, OWWA, TESDA", "Reviews government application success rates and rejection reasons", "Identifies patterns in processing delays", "Adjusts operational timelines based on agency performance", "Documents agency relationship management"] },
          { actor: "SYS", description: ["Tracks government application status in real-time", "Calculates average processing times by agency", "Flags applications exceeding expected timelines", "Generates agency performance reports", "Maintains agency contact and requirement documentation"] }
        ]
      }
    ]
  },
  {
    id: "MGR_PHASE_6",
    title: "Phase 6: Quality Assurance & Compliance Auditing",
    description: "Ensuring process adherence, quality standards, and regulatory compliance.",
    color: "emerald",
    steps: [
      {
        id: "6.1",
        title: "Process Compliance Audits",
        actions: [
          { actor: "BM", description: ["Conducts random sampling of Sales and Admin activities", "Reviews recorded client consultations for quality standards", "Checks document verification accuracy and completeness", "Audits payment processing for compliance with procedures", "Documents findings and implements corrective actions"] },
          { actor: "SYS", description: ["Provides random sampling tool for audit selection", "Stores recorded consultations and interactions", "Flags potential compliance issues based on rules", "Generates audit reports with findings and recommendations", "Tracks corrective action implementation"] }
        ]
      },
      {
        id: "6.2",
        title: "Customer Satisfaction Monitoring",
        actions: [
          { actor: "BM", description: ["Reviews NPS scores and customer feedback", "Analyzes satisfaction trends across different service aspects", "Identifies recurring issues or complaint patterns", "Implements improvements based on customer insights", "Monitors impact of changes on satisfaction metrics"] },
          { actor: "SYS", description: ["Collects and aggregates NPS survey responses", "Calculates satisfaction scores by team and service type", "Provides sentiment analysis on open-ended feedback", "Tracks satisfaction trends over time", "Links satisfaction data to operational metrics"] }
        ]
      },
      {
        id: "6.3",
        title: "Internal Process Optimization",
        actions: [
          { actor: "BM", description: ["Analyzes operational efficiency metrics", "Identifies process bottlenecks and improvement opportunities", "Tests and implements process enhancements", "Measures impact of changes on performance metrics", "Documents optimized procedures and guidelines"] },
          { actor: "SYS", description: ["Provides process mapping and workflow analysis tools", "Calculates time and cost metrics for each process step", "Simulates impact of proposed changes", "Tracks before/after metrics for process improvements", "Maintains process documentation library"] }
        ]
      }
    ]
  },
  {
    id: "MGR_PHASE_7",
    title: "Phase 7: Reporting & Strategic Planning",
    description: "Generating insights, strategic analysis, and leadership reporting.",
    color: "rose",
    steps: [
      {
        id: "7.1",
        title: "Executive Reporting & Performance Analysis",
        actions: [
          { actor: "BM", description: ["Generates weekly and monthly performance reports", "Analyzes key trends and performance drivers", "Prepares insights for leadership team review", "Identifies strategic opportunities and risks", "Presents findings with data visualization"] },
          { actor: "SYS", description: ["Provides customizable report templates", "Automates scheduled report generation and distribution", "Offers advanced analytics and data visualization tools", "Maintains historical data for trend analysis", "Supports export to multiple formats (PDF, Excel, PowerPoint)"] }
        ]
      },
      {
        id: "7.2",
        title: "Strategic Planning Support",
        actions: [
          { actor: "BM", description: ["Uses platform analytics for strategic decision-making", "Forecasts future hiring demand and resource needs", "Plans team expansion or restructuring", "Sets quarterly and annual performance targets", "Develops improvement initiatives based on data insights"] },
          { actor: "SYS", description: ["Provides predictive analytics and forecasting tools", "Offers scenario planning and what-if analysis", "Tracks goal progress and milestone achievement", "Integrates market data for competitive analysis", "Supports strategic planning workshops and sessions"] }
        ]
      },
      {
        id: "7.3",
        title: "Continuous Improvement Implementation",
        actions: [
          { actor: "BM", description: ["Prioritizes improvement initiatives based on impact analysis", "Allocates resources to implementation projects", "Monitors progress of improvement initiatives", "Measures ROI on implemented changes", "Documents lessons learned and best practices"] },
          { actor: "SYS", description: ["Provides project management and tracking tools", "Calculates ROI for implemented improvements", "Maintains improvement initiative portfolio", "Tracks resource allocation and utilization", "Archives implementation documentation"] }
        ]
      }
    ]
  }
];