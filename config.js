/*
  LAXHYA AEGIS IT SUPPORT PORTFOLIO
  ---------------------------------
  This is the main customization file.

  Edit this file to update:
  - Name and role
  - Hero content
  - About Me
  - Experience
  - Skills
  - Projects
  - Achievements / certifications
  - Contact details
  - Social links
  - Profile photo
  - Resume
  - EmailJS

  Keep commas and quotation marks in place.
*/

window.PORTFOLIO = {
  profile: {
    name: "Jordan Lee",
    headline: "IT Support Engineer",

    roles: [
      "IT Support Engineer",
      "Service Desk Engineer",
      "Endpoint Support Specialist",
      "Cloud Support Professional"
    ],

    availability: "Open to enterprise IT support opportunities",

    heroDescription:
      "I support users, endpoints, cloud services and business-critical tools with a calm, structured and improvement-focused approach.",

    location: "London, United Kingdom",
    email: "jordan@example.com",
    phone: "",

    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",

    /*
      Optional hero profile photo.
      Put the image inside assets/ and set:
      photo: "assets/profile-photo.webp"

      Adjust photoPosition to change the visible crop.
    */
    photo: "assets/profile-photo.webp",
    photoAlt: "Portrait of Jordan Lee",
    photoPosition: "50% 35%",

    /*
      Optional resume.
      Put resume.pdf inside assets/ and set:
      resume: "assets/resume.pdf"
    */
    resume: ""
  },

  heroTags: [
    "Microsoft 365",
    "Entra ID",
    "Intune",
    "ServiceNow",
    "Networking",
    "PowerShell"
  ],

  marquee: [
    "Incident Management",
    "Microsoft 365",
    "Endpoint Support",
    "Identity & Access",
    "Networking",
    "ServiceNow",
    "PowerShell",
    "Knowledge Management",
    "Problem Management",
    "User Experience"
  ],

  about: {
    paragraphs: [
      "I am an IT support professional focused on keeping people productive, systems dependable and support experiences clear.",
      "My work covers <strong>end-user support, Microsoft 365, identity, endpoint management, networking, incident handling and service improvement</strong> across enterprise environments.",
      "I enjoy solving the immediate issue, but I also look for the pattern behind it: better documentation, automation, monitoring or process changes that can prevent the same issue from returning."
    ],

    metrics: [
      {
        value: "3+",
        label: "Years supporting IT environments"
      },
      {
        value: "1500+",
        label: "Tickets / requests handled"
      },
      {
        value: "20+",
        label: "Improvements and automations"
      }
    ],

    principles: [
      {
        title: "Communicate clearly",
        text:
          "Keep users informed, translate technical details and set realistic expectations."
      },
      {
        title: "Troubleshoot methodically",
        text:
          "Use evidence, isolate variables and document the path from symptom to resolution."
      },
      {
        title: "Improve the service",
        text:
          "Look for recurring patterns that can be removed through automation or better process."
      },
      {
        title: "Own the outcome",
        text:
          "Stay accountable through escalation, handover, follow-up and knowledge sharing."
      }
    ]
  },

  experience: [
    {
      period: "2025 - Present",
      role: "IT Support Engineer",
      company: "Global Enterprise Ltd",
      location: "London / Hybrid",
      summary:
        "Supporting enterprise users and core workplace technologies across a multi-site environment, with responsibility for incident resolution, access, endpoint and service improvements.",
      points: [
        "Resolve L1/L2 incidents and requests across Windows, Microsoft 365, identity, endpoint and collaboration services.",
        "Work with ServiceNow queues, SLA priorities, escalations and stakeholder communication.",
        "Investigate recurring incidents and contribute to knowledge articles, root-cause analysis and process improvements.",
        "Support user onboarding, access changes, endpoint readiness and secure remote-working scenarios."
      ],
      tags: [
        "Microsoft 365",
        "ServiceNow",
        "Intune",
        "Entra ID",
        "Windows 11"
      ]
    },
    {
      period: "2023 - 2025",
      role: "Service Desk Analyst",
      company: "Example Technology Services",
      location: "United Kingdom",
      summary:
        "Provided first and second-line support for users across multiple business functions while building strong troubleshooting, documentation and customer-service habits.",
      points: [
        "Handled incidents, requests and access issues through phone, chat and ticket channels.",
        "Supported Microsoft 365, VPN, printers, browsers, conferencing tools and common business applications.",
        "Escalated infrastructure and application issues with clear diagnostics and supporting evidence.",
        "Improved knowledge-base content for frequently reported incidents."
      ],
      tags: [
        "Ticketing",
        "Troubleshooting",
        "VPN",
        "Microsoft Teams",
        "Knowledge Base"
      ]
    },
    {
      period: "2022 - 2023",
      role: "Junior IT Support Technician",
      company: "Example Business Group",
      location: "On-site",
      summary:
        "Built foundational experience in device preparation, user support, account administration, hardware troubleshooting and documentation.",
      points: [
        "Prepared and deployed laptops, peripherals and user profiles.",
        "Assisted with account creation, password resets and basic group access changes.",
        "Troubleshot hardware, software and connectivity issues for office users.",
        "Maintained asset information and setup documentation."
      ],
      tags: [
        "Hardware",
        "Active Directory",
        "Asset Management",
        "Windows",
        "User Support"
      ]
    }
  ],

  skills: [
    {
      name: "Microsoft 365",
      category: "Workplace",
      symbol: "365",
      level: "Core",
      context: "Enterprise",
      description:
        "Exchange Online, Teams, OneDrive, SharePoint, Outlook and user troubleshooting.",
      accent: "#a8ff60"
    },
    {
      name: "Microsoft Intune",
      category: "Endpoint",
      symbol: "IN",
      level: "Working",
      context: "Device",
      description:
        "Device enrolment, policies, compliance, application deployment and endpoint troubleshooting.",
      accent: "#35c8ff"
    },
    {
      name: "Entra ID",
      category: "Identity",
      symbol: "ID",
      level: "Core",
      context: "Access",
      description:
        "User accounts, groups, MFA, access troubleshooting and identity workflows.",
      accent: "#5b7cff"
    },
    {
      name: "Active Directory",
      category: "Identity",
      symbol: "AD",
      level: "Core",
      context: "On-prem",
      description:
        "User administration, groups, password operations and basic domain support.",
      accent: "#39e6a2"
    },
    {
      name: "ServiceNow",
      category: "ITSM",
      symbol: "SN",
      level: "Core",
      context: "ITIL",
      description:
        "Incident, request, problem and change workflows with clear SLA ownership.",
      accent: "#a8ff60"
    },
    {
      name: "Networking",
      category: "Infrastructure",
      symbol: "NET",
      level: "Core",
      context: "TCP/IP",
      description:
        "DNS, DHCP, VPN, Wi-Fi, connectivity checks and structured network troubleshooting.",
      accent: "#35c8ff"
    },
    {
      name: "PowerShell",
      category: "Automation",
      symbol: "PS",
      level: "Working",
      context: "Scripts",
      description:
        "Small automations, information gathering and repetitive support-task reduction.",
      accent: "#5b7cff"
    },
    {
      name: "Windows 11",
      category: "Endpoint",
      symbol: "W11",
      level: "Core",
      context: "Desktop",
      description:
        "Operating-system troubleshooting, profiles, drivers, policies and application support.",
      accent: "#39e6a2"
    },
    {
      name: "Remote Support",
      category: "Workplace",
      symbol: "RS",
      level: "Core",
      context: "Users",
      description:
        "Remote diagnosis, clear user guidance and ownership through resolution.",
      accent: "#ffc857"
    },
    {
      name: "Knowledge Management",
      category: "ITSM",
      symbol: "KB",
      level: "Core",
      context: "Docs",
      description:
        "Reusable troubleshooting guides, known-error notes and support documentation.",
      accent: "#a8ff60"
    },
    {
      name: "Monitoring",
      category: "Infrastructure",
      symbol: "MON",
      level: "Working",
      context: "Health",
      description:
        "Using alerts, dashboards and service signals to speed up diagnosis and escalation.",
      accent: "#35c8ff"
    },
    {
      name: "Customer Communication",
      category: "Service",
      symbol: "CX",
      level: "Core",
      context: "People",
      description:
        "Clear updates, expectation management and professional support conversations.",
      accent: "#ffc857"
    }
  ],

  projects: [
    {
      title: "Service Desk Automation Pack",
      type: "Automation",
      category: "Automation",
      kpi: "30% less repetitive work",
      description:
        "A collection of support scripts and guided workflows that reduce manual checks during common incidents and user requests.",
      detail:
        "The project standardised recurring troubleshooting steps and used lightweight automation to collect device, account and network information before escalation.",
      highlights: [
        { value: "30%", label: "manual steps reduced" },
        { value: "8", label: "support tasks automated" },
        { value: "Faster", label: "diagnostic handover" }
      ],
      tags: ["PowerShell", "Service Desk", "Automation", "Documentation"],
      image: "",
      liveUrl: "",
      codeUrl: "",
      wide: true,
      narrow: false,
      colourA: "#1fb984",
      colourB: "#3659d9"
    },
    {
      title: "Onboarding Readiness Dashboard",
      type: "Service Improvement",
      category: "Operations",
      kpi: "Better day-one readiness",
      description:
        "A simple readiness view for accounts, devices, licences and access checks before a new starter's first day.",
      detail:
        "Designed to reduce avoidable onboarding incidents by making ownership and missing prerequisites visible before a new employee starts.",
      highlights: [
        { value: "4", label: "readiness areas" },
        { value: "1 view", label: "shared status" },
        { value: "Lower", label: "day-one incidents" }
      ],
      tags: ["Onboarding", "Microsoft 365", "Identity", "Process"],
      image: "",
      liveUrl: "",
      codeUrl: "",
      wide: false,
      narrow: true,
      colourA: "#68d391",
      colourB: "#35c8ff"
    },
    {
      title: "Recurring Incident Knowledge Hub",
      type: "Knowledge Management",
      category: "ITSM",
      kpi: "Faster first-contact resolution",
      description:
        "A structured knowledge system for recurring issues, known errors, escalation evidence and user-friendly resolution steps.",
      detail:
        "Built around support patterns rather than random documents, helping analysts locate the correct troubleshooting path quickly and keep guidance consistent.",
      highlights: [
        { value: "40+", label: "knowledge entries" },
        { value: "Searchable", label: "issue patterns" },
        { value: "Consistent", label: "resolution flow" }
      ],
      tags: ["Knowledge Base", "ITIL", "Problem Management", "Support"],
      image: "",
      liveUrl: "",
      codeUrl: "",
      wide: false,
      narrow: true,
      colourA: "#5b7cff",
      colourB: "#7b61ff"
    },
    {
      title: "Endpoint Health Review",
      type: "Endpoint",
      category: "Endpoint",
      kpi: "Proactive device support",
      description:
        "A review workflow that surfaces common device health, compliance and application issues before they become user-impacting tickets.",
      detail:
        "The project combined endpoint checks, support trends and follow-up actions to shift part of the workload from reactive support toward proactive maintenance.",
      highlights: [
        { value: "Weekly", label: "health review" },
        { value: "3", label: "risk categories" },
        { value: "Earlier", label: "issue detection" }
      ],
      tags: ["Intune", "Windows 11", "Compliance", "Endpoint"],
      image: "",
      liveUrl: "",
      codeUrl: "",
      wide: false,
      narrow: false,
      colourA: "#35c8ff",
      colourB: "#a8ff60"
    }
  ],

  achievements: [
    {
      title: "Microsoft 365 Fundamentals",
      type: "Certification",
      icon: "MS",
      year: "2026",
      description:
        "Foundation-level validation of Microsoft 365 cloud concepts, services, security and administration.",
      meta: ["Microsoft", "Cloud", "Workplace"]
    },
    {
      title: "ITIL 4 Foundation",
      type: "Certification",
      icon: "IT",
      year: "2025",
      description:
        "Service-management foundation covering value, practices, continual improvement and IT service delivery.",
      meta: ["ITSM", "Service Management", "Process"]
    },
    {
      title: "Quarterly Service Champion",
      type: "Recognition",
      icon: "★",
      year: "2025",
      description:
        "Recognised for consistent user communication, ticket ownership and support-quality improvements.",
      meta: ["Customer Experience", "Ownership", "Quality"]
    },
    {
      title: "Knowledge Base Improvement",
      type: "Achievement",
      icon: "KB",
      year: "2024",
      description:
        "Created and improved support documentation that reduced repeated investigation for common incidents.",
      meta: ["Documentation", "Efficiency", "Knowledge"]
    }
  ],

  contact: {
    message:
      "I am open to conversations about IT support, service operations, endpoint, cloud and technology support opportunities."
  },

  /*
    EMAILJS
    -------
    The template should use these variables:
    {{from_name}}
    {{from_email}}
    {{company}}
    {{message}}

    Leave the values empty to use the mailto fallback.
  */
  emailjs: {
    serviceId: "",
    templateId: "",
    publicKey: ""
  }
};
