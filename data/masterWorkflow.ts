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
              "Chooses Login Option (SingPass, Email OTP, or Mobile OTP).",
              "Completes basic details: Name, Email, Mobile, NRIC/FIN, Address.",
              "Agrees to Terms & Conditions and Privacy Policy."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Verifies credentials.",
              "Creates new user record in database.",
              "Logs acceptance of T&Cs.",
              "Sends Welcome Email to Employer."
            ]
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
              "Completes interactive questionnaire.",
              "Step 1: Household Composition.",
              "Step 2: Care Needs & Work Scope.",
              "Step 3: Language & Skills.",
              "Step 4: FDW Preferences (Nationality, Experience, Age).",
              "Step 5: Status & Hourly Rate.",
              "Step 6: Review & Confirm requirements."
            ]
          }
        ]
      },
      {
        id: "1.3",
        title: "AI Matching Initialization",
        actions: [
          {
            actor: "SYS",
            description: [
              "Runs AI matching engine in background.",
              "Generates match scores and shortlists candidates.",
              "CRITICAL: Restricts access to candidate profiles until consultation."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Waits for Salesperson consultation to view matched profiles.",
              "Reviews hiring timeline and FAQ in the general information section."
            ]
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
              "Notifies Employer of next steps and assigns a Salesperson."
            ]
          },
          {
            actor: "SP",
            description: [
              "Receives assignment notification.",
              "Reviews Employer requirements and AI shortlist.",
              "Prepares by reviewing candidate profiles and video introductions."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_2",
    title: "Phase 2: Candidate Matching, Screening & Selection",
    description: "Sales consultation, salesperson-led screening, and final selection.",
    color: "indigo",
    steps: [
      {
        id: "2.1",
        title: "Salesperson Consultation & Selection Decision",
        actions: [
          {
            actor: "SP",
            description: [
              "Conducts consultation (Phone/Video/In-person).",
              "Presents matched candidates via video to the Employer.",
              "Explains breakdown of costs, timeline, and AI matching scores.",
              "Asks CRITICAL QUESTION: 'Would you like to proceed with interviewing?'"
            ]
          },
          {
            actor: "EMP",
            description: [
              "Decision Point: YES (Proceed to interview), MAYBE (Review profiles/Requires screening), or NO (Refine criteria).",
              "If YES: Confirms candidates to proceed directly to scheduling."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Trigger (if YES): Notifies Admin to coordinate live interviews for selected candidates."
            ]
          },
          {
            actor: "SP",
            description: [
              "Trigger (if MAYBE): Salesperson takes over the intensive screening of the candidate.",
              "If candidate is selected after this screening: Proceeds to organize the interview."
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
              "Browses profiles: Biodata, Certs, and One-Way Videos.",
              "Shortlists candidates and requests live interview slots."
            ]
          },
          {
            actor: "AD",
            description: [
              "Coordinates with Overseas Agent for time slots.",
              "Schedules interview via platform calendar."
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
              "Hosts the secure video interview session."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Conducts live interview (20-30 mins).",
              "Provides immediate feedback: 'Proceed', 'Maybe', or 'Not Interested'."
            ]
          }
        ]
      },
      {
        id: "2.4",
        title: "Candidate Confirmation & Payment Options",
        actions: [
          {
            actor: "SYS",
            description: [
              "Presents THREE Payment Options:",
              "Option 1: FULL PAYMENT - Activates hiring process immediately.",
              "Option 2: PARTIAL PAYMENT - Total amount split into two installments.",
              "Option 3: BOOKING FEE - Small amount (TBD) to reserve candidate for 7 days."
            ]
          },
          {
            actor: "EMP",
            description: [
              "Selects preferred payment option and completes transaction via PayNow or Credit Card."
            ]
          },
          {
            actor: "AD",
            description: [
              "Performs manual verification of payment.",
              "Approves transaction to trigger next workflow stage."
            ]
          }
        ]
      },
      {
        id: "2.5",
        title: "Multi-Party Notifications",
        actions: [
          {
            actor: "SYS",
            description: [
              "Sends notifications to Employer, Candidate, and Admin.",
              "Sends document request (IC, Income Tax) to the Employer."
            ]
          },
          {
            actor: "CAN",
            description: ["Receives Selection Notification and Employer Background summary."]
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
              "Uploads PRIMARY DOCUMENTS: IC Copy, Income Tax Assessment/Declaration.",
              "Foreigners: Passport, EP, Company Letter, Tenancy agreement."
            ]
          }
        ]
      },
      {
        id: "3.2",
        title: "Document Verification",
        actions: [
          {
            actor: "DR",
            description: [
              "Verifies authenticity and clarity of uploaded documents.",
              "Marks documents as 'Approved' or 'Rejected'."
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
              "Collects Passport, Medical Report, and Certificates.",
              "Uploads candidate files to the platform."
            ]
          }
        ]
      },
      {
        id: "3.4",
        title: "E-Authorization (MOM Portal)",
        actions: [
          {
            actor: "EMP",
            description: [
              "Logs in to MOM portal to authorize the agency.",
              "Saves confirmation of authorization."
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
              "Prepares Service Agreement, Fee Schedule, Job Offer, and Giro Form.",
              "Uploads documents to the E-signature platform."
            ]
          },
          {
            actor: "CAN",
            description: ["Reviews and E-signs documents via the local Agent facility."]
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
            actor: "EMP",
            description: [
              "Completes EOP registration if a first-time hirer.",
              "Attends orientation and uploads the completion certificate."
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
            description: ["Submits work permit application to MOM using verified documents."]
          }
        ]
      },
      {
        id: "5.X",
        title: "Nationality Specific Workflow",
        description: "Branching logic for Myanmar, Indonesia, or Philippines.",
        actions: [], 
        subProcess: [
          {
            title: "Myanmar",
            steps: [
              {
                id: "5.2",
                title: "Myanmar Process",
                actions: [
                  { actor: "AD", description: ["Receives IPA.", "Purchases Insurance.", "Emails Security Bond to Myanmar agent."] },
                  { actor: "OA", description: ["Gets Candidate signature on IPA.", "Confirms departure date."] }
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
                  { actor: "DR", description: ["Creates Job Order in Indo Embassy portal.", "Scans approved docs to Indo office."] },
                  { actor: "AD", description: ["Receives IPA.", "Purchases Insurance/Bond."] }
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
                  { actor: "AD", description: ["Prepares Embassy Forms.", "Sends IPA to PH office."] },
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
              "Confirms flight details.",
              "Verifies bond transmission on MOM portal.",
              "Schedules transport and medical checkup services."
            ]
          },
          {
            actor: "SP",
            description: ["Final confirmation call with Employer to review handover checklist."]
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
            description: ["Picks up worker from airport.", "Transports to Medical Checkup & SIP Course."]
          },
          {
            actor: "AD",
            description: ["Prepares Handover Package.", "Confirms fetch date/time with the Employer."]
          }
        ]
      },
      {
        id: "7.2",
        title: "Handover Day & Final Signing",
        actions: [
          {
            actor: "EMP",
            description: [
              "Attends handover.",
              "Makes final Placement Fee payment.",
              "Signs final documents and takes worker home."
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
              "Schedules Thumbprint appointment at MOM.",
              "Tracks Work Permit card delivery."
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
        title: "Follow-up Schedule",
        actions: [
          {
            actor: "SP",
            description: [
              "24h Call after handover.",
              "Monthly check-ins for the first 3 months."
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
              "Handles Work Permit renewals and contract extensions.",
              "Assists with levy payment issues."
            ]
          }
        ]
      }
    ]
  }
];