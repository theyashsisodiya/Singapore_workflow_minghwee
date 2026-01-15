import { WorkflowPhase } from '../types';

export const CANDIDATE_WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "CAN_PHASE_1",
    title: "Phase 1: Registration & Profile Completion",
    description: "The initial entry and data collection phase for new candidates.",
    color: "blue",
    steps: [
      {
        id: "1.1",
        title: "Candidate Registration or Login",
        description: "Entry point for new and returning candidates.",
        actions: [
          {
            actor: "CAN",
            description: [
              "Accesses the MingHwee portal.",
              "Chooses to 'Register' or 'Login' via Email OTP or Mobile verification.",
              "Completes basic account creation and agrees to data privacy terms."
            ]
          }
        ]
      },
      {
        id: "1.2",
        title: "Comprehensive Profile Completion",
        actions: [
          {
            actor: "CAN",
            description: [
              "Step 1: Personal Details (Passport info, Nationality, DOB, Location).",
              "Step 2: Employment & Education (History, Qualifications, Specialized training).",
              "Step 3: Job Preferences (Categories, Salary expectations, Earliest start date).",
              "Step 4: Skills & Languages (Checklist of proficiencies like Elder Care, Child Care, Cooking).",
              "Step 5: Document Uploads (Passport scan, Resume, Certificates)."
            ]
          }
        ]
      },
      {
        id: "1.3",
        title: "Video Interview Submission",
        actions: [
          {
            actor: "CAN",
            description: [
              "Candidate views a list of predefined interview questions.",
              "Candidate records a video answering all the provided questions.",
              "Candidate uploads the video file directly to the platform.",
              "Submits the complete profile for verification."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Stores the uploaded video file.",
              "Notifies the verification team of a new completed profile submission."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_2",
    title: "Phase 2: Dashboard & Invitation Management",
    description: "Managing candidate status and job invitations.",
    color: "indigo",
    steps: [
      {
        id: "2.1",
        title: "Dashboard Access",
        actions: [
          {
            actor: "SYS",
            description: [
              "Grants access to the Personalized Candidate Dashboard.",
              "Displays profile completion status and active application tracker."
            ]
          }
        ]
      },
      {
        id: "2.2",
        title: "Interview Invites & Privacy",
        description: "Receiving and reviewing requests from potential employers.",
        actions: [
          {
            actor: "SYS",
            description: [
              "Notifies Candidate of a new Interview Invite via Dashboard and WhatsApp.",
              "CRITICAL PRIVACY: The employer's identity and specific household details are completely HIDDEN from the candidate at this stage."
            ]
          },
          {
            actor: "CAN",
            description: [
              "Reviews the Invitation summary showing Job Category, Requirements, and Salary.",
              "Determines if the job matches their preferences without seeing employer private data."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_3",
    title: "Phase 3: Interview Logistics & Selection",
    description: "Decision points and live interaction with employers.",
    color: "purple",
    steps: [
      {
        id: "3.1",
        title: "Interview Decision Point",
        description: "Candidate chooses how to proceed with the invitation.",
        actions: [
          {
            actor: "CAN",
            description: [
              "Decides on the invitation: Choose to ACCEPT, REJECT, or REQUEST RESCHEDULE.",
              "If Reschedule: Provides preferred time slots for the system to coordinate.",
              "If Accept: Confirms readiness and prepares for the live meeting."
            ]
          }
        ]
      },
      {
        id: "3.2",
        title: "Live Video Interview",
        actions: [
          {
            actor: "SYS",
            description: [
              "Unlocks Employer identity and details to the Candidate.",
              "Provides the secure video meeting link."
            ]
          },
          {
            actor: "CAN",
            description: [
              "Joins the Live Interview at the scheduled time.",
              "Engages with the Employer for the interview session."
            ]
          }
        ]
      },
      {
        id: "3.3",
        title: "Post-Interview Selection",
        actions: [
          {
            actor: "SYS",
            description: [
              "Employer marks candidate as 'Selected'.",
              "Sends 'Job Offer' notification to Candidate Dashboard."
            ]
          },
          {
            actor: "CAN",
            description: [
              "Reviews final Job Offer and Terms.",
              "Clicks 'Accept Offer' to initiate the hiring and processing phase."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_4",
    title: "Phase 4: Medical, Verification & Processing",
    description: "Professional and government requirements after job acceptance.",
    color: "teal",
    steps: [
      {
        id: "4.1",
        title: "Medical Examination Process",
        actions: [
          {
            actor: "CAN",
            description: [
              "Receives medical referral for designated clinic.",
              "Attends physical exam (BP, X-ray, UTI, General check).",
              "Uploads the medical certificate to the progress tracker."
            ]
          }
        ]
      },
      {
        id: "4.2",
        title: "Document Verification & Payment Tracking",
        actions: [
          {
            actor: "AD",
            description: [
              "Verifies all uploaded candidate documents against MOM requirements.",
              "Logs status as 'Verified' in the system."
            ]
          },
          {
            actor: "CAN",
            description: [
              "Tracks payment status of the employer via the Progress Tracker.",
              "Receives confirmation when the hiring process is officially activated."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_5",
    title: "Phase 5: Experience Assessment & Courses",
    description: "Determining training needs and booking required certifications.",
    color: "orange",
    steps: [
      {
        id: "5.1",
        title: "System Assessment of Experience",
        actions: [
          {
            actor: "SYS",
            description: [
              "Analyzes history to determine if specific courses (TESDA, PDOS, OWWA) are required.",
              "Generates custom training checklist."
            ]
          }
        ]
      },
      {
        id: "5.2",
        title: "Training Course Completion",
        actions: [
          {
            actor: "CAN",
            description: [
              "Attends required training sessions.",
              "Uploads certificates to the dashboard as they are received."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_6",
    title: "Phase 6: Documentation & OEC Processing",
    description: "Final government clearances before departure.",
    color: "cyan",
    steps: [
      {
        id: "6.1",
        title: "Insurance & Contract Signing",
        actions: [
          {
            actor: "CAN",
            description: [
              "Reports to office for physical signing of the Employment Contract.",
              "Ensures all signatures match verified documents."
            ]
          }
        ]
      },
      {
        id: "6.2",
        title: "OEC Approval Tracking",
        actions: [
          {
            actor: "CAN",
            description: [
              "Submits e-registration for OEC via the government portal.",
              "Tracks approval status in the system progress tracker."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_7",
    title: "Phase 7: Pre-Departure & Finalization",
    description: "Travel arrangements and final onboarding.",
    color: "rose",
    steps: [
      {
        id: "7.1",
        title: "Flight Arrangements & Briefing",
        actions: [
          {
            actor: "SYS",
            description: [
              "Updates Dashboard with confirmed Flight Details and Itinerary."
            ]
          },
          {
            actor: "CAN",
            description: [
              "Attends final Pre-Departure Briefing.",
              "Completes final medical tests required before departure."
            ]
          }
        ]
      },
      {
        id: "7.2",
        title: "Arrival & Handover",
        actions: [
          {
            actor: "CAN",
            description: [
              "Arrives in Singapore.",
              "Completes mandatory orientation courses (SIP) and final medical clearance.",
              "Starts employment with the Employer."
            ]
          },
          {
            actor: "SYS",
            description: [
              "Marks candidate status as 'HIRED'.",
              "Initiates post-placement follow-up schedule."
            ]
          }
        ]
      }
    ]
  }
];