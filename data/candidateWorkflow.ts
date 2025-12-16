import { WorkflowPhase } from '../types';

export const CANDIDATE_WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "CAN_PHASE_1",
    title: "Phase 1: Candidate Registration & Profile Building",
    description: "Building a comprehensive digital resume for AI matching.",
    color: "blue",
    steps: [
      {
        id: "1.1",
        title: "Part A: Onboarding - The Registration Wizard",
        description: "Purpose: To build a comprehensive digital resume that allows the AI 'Bouquet Matching' system to pair candidates with the right employers.",
        actions: [
          {
            actor: "CAN",
            description: [
              "6-Step Setup Process (Before Dashboard Access):",
              "1. Personal Details: Full name (as per passport), Date of Birth (DOB), Nationality, Gender, Current Location, Contact information",
              "2. Employment & Education: Current Role/Position, Years of Experience, Highest Qualification, Previous employment history, Specialized training completed",
              "3. Job Preferences: Desired Job Categories (e.g., 'Elderly Care', 'Cooking', 'Child Care'), Expected Salary Range, Earliest Start Date, Preferred Work Location in Singapore, Accommodation Preferences",
              "4. Skills & Languages: Checkbox selection of skills ('First Aid', 'Pet Care', 'Special Needs Care', 'Elderly Care', 'Infant Care', 'Cooking', 'Housekeeping'), Languages spoken with proficiency levels (English, Tagalog, Mandarin, Chinese dialects), Cultural competencies and special certifications",
              "5. Uploads & Video: Passport Upload (Scanned copy of valid passport), Resume Upload (Professional resume or biodata), Photo Upload (Professional passport-style photo and optional casual photos), Video Introduction (Record a 2-4 minute 'One-way Video Introduction' directly in browser - Standard questions answered: work experience, why interested in working abroad, strengths; Technical validation for audio/video quality)",
              "6. Review & Confirmation: Review all entered data for accuracy, Confirm information completeness, Electronically sign initial consent and data privacy forms, Submit for profile verification"
            ]
          }
        ]
      },
      {
        id: "1.2",
        title: "Part B: Dashboard Layout & Navigation",
        description: "Purpose: Central hub for candidate interaction throughout entire recruitment journey.",
        actions: [
          {
            actor: "SYS",
            description: [
              "Sidebar Navigation (Four Main Sections):",
              "1. My Profile (Default View) - Digital Resume and document vault",
              "2. Invites - Interview invitations and job opportunities",
              "3. Progress - Application status tracker",
              "4. Interviews - Scheduled meetings and calendar"
            ]
          },
          {
            actor: "CAN",
            description: [
              "Tab 1: My Profile (MyDetails)",
              "Purpose: View and edit personal information, manage 'Pre-Uploaded Documents' sent to employers.",
              "Profile Header: Candidate Avatar (or Initials display), 'Profile Completion' badge (e.g., '75% Complete'), Quick stats: Days since registration, applications submitted",
              "Left Column (Editable Fields): Personal Info (Name, DOB, Location, Gender, Phone, Email), Employment & Preferences (Current Role, Experience years, Job Categories, Key Skills), Edit Functionality (Click 'Edit' to modify fields, 'Save' to update profile), Validation (System flags incomplete or inconsistent information)",
              "Right Column (Media & Docs): Pre-Uploaded Documents (Organized list - Passport, Resume, Certificates, etc.), Candidates can 'Add New' or 'Replace' existing files, Documents stored centrally to avoid re-uploading for each job, Version control for updated documents",
              "One-Way Video Interview: Video player showing recorded introduction, Option to re-record or upload new video file, Preview functionality before finalizing"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_2",
    title: "Phase 2: Matching & Consultation",
    description: "System-Driven Matching and Client Consultation.",
    color: "indigo",
    steps: [
      {
        id: "2.1",
        title: "System-Driven Matching",
        actions: [
          {
            actor: "SYS",
            description: [
              "Automated Job Matching (AI Bouquet Matching):",
              "AI engine analyzes comprehensive candidate profile against client requirements",
              "Generates compatibility scores (0-100%) based on skills, experience, preferences",
              "Suggests best-fit candidates to sales team for review",
              "Match Reason Generation: Creates personalized explanations for matches (e.g., 'Your 3 years of elderly care experience matches Mrs. Lim's requirements')",
              "AI Shortlist Generation (0.4):",
              "System automatically creates curated shortlists based on client criteria",
              "Sales team reviews and refines shortlists before client presentation",
              "Shortlists include: candidate profiles, video interviews, match scores, compatibility analysis"
            ]
          }
        ]
      },
      {
        id: "2.2",
        title: "Tab 2: Invites (InterviewInvites)",
        description: "Purpose: Notification center when employer/salesperson identifies candidate as good fit.",
        actions: [
          {
            actor: "SYS",
            description: [
              "Content: List of Invite Cards, each containing:",
              "Job Title & Employer: e.g., 'Elderly Care Helper' for 'Mr. Tan'",
              "Match Reason: Explanation why selected (e.g., 'Your skills in 'Elderly Care' match this job')",
              "Job Description: Brief details about duties, household size, special requirements",
              "Required Documents: Specific list employer needs (e.g., 'Passport', 'Bio-data', 'Certificates')",
              "Employer Location & Accommodation Details",
              "Salary Range & Benefits"
            ]
          },
          {
            actor: "CAN",
            description: [
              "Actions on Each Invite Card:",
              "Reject: Decline opportunity (with optional reason)",
              "Accept & Schedule: Opens modal asking candidate to:",
              "1. Confirm which pre-uploaded documents to share with employer",
              "2. Select preferred interview time slots",
              "3. Confirm availability for proposed dates",
              "Upon acceptance, status moves to 'Interview Scheduled' and appears in Tab 4"
            ]
          }
        ]
      },
      {
        id: "2.3",
        title: "Client Journey",
        actions: [
          {
            actor: "EMP",
            description: [
              "Client Consultation Booking (0.5):",
              "Client receives notification of potential matches via email/SMS",
              "Books consultation session with sales team via online scheduler",
              "Receives pre-consultation package with candidate overviews and match analysis"
            ]
          },
          {
            actor: "SP",
            description: [
              "Sales Presents Shortlist (1.1):",
              "Sales team presents curated candidate shortlist to client",
              "Provides detailed profiles, video interviews, match analysis, compatibility scores",
              "Discusses candidate availability, special qualifications, potential start dates"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_3",
    title: "Phase 3: Medical Examination & Initial Documentation",
    description: "Job Scope, Medical Exam, and Progress Tracking.",
    color: "purple",
    steps: [
      {
        id: "3.1",
        title: "Current Manual Process Integration",
        actions: [
          {
            actor: "SP",
            description: [
              "Job Scope Distribution & Signing:",
              "Singapore sales staff emails detailed Job Scope Form to Manila or Iloilo office"
            ]
          },
          {
            actor: "OA",
            description: [
              "Local office staff coordinates with candidate to sign and accept job scope",
              "Physical signature required (digital signatures not accepted for this document)",
              "Signed form scanned and uploaded to candidate's document vault"
            ]
          },
          {
            actor: "CAN",
            description: [
              "Medical Examination Process:",
              "Referral: Candidate receives referral form for Holy Angel Medical Clinic via dashboard",
              "Scheduling: Candidate can walk in any day (preferably morning for optimal BP results)",
              "Procedure: Medical examination includes: BP monitoring (critical for clearance), X-ray (chest), UTI test, General physical examination",
              "Payment: Worker makes payment directly to clinic",
              "Upload Requirement: Candidate must upload medical certificate to dashboard"
            ]
          },
          {
            actor: "SYS",
            description: [
              "Results Timeline: Medical certificates released in 2 working days",
              "Medical Outcome Scenarios (System Tracking):",
              "High BP: Monitor for 7 days, retest. If still high, candidate rejected (system updates status)",
              "X-ray Scarring: Immediate rejection (system alerts all stakeholders)",
              "UTI: Take medication for 1 week, retest (results in 2 working days)"
            ]
          },
          {
            actor: "SP",
            description: [
              "Medical Follow-up Protocol:",
              "Staff must proactively follow up with clinic for medical status",
              "Clinic only contacts office if medical problems exist",
              "Office collects physical medical certificate when available",
              "Email copies can be requested if necessary"
            ]
          }
        ]
      },
      {
        id: "3.2",
        title: "Tab 3: Progress Tracker",
        description: "Purpose: 'FedEx Tracker' for job application with total transparency on status.",
        actions: [
          {
            actor: "SYS",
            description: [
              "Summary View:",
              "Horizontal chain of circles representing milestones: Matched -> Invited -> Interview -> Medical -> Payment -> Documentation -> Contract -> Visa -> Hired",
              "Color-coded status: Green (completed), Yellow (in progress), Red (blocked), Gray (pending)",
              "Percentage completion indicator",
              "Detailed View (Expanded):",
              "Clicking milestone reveals vertical timeline with specific: Dates for every completed step, Person responsible (Admin, Sales, Candidate), Notes and comments, Document links/references"
            ]
          },
          {
            actor: "CAN",
            description: [
              "Interactive Features (Action Required):",
              "If application stalls (e.g., missing 'Medical Certificate'), yellow 'Action Required' box appears",
              "Candidate can upload requested file directly within progress card",
              "System notifies admin upon upload completion",
              "Real-time status updates across all stakeholder dashboards"
            ]
          }
        ]
      },
      {
        id: "3.3",
        title: "System Enhancements for Medical Process",
        actions: [
          {
            actor: "SYS",
            description: [
              "System auto-prompts candidate for medical examination n+1 day after selection",
              "Candidate must confirm medical checkup completion via dashboard login",
              "Medical certificate upload triggers automated verification checks",
              "Automated reminders sent until medical checkup completed",
              "If candidate doesn't respond, recruiters (PH/SG) receive dashboard alerts for follow-up",
              "Candidate can enter custom health fields (blood pressure levels) for system tracking",
              "GPS tracking and registration on day of medical reporting (future app feature)"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_4",
    title: "Phase 4: Interview & Selection",
    description: "Client Review, Live Interviews, and Selection.",
    color: "teal",
    steps: [
      {
        id: "4.1",
        title: "Client Journey",
        actions: [
          {
            actor: "EMP",
            description: [
              "Client Review (1.2):",
              "Client reviews candidate profiles and pre-recorded video interviews in their portal",
              "Can filter, compare, and shortlist candidates in the system",
              "Requests additional information or specific document verification"
            ]
          },
          {
            actor: "SP",
            description: [
              "Live Interview Coordination (1.3):",
              "Sales team schedules live interview between client and candidate",
              "Coordinates time zones and technical setup",
              "Provides interview guidelines and preparation materials to both parties"
            ]
          }
        ]
      },
      {
        id: "4.2",
        title: "Tab 4: Scheduled Interviews",
        description: "Purpose: Calendar and meeting hub for confirmed interviews.",
        actions: [
          {
            actor: "SYS",
            description: [
              "Layout:",
              "Calendar Widget (Left): Visual calendar showing dates with booked slots; Color coding: Green (confirmed), Yellow (pending confirmation), Red (cancelled)",
              "Interview List (Right): Cards showing details of confirmed meetings",
              "Interview Card Details:",
              "Who: Employer Name & Job Title",
              "When: Date, Time, and Timezone (e.g., SGT - Singapore Time)",
              "Visuals: Employer's avatar/logo (if available)",
              "Meeting Platform: Zoom, Google Meet, or custom video solution",
              "Preparation Materials: Links to job description, household details, interview tips"
            ]
          },
          {
            actor: "CAN",
            description: [
              "Actions on Card:",
              "Join Meeting: Prominent blue button launching video call (link active 10 mins before)",
              "Reschedule/Cancel: Options to request time change with reason",
              "Technical Check: Pre-interview connection test",
              "Post-Interview Feedback: Form to submit interview experience"
            ]
          }
        ]
      },
      {
        id: "4.3",
        title: "Candidate Journey Through Interview Process",
        actions: [
          {
            actor: "SYS",
            description: [
              "Internal Review (5):",
              "Client's interview request undergoes admin approval process",
              "System validates candidate availability and readiness (profile completeness)",
              "Approval triggers invitation to candidate dashboard"
            ]
          },
          {
            actor: "CAN",
            description: [
              "Receive Interview Invitation (6):",
              "Candidate receives interview invitation in 'Invites' tab",
              "Notification via WhatsApp and email with interview details",
              "Candidate can accept, decline, or request rescheduling through dashboard"
            ]
          },
          {
            actor: "SYS",
            description: [
              "Interview Scheduled (7):",
              "Upon candidate acceptance, system automatically:",
              "Sends interview link to both parties",
              "Calendar invites with reminders (24h, 1h, 15m before)",
              "Pre-interview preparation materials to candidate",
              "Technical setup guide for video platform"
            ]
          },
          {
            actor: "CAN",
            description: [
              "Post-Interview Decision (8):",
              "Candidate decides whether to proceed with hiring process via dashboard",
              "Can accept or decline offer through the system",
              "If accepting, moves to documentation phase and appears in Progress Tracker"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_5",
    title: "Phase 5: Prior Experience Assessment & Course Booking",
    description: "Assessment, Training Courses, and Contract Signing.",
    color: "orange",
    steps: [
      {
        id: "5.1",
        title: "System Assessment of Prior Experience",
        actions: [
          {
            actor: "SYS",
            description: [
              "Automated Categorization:",
              "System analyzes candidate work history during onboarding",
              "Determines required courses and documentation based on experience",
              "Generates personalized checklist in Progress Tracker",
              "Previous Singapore Experience (Domestic Worker):",
              "Can skip TESDA and OWWA courses with valid old certificates",
              "Candidates without certificates can request 'Information Sheet' from POEA department (Must bring required documents for in-person request)",
              "System prompts for certificate upload or schedules POEA visit",
              "Admin proceeds to book PDOS course directly upon verification",
              "Previous Overseas Experience (Non-Singapore):",
              "Can skip TESDA course with old certificates or POEA Information Sheet",
              "Must attend PDOS and OWWA courses",
              "System generates specific requirement list in Progress Tracker",
              "Admin proceeds with course bookings using standard procedures"
            ]
          }
        ]
      },
      {
        id: "5.2",
        title: "Training Course Booking Processes",
        actions: [
          {
            actor: "AD",
            description: [
              "TESDA Course Booking (Current Process):",
              "Admin books via phone call/message to training center with worker's name",
              "Worker brings passport copy, photo, and payment on training day",
              "Minimum 1-week wait for available course (18-day course duration)",
              "Certificate released in 1 week via email to worker",
              "Staff follow up with worker to obtain certificate copy",
              "TESDA available in Manila or Iloilo based on worker location"
            ]
          },
          {
            actor: "SYS",
            description: [
              "TESDA System Enhancements:",
              "Automated reminders to candidates and recruiters about course dates",
              "Progress tracking for course completion in dashboard",
              "Certificate upload functionality by candidate directly to dashboard",
              "GPS tracking and registration on day of reporting (future app feature)",
              "Integration with training center systems for real-time attendance tracking"
            ]
          },
          {
            actor: "AD",
            description: [
              "Employment Contract Processing:",
              "Pending Courier: Original Embassy-endorsed Employment Contract (EC) couriered from Singapore to Manila office",
              "EC Signing Process:",
              "Admin contacts worker to report to Manila office for EC signing",
              "For branch office workers: Manila informs branch, Iloilo staff coordinates travel",
              "EC must be signed by licensee with company chop stamp"
            ]
          },
          {
            actor: "SYS",
            description: [
              "EC Signing System Enhancements:",
              "Admin updates system with contract receipt date",
              "System automatically sends WhatsApp/email notifications to worker via dashboard",
              "Worker inputs reporting date for EC signing through dashboard",
              "Automated reminders until reply received",
              "Admin notified via dashboard if no response within 48 hours",
              "Branch offices also updated via system notifications",
              "Digital record of signing appointment in Progress Tracker"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_6",
    title: "Phase 6: Documentation & Pre-Departure Processing",
    description: "Insurance, OEC, PDOS, and OWWA Processing.",
    color: "cyan",
    steps: [
      {
        id: "6.1",
        title: "Insurance Purchase",
        actions: [
          {
            actor: "AD",
            description: [
              "Insurance Application Process:",
              "Manila Admin manually fills insurance form (system auto-populates candidate data)",
              "Worker must physically sign form (digital signatures not allowed)",
              "Admin emails to ofwortigasparamount@gmail.com: Worker's passport copy (from document vault), Completed and signed insurance form",
              "Policy emailed next working day",
              "Liaison officer pays in cash at insurance company",
              "Insurance policy uploaded to candidate's document vault"
            ]
          },
          {
            actor: "SYS",
            description: [
              "System Enhancement: Auto-population of insurance form from candidate profile data"
            ]
          }
        ]
      },
      {
        id: "6.2",
        title: "OEC Processing",
        actions: [
          {
            actor: "CAN",
            description: [
              "Online OEC Application:",
              "Worker completes e-registration online via DMW portal",
              "Submits documents online through system integration: Employment Contract (scanned), TESDA, OWWA, PDOS, and PEOS certificates, Worker's Information Sheet (for exemptions), Worker's passport copy, Insurance Policy"
            ]
          },
          {
            actor: "OA",
            description: [
              "Original documents submitted physically to DMW department by liaison officer",
              "OEC approval status tracked in candidate's Progress Tracker",
              "Approved OEC uploaded to document vault"
            ]
          }
        ]
      },
      {
        id: "6.3",
        title: "PDOS Course Booking",
        actions: [
          {
            actor: "AD",
            description: [
              "Current PDOS Process:",
              "Admin calls worker for availability dates",
              "Emails PDOS center (kalahipdosmabini@yahoo.com) with: Worker's passport copy, Employment contract, Requested dates",
              "PDOS typically available next working day",
              "One-day online course via mobile phone",
              "Liaison officer collects certificate same day during office hours",
              "Payment made on worker's behalf"
            ]
          },
          {
            actor: "SYS",
            description: [
              "PDOS System Enhancements:",
              "Workflow automation for reminders and follow-up via dashboard",
              "Document upload for e-filing directly from document vault",
              "Schedule booking with candidate confirmation through dashboard",
              "System generates batch candidate information for email submission",
              "Certificate tracking and automatic upload upon receipt"
            ]
          }
        ]
      },
      {
        id: "6.4",
        title: "OWWA Course Booking",
        actions: [
          {
            actor: "AD",
            description: [
              "Current OWWA Process:",
              "Admin books via online system (8am-12pm only)",
              "Maximum 20 applications per agency daily",
              "Worker manually fills OWWA forms with original handwritten signature",
              "Required when worker reports to office (Iloilo workers wait until Manila)",
              "Online submission of scanned documents: OWWA forms, Request letter, Passport copy, Employment contract, PDOS certificate, Company's Affidavit of Undertaking",
              "OWWA office replies same day with schedule",
              "Mandatory office attendance with company assistance (8am-5pm)"
            ]
          },
          {
            actor: "SYS",
            description: [
              "OWWA System Enhancement:",
              "Admin updates course dates in system",
              "System sends automated notifications to candidate dashboard",
              "Pre-filled forms available for printing",
              "Attendance tracking integrated with Progress Tracker"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_7",
    title: "Phase 7: Payment & Final Documentation",
    description: "Payment, MOM Application, and Document Verification.",
    color: "emerald",
    steps: [
      {
        id: "7.1",
        title: "Client Journey",
        actions: [
          {
            actor: "EMP",
            description: [
              "Payment (1.4):",
              "Client pays either booking fee or full amount to secure candidate",
              "Payment processed through secure payment gateway integrated with system",
              "System updates candidate status to 'secured' upon payment confirmation",
              "Receipt generated and stored in client portal",
              "Sales team notified for next steps"
            ]
          }
        ]
      },
      {
        id: "7.2",
        title: "Admin Actions",
        actions: [
          {
            actor: "AD",
            description: [
              "MOM Application (Phase 2):",
              "Admin collects required documents from client through client portal",
              "Submits complete application to Singapore Ministry of Manpower via integrated system",
              "Tracks application status and communicates updates through dashboard",
              "Alerts generated for missing documents or issues"
            ]
          }
        ]
      },
      {
        id: "7.3",
        title: "Candidate Journey Through Documentation",
        actions: [
          {
            actor: "CAN",
            description: [
              "Document Submission (9):",
              "Candidate submits comprehensive document package from pre-uploaded profile",
              "Includes all verified certificates, medical reports, and identification",
              "System organizes documents for easy review with validation checks",
              "Missing documents flagged in Progress Tracker with 'Action Required'"
            ]
          },
          {
            actor: "SP",
            description: [
              "Document Verification (10):",
              "Sales Team reviews and verifies all candidate documents through verification portal",
              "Flags any discrepancies or missing information",
              "Updates system with verification status",
              "Digital signature/approval recorded for audit trail"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_8",
    title: "Phase 8: Onboarding & Pre-Departure Finalization",
    description: "Travel Arrangements, Final Onboarding, and Summary.",
    color: "rose",
    steps: [
      {
        id: "8.1",
        title: "OEC Approval & Travel Arrangements",
        actions: [
          {
            actor: "AD",
            description: [
              "OEC Approved Process:",
              "Manila admin emails OEC copy to Singapore office via system",
              "Singapore office arranges flight ticket for worker",
              "Admin liaises with worker through dashboard to: Check location and travel duration to Manila, Confirm accommodation arrangements",
              "Advises Singapore office on earliest possible flight date",
              "Flight details uploaded to candidate's dashboard"
            ]
          },
          {
            actor: "CAN",
            description: [
              "Pre-Departure Requirements:",
              "Pregnancy Test: Worker completes pregnancy serum test 3 days before departure",
              "Provincial Workers: Test done in home province before Manila travel",
              "Appointed Clinic: Walk-in available without appointment",
              "Manila Accommodation: Worker stays 2-3 days before departure",
              "Pre-Departure Briefing: Conducted by office manager or liaison officer",
              "All medical results and clearances uploaded to dashboard"
            ]
          }
        ]
      },
      {
        id: "8.2",
        title: "Final Onboarding",
        actions: [
          {
            actor: "AD",
            description: [
              "Offer & Post-Arrival (11):",
              "Admin coordinates through dashboard:",
              "Final medical clearance in Singapore",
              "Payment processing for work permit",
              "Work permit application and issuance",
              "Airport pickup and accommodation arrangement",
              "System tracks each step and sends notifications to all stakeholders",
              "Candidate checklist for Singapore arrival in dashboard"
            ]
          },
          {
            actor: "SYS",
            description: [
              "Hire Finalized (12):",
              "Candidate officially hired upon work permit delivery",
              "System updates employment status to 'active'",
              "Client receives completion notification and handover documentation",
              "Post-placement follow-up schedule initiated (30, 60, 90-day check-ins)",
              "Candidate portal transitions to 'Employee' mode with new features"
            ]
          }
        ]
      },
      {
        id: "8.3",
        title: "Candidate Workflow Summary",
        actions: [
          {
            actor: "SYS",
            description: [
              "Register: Complete 6-step onboarding wizard, build comprehensive profile with video intro",
              "Wait: System matches profile to jobs via AI Bouquet Matching",
              "Review Invite: Receive notification in 'Invites' tab, check job details and requirements",
              "Accept: Click 'Accept,' select documents to share, confirm schedule",
              "Interview: Go to 'Interviews' tab at scheduled time, click 'Join Meeting'",
              "Medical: Complete examination, upload certificate, track in 'Progress' tab",
              "Documentation: Submit required documents through dashboard as prompted",
              "Training: Attend required courses (TESDA/PDOS/OWWA), upload certificates",
              "Finalize: Complete all pre-departure requirements in 'Progress' tab",
              "Travel & Start: Receive flight details, complete final checks, begin employment"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "CAN_PHASE_9",
    title: "System-Wide Features, Automation & Future Enhancements",
    description: "Features supporting the workflow.",
    color: "slate",
    steps: [
      {
        id: "9.1",
        title: "System-Wide Features & Automation",
        actions: [
          {
            actor: "SYS",
            description: [
              "Cross-Phase Dashboard Features:",
              "Unified Notification Center: WhatsApp, email, and in-dashboard notifications",
              "Document Management: Central vault with version control and expiry tracking",
              "Real-time Progress Tracking: FedEx-style status updates across all phases",
              "Compliance Engine: Automated validation of required steps and documents",
              "Analytics Dashboard: Performance metrics, bottleneck identification, success rates",
              "Multi-language Support: Interface available in English, Tagalog, local dialects",
              "Integration Points:",
              "Government portals (DMW, POEA, OWWA, TESDA)",
              "Medical clinic systems for result tracking",
              "Payment gateways for secure transactions",
              "Video conferencing platforms (Zoom, Google Meet)",
              "Email and SMS gateways for communication",
              "GPS tracking for physical appointment verification"
            ]
          }
        ]
      },
      {
        id: "9.2",
        title: "Future Enhancements",
        actions: [
          {
            actor: "SYS",
            description: [
              "Mobile App: Full functionality with GPS tracking for all appointments",
              "AI Document Verification: Automated fraud detection and validation",
              "Integrated Video Platform: Built-in recording and analysis tools",
              "Blockchain Verification: Immutable document storage and verification",
              "Predictive Analytics: Candidate success probability scoring",
              "Automated Follow-ups: AI-driven communication based on candidate behavior",
              "Virtual Reality Training: Pre-departure cultural and job training modules"
            ]
          }
        ]
      }
    ]
  }
];