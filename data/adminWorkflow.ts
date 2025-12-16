import { WorkflowPhase } from '../types';

export const ADMIN_WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "AD_PHASE_1",
    title: "1. Admin Authentication & Access",
    description: "Secure entry and role management.",
    color: "slate",
    steps: [
      {
        id: "1.1",
        title: "Admin Login",
        actions: [
          { actor: "AD", description: ["Admin accesses the platform via secure login portal", "Multi-factor authentication (MFA) for enhanced security", "Location-based access restrictions"] },
          { actor: "SYS", description: ["Session management with automatic timeout", "Role-based permissions (Super Admin, Manager, Support)"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_2",
    title: "2. Dashboard Overview (Central Hub)",
    description: "Real-time monitoring of platform activity, performance metrics, and critical alerts.",
    color: "blue",
    steps: [
      {
        id: "2.1",
        title: "Key Statistics Display (Top Cards)",
        actions: [
          { actor: "SYS", description: ["Total Candidates: Number of worker profiles in system (with active/inactive breakdown)", "Active Employers: Verified households/companies actively hiring", "Active Salespersons: Internal staff currently online/active", "Pending Payments: Critical count of financial transactions requiring verification", "New Registrations (24h): Daily sign-up metrics", "Interview Scheduled: Upcoming interviews requiring monitoring", "Critical Actions Required: High-priority items needing immediate attention"] }
        ]
      },
      {
        id: "2.2",
        title: "Platform Growth Trends (Charts)",
        actions: [
          { actor: "SYS", description: ["Hiring Velocity Chart: Area chart visualizing metrics over last 12 months:", "\"Hired Candidates\" trend line", "\"New Job Postings\" trend line", "\"Overall Platform Growth\" trend line", "Month-over-month comparison percentages"] }
        ]
      },
      {
        id: "2.3",
        title: "Real-Time Alerts Feed",
        actions: [
          { actor: "SYS", description: ["Payment Alerts: \"Payment Overdue\", \"Unverified Transaction\", \"Refund Requested\"", "Document Alerts: \"Document Verification Required\", \"Expiring Passport\", \"Missing Certificate\"", "Registration Alerts: \"New Employer Signup\", \"Candidate Profile Incomplete\"", "Process Alerts: \"Medical Exam Delayed\", \"Contract Signing Pending\", \"Flight Booking Required\"", "System Alerts: \"High Server Load\", \"Database Backup Due\", \"API Issues Detected\""] }
        ]
      },
      {
        id: "2.4",
        title: "System Health Monitoring",
        actions: [
          { actor: "SYS", description: ["Server Uptime: Real-time status with 30-day history", "Database Load: Percentage utilization with threshold warnings", "API Latency: Response times across integrated services", "Storage Usage: Document storage capacity monitoring", "Backup Status: Last successful backup timestamp"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_3",
    title: "3. Sidebar Navigation Structure",
    description: "Main navigation organization.",
    color: "gray",
    steps: [
      {
        id: "3.1",
        title: "Left-hand sidebar",
        actions: [
          { actor: "SYS", description: ["Dashboard - Main overview page (default view)", "Candidates - Worker profile management", "Employers - Household/company account management", "Approvals - Verification gatekeeping workflows", "Salesperson - Internal team management", "Financials - Revenue and payment tracking", "Analytics - Business intelligence and metrics", "System Settings - Platform configuration"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_4",
    title: "4. Candidates Management Section",
    description: "Complete oversight of talent pool and candidate journeys.",
    color: "emerald",
    steps: [
      {
        id: "4.1",
        title: "List View Interface",
        actions: [
          { actor: "SYS", description: ["Table Columns: Avatar, Name, Nationality, Job Category, Profile Completion %, Current Status, Registration Date", "Quick Status Indicators: Color-coded badges (Active, Inactive, Hired, Rejected, Processing)", "Filtering Options: Search by (Name, Passport Number, Email, Phone), Filter by (Job Category, Experience Level, Location, Registration Date Range), Sort by (Profile Completion, Last Active, Interview Count)"] }
        ]
      },
      {
        id: "4.2",
        title: "Candidate Profile Management",
        actions: [
          { actor: "AD", description: ["Individual Candidate Actions (Per Row):", "View Full Profile: Opens detailed candidate dashboard including Personal Information, Employment History, Educational Background, Skills inventory, Uploaded Documents, Application History, Communication Log, Progress Tracker", "Documents Management: View all uploaded files, Validate document authenticity, Flag documents for re-upload, Download documents for offline verification", "Edit Profile: Modify candidate information (with audit trail)", "Change Status: Update candidate workflow status", "Send Notification: Direct communication via WhatsApp/Email", "Add Notes: Internal comments for team reference"] }
        ]
      },
      {
        id: "4.3",
        title: "Bulk Operations",
        actions: [
          { actor: "AD", description: ["Export candidate list (CSV, Excel)", "Batch status updates", "Mass communication sending", "Document verification in bulk"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_5",
    title: "5. Employers Management Section",
    description: "Management of household/company accounts and job postings.",
    color: "blue",
    steps: [
      {
        id: "5.1",
        title: "List View Interface",
        actions: [
          { actor: "SYS", description: ["Table Columns: Employer Name, Contact Person, Email, Phone, Status, Job Posts, Hired Count, Registration Date", "Status Categories: Approved, Pending Verification, Declined, Suspended", "Filtering Options: By approval status, location, job type, activity level"] }
        ]
      },
      {
        id: "5.2",
        title: "Employer Profile Management",
        actions: [
          { actor: "AD", description: ["Individual Employer Actions:", "View Full Profile: Opens detailed employer dashboard including Company/Household Information, Contact Person Details, Verification Documents, Job Posting History, Candidate Interaction History, Payment History, Communication Log", "Document Verification: Review uploaded identity proofs, Validate address verification, Approve or request additional documents", "Job Post Management: View active job postings, Edit job requirements, Pause/resume job posts, View applicant pipeline", "Communication Tools: Direct message to employer, View all previous communications, Schedule follow-up reminders"] }
        ]
      },
      {
        id: "5.3",
        title: "Employer Approval Workflow",
        actions: [
          { actor: "AD", description: ["Approve Employer: Grant posting rights and full platform access", "Deny Employer: Reject application with reason tracking", "Status Pending: Default status awaiting verification", "Request More Information: Send document request to employer", "Suspend Account: Temporary restriction with reason logging"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_6",
    title: "6. Approvals Section (Critical Gatekeeping)",
    description: "Centralized verification hub for platform integrity and security.",
    color: "purple",
    steps: [
      {
        id: "6.1",
        title: "Tab 1: Employer Registrations",
        actions: [
          { actor: "SYS", description: ["Lists new employer sign-ups requiring vetting:", "Information Display: Company Name, Contact Person, Email, Documents Uploaded, Registration Date", "Document Preview: Quick view of uploaded verification documents", "Background Check: Automated system checks and risk scoring"] },
          { actor: "AD", description: ["Approval Actions:", "Approve: Activates account, sends welcome email, grants posting rights", "Reject: Blocks access, notifies with reason, logs decision", "Request More Info: Sends document request, moves to pending", "Approval History: Track all decisions with timestamps and admin names"] }
        ]
      },
      {
        id: "6.2",
        title: "Tab 2: Payment Approvals",
        actions: [
          { actor: "AD", description: ["Manual verification of financial transactions:", "Transaction Details Display: Transaction ID, Amount, Employer Name, Candidate Name, Payment Method, Date/Time, Receipt", "Verification Process: Cross-reference with bank statements, Validate receipt authenticity, Check payment purpose", "Approval Actions:", "Approve Payment: Unlocks documents/services for employer, updates financial records", "Flag Issue: Sends rejection notice, requests correct payment", "Mark as Partial: For split payments or deposits", "Refund Request: Initiate refund process", "Payment History: Complete audit trail of all transactions"] }
        ]
      },
      {
        id: "6.3",
        title: "Tab 3: Interview Approvals (Integrated Workflow)",
        actions: [
          { actor: "AD", description: ["Review and control of interview scheduling:", "Interview Request Details: Employer and Candidate information, Proposed Date/Time, Job Position, Interview Type", "Approval Actions:", "Approve Interview: Allows invitation to be sent to candidate", "Request Reschedule: Suggests alternative timing", "Reject Interview: With reason logging", "Require Pre-screening: Additional steps before approval", "Approval Criteria Checks: Candidate availability validation, Employer payment status verification, Job-candidate match quality assessment, Timezone and scheduling conflicts check"] }
        ]
      },
      {
        id: "6.4",
        title: "Tab 4: Document Verifications",
        actions: [
          { actor: "DR", description: ["Central hub for all document validations:", "Candidate Documents: Passports, Certificates, Medical Reports", "Employer Documents: Verification proofs, Contracts", "System Documents: Generated forms, Legal agreements", "Verification Actions: Approve, Reject, Request Re-upload", "Expiry Tracking: Automatic alerts for expiring documents"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_7",
    title: "7. Salesperson Management Section",
    description: "Internal team performance monitoring and resource allocation.",
    color: "indigo",
    steps: [
      {
        id: "7.1",
        title: "Stats Overview Dashboard",
        actions: [
          { actor: "SYS", description: ["Team Metrics: Total registered salespersons, Active/Inactive status", "Performance Indicators: Total hires, Conversion rates, Average time to hire", "Pipeline Health: Open jobs, Candidates in process, Stalled applications", "Revenue Attribution: Sales generated per team member"] }
        ]
      },
      {
        id: "7.2",
        title: "Team List Management",
        actions: [
          { actor: "SYS", description: ["Table with performance metrics per salesperson:", "Columns: Name, Email, Phone, Status, Jobs Posted, Hires Completed, Efficiency Score, Revenue Generated", "Efficiency Calculation: Based on activity, response time, conversion rate", "Filtering Options: By performance tier, team, date range"] }
        ]
      },
      {
        id: "7.3",
        title: "Individual Salesperson Actions",
        actions: [
          { actor: "AD", description: ["View Detailed Stats: Opens performance dashboard showing Monthly/Quarterly performance trends, Match success rates, Communication response times, Revenue contribution, Client satisfaction scores", "Edit Profile: Update contact information, assign roles", "Performance Review: Add performance notes, set targets", "Activity Monitoring: View login history, activity logs"] }
        ]
      },
      {
        id: "7.4",
        title: "Team Management Tools",
        actions: [
          { actor: "AD", description: ["Add New Salesperson: Modal form with fields (Name, Email, Password, Phone, Role, Team Assignment, Permission level, Target setting)", "Remove/Deactivate: Archive salesperson account", "Team Assignment: Group management and reassignment", "Broadcast Announcements: Team-wide notifications"] }
        ]
      },
      {
        id: "7.5",
        title: "Performance Analytics",
        actions: [
          { actor: "SYS", description: ["Activity Chart: Bar chart comparing actual hires vs. monthly targets", "Team Leaderboard: Ranking based on key metrics", "Trend Analysis: Performance patterns and improvement areas", "Training Needs: Identify skills gaps based on performance data"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_8",
    title: "8. Financials Section",
    description: "Comprehensive revenue tracking and cash flow management.",
    color: "teal",
    steps: [
      {
        id: "8.1",
        title: "Revenue Overview Cards",
        actions: [
          { actor: "SYS", description: ["Total Revenue (YTD): Aggregated income with year-over-year comparison", "Pending Payments: Total value of outstanding invoices", "Refunds Processed: Amount returned to clients (with reason categories)", "Collection Efficiency: Percentage of invoices paid on time", "Revenue Forecast: Projected earnings based on pipeline"] }
        ]
      },
      {
        id: "8.2",
        title: "Payment Distribution Analysis",
        actions: [
          { actor: "SYS", description: ["Pie Chart: Split between payment methods (PayNow, Bank Transfer, Credit Card, Cash)", "Trend Analysis: Payment method preferences over time", "Fee Analysis: Transaction fees by method"] }
        ]
      },
      {
        id: "8.3",
        title: "Revenue Trend Visualization",
        actions: [
          { actor: "SYS", description: ["Bar/Line Chart: Monthly income over selected period", "Category Breakdown: Revenue by service type (placement fees, training, documentation)", "Growth Indicators: Month-over-month, Quarter-over-quarter changes"] }
        ]
      },
      {
        id: "8.4",
        title: "Pending Payments Queue",
        actions: [
          { actor: "AD", description: ["Actionable list of overdue payments:", "Table Columns: Invoice Number, Employer Name, Amount, Due Date, Days Overdue, Candidate Name", "Automated Reminder System: Scheduled email/SMS reminders", "Manual Actions:", "Send Reminder: Immediate notification to employer", "Apply Late Fee: Automatic calculation and application", "Escalate: Move to collections process", "Mark as Paid: Manual override with receipt upload", "Payment Reconciliation: Match payments to invoices"] }
        ]
      },
      {
        id: "8.5",
        title: "Invoice Management",
        actions: [
          { actor: "AD", description: ["Generate Invoices: Custom templates with company branding", "Invoice Tracking: Status (Sent, Viewed, Paid, Overdue)", "Receipt Management: Store and organize payment proofs", "Export Financial Reports: For accounting software integration"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_9",
    title: "9. Analytics & Business Intelligence Section",
    description: "Strategic insights for data-driven decision making.",
    color: "cyan",
    steps: [
      {
        id: "9.1",
        title: "KPI Dashboard Cards",
        actions: [
          { actor: "SYS", description: ["Average Time to Hire: Current metric with trend arrow", "Interview Success Rate: Percentage of interviews leading to offers", "Top Candidate Source: Geographic breakdown", "Placement Success Rate: Hires vs. total applications", "Customer Satisfaction Score: Based on post-placement surveys", "Cost per Hire: Average recruitment cost breakdown"] }
        ]
      },
      {
        id: "9.2",
        title: "Hiring Velocity Analysis",
        actions: [
          { actor: "SYS", description: ["Funnel Visualization: Application to hire conversion rates", "Time Analysis Chart: Distribution of hiring timelines (<1 week, 1-2 weeks, 2-4 weeks, 1 month)", "Bottleneck Identification: Stages causing most delays"] }
        ]
      },
      {
        id: "9.3",
        title: "Demand Analysis",
        actions: [
          { actor: "SYS", description: ["Skills Demand Chart: Progress bars showing role popularity (Elderly Care, Child Care, General Housekeeping, Special Needs)", "Location Demand: Employer locations and requirements", "Salary Trends: Average offered salaries by role and experience", "Seasonal Patterns: Hiring trends by month/quarter"] }
        ]
      },
      {
        id: "9.4",
        title: "International Workflow Tracker",
        actions: [
          { actor: "SYS", description: ["Status board for overseas candidate processing:", "Country-wise Breakdown: Philippines, Indonesia, Myanmar, etc.", "Stage Distribution: \"Active Applications\", \"Document Processing\", \"At Embassy/Consulate\", \"Visa Processing\", \"Flight Booked\", \"Arrived\"", "Average Processing Times: Per country and per stage", "Delay Analysis: Common bottlenecks and solutions", "Success Rate by Source Country: Placement completion rates"] }
        ]
      },
      {
        id: "9.5",
        title: "Predictive Analytics",
        actions: [
          { actor: "SYS", description: ["Candidate Success Scoring: AI prediction of placement success", "Employer Retention Prediction: Likelihood of repeat hiring", "Market Trend Forecasting: Future demand predictions", "Risk Assessment: Identify high-risk placements"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_10",
    title: "10. System Settings & Configuration",
    description: "Platform administration and customization.",
    color: "slate",
    steps: [
      {
        id: "10.1",
        title: "User Management",
        actions: [
          { actor: "AD", description: ["Admin user creation and permission assignment", "Role-based access control (RBAC) configuration", "Login security settings (password policies, MFA)", "Audit trail and activity logging configuration"] }
        ]
      },
      {
        id: "10.2",
        title: "Platform Configuration",
        actions: [
          { actor: "AD", description: ["Email Templates: Customize all communication templates", "Document Templates: Standard forms and contracts", "Fee Structure: Configure pricing and payment terms", "Workflow Settings: Customize approval processes", "Integration Settings: API keys and third-party service configuration"] }
        ]
      },
      {
        id: "10.3",
        title: "Communication Settings",
        actions: [
          { actor: "AD", description: ["WhatsApp integration configuration", "SMS gateway settings", "Email server configuration", "Notification preference management"] }
        ]
      },
      {
        id: "10.4",
        title: "Regional Settings",
        actions: [
          { actor: "AD", description: ["Country-specific configurations", "Language settings and translations", "Currency and payment method settings", "Legal and compliance configurations"] }
        ]
      },
      {
        id: "10.5",
        title: "Backup & Maintenance",
        actions: [
          { actor: "SYS", description: ["Automated backup scheduling", "System update management", "Database optimization tools", "Performance monitoring settings"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_11",
    title: "11. Admin Capabilities Summary",
    description: "Overview of key admin roles.",
    color: "rose",
    steps: [
      {
        id: "11.1",
        title: "Roles",
        actions: [
          { actor: "AD", description: ["Gatekeeper Function: Controls platform access, Manages document verification, Oversees interview scheduling, Monitors platform integrity"] },
          { actor: "AD", description: ["Financial Controller: Verifies transactions, Manages invoicing, Oversees refunds, Generates financial reports"] },
          { actor: "AD", description: ["Team Manager: Monitors sales team, Allocates resources, Provides feedback, Manages permissions"] },
          { actor: "SA", description: ["Superuser Authority: Full access to all data, Override permissions, System-wide configuration"] },
          { actor: "AD", description: ["Business Strategist: Uses analytics, Makes data-driven decisions, Identifies process improvements, Forecasts growth"] },
          { actor: "AD", description: ["Compliance Officer: Ensures adherence to laws, Manages legal compliance, Tracks visa processing, Maintains audit trails"] }
        ]
      }
    ]
  },
  {
    id: "AD_PHASE_12",
    title: "12. Real-Time Monitoring Features",
    description: "Live operational oversight.",
    color: "orange",
    steps: [
      {
        id: "12.1",
        title: "Live Activity Feed",
        actions: [
          { actor: "SYS", description: ["Real-time updates on all platform activities", "Filter by activity type, user, or importance", "Quick action buttons for common responses", "Historical activity search and reporting"] }
        ]
      },
      {
        id: "12.2",
        title: "Alert System",
        actions: [
          { actor: "SYS", description: ["Priority Levels: Critical, High, Medium, Low", "Alert Categories: Financial, Documentation, Compliance, System", "Notification Methods: In-dashboard, Email, SMS, Mobile Push", "Escalation Rules: Automatic escalation based on time"] }
        ]
      },
      {
        id: "12.3",
        title: "Performance Dashboards",
        actions: [
          { actor: "SYS", description: ["System Performance: Uptime, response times, error rates", "User Activity: Concurrent users, peak usage times", "Business Metrics: Real-time updates on key performance indicators", "Custom Reports: User-defined metrics and dashboards"] }
        ]
      }
    ]
  }
];