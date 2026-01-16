export interface NotificationMatrixItem {
  event: string;
  trigger: string;
  priority: 'P1' | 'P2' | 'P3' | 'P4';
  channels: string[];
  recipients: string[];
  template: string;
}

export interface NotificationCategory {
  title: string;
  items: NotificationMatrixItem[];
}

export interface ActorNotificationMatrix {
  actor: string;
  categories: NotificationCategory[];
}

export const NOTIFICATION_SYSTEM_DATA = {
  architecture: {
    channels: [
      { name: "SMS", icon: "Smartphone", description: "Critical alerts only (160 chars)", logic: "8 AM - 8 PM local time" },
      { name: "WhatsApp", icon: "MessageCircle", description: "Business templates, media support", logic: "Two-way communication enabled" },
      { name: "Email", icon: "Mail", description: "HTML branding, attachments", logic: "Unsubscribe link mandatory" },
      { name: "In-App", icon: "Bell", description: "Real-time push, persistent center", logic: "Archive after 30 days" },
      { name: "Manual Call", icon: "Phone", description: "Protocol-based escalation", logic: "Triggered by SLA breaches" }
    ],
    priorities: [
      { level: "P1", label: "Critical", color: "red", delivery: "Immediate (Within 1m)", channels: ["SMS", "WhatsApp", "Email", "In-App"] },
      { level: "P2", label: "High", color: "orange", delivery: "15-minute Batch", channels: ["WhatsApp", "Email", "In-App"] },
      { level: "P3", label: "Medium", color: "blue", delivery: "Hourly Batch", channels: ["Email", "In-App"] },
      { level: "P4", label: "Low", color: "slate", delivery: "Daily Digest (9 AM)", channels: ["In-App", "Optional Email"] }
    ]
  },
  matrices: [
    {
      actor: "CANDIDATE",
      categories: [
        {
          title: "Registration & Profile",
          items: [
            { event: "Registration Complete", trigger: "Completion", priority: "P3", channels: ["Email", "In-App"], recipients: ["Admin", "Manager", "Sales", "SA"], template: "New Registration Alert" },
            { event: "Profile Incomplete", trigger: "<70% for 3 days", priority: "P3", channels: ["Email", "In-App"], recipients: ["Candidate"], template: "Profile Completion Reminder" },
            { event: "Document Required", trigger: "Missing mandatory docs", priority: "P2", channels: ["WhatsApp", "Email", "In-App"], recipients: ["Candidate"], template: "Document Request" }
          ]
        },
        {
          title: "Interview Process",
          items: [
            { event: "Interview Invitation", trigger: "Calendly link sent", priority: "P1", channels: ["SMS", "WhatsApp", "Email", "In-App"], recipients: ["Candidate"], template: "Interview Invitation" },
            { event: "Reminder (3h)", trigger: "3 hours before", priority: "P2", channels: ["WhatsApp", "SMS"], recipients: ["Candidate"], template: "Interview Reminder" },
            { event: "Reminder (30min)", trigger: "30 mins before", priority: "P1", channels: ["WhatsApp", "SMS"], recipients: ["Candidate"], template: "Urgent Reminder" }
          ]
        },
        {
          title: "Pre-Departure",
          items: [
            { event: "Contract Ready", trigger: "EC received", priority: "P1", channels: ["SMS", "WhatsApp", "Email", "In-App"], recipients: ["Candidate"], template: "Contract Signing Request" },
            { event: "Flight Booked", trigger: "Arranged by SG office", priority: "P1", channels: ["SMS", "WhatsApp", "Email", "In-App"], recipients: ["Candidate", "Employer", "Admin"], template: "Flight Details" }
          ]
        }
      ]
    },
    {
      actor: "EMPLOYER",
      categories: [
        {
          title: "Onboarding & Matching",
          items: [
            { event: "Registration Complete", trigger: "Completion", priority: "P3", channels: ["Email", "In-App"], recipients: ["Admin", "Manager", "Sales", "SA"], template: "New Registration Alert" },
            { event: "Candidate Matched", trigger: "AI match found", priority: "P2", channels: ["Email", "In-App"], recipients: ["Employer"], template: "Match Notification" }
          ]
        },
        {
          title: "Selection & Payment",
          items: [
            { event: "Payment Required", trigger: "Invoice generated", priority: "P1", channels: ["SMS", "WhatsApp", "Email", "In-App"], recipients: ["Employer"], template: "Payment Request" },
            { event: "MOM Approval", trigger: "WP approved", priority: "P1", channels: ["SMS", "WhatsApp", "Email", "In-App"], recipients: ["Employer"], template: "MOM Approval Notification" }
          ]
        }
      ]
    },
    {
      actor: "STAFF (AD/SP/MGR)",
      categories: [
        {
          title: "Workload & Verification",
          items: [
            { event: "New Assignment", trigger: "System assignment", priority: "P2", channels: ["Email", "In-App"], recipients: ["Salesperson"], template: "New Employer Assigned" },
            { event: "Verification Due", trigger: "Pending > 24h", priority: "P2", channels: ["Email", "In-App"], recipients: ["Admin"], template: "Verification Reminder" },
            { event: "SLA Breach", trigger: "Process exceeds SLA", priority: "P2", channels: ["Email", "In-App"], recipients: ["Manager"], template: "SLA Breach Alert" }
          ]
        },
        {
          title: "Escalations",
          items: [
            { event: "Refund Request", trigger: "Sales/Admin init", priority: "P2", channels: ["Email", "In-App"], recipients: ["Manager"], template: "Refund Alert" },
            { event: "Manager Escalation", trigger: "Unresolved X days", priority: "P1", channels: ["Email"], recipients: ["Manager"], template: "Manager Escalation" }
          ]
        }
      ]
    },
    {
      actor: "SUPER ADMIN",
      categories: [
        {
          title: "Security & Audit",
          items: [
            { event: "User Impersonated", trigger: "Session start", priority: "P1", channels: ["Email", "In-App"], recipients: ["Super Admin"], template: "Impersonation Log" },
            { event: "Security Override", trigger: "Bypass detected", priority: "P1", channels: ["Email", "In-App"], recipients: ["Super Admin"], template: "Security Override Log" },
            { event: "Emergency Rollback", trigger: "Execution", priority: "P1", channels: ["Email", "SMS", "In-App"], recipients: ["Super Admin"], template: "Rollback Log" }
          ]
        }
      ]
    }
  ],
  manualProtocols: [
    { event: "Document Overdue", trigger: "> 3 days", firstCall: "Admin", escalateTo: "Manager" },
    { event: "Payment Overdue", trigger: "24h overdue", firstCall: "Salesperson", escalateTo: "Admin → Manager" },
    { event: "Interview No-Show", trigger: "Immediately", firstCall: "Salesperson", escalateTo: "Admin" },
    { event: "Compliance Risk", trigger: "Detection", firstCall: "Manager", escalateTo: "Super Admin" }
  ]
};