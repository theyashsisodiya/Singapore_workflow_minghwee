import { WorkflowPhase } from '../types';

export const MASTER_WORKFLOW_PHASES: WorkflowPhase[] = [
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
              "Visits MingHwee website landing page.",
              "Chooses Login Option:",
              "- Option A: SingPass Login (Recommended, uses MyInfo).",
              "- Option B: Email Registration with OTP.",
              "- Option C: Mobile OTP Verification.",
              "Completes basic details: Name, Email, Mobile, NRIC/FIN, Address.",
              "Agrees to Terms & Conditions and Privacy Policy."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Verifies SingPass/OTP credentials.",
              "Creates new user record in database.",
              "Logs acceptance of T&Cs.",
              "Sends Welcome Email to Employer."
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
              "Completes 3-5 min interactive questionnaire.",
              "Step 1: Household Composition (Adults, Children w/ ages, Elderly, Dwelling type).",
              "Step 2: Care Needs (Infant, Child, Elderly, Disabled, Pet) & Work Scope (Cooking cuisine, Cleaning).",
              "Step 3: Language & Skills (English/Mandarin, proficiency levels, special skills).",
              "Step 4: FDW Preferences (Nationality, Experience level, Age range).",
              "Step 5: Status & Hourly Rate (Citizenship, Hourly Rate $15-$25/hr, Off-days).",
              "Step 6: Review & Confirm requirements."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Presents multi-step questionnaire with progress indicator.",
              "Applies conditional logic (e.g. show childcare questions only if needed).",
              "Validates inputs and stores requirements."
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
              "Runs AI matching engine (Monatel) in background.",
              "Generates match scores and shortlists candidates.",
              "Grants Employer access to Informational Dashboard.",
              "Dashboard includes: Process Overview, Cost Calculator, EOP Info, Legal Obligations.",
              "CRITICAL: Restricts access to candidate profiles until consultation."
            ],
            automationOpportunity: "Real-time AI scoring, Interactive dashboard."
          },
          {
            actor: "EMP",
            description: [
              "Accesses Informational Dashboard while waiting.",
              "Reviews hiring timeline, cost breakdown, and FAQ.",
              "Cannot yet see candidate profiles."
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
              "Trigger: Requirements Saved.",
              "Notifies Employer (next steps) and Salesperson (new lead assigned)."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Books consultation slot via unified sales calendar.",
              "OR waits for proactive contact from Salesperson."
            ]
          },
          {
            actor: "SP",
            description: [
              "Receives assignment notification.",
              "Reviews Employer requirements and AI shortlist.",
              "Prepares by watching candidate video interviews."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Consultation Booked.",
              "Sends confirmations, calendar invites, and 24h SMS reminders."
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
              "Conducts consultation (Phone/Video/In-person).",
              "Reviews requirements and presents matched candidates via video.",
              "Explains costs, timeline, and AI scores.",
              "Asks CRITICAL QUESTION: 'Would you like to proceed with interviewing?'"
            ]
          },
          {
            actor: "EMP",
            description: [
              "Decides: YES (Proceed to interview), MAYBE (Review profiles), or NO (Refine criteria)."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger (if YES): Notifies Admin to coordinate interviews.",
              "Trigger (if MAYBE): Grant profile access for 3 days."
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
            description: ["Grants access to matched candidate profiles on dashboard."]
          },
          {
            actor: "EMP",
            description: [
              "Browses profiles: Biodata, Certs, and HIREVue-style One-Way Videos.",
              "Shortlists 2-4 candidates.",
              "Clicks 'Request Live Interview'."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Interview Requested.",
              "Notifies Salesperson and Overseas Agent."
            ]
          },
          {
            actor: "AD",
            description: [
              "Coordinates with Overseas Agent for time slots.",
              "Schedules interview via platform calendar."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Interview Scheduled.",
              "Sends video links (Zoom/Meet) to Employer and Candidate.",
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
              "Hosts video interview.",
              "Features: Recording (with consent), Real-time translation, Note-taking."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Conducts interview (20-30 mins).",
              "Provides feedback immediately: 'Proceed', 'Maybe', 'Not Interested'."
            ]
          },
          {
            actor: "CAN",
            description: ["Attends live interview via Overseas Agent facility."]
          },
          {
            actor: "SP",
            description: ["May moderate interview and ensure technical setup."]
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
              "Confirms final selection with Employer.",
              "Sends Payment Invoice with options."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Presents TWO Payment Options:",
              "Option A: FULL PAYMENT (Recommended) - Activates hiring immediately.",
              "Option B: BOOKING FEE ($XXX) - Reserves candidate for 7 days. Refundable if cancelled within 7 days. Forfeited if no-show.",
              "Methods: PayNow (QR) or Credit Card. NO Bank Transfer."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Selects payment method and pays.",
              "Uploads proof if required."
            ]
          },
          {
            actor: "AD",
            description: [
              "MANUAL VERIFICATION of payment.",
              "Matches transaction ID with bank record.",
              "Approves payment to trigger workflow."
            ],
            critical: true
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Payment Approved.",
              "Updates status to 'Hiring Process Activated' or 'Reserved'.",
              "Starts Booking Fee 7-day timer if applicable."
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
            description: ["Receives Receipt, Service Agreement, SENSITIVE DOCUMENT REQUEST (IC, Income Tax), Timeline."]
          },
          {
            actor: "CAN",
            description: ["Receives Selection Notification, Employer Background, Medical Check instructions."]
          },
          {
            actor: "OA",
            description: ["Receives Activation Notice, Document Checklist for Candidate."]
          },
          {
            actor: "AD",
            description: ["Receives NEW CASE ASSIGNMENT, Start Doc Collection tasks."]
          },
          {
            actor: "BM",
            description: ["Receives Daily Summary of new cases."]
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
              "Accesses secure upload link.",
              "Uploads PRIMARY DOCUMENTS: IC Copy, Income Tax Assessment/Declaration.",
              "Foreigners: Passport, EP, Company Letter, Tenancy.",
              "Additional: ID copies of household members (children/elderly)."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Tracks document submission.",
              "Secure vault storage.",
              "Auto-reminders for missing docs."
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
              "Manually verifies authenticity, clarity, and validity dates.",
              "Marks documents as 'Approved' or 'Rejected'."
            ]
          },
          {
            actor: "SP",
            description: [
              "If Rejected: Contacts Employer to explain and guide re-upload."
            ]
          },
          {
            actor: "SYS",
            description: ["Updates dashboard status: Approved/Pending/Rejected."]
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
              "Collects: Passport, Medical Report (Critical), Certificates, Bio-data.",
              "Uploads to system."
            ]
          },
          {
            actor: "DR",
            description: [
              "Verifies Candidate documents.",
              "Flags medical clearance issues immediately."
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
            description: ["Sends MOM E-Authorization link and guide to Employer."]
          },
          {
            actor: "EMP",
            description: [
              "Logs in to MOM portal.",
              "Authorizes agency to act on their behalf.",
              "Saves confirmation."
            ]
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
              "Prepares all forms: Service Agreement, Fee Schedule, Job Offer, Giro Form.",
              "Uploads to E-signature platform.",
              "Sets signing sequence."
            ]
          },
          {
            actor: "EMP",
            description: ["Reviews and E-signs all documents."]
          },
          {
            actor: "CAN",
            description: ["Reviews and E-signs documents via Agent."]
          },
          {
            actor: "SYS",
            description: [
              "Stores signed docs.",
              "Updates status to 'Contract Signed'."
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
              "Registers Employer for EOP (eop.com.sg).",
              "Sends registration link and deadline (before arrival)."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Completes EOP registration.",
              "Attends orientation (Online/In-person).",
              "Uploads completion certificate."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Tracks EOP status (Registered/Completed).",
              "Flags as mandatory for work permit issuance."
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
              "Submits application to MOM eService using verified docs.",
              "Updates progress tracker."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Submitted.",
              "Notifies Employer with tracking reference and timeline (7-10 days)."
            ]
          }
        ]
      },
      {
        id: "5.X",
        title: "Nationality Specific Workflow",
        description: "Select a nationality to view specific steps.",
        actions: [], 
        subProcess: [
          {
            title: "Myanmar",
            steps: [
              {
                id: "5.2",
                title: "Myanmar Process",
                actions: [
                  { actor: "AD", description: ["Receives IPA.", "Sends IPA for signatures (EMP & CAN).", "Uploads signed IPA to MOM (Critical).", "Purchases Insurance.", "Downloads Security Bond form.", "Emails form to Myanmar agent."] },
                  { actor: "OA", description: ["Gets Candidate signature on IPA.", "Arranges immigration clearance.", "Confirms departure date."] },
                  { actor: "SP", description: ["Coordinates handover logistics with Employer."] }
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
                  { actor: "DR", description: ["Creates Job Order (Indo Embassy portal).", "Generates Contract (3 copies).", "Arranges Runner (Tiju Ang) for embassy submission.", "Scans approved docs to Indo office."] },
                  { actor: "AD", description: ["Receives IPA.", "Purchases Insurance/Bond.", "Notifies Transport (J3P Services).", "Verifies bond transmission."] }
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
                  { actor: "AD", description: ["Prepares Embassy Forms (Original sigs required).", "Sends IPA to PH office for course appointments."] },
                  { actor: "DR", description: ["Contacts Runner (Mr Ong) for embassy submission.", "Couriers originals to PH.", "Awaits OEC (Overseas Employment Certificate)."] },
                  { actor: "OA", description: ["Processes OEC.", "Confirms flight details."] }
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
              "Confirms flight details with OA.",
              "Purchases Final Insurance/Bond.",
              "Verifies bond transmission on MOM portal.",
              "Schedules J3P Services (Pickup, Medical, SIP).",
              "Emails J3P: IPA, Flight, Certs."
            ]
          },
          {
            actor: "SP",
            description: [
              "Final confirmation call with Employer.",
              "Reminds about Placement Fee payment due on fetch day.",
              "Sends handover checklist."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Flight Booked.",
              "Sends Itinerary to Employer, Transport Co, Overseas Agent."
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
              "Picks up FDW from airport.",
              "Transports to Medical Checkup & SIP Course.",
              "Updates Admin on medical clearance."
            ]
          },
          {
            actor: "AD",
            description: [
              "Prepares Handover Package (Contracts, SIP cert, Guides).",
              "Double-confirms fetch date/time."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Medical Cleared -> Notify Employer.",
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
              "Meets Employer & FDW.",
              "Collects original contract from worker.",
              "Briefs House Rules, Salary, Rest days, Safety.",
              "Ensures final signatures on all docs."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Attends handover.",
              "Makes final Placement Fee payment (PayNow/Cash/Cheque).",
              "Signs final docs and takes FDW home."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Status update: 'Handover Complete'.",
              "Emails completion summary."
            ]
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
              "Collects authorized recipient info (Up to 3 persons).",
              "Schedules Thumbprint at MOM.",
              "Inputs delivery address to MOM portal.",
              "Tracks card delivery."
            ]
          },
          {
            actor: "DR",
            description: ["May accompany FDW to MOM thumbprint appointment."]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: Card Delivered -> Notify Employer.",
              "Trigger: Thumbprint Appt -> SMS Reminder 48h before."
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
              "Sends Automated Surveys: 1 week, 1 month, 3 months, 6 months.",
              "Email/Phone check-in prompts to SP."
            ]
          },
          {
            actor: "SP",
            description: [
              "24h Call after handover.",
              "1-week check-in, Monthly check-ins (first 3 months).",
              "Mediates issues if they arise."
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
              "Levy payment assistance.",
              "Contract extensions.",
              "Replacement requests."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger: WP Expiring (60 & 30 days) -> Renewal Reminder with penalty warnings."
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
              "Logs issues in CRM.",
              "SLA: Urgent (2h), Non-urgent (24h).",
              "Escalation Matrix: Salesperson -> Senior SP -> Manager -> Legal Team."
            ]
          }
        ]
      }
    ]
  }
];