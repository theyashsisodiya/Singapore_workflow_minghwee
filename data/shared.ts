import { KPI, QAItem } from '../types';

export const KPIS: KPI[] = [
  {
    role: "Salesperson",
    metrics: ["Enquiry to registration conversion rate", "Client satisfaction score", "Document collection time", "Payment processing time"]
  },
  {
    role: "Admin",
    metrics: ["Application approval rate", "Processing time per application", "Error rate in submissions", "Compliance audit score"]
  },
  {
    role: "System",
    metrics: ["Uptime percentage", "Processing speed", "User satisfaction score", "Integration success rate"]
  }
];

export const QA_ITEMS: QAItem[] = [
  {
    category: "Document Verification",
    items: [
      "All forms completed",
      "Signatures collected",
      "Dates consistent",
      "Copies clear and legible",
      "Validity periods checked",
      "MOM requirements met",
      "Embassy requirements met",
      "Insurance purchased",
      "Bond transmitted",
      "All checklists signed off"
    ]
  },
  {
    category: "Audit Trail",
    items: [
      "All actions timestamped",
      "Document versions tracked",
      "Communication logs maintained",
      "Change history recorded",
      "Compliance reports generated monthly"
    ]
  }
];