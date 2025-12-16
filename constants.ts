import { WorkflowPhase, KPI, QAItem } from './types';

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

export const WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "PHASE_1",
    title: "Phase 1: Employer Self-Registration & Onboarding",
    description: "Employer onboarding, capturing requirements, and account setup.",
    color: "blue",
    steps: [
      {
        id: "1.1",
        title: "Employer Account Creation & Basic Data Collection",
        actions: [
          {
            actor: "EMP",
            description: [
              "Visits MingHwee website.",
              "Chooses Login: SingPass (Recommended), Email OTP, or Mobile OTP.",
              "Completes registration: Name, Email, Mobile, NRIC/FIN, Address, Preferred Contact.",
              "Agrees to T&Cs and Privacy Policy."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Verifies credentials.",
              "Creates user record.",
              "Logs acceptances.",
              "Sends Welcome Email."
            ],
            automationOpportunity: "SingPass MyInfo API, OTP services."
          }
        ]
      },
      {
        id: "1.2",
        title: "Detailed Household Requirements Collection",
        actions: [
          {
            actor: "EMP",
            description: [
              "Completes interactive questionnaire (3-5 mins).",
              "Step 1: Household Composition (Adults, Children, Elderly, Dwelling).",
              "Step 2: Care Needs & Work Scope (Infant/Elderly care, Cooking, Cleaning).",
              "Step 3: Language & Skills (Languages, Proficiency, Special skills).",
              "Step 4: FDW Preferences (Nationality, Experience, Age).",
              "Step 5: Status & Budget (First-time hirer, Budget $500-$800, Off-days).",
              "Step 6: Summary & Confirmation."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Presents multi-step questionnaire.",
              "Applies conditional logic.",
              "Validates input.",
              "Stores requirements."
            ],
            automationOpportunity: "Mobile-responsive design."
          }
        ]
      },
      {
        id: "1.3",
        title: "AI Matching Initialization & Info Dashboard",
        actions: [
          {
            actor: "SYS",
            description: [
              "Processes matching (Monatel platform).",
              "Generates match scores.",
              "Prepares sales shortlist.",
              "Grants Dashboard access (Informational ONLY, no profiles yet).",
              "Dashboard Content: Hiring Process, Cost Calculator, EOP Info, Obligations, FAQs."
            ],
            automationOpportunity: "Real-time AI scoring, Interactive dashboard."
          },
          {
            actor: "EMP",
            description: [
              "Accesses Informational Dashboard.",
              "Reviews costs and process steps.",
              "NOTE: Cannot browse candidates yet."
            ],
            critical: true
          }
        ]
      },
      {
        id: "1.4",
        title: "Initial Contact & Sales Consultation Booking",
        actions: [
          {
            actor: "SYS",
            description: [
              "Trigger: Requirements Completed.",
              "Notifications: Email to EMP (summary + booking link), Email to SP (lead assignment)."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Books consultation slot OR waits for contact."
            ]
          },
          {
            actor: "SP",
            description: [
              "Reviews requirements and AI shortlist.",
              "Reviews pre-uploaded video interviews."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Consultation Booked.",
              "Sends confirmations and calendar invites.",
              "Sends 24h SMS reminder."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_2",
    title: "Phase 2: Candidate Matching, Selection & Payment",
    description: "Sales consultation, interviewing, selection, and payment initiation.",
    color: "indigo",
    steps: [
      {
        id: "2.1",
        title: "Sales Consultation & Interview Proceed Decision",
        actions: [
          {
            actor: "SP",
            description: [
              "Conducts consultation.",
              "Reviews requirements and matched candidates (using video reviews).",
              "Explains costs and timeline.",
              "Asks CRITICAL QUESTION: 'Proceed with interviews?'"
            ]
          },
          {
            actor: "EMP",
            description: [
              "Decides: YES (Proceed to interview), MAYBE (Review more), or NO (New search)."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger (if YES): Notifies Admin to coordinate interviews."
            ]
          }
        ]
      },
      {
        id: "2.2",
        title: "Candidate Preview & Live Interview Scheduling",
        actions: [
          {
            actor: "SP",
            description: ["Grants access to matched candidate profiles."]
          },
          {
            actor: "EMP",
            description: [
              "Browses profiles (Biodata, Videos, Certs).",
              "Shortlists 2-4 candidates.",
              "Clicks 'Request Live Interview'."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Interview Requested.",
              "Notifies SP and Overseas Agent."
            ]
          },
          {
            actor: "AD",
            description: [
              "Coordinates with Overseas Agent for schedule.",
              "Schedules via platform calendar."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Interview Scheduled.",
              "Sends calendar invites and video links.",
              "Sends reminders (24h, 1h)."
            ]
          }
        ]
      },
      {
        id: "2.3",
        title: "Live Video Interview Process",
        actions: [
          {
            actor: "SYS",
            description: [
              "Hosts video interview (Zoom/Meet integration).",
              "Features: Recording, Translation, Note-taking."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Conducts interview.",
              "Provides feedback: 'Proceed', 'Maybe', 'Not Interested'."
            ]
          },
          {
            actor: "CAN",
            description: ["Attends live interview (20-30 mins)."]
          }
        ]
      },
      {
        id: "2.4",
        title: "Candidate Confirmation & Payment Initiation",
        actions: [
          {
            actor: "SP",
            description: [
              "Confirms selection with EMP.",
              "Sends Invoice (Option A: Full Payment, Option B: Booking Fee)."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Presents payment options.",
              "Allows PayNow or Credit Card (No Bank Transfer).",
              "Option A: Full Payment (Activates hiring).",
              "Option B: Booking Fee ($XXX, reserves for 7 days)."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Makes payment via platform.",
              "Uploads proof if PayNow."
            ]
          },
          {
            actor: "AD",
            description: [
              "MANUAL VERIFICATION of payment.",
              "Checks transaction ID.",
              "Clicks 'Verify' to approve."
            ],
            critical: true
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Payment Approved.",
              "Status: 'Hiring Process Activated' or 'Candidate Reserved'.",
              "Generates Receipt."
            ]
          }
        ]
      },
      {
        id: "2.5",
        title: "Comprehensive Multi-Party Notifications",
        actions: [
          {
            actor: "SYS",
            description: [
              "Sends notifications to ALL parties.",
              "Channels: In-App, Email, SMS, WhatsApp API."
            ],
            automationOpportunity: "Multi-channel notification engine."
          },
          {
            actor: "EMP",
            description: ["Receives Receipt, Service Agreement, Document Request."]
          },
          {
            actor: "CAN",
            description: ["Receives Selection Congrats, Employer Info, Next Steps."]
          },
          {
            actor: "OA",
            description: ["Receives Hiring Activation, Doc Checklist, Action Items."]
          },
          {
            actor: "AD",
            description: ["Receives NEW CASE ASSIGNMENT, Start Doc Collection."]
          },
          {
            actor: "BM",
            description: ["Receives Daily Summary."]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_3",
    title: "Phase 3: Documentation & Authorization",
    description: "Document collection, verification, and MOM authorizations.",
    color: "purple",
    steps: [
      {
        id: "3.1",
        title: "Employer Document Collection",
        actions: [
          {
            actor: "EMP",
            description: [
              "Uploads PRIMARY DOCS: IC, Income Tax/Declaration.",
              "Foreigners: Passport, EP, Company Letter, Tenancy.",
              "Additional: ID copies of household members."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Tracks submission.",
              "Secure repository.",
              "Auto-reminders."
            ]
          }
        ]
      },
      {
        id: "3.2",
        title: "Document Verification (Reviewer)",
        actions: [
          {
            actor: "DR",
            description: [
              "Verifies authenticity and clarity.",
              "Marks 'Approved' or 'Rejected'."
            ]
          },
          {
            actor: "SP",
            description: [
              "If Rejected: Contacts EMP to guide re-upload."
            ]
          }
        ]
      },
      {
        id: "3.3",
        title: "Candidate Document Collection",
        actions: [
          {
            actor: "OA",
            description: [
              "Collects: Passport, Medical (Critical), Certificates, Bio-data.",
              "Uploads to system."
            ]
          },
          {
            actor: "DR",
            description: [
              "Verifies Candidate documents.",
              "Flags medical clearance issues."
            ]
          }
        ]
      },
      {
        id: "3.4",
        title: "E-Authorization (MOM Portal)",
        actions: [
          {
            actor: "SP",
            description: ["Sends MOM E-Authorization link to EMP."]
          },
          {
            actor: "EMP",
            description: ["Completes online authorization on MOM portal."]
          }
        ]
      },
      {
        id: "3.5",
        title: "Form Preparation & E-Signing",
        actions: [
          {
            actor: "AD",
            description: [
              "Prepares forms (Service Agreement, Fee Schedule, Job Offer, etc.).",
              "Uploads to E-sign platform.",
              "Sets signing sequence."
            ]
          },
          {
            actor: "EMP",
            description: ["E-signs documents."]
          },
          {
            actor: "CAN",
            description: ["E-signs documents."]
          },
          {
            actor: "SYS",
            description: [
              "Stores signed docs.",
              "Status: 'Contract Signed'."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_4",
    title: "Phase 4: Payment Processing & EOP",
    description: "Financial settlement and Employer Orientation Programme.",
    color: "teal",
    steps: [
      {
        id: "4.1",
        title: "Employer Orientation Programme (EOP)",
        actions: [
          {
            actor: "SP",
            description: [
              "Checks if First-Time Hirer.",
              "Registers EMP for EOP.",
              "Sends link and reminders."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Attends EOP (Online/In-person).",
              "Uploads completion certificate."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Tracks EOP status.",
              "Flags as mandatory for first-timers."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_5",
    title: "Phase 5: Country-Specific Application & MOM",
    description: "MOM application and country-specific processing.",
    color: "orange",
    steps: [
      {
        id: "5.1",
        title: "General MOM Application Submission",
        actions: [
          {
            actor: "AD",
            description: [
              "Submits application to MOM eService.",
              "Uses verified documents."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Submitted.",
              "Notifies EMP with tracking ref."
            ]
          }
        ]
      },
      {
        id: "5.X",
        title: "Nationality Specific Workflow",
        description: "Select a nationality to view specific steps.",
        actions: [], // Placeholder, handled by subProcess
        subProcess: [
          {
            title: "Myanmar",
            steps: [
              {
                id: "5.2",
                title: "Myanmar Process",
                actions: [
                  { actor: "AD", description: ["Receives IPA.", "Sends IPA for signatures (EMP & CAN).", "Uploads signed IPA to MOM.", "Purchases Insurance.", "Downloads Security Bond form."] },
                  { actor: "OA", description: ["Gets CAN signature.", "Arranges immigration clearance."] },
                  { actor: "SP", description: ["Coordinates handover logistics."] }
                ]
              }
            ]
          },
          {
            title: "Indonesia",
            steps: [
              {
                id: "5.3",
                title: "Indonesia Process",
                actions: [
                  { actor: "DR", description: ["Creates Job Order (Indo Embassy).", "Generates Contract (3 copies).", "Arranges Runner (Tiju Ang) for embassy submission."] },
                  { actor: "AD", description: ["Receives IPA.", "Purchases Insurance/Bond.", "Notifies Transport (J3P)."] }
                ]
              }
            ]
          },
          {
            title: "Philippines",
            steps: [
              {
                id: "5.4",
                title: "Philippines Process",
                actions: [
                  { actor: "AD", description: ["Prepares Embassy Forms (Original sigs).", "Sends IPA to PH office for course appointments."] },
                  { actor: "DR", description: ["Contacts Runner (Mr Ong) for embassy submission.", "Couriers originals to PH."] },
                  { actor: "OA", description: ["Processes OEC (Overseas Employment Certificate).", "Confirms flight."] }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_6",
    title: "Phase 6: Pre-Arrival Coordination",
    description: "Travel coordination and insurance.",
    color: "cyan",
    steps: [
      {
        id: "6.1",
        title: "Arrival Logistics & Final Checks",
        actions: [
          {
            actor: "AD",
            description: [
              "Confirms flight.",
              "Purchases Final Insurance/Bond.",
              "Schedules J3P Services (Pickup, Medical, SIP).",
              "Emails J3P: IPA, Flight, Certs."
            ]
          },
          {
            actor: "SP",
            description: [
              "Final confirmation call with EMP.",
              "Reminds about Placement Fee."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Flight Booked.",
              "Sends Itinerary to EMP, TC, OA."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_7",
    title: "Phase 7: Post-Arrival & Handover",
    description: "Arrival, medical, handover, and Work Permit issuance.",
    color: "emerald",
    steps: [
      {
        id: "7.1",
        title: "Medical Clearance & Handover Prep",
        actions: [
          {
            actor: "TC",
            description: [
              "Picks up FDW.",
              "Takes to Medical/SIP.",
              "Updates Admin."
            ]
          },
          {
            actor: "AD",
            description: [
              "Prepares Handover Package.",
              "Confirms fetch date."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Medical Cleared -> Notify EMP.",
              "Trigger: Fetch Day -24h -> Reminder SMS."
            ]
          }
        ]
      },
      {
        id: "7.2",
        title: "Handover Day & Final Signing",
        actions: [
          {
            actor: "AD",
            description: [
              "Meets EMP & FDW.",
              "Collects original contract.",
              "Briefs House Rules/Salary.",
              "Ensures final sigs."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Makes Placement Fee payment.",
              "Signs final docs.",
              "Takes FDW home."
            ]
          },
          {
            actor: "SYS",
            description: ["Status: 'Handover Complete'."]
          }
        ]
      },
      {
        id: "7.3",
        title: "Work Permit Card Processing",
        actions: [
          {
            actor: "AD",
            description: [
              "Collects authorized recipient info.",
              "Schedules Thumbprint at MOM.",
              "Inputs delivery info to MOM."
            ]
          },
          {
            actor: "DR",
            description: ["May accompany FDW to Thumbprint."]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Card Delivered -> Notify EMP."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_8",
    title: "Phase 8: Post-Placement Support",
    description: "Follow-ups, support, and issue resolution.",
    color: "rose",
    steps: [
      {
        id: "8.1",
        title: "Automated Follow-up Schedule",
        actions: [
          {
            actor: "SYS",
            description: [
              "Sends Surveys: 1 week, 1 month, 3 months, 6 months.",
              "Email/Phone check-in prompts."
            ]
          },
          {
            actor: "SP",
            description: [
              "24h Call, 1-week check-in, Monthly check-ins (3 months).",
              "Mediates issues."
            ]
          }
        ]
      },
      {
        id: "8.2",
        title: "Ongoing Admin Support",
        actions: [
          {
            actor: "AD",
            description: [
              "Work Permit renewals.",
              "Levy payments.",
              "Contract extensions."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: WP Expiring (60/30 days) -> Reminder."
            ]
          }
        ]
      },
      {
        id: "8.3",
        title: "Issue Resolution Protocol",
        actions: [
          {
            actor: "SYS",
            description: [
              "SLA: Urgent (2h), Non-urgent (24h).",
              "Escalation Matrix: SP -> Senior SP -> Manager -> Legal."
            ]
          }
        ]
      }
    ]
  }
];
