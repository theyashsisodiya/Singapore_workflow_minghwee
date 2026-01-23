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
        title: "Employer Account Creation",
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
        title: "Round Robin Assignment",
        actions: [
          {
            actor: "SYS",
            description: [
              "Auto-assigns the new employer profile to an active Salesperson.",
              "Uses Round Robin logic to ensure fair workload distribution.",
              "Triggers assignment notification to the designated staff."
            ]
          }
        ]
      },
      {
        id: "1.3",
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
        id: "1.4",
        title: "AI Matching & System Processing",
        actions: [
          {
            actor: "SYS",
            description: [
              "Runs AI matching engine in background based on collected requirements.",
              "Generates match scores and shortlists top candidates.",
              "CRITICAL: Restricts access to candidate profiles until consultation.",
              "Sends salesperson assignment confirmation to Employer.",
              "Sends AI shortlist review notification to assigned Salesperson."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_2",
    title: "Phase 2: Eligibility Criteria Validation",
    description: "Multi-point validation of employer eligibility criteria.",
    color: "indigo",
    steps: [
      {
        id: "2.1",
        title: "Valid ID Proof Validation",
        actions: [
          { actor: "SYS", description: ["Extract age from document", "Verify minimum age eligibility", "Mark status: Eligible/Not Eligible"] }
        ]
      },
      {
        id: "2.2",
        title: "Non-Bankrupt Declaration",
        actions: [
          { actor: "EMP", description: ["Signs declaration form"] },
          { actor: "SYS", description: ["Performs basic validation"] },
          { actor: "SP", description: ["Manually reviews and approves status"] }
        ]
      },
      {
        id: "2.3",
        title: "Mental Capacity Verification",
        actions: [
          { actor: "EMP", description: ["Uploads declaration form", "Uploads Medical Certificate"] },
          { actor: "SYS", description: ["Initial document check"] },
          { actor: "SP", description: ["Final approval of mental capacity status"] }
        ]
      },
      {
        id: "2.4",
        title: "Minimum Monthly Income Check",
        actions: [
          { actor: "SYS", description: ["Fetches data from uploaded payslip", "Checks amount against mandatory criteria", "Mark: Pass or Flag for 6-month review"] }
        ]
      },
      {
        id: "2.5",
        title: "Genuine Care Need Validation",
        actions: [
          { actor: "EMP", description: ["Uploads household composition form", "Uploads Birth Certificates", "Uploads age proof or Medical Certificate"] },
          { actor: "SYS", description: ["Initial validation of care needs"] },
          { actor: "SP", description: ["Final manual approval"] }
        ]
      },
      {
        id: "2.6",
        title: "Suitable Accommodation Review",
        actions: [
          { actor: "EMP", description: ["Uploads photo of helper room", "Provides room dimensions"] },
          { actor: "SYS", description: ["Image analysis for suitability"] },
          { actor: "SP", description: ["Final manual review of accommodation"] }
        ]
      },
      {
        id: "2.7",
        title: "First Time Employer EOP Check",
        actions: [
          { actor: "SYS", description: ["Checks EOP attendance via API", "If no API, flags for manual upload"] },
          { actor: "EMP", description: ["Attends EOP program", "Submits EOP certificate"] },
          { actor: "SP", description: ["Approves EOP status"] }
        ]
      }
    ]
  },
  {
    id: "PHASE_3",
    title: "Phase 3: System Validation & Eligibility Check",
    description: "Consolidation of all criteria for final eligibility determination.",
    color: "purple",
    steps: [
      {
        id: "3.1",
        title: "Eligibility Logic Consolidation",
        actions: [
          { actor: "SYS", description: ["Consolidates all 7 criteria documents", "Performs logic check: Count Passed vs Failed", "Logic: ALL 7 PASS -> ELIGIBLE", "Logic: 5-6 PASS -> CONDITIONAL", "Logic: <=4 PASS -> NOT ELIGIBLE"] }
        ]
      }
    ]
  },
  {
    id: "PHASE_4",
    title: "Phase 4: Eligibility Decision Paths",
    description: "Routing based on eligibility status.",
    color: "teal",
    steps: [
      {
        id: "4.1",
        title: "Path 1: Eligible",
        actions: [
          { actor: "SYS", description: ["Marks employer as ELIGIBLE", "Sends Welcome Confirmation Email to Employer", "Notifies Salesperson of approval with details"] }
        ]
      },
      {
        id: "4.2",
        title: "Path 2: Conditional",
        actions: [
          { actor: "SYS", description: ["Marks status as CONDITIONAL", "Notifies Salesperson of missing/failed documents"] },
          { actor: "SP", description: ["Contacts Employer to guide re-upload/fixing of documents"] }
        ]
      },
      {
        id: "4.3",
        title: "Path 3: Not Eligible",
        actions: [
          { actor: "SYS", description: ["Marks status as NOT ELIGIBLE"] },
          { actor: "SP", description: ["Assists employer in gathering missing/required documentation"] }
        ]
      }
    ]
  },
  {
    id: "PHASE_5",
    title: "Phase 5: Candidate Matching, Screening & Selection",
    description: "Sales consultation, salesperson-led screening, and final selection.",
    color: "indigo",
    steps: [
      {
        id: "5.1",
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
          }
        ]
      },
      {
        id: "5.2",
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
        id: "5.3",
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
              "Provides immediate feedback: 'APPROVE' or 'REJECT'."
            ]
          }
        ]
      },
      {
        id: "5.4",
        title: "Candidate Confirmation & Payment Options",
        actions: [
          {
            actor: "SYS",
            description: [
              "Presents THREE Mandatory Payment Options:",
              "Option 1: FULL PAYMENT - Activates hiring process immediately.",
              "Option 2: PARTIAL PAYMENT - Total amount split into two installments.",
              "Option 3: BOOKING FEE - Reserve candidate for 7 days."
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
        id: "5.5",
        title: "Multi-Party Notifications",
        actions: [
          {
            actor: "SYS",
            description: [
              "Sends confirmation and document requests to Employer.",
              "Sends selection notification and employer background to Candidate.",
              "Triggers process alert for Admin team."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_6",
    title: "Phase 6: Documentation & Authorization",
    description: "Document collection, verification, and MOM authorizations.",
    color: "purple",
    steps: [
      {
        id: "6.1",
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
        id: "6.2",
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
        id: "6.3",
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
        id: "6.4",
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
      }
    ]
  },
  {
    id: "PHASE_7",
    title: "Phase 7: Country-Specific Application & MOM",
    description: "MOM application and country-specific processing.",
    color: "orange",
    steps: [
      {
        id: "7.1",
        title: "General MOM Application Submission",
        actions: [
          {
            actor: "AD",
            description: ["Submits work permit application to MOM using verified documents."]
          }
        ]
      },
      {
        id: "7.X",
        title: "Nationality Specific Workflow",
        description: "Branching logic for Myanmar, Indonesia, or Philippines.",
        actions: [], 
        subProcess: [
          {
            title: "Myanmar",
            steps: [
              {
                id: "7.2",
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
                id: "7.3",
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
                id: "7.4",
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
    id: "PHASE_8",
    title: "Phase 8: Pre-Arrival Coordination",
    description: "Travel coordination and insurance.",
    color: "cyan",
    steps: [
      {
        id: "8.1",
        title: "Arrival Logistics & Final Checks",
        actions: [
          {
            actor: "AD",
            description: [
              "Confirms flight details.",
              "Verifies bond transmission on MOM portal.",
              "Schedules transport and medical checkup services."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "PHASE_9",
    title: "Phase 9: Post-Arrival & Handover",
    description: "Arrival, medical, handover, and Work Permit issuance.",
    color: "emerald",
    steps: [
      {
        id: "9.1",
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
        id: "9.2",
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
      }
    ]
  },
  {
    id: "PHASE_10",
    title: "Phase 10: Post-Placement Support",
    description: "Follow-ups, support, and issue resolution.",
    color: "rose",
    steps: [
      {
        id: "10.1",
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
      }
    ]
  }
];
