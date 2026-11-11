import {
  Bell,
  BriefcaseBusiness,
  CalendarCheck,
  Car,
  Compass,
  Flower2,
  GraduationCap,
  HandHeart,
  Heart,
  House,
  PawPrint,
  SquareParking,
  Sparkles,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";

export const site = {
  brand: "Bthere",
  slogan: "when it matters",
  appUrl: "/services",
  heroTitle: "Care when it matters.",
  heroText: "Life has different needs. Bthere brings people, services, and support together in one connected experience.",
  stats: [
    ["Care First", "Support around real needs"],
    ["People Connected", "Services with a human center"],
    ["More Possibilities", "One connected ecosystem"],
  ],
};

export const navLinks = [
  ["About", "/#about"],
  ["How It Works", "/#how"],
  ["Services", "/services"],
  ["For Customers", "/#customers"],
  ["For Providers", "/join"],
  ["Contact", "/contact"],
];

export const values = [
  { icon: Heart, title: "Care First" },
  { icon: Users, title: "People Connected" },
  { icon: Stethoscope, title: "Support for All Ages" },
  { icon: Sparkles, title: "A Brighter Tomorrow" },
];

export const storyCards = [
  { icon: Compass, title: "Discover", text: "Find your possibilities." },
  { icon: Users, title: "Connect", text: "Meet the people behind them." },
  { icon: Bell, title: "Move forward", text: "Your next step starts here." },
];

export const audiencePanels = [
  {
    id: "customers",
    eyebrow: "For customers",
    title: "Find what you need. Feel supported while you do it.",
    text: "From everyday essentials to something new, discover your options through an experience that puts people first.",
    points: ["Discover different services", "Connect with the people behind them", "Find support when you need it"],
    to: "/services",
    cta: "Explore Bthere for Customers",
  },
  {
    id: "providers",
    provider: true,
    eyebrow: "For service providers",
    title: "Your service deserves to be discovered.",
    text: "Bthere aims to help service providers showcase what they do and connect with people looking for services.",
    points: ["Build your presence", "Showcase your services", "Connect with customers"],
    to: "/join",
    cta: "Explore Bthere for Providers",
  },
];

export const appPreviewCategories = [
  { icon: House, title: "Home" },
  { icon: Heart, title: "Care" },
  { icon: Flower2, title: "Wellness" },
  { icon: GraduationCap, title: "Learning" },
];

export const showcaseSections = [
  {
    eyebrow: "Welcome to Bthere",
    title: "More than a service. A better way to connect.",
    text: "Bthere brings different services and the people behind them into one connected ecosystem. For everyday needs. For your next step. For the moments that matter.",
  },
  {
    eyebrow: "The Bthere difference",
    title: "Technology should bring people closer.",
    text: "Not just more options. More meaningful connections. Our approach puts people at the center of a multi-service world.",
  },
];

export const categories = [
  {
    slug: "care-support",
    name: "Care & Support",
    description: "A little support. A meaningful difference.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&w=900&q=85",
    examples: ["Everyday companionship", "Personal support", "Support for families"],
    subservices: ["Companion visits", "Elderly daily support", "Respite care", "Medicine reminders", "Appointment escort", "Family check-ins"],
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    description: "Make space for feeling your best.",
    icon: Flower2,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    examples: ["Wellness guidance", "Movement and fitness", "Mindful living"],
    subservices: ["Personal training", "Yoga sessions", "Home massage", "Nutrition coaching", "Meditation guidance", "Recovery support"],
  },
  {
    slug: "home-services",
    name: "Home Services",
    description: "A helping hand for the place you call home.",
    icon: House,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Repair_tool_kit.jpg?width=900",
    examples: ["Home maintenance", "Cleaning support", "Household assistance"],
    subservices: ["Handyman repairs", "Furniture assembly", "Deep cleaning", "Painting touch-ups", "Fixture installation", "Garden upkeep"],
  },
  {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    description: "Care that feels like you.",
    icon: Sparkles,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Woman_reaches_for_a_cosmetic_product_in_a_display.jpg?width=900",
    examples: ["Personal grooming", "Beauty services", "Self-care"],
    subservices: ["Hair styling", "Makeup services", "Nail care", "Bridal grooming", "Skincare sessions", "Wardrobe styling"],
  },
  {
    slug: "transportation",
    name: "Transportation",
    description: "Connect with the journey ahead.",
    icon: Car,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Woman_Hailing_Cab.jpg?width=900",
    examples: ["Travel assistance", "Everyday transport", "Mobility support"],
    subservices: ["Airport pickup", "Daily rides", "Medical transport", "School runs", "Courier drop-offs", "Trip assistance"],
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "More possibilities for everyday life.",
    icon: HandHeart,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fashion_stylists.jpg?width=900",
    examples: ["Personal assistance", "Everyday experiences", "Lifestyle support"],
    subservices: ["Personal shopping", "Errand running", "Home organizing", "Meal prep support", "Gift planning", "Concierge help"],
  },
  {
    slug: "event-helpers",
    name: "Event Helpers",
    description: "Extra hands for smooth, welcoming events.",
    icon: CalendarCheck,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Volunteers_in_a_group_picture_at_the_event.jpg?width=900",
    examples: ["Guest support", "Setup assistance", "Event coordination"],
    subservices: ["Registration desk", "Ushering", "Venue setup", "Decoration support", "Vendor coordination", "Post-event cleanup"],
  },
  {
    slug: "ev-charge-services",
    name: "EV Charge Services",
    description: "Charging support for electric vehicles.",
    icon: Zap,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/EV_Charging_Station_(14868827510).jpg?width=900",
    examples: ["Charging guidance", "Station support", "EV assistance"],
    subservices: ["Charging station locating", "Cable assistance", "Queue coordination", "Home charger checks", "Route charge planning", "Emergency charge guidance"],
  },
  {
    slug: "parking-area",
    name: "Parking Area",
    description: "Parking support for busy places and events.",
    icon: SquareParking,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Keys_View_Parking_Lot_(51766525184).jpg?width=900",
    examples: ["Parking assistance", "Area guidance", "Vehicle flow support"],
    subservices: ["Lot attendants", "Valet coordination", "Entry guidance", "Reserved bay management", "Event parking flow", "Vehicle queue control"],
  },
  {
    slug: "man-power",
    name: "Man Power",
    description: "Reliable hands for practical, physical tasks.",
    icon: Users,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Workers_at_building_under_construction.jpg?width=900",
    examples: ["General labour", "Moving support", "Site assistance"],
    subservices: ["Loading and unloading", "Moving helpers", "Warehouse support", "Setup crews", "Cleaning crews", "Temporary site labour"],
  },
  {
    slug: "pet-care",
    name: "Pet Care",
    description: "Kind, practical help for pets and their people.",
    icon: PawPrint,
    image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dog_walking.jpg?width=900",
    examples: ["Dog walking", "Pet sitting", "At-home pet visits"],
    subservices: ["Dog walking", "Pet sitting", "Feeding visits", "Grooming support", "Vet visit escort", "Playtime check-ins"],
  },
];

export const steps = [
  ["Discover", "Explore services that fit your needs."],
  ["Connect", "Find the people behind those services."],
  ["Choose", "Understand your options and move forward."],
  ["Get Support", "Stay connected throughout the experience."],
];

export const faqs = [
  ["General", "What is Bthere?", "Bthere is a multi-service platform designed to bring people, services, and service providers together."],
  ["General", "Is Bthere only for care services?", "No. The ecosystem includes care, home services, wellness, education, professional services, transportation, and lifestyle."],
  ["Customers", "Can I book a service on this website?", "This website introduces Bthere. Marketplace bookings, payments, and accounts are handled separately."],
  ["Providers", "How can I join as a provider?", "Use the provider page or contact form to express interest while onboarding details are finalized."],
  ["Privacy", "Does this site use tracking cookies?", "No analytics or advertising tracking is configured in this project."],
];

export const footerGroups = [
  { title: "Bthere", links: [
    { label: "About", to: "/" },
    { label: "How it works", to: "/#how" },
    { label: "Safety", to: "/#trust" },
    { label: "Help", to: "/contact" },
  ] },
  { title: "Customers", links: [
    { label: "Explore services", to: "/services" },
    { label: "Why Bthere", to: "/#why-bthere" },
    { label: "Download app", to: "/#download" },
  ] },
  { title: "Providers", links: [
    { label: "Join Bthere", to: "/join" },
    { label: "Provider guide", to: "/join" },
    { label: "Community", to: "/join" },
  ] },
];

export const privacyPolicyLastUpdated = "10 November 2026";

export const privacyPolicySections = [
  {
    "title": "About this Policy",
    "paragraphs": [
      "Applies to: Bthere Customer App, Provider App, website, service bookings, payments and support channels",
      "Bthere and its affiliated entities, where applicable, collectively referred to as “Bthere,” “we,” “our,” or “us,” is a service marketplace connecting customers with independent individuals and businesses offering services in Sri Lanka. This Privacy Policy explains what personal information we process, why we use it, who may receive it, how we seek to protect it and how to contact us about your privacy."
    ]
  },
  {
    "title": "Our privacy commitments",
    "paragraphs": [
      "• Collect only what is relevant. We seek to limit personal information to what is needed for accounts, requested services, verification, safety, transactions and legal obligations.",
      "• Keep verification records private. NIC images, police reports, licences and similar supporting documents are not part of a public provider profile.",
      "• Protect care-related details. Patient names, hospital or home locations, contact information and private care instructions are confidential booking information.",
      "• Limit information in Open Requests. A provider should receive only the details needed to assess a request before a booking is confirmed.",
      "• Respect choices and permissions. Device location permissions, marketing preferences and privacy requests are handled separately from basic account registration."
    ]
  },
  {
    "title": "1. Who operates Bthere and who this Policy covers",
    "paragraphs": [
      "Pentarix (Pvt) Ltd, the company operating Bthere, is responsible for determining the purposes and means of the personal information it processes as part of Bthere. Independent service providers may separately be responsible for information they process for their own legitimate business purposes.",
      "This Policy applies to customers, individual providers, personnel of provider businesses, website visitors and people contacting support. It also explains how information about patients, passengers, children, emergency contacts, pet owners and other people may be handled when another user arranges a service for them.",
      "Reading this Policy is not the same as giving consent. Where consent is legally required for a particular activity, we will seek it separately and explain the relevant choice."
    ]
  },
  {
    "title": "2. Information we may collect",
    "paragraphs": [
      "Information depends on the account, feature and service used. We may collect:",
      "• Account and profile details: name, mobile number, email address where provided, account and login identifiers, profile photograph, preferred language, address or service area, and account settings.",
      "• Booking and service details: requested service, date, time, duration, selected provider, addresses or map pins, pickup/drop-off locations, requirements, messages, booking status, ratings, reviews, cancellations and complaint evidence.",
      "• Provider and business details: service categories, experience, availability, work samples, business or parking details, licences, qualifications, insurance and relevant property or vehicle information.",
      "• Identity and eligibility documents: NIC or other identification records, photographs/selfies, driving licences, police clearance reports, Grama Niladhari certificates, business registration and other documents required for a particular service, where applicable.",
      "• Payments and transaction records: amount, payment method type, payment status, transaction reference, fees, commissions, deposits, refunds, penalties, settlements and provider payouts. Card credentials may be collected directly by a payment provider.",
      "• Communications and support information: messages, support requests, notifications, feedback, complaints and records supplied for investigations or dispute resolution.",
      "• Device and usage information: IP address, device and app version, operating system, security events, crash reports and feature-use information obtained through technologies actually used by the platform.",
      "• Location information: manually entered locations, general search areas, addresses, map pins, route information and precise device location when used with appropriate permissions.",
      "We may receive related information from other users, payment partners, verification services, authentication services and other sources where lawful. We do not ask users to submit unrelated sensitive information.",
      "Some details are necessary to provide a service. If required contact, location, verification or payment information is not provided, an account may not be approved or a booking may not be completed. Optional fields will be identified when collected."
    ]
  },
  {
    "title": "3. Information for each Bthere service category",
    "paragraphs": [
      "The categories below describe information that may be needed when the relevant service or feature is available and selected. The app may show shorter, specific notices when requesting information for an individual booking."
    ]
  },
  {
    "title": "3.1 Patient Care – non-medical assistance only",
    "paragraphs": [
      "Bthere Patient Care is intended for non-medical support, such as patient companionship, assistance with permitted daily activities and mobility support in hospitals or homes. Bthere does not offer clinical nursing, diagnosis, medical treatment, medication administration, emergency ambulance services or other medical procedures through this category.",
      "Hospital Care and Home Care bookings may involve the patient's name and age, hospital name, ward/bed number, home address, contact or emergency contact numbers, preferred caregiver gender or language, dates, working hours and special instructions. Some instructions may incidentally reveal information about a person's health or disability even though the service is non-medical.",
      "• We use these details to organize and fulfil the requested non-medical service, coordinate the provider, respond to safety concerns and handle legitimate disputes.",
      "• Do not upload diagnoses, medical reports or other medical records unless a specific, necessary and lawful process clearly requests them.",
      "• Where a booking is made for another person, the person placing it must have appropriate authority to provide the information. Additional legal safeguards may apply to children or sensitive personal data.",
      "• Patient names, sensitive instructions, hospital/bed information and home addresses should be shared only with the selected provider and authorized personnel who need them for fulfilment."
    ]
  },
  {
    "title": "3.2 Ride and Transport",
    "paragraphs": [
      "Transport bookings, including assisted Care Ride, airport transport, vehicle or goods transport and relevant rental/driver services, may require passenger or customer names, phone numbers, pickup and destination locations, planned route, booking time, vehicle requirements, special instructions and emergency contacts. Drivers and transport providers may provide vehicle details, photographs, driving credentials and insurance documents.",
      "We use this information for matching, routing, coordination, pricing, payment, safety and dispute resolution. Care Ride means assisted transportation, not an ambulance or medical transport service. If real-time tracking or live sharing is enabled, the app should explain when tracking starts and stops and who can view it."
    ]
  },
  {
    "title": "3.3 Day-to-Day Services",
    "paragraphs": [
      "For household assistance, labour or other day-to-day services, Bthere may process service descriptions, dates, customer contact details, work-site addresses, access instructions, task photographs and relevant provider qualifications. We restrict disclosure of exact home addresses and private-property images to what is necessary for the agreed service."
    ]
  },
  {
    "title": "3.4 Tourism Services",
    "paragraphs": [
      "For tourism-related requests such as transport, vehicle rental, accommodation coordination or trip support, we may process requested destinations, travel dates, itineraries, booking contacts, accommodation details and service preferences. Where lawful and necessary, a travel partner may request identification or guest information directly. We aim to disclose only the details needed by the provider handling the relevant reservation."
    ]
  },
  {
    "title": "3.5 Parking",
    "paragraphs": [
      "Parking services may use vehicle type and registration number, requested parking location, start and end times, duration, reservation status, payment details and incident or overstay information.",
      "Parking providers may give property or business details, evidence of authority to offer spaces, location photographs, capacity and availability information.",
      "Bthere may use location, vehicle type and duration to apply Admin-managed parking prices, and may process related extension, overstay, rebooking, compensation or dispute records. A parking location appearing on a map does not by itself guarantee a bookable space; reservation confirmation depends on the applicable provider arrangement and availability process."
    ]
  },
  {
    "title": "3.6 Photography",
    "paragraphs": [
      "Photography bookings may involve customer details, event venue, schedule, selected package, reference photographs and communications. If photographs or videos are uploaded, stored, delivered, reviewed or shared through Bthere, the platform may process images of identifiable individuals, including children.",
      "• Images submitted privately for a booking are not automatically authorized for public advertising or a provider portfolio.",
      "• Publication, promotional reuse and use of images of children require appropriate permissions and safeguards under applicable law.",
      "• Independent photographers may have separate obligations concerning photographs they create and hold outside Bthere. Copyright and image-use permissions should also be addressed in the applicable photography agreement."
    ]
  },
  {
    "title": "3.7 Pet Services",
    "paragraphs": [
      "Pet-related bookings may involve the owner's name, contact information, location, pet type, service timing, care instructions, emergency contacts and relevant veterinary contact details. We use these details for service coordination, safety, support and legitimate disputes, and protect the owner's address and third-party contact information."
    ]
  },
  {
    "title": "3.8 Equipment Renting",
    "paragraphs": [
      "Equipment bookings may involve renter identity and contact information, collection or delivery location, rental dates, item type, deposit or payment information, equipment-condition photographs, return records, damage reports and related dispute evidence. This information is used for booking administration, identity or eligibility checks where appropriate, deposits, returns, claims and customer support."
    ]
  },
  {
    "title": "4. Why we use information and legal grounds",
    "paragraphs": [
      "Bthere processes relevant information to:",
      "• Establish and secure accounts; authenticate users and prevent unauthorized access.",
      "• Verify providers and their eligibility to offer the selected services.",
      "• Present provider listings, match requests, manage availability and fulfil bookings.",
      "• Communicate between customers, providers and support teams.",
      "• Calculate prices, collect or facilitate payments, administer commissions, refunds, deposits and payouts.",
      "• Respond to safety concerns, investigate complaints and prevent fraud or platform misuse.",
      "• Maintain, troubleshoot and improve app performance and service reliability.",
      "• Meet applicable legal, tax, accounting, regulatory and recordkeeping obligations.",
      "• Send marketing messages where legally permitted and subject to appropriate choices.",
      "The appropriate basis depends on the processing: it may include steps requested before entering a contract, performance of a contract, compliance with a legal obligation, a legitimate interest where permitted and appropriately balanced, consent where necessary, or another ground available under applicable law. Sensitive categories of personal data, including information that reveals health status or relates to children, require additional legal conditions and safeguards. Consent to general terms or acknowledgment of this Policy is not a substitute for a lawful basis."
    ]
  },
  {
    "title": "5. What providers see before and after a booking",
    "paragraphs": [
      "Open Request does not mean that every provider can see all customer information.",
      "Bthere seeks to limit access according to the booking stage:",
      "• Before acceptance: Eligible providers may receive the requested service, approximate area, schedule and non-sensitive requirements sufficient to decide whether to respond.",
      "• After confirmation: The selected provider may receive necessary contact details, exact location, route or entry instructions and relevant service-specific information.",
      "• During service: The provider and customer may use booking information only as needed for the agreed activity, safety and coordination.",
      "• After completion: Access to unnecessary booking-only information should be restricted; relevant transaction or dispute records may remain for justified purposes.",
      "Providers must not use booking information for unrelated marketing, harassment, resale, identity misuse or unauthorized contact. Public provider profiles may display approved names, photographs, services, general locations, verification status and reviews, but not private verification documents."
    ]
  },
  {
    "title": "6. Provider identity checks and confidential documents",
    "paragraphs": [
      "Based on the services offered, Bthere may request and review identity documents, selfies, police reports, driving licences, vehicle registration or insurance, GN certificates, business registration or property-use authorizations. These are used for identity and eligibility review, fraud prevention, user safety and relevant legal compliance.",
      "NIC images, police reports, full identification numbers, driving-licence images, private verification files and banking credentials must not be published on customer-facing profiles.",
      "They are intended for access only by authorized verification staff and necessary service partners, subject to appropriate restrictions.",
      "A displayed verification status indicates that a defined verification step was completed; it is not a guarantee of a provider's future conduct, professional skill or complete safety. Bthere may request updated evidence where documents expire or information changes."
    ]
  },
  {
    "title": "7. Location data, maps and device permissions",
    "paragraphs": [
      "Bthere may use approximate location, an address you provide, a map pin or precise device location to find relevant services and fulfil a booking. Device location access is controlled through the applicable operating-system permissions.",
      "• Nearby discovery: A general area may be sufficient for initial results; you may be able to enter a location manually where supported.",
      "• Confirmed bookings: The provider may need an exact address, pickup point or service location.",
      "• Trips and delivery: Route or live location may be processed where the feature is available and needed for active service coordination or safety.",
      "• Parking and venue-based bookings: A selected parking or event location may be used without needing continuous customer tracking.",
      "If location permission is disabled, some features may be unavailable or less accurate. Granting device permission does not by itself replace any additional lawful basis or notice that may be necessary for a particular use. We do not intend to retain detailed live location histories longer than justified by the service or lawful needs."
    ]
  },
  {
    "title": "8. Payments, deposits, refunds and payouts",
    "paragraphs": [
      "Bthere may work with payment gateways, banks or financial partners for payments, digital wallet functionality, provider payouts, refunds or deposits, where supported. Transaction records may include amount, currency, booking reference, masked payment information, service fee, commission, deposit, penalty, refund or payout status.",
      "Complete card details or security codes may be handled directly by a payment processor rather than Bthere. Do not send card security codes, banking passwords or complete card numbers in chats or support messages. We use payment records for service administration, reconciliation, fraud prevention, complaints, accounting and legal compliance.",
      "The rules governing charges, cancellations, parking penalties, rental damage, deposits and compensation belong in the applicable Terms, Service Rules and Refund Policy. This Privacy Policy explains the use of personal data connected with those events."
    ]
  },
  {
    "title": "9. Messages, calls, notifications, reviews and uploaded content",
    "paragraphs": [
      "We may process support tickets, messages, booking-related notifications, user reviews and files supplied to investigate complaints. Public reviews and provider portfolio content may be visible to others; private identity files, addresses and care instructions should not be posted publicly.",
      "Where a feature involves recording, transcribing or monitoring calls or communications, Bthere will provide appropriate notice and comply with the applicable legal requirements before that processing is introduced or used. Users should avoid sharing unrelated sensitive data in chat or reviews."
    ]
  },
  {
    "title": "10. Who may receive personal information",
    "paragraphs": [
      "Personal information may be disclosed only for relevant purposes to:",
      "• Other booking participants: an eligible provider or customer, with information limited by role, service and booking stage.",
      "• Payment and settlement partners: payment gateways, banks and payout providers.",
      "• Operational suppliers: cloud hosting, authentication, verification, maps, communications, analytics, security and customer-support vendors, as necessary for their function.",
      "• Professional advisers or insurers: where genuinely necessary to manage lawful claims, disputes or obligations.",
      "• Public authorities or courts: where legally required or permitted.",
      "• A business successor: where information is transferred in a legitimate restructuring or acquisition with appropriate safeguards.",
      "Some service providers are independent businesses. If they independently determine how to use personal information after a service, they may have separate privacy obligations. Bthere does not authorize them to use customer records for unrelated purposes. We do not sell private identity documents or confidential patient-care details to advertising or data-broker businesses."
    ]
  },
  {
    "title": "11. Third-party services and processing outside Sri Lanka",
    "paragraphs": [
      "Bthere may use third-party services such as mapping tools, payment gateways, cloud hosting, messaging, verification and analytics. Their processing activities may sometimes be governed by their own privacy notices when they act independently.",
      "Depending on the infrastructure and partners used, personal data may be stored or accessed outside Sri Lanka. Where this happens, Bthere will assess applicable Sri Lankan cross-border data-processing requirements and use permitted contractual, technical or other safeguards. You may contact us for information about material recipient categories and relevant overseas processing, subject to applicable law and legitimate confidentiality limitations."
    ]
  },
  {
    "title": "12. Cookies, analytics and matching",
    "paragraphs": [
      "When implemented, cookies, mobile software development kits, crash reporting and analytics may help maintain sessions, detect abuse, troubleshoot errors and understand the performance of the service. Any non-essential tracking or advertising technology will be subject to the disclosures and choices required by applicable law.",
      "Search and matching may take account of location, service requirements, availability and provider eligibility. Where automated processing creates a decision with significant legal or comparable effects, Bthere will assess whether specific legal disclosures, safeguards or review mechanisms are required."
    ]
  },
  {
    "title": "13. Security and confidentiality",
    "paragraphs": [
      "We seek to apply security measures appropriate to the information and risks involved. These may include secure authentication, restricted staff permissions, controlled access to documents, encryption where appropriate, monitoring, secure software development and security-incident procedures.",
      "Sensitive non-medical care instructions, children's information, identity documents and payment records require more restricted access than public service descriptions. No online platform can guarantee complete security. Users should protect devices and credentials and promptly notify support of suspected misuse."
    ]
  },
  {
    "title": "14. Retention and deletion",
    "paragraphs": [
      "We keep information for no longer than reasonably necessary for the purpose for which it is used, subject to applicable legal retention rules, payment records, safety investigations, audits, disputes and legitimate claims. The criteria vary by data type:",
      "• Accounts and profiles: while needed for an account and justified follow-up after closure.",
      "• Verification documents: for verification, continuing eligibility and lawful retention needs; unnecessary copies should be securely removed or de-identified.",
      "• Care-related booking details: only for necessary service coordination, safety follow-up and justified disputes, with stricter access where sensitive.",
      "• Bookings and financial records: for transaction administration, accounting, refunds and legal obligations.",
      "• Location and technical logs: only for justified operational, safety, troubleshooting or security purposes; not indefinitely by default.",
      "• Messages, photographs and complaint evidence: according to the relevant service, content purpose and applicable dispute or record keeping needs.",
      "Where appropriate, information is deleted or de-identified after it is no longer needed. A deletion request may not remove records that must lawfully be retained or are required for a legitimate ongoing claim."
    ]
  },
  {
    "title": "15. Privacy requests and your choices",
    "paragraphs": [
      "You can contact Bthere to ask about information associated with your account, correct inaccurate information, request account closure or deletion, change optional marketing preferences, or report a privacy concern. We may verify the identity of the requester before taking action and explain any lawful limitations on the request.",
      "Where processing relies on consent, you may ask how to withdraw that consent. Withdrawal does not invalidate earlier lawful processing and may not prevent processing supported by another lawful ground. You can manage device permissions through your phone settings.",
      "Sri Lanka's Personal Data Protection Act is being brought into operation in stages.",
      "Certain statutory data-subject rights and remedies may not yet be in force on the date of this version; Bthere will respond to requests in line with the laws currently in force and may offer reasonable privacy assistance voluntarily. Applicable rights and procedures will be updated as the law develops."
    ]
  },
  {
    "title": "16. Children and bookings made for other people",
    "paragraphs": [
      "Accounts must be created by persons eligible to use the platform under the Terms of Service and applicable law. Where a booking involves a child or a person needing assistance, an authorized parent, guardian or representative should arrange it and provide the necessary permissions.",
      "Users providing a patient's, passenger's, emergency contact's or another person's information must have the appropriate authority or other lawful grounds to do so. Bthere will take additional precautions where the data concerns children or is otherwise sensitive. If you believe a child's information was supplied improperly, please contact us."
    ]
  },
  {
    "title": "17. Marketing and service communications",
    "paragraphs": [
      "Bthere may send necessary messages about accounts, bookings, payments, security, requests and policy changes. Promotional messages are separate; they are sent only where permitted and subject to relevant marketing choices or consent requirements. You may opt out through available unsubscribe features or by contacting us.",
      "We do not use confidential care instructions or private provider verification documents to build advertising audiences. Declining marketing does not prevent essential service or security communications."
    ]
  },
  {
    "title": "18. Safety, fraud and complaints",
    "paragraphs": [
      "We may process relevant booking, account and transaction records to investigate fraud, harassment, impersonation, fake provider credentials, unsafe behaviour, security incidents, damaged rented equipment, parking disputes, refunds or other policy violations. We may restrict an account, request further verification or share limited information with appropriate parties when necessary and lawful.",
      "Users may contact support to report inaccurate information, contest a decision or raise a complaint. We will assess such reports proportionately and keep confidential evidence restricted to those with a valid reason to access it."
    ]
  },
  {
    "title": "19. Changes to this Policy",
    "paragraphs": [
      "We may update this Policy to reflect new services, changes in information processing, security practices or applicable law. The latest version and its update date will be available through Bthere. Where required, we will give additional notice and obtain new consent if a new activity legally requires it."
    ]
  },
  {
    "title": "20. Contact and privacy concerns",
    "paragraphs": [
      "For questions about this Policy, correction or deletion requests, or concerns about how your information is used, contact:",
      "Bthere privacy: info@pentarixlabs.com",
      "General support: info@pentarixlabs.com",
      "Responsible legal entity: Pentarix (Pvt) Ltd",
      "Registered address: 44/31, South Sri Sumangala road, Kalutara North, Kalutara, Sri Lanka.",
      "You may also seek information about Sri Lanka's Data Protection Authority at https://www.dpa.gov.lk/ Availability of any formal statutory complaint or remedy procedure depends on the provisions of law in force at the relevant time."
    ]
  }
];

export const termsAndConditionsSections = [
  {
    title: "Acceptance of These Terms",
    paragraphs: [
      `These Terms and Conditions (“Terms”) govern your access to and use of the Bthere platform, including the Bthere mobile application, website, software, communication features, payment functionality, service-provider features, customer features, and any other services made available by or through Bthere. In these Terms, “Bthere,” “we,” “our,” or “us” refers to Bthere and, where applicable, the legal entity that owns and operates the Bthere platform.`,
      `Bthere operates under the slogan “When it matters” and provides a digital marketplace that enables customers seeking services to discover, communicate with, book, and engage individuals or businesses offering those services.`,
      `By accessing or using Bthere, creating an account, requesting a service, offering a service, communicating with another user, making or receiving a payment, or otherwise using any feature of the platform, you agree to be legally bound by these Terms together with our Privacy Policy and any additional policies or rules that may apply to particular features of the platform.`,
      `If you use Bthere on behalf of a company, business, organization, or another person, you represent that you have the authority to accept these Terms on their behalf.`,
      `If you do not agree with these Terms, you must not access or use Bthere.`,
    ],
  },
  {
    title: "The Bthere Platform",
    paragraphs: [
      `Bthere is an online and mobile marketplace designed to help customers connect with independent service providers.`,
      `Bthere itself does not normally perform the services advertised, requested, booked, or delivered through the platform. Unless expressly stated otherwise for a specific Bthere-operated service, the agreement for the actual service is entered into directly between the customer and the relevant service provider.`,
      `Bthere may provide technology that assists users with searching, matching, messaging, scheduling, booking, verification, reviews, payments, and other activities associated with obtaining or providing services. The availability of those tools does not mean that Bthere becomes the employer, employee, agent, contractor, partner, joint venturer, or representative of either party to the service arrangement.`,
      `Service providers operate independently and are responsible for determining the services they offer, their availability, methods of work, pricing where applicable, personnel, equipment, and the manner in which their services are performed, subject to applicable law and the requirements of the Bthere platform.`,
      `The use of Bthere by a service provider does not guarantee that the service provider will receive customer requests, bookings, work, income, or any particular level of business.`,
      `Similarly, the availability of a service provider on Bthere does not guarantee that the provider will accept a particular customer request or that the requested service will be completed.`,
    ],
  },
  {
    title: "Account Registration",
    paragraphs: [
      `Certain parts of Bthere may be available without registration, while other features require a registered account.`,
      `When creating an account, you agree to provide information that is accurate, current, complete, and not misleading. You are responsible for keeping your account details updated whenever they change.`,
      `You are responsible for maintaining the confidentiality and security of your password, verification codes, login credentials, and any device through which your account can be accessed. You are responsible for activity carried out using your account unless applicable law provides otherwise.`,
      `You must notify Bthere as soon as reasonably possible if you believe your account has been accessed without authorization, your login credentials have been compromised, or suspicious activity has occurred.`,
      `You must not sell, transfer, rent, share, or otherwise provide your Bthere account to another person without authorization from Bthere.`,
      `Where third-party login services such as Google, Apple, or another identity provider are offered, your use of those services may also be governed by the relevant provider’s terms and privacy practices.`,
    ],
  },
  {
    title: "User Eligibility",
    paragraphs: [
      `You may use Bthere only if you are legally capable of entering into a binding agreement under the laws that apply to you.`,
      `Unless Bthere expressly introduces a feature intended for younger persons and provides appropriate safeguards, users must be at least eighteen years of age to independently register for and use the platform.`,
      `By creating an account, you represent that you meet the applicable age and legal-capacity requirements.`,
    ],
  },
  {
    title: "Customers",
    paragraphs: [
      `A customer is a person who uses Bthere to search for, request, schedule, book, pay for, or receive services from a service provider.`,
      `Customers are responsible for providing accurate information concerning the service they require. This may include the type of service, location, preferred date and time, relevant conditions, instructions, photographs, documents, access requirements, and other information that may reasonably affect the provider’s ability to perform the requested service.`,
      `Customers must not intentionally provide false or misleading information to a service provider.`,
      `Before confirming a service, customers are responsible for reviewing available information relating to the service provider, the requested work, pricing, timing, qualifications where relevant, payment arrangements, and any other terms agreed between the customer and provider.`,
      `A customer must provide reasonable access and cooperation required for the agreed service to be performed safely and lawfully.`,
      `Customers remain responsible for paying valid amounts due for services received in accordance with the applicable booking, quotation, payment terms, cancellation rules, and refund rules.`,
    ],
  },
  {
    title: "Service Providers",
    paragraphs: [
      `A service provider is a person or business that registers with Bthere to advertise, offer, arrange, or provide services to customers.`,
      `Service providers must provide truthful and accurate information concerning their identity, experience, qualifications, service categories, prices, availability, work history, business information, and other information submitted through Bthere.`,
      `Where a licence, certification, professional registration, insurance policy, permit, approval, training requirement, or other legal qualification is required for a particular service, the service provider is solely responsible for ensuring that the requirement has been satisfied and remains valid throughout the period in which the relevant service is offered.`,
      `Service providers are responsible for performing services in a professional, lawful, safe, competent, and reasonably careful manner and in accordance with the agreement entered into with the customer.`,
      `A service provider must not falsely claim qualifications, licences, experience, verification status, certifications, insurance coverage, professional memberships, completed work, or other credentials.`,
      `Service providers must comply with applicable laws and regulations relating to the services they provide, including requirements concerning consumer protection, privacy, health and safety, taxation, licensing, employment, advertising, and professional conduct where applicable.`,
    ],
  },
  {
    title: "Service Provider Verification",
    paragraphs: [
      `Bthere may request information or documents from service providers for identity, qualification, safety, trust, or verification purposes.`,
      `Depending on the service category and Bthere’s verification procedures, such documents may include a National Identity Card, passport, driving licence, police clearance certificate, Grama Niladhari certificate, business registration, professional certificate, licence, insurance record, employment information, or other appropriate verification documents.`,
      `Bthere may verify such information internally or through third-party verification services where appropriate and permitted by law.`,
      `A service provider authorizes Bthere to use submitted information for legitimate verification, security, fraud-prevention, compliance, and platform-safety purposes in accordance with the Bthere Privacy Policy.`,
      `A verification indicator displayed on Bthere means only that a particular verification procedure was completed based on the information available at that time. It does not constitute an absolute guarantee that a provider is suitable for every customer, that every statement made by the provider is true, or that no future issue will arise.`,
      `Bthere may request updated documents or additional information at any time and may restrict or suspend a service-provider account when required information is missing, expired, misleading, inconsistent, or cannot reasonably be verified.`,
    ],
  },
  {
    title: "Prohibited Services and Activities",
    paragraphs: [
      `Bthere does not support, permit, facilitate, promote, advertise, arrange, or process any service, transaction, or activity involving the illegal manufacture, cultivation, possession, distribution, transportation, sale, purchase, supply, delivery, or promotion of narcotics, controlled substances, illegal drugs, or other prohibited substances.`,
      `Users must not use Bthere to request, offer, advertise, arrange, deliver, transport, distribute, sell, purchase, or otherwise facilitate any illegal drug-related service or activity. This prohibition also applies to services that are intended to support or enable unlawful drug activity, including delivery, transportation, storage, distribution, sourcing, brokerage, or other related work.`,
      `Bthere may remove listings, restrict access, suspend or terminate accounts, cancel transactions, withhold or reverse platform activity where permitted by law, and report suspected illegal activity to relevant authorities where reasonably necessary or legally required.`,
      `Where a substance, medication, or related service is lawful only when provided by a licensed or authorized professional, users must comply with all applicable laws, licensing requirements, prescription requirements, and regulatory obligations. Bthere reserves the right to prohibit such services entirely where the platform does not support them.`,
    ],
  },
  {
    title: "Bookings and Service Agreements",
    paragraphs: [
      `When a customer and service provider agree to proceed with a service, the resulting agreement for that service is generally between those two users.`,
      `The specific agreement may include the scope of work, date and time, location, price, materials, payment method, duration, cancellation terms, and any other conditions accepted by the parties.`,
      `Users should ensure that they clearly understand the agreed service before work begins.`,
      `Bthere may provide tools that help users create or manage a booking, but Bthere is not automatically a party to the underlying service contract merely because the booking was arranged through the platform.`,
      `Any changes to the agreed service should be clearly communicated between the customer and service provider.`,
    ],
  },
  {
    title: "Pricing, Fees and Charges",
    paragraphs: [
      `Service prices displayed through Bthere may be determined by the service provider, calculated through platform functionality, agreed directly between the parties, or established through another method made available by Bthere.`,
      `Prices displayed before confirmation may be estimates unless expressly stated to be final.`,
      `Additional costs may arise where the scope of work changes, additional materials are required, unexpected conditions are discovered, additional time is required, or the customer requests extra work. Such additional charges should be communicated and agreed upon before being incurred wherever reasonably possible.`,
      `Bthere may charge customers or service providers platform fees, booking fees, transaction fees, subscription fees, commissions, service charges, verification fees, promotional fees, or other charges where clearly disclosed.`,
      `Applicable fees may change from time to time. Material changes affecting existing users will be communicated as required by applicable law.`,
    ],
  },
  {
    title: "Payments",
    paragraphs: [
      `Bthere may facilitate payments between customers and service providers through one or more third-party payment processors.`,
      `When payments are processed through Bthere, you authorize Bthere and the relevant payment provider to process the information and transactions necessary to complete the payment, refund, payout, fee deduction, or related financial activity.`,
      `Payment processing may be subject to separate terms and privacy policies imposed by the relevant payment provider.`,
      `Bthere may receive transaction information such as payment amount, transaction reference, payment status, payment method, masked card details, payout information, and refund status.`,
      `Bthere does not become the provider of the underlying service merely because payment for that service is processed through the platform.`,
      `You agree not to use stolen, unauthorized, fraudulent, or otherwise unlawful payment methods.`,
      `Service providers receiving payouts are responsible for providing correct payment or banking information. Bthere is not responsible for delays or losses resulting from incorrect payout information supplied by a service provider, except to the extent responsibility cannot legally be excluded.`,
    ],
  },
  {
    title: "Refunds, Cancellations and Payment Disputes",
    paragraphs: [
      `Cancellation and refund eligibility may depend on the type of service, booking status, timing of cancellation, work already performed, materials purchased, applicable service-provider terms, and any Bthere cancellation or refund policy in effect at the time.`,
      `A customer is not automatically entitled to a full refund merely because the customer changes their mind after a provider has accepted or commenced the service.`,
      `Similarly, a service provider should not retain payment for services that were not performed where a refund is required by the agreed terms or applicable law.`,
      `Where Bthere facilitates payments, Bthere may assist in administering refunds or payment disputes. However, Bthere reserves the right to request supporting information from both parties before determining what action can be taken through the platform.`,
      `Nothing in these Terms is intended to remove consumer rights that cannot legally be excluded under applicable law.`,
    ],
  },
  {
    title: "Communication between Users",
    paragraphs: [
      `Bthere may provide communication functionality that allows customers and service providers to communicate before, during, and after a booking.`,
      `Users must use such communication features lawfully and respectfully.`,
      `You must not use Bthere communications to threaten, harass, intimidate, exploit, discriminate against, deceive, or abuse another person.`,
      `You must not intentionally transmit viruses, malicious files, illegal content, spam, fraudulent requests, or other harmful material through Bthere.`,
      `Depending on the functionality implemented by Bthere, communications may be stored, processed, reviewed, or monitored where permitted by law for customer support, safety, dispute resolution, fraud prevention, platform enforcement, or other purposes described in the Privacy Policy.`,
    ],
  },
  {
    title: "User Content",
    paragraphs: [
      `Bthere may allow users to upload, submit, display, publish, or transmit content including photographs, profile information, service descriptions, work samples, messages, reviews, ratings, documents, videos, comments, and other materials.`,
      `You remain responsible for content that you submit through Bthere.`,
      `You must have the necessary rights, permissions, and legal authority to submit such content.`,
      `You must not submit content that infringes another person’s copyright, trademark, privacy rights, confidential information, intellectual property rights, or other legal rights.`,
      `By submitting content intended for display through Bthere, you grant Bthere a non-exclusive, worldwide, royalty-free licence to host, store, reproduce, display, format, distribute, and otherwise use that content to operate, provide, improve, and promote the Bthere platform, subject to applicable law and the Bthere Privacy Policy.`,
      `This licence does not transfer ownership of your content to Bthere.`,
      `Bthere may remove, restrict, or disable content where we reasonably believe it violates these Terms, applicable law, platform policies, intellectual-property rights, user safety, or the legitimate interests of Bthere or its users.`,
    ],
  },
  {
    title: "Reviews and Ratings",
    paragraphs: [
      `Bthere may allow customers to submit ratings and reviews concerning service providers and may provide other forms of user feedback.`,
      `Reviews must reflect genuine experiences and must not contain knowingly false, misleading, defamatory, discriminatory, threatening, abusive, unlawful, or unrelated content.`,
      `Users must not offer, request, give, or accept money, benefits, discounts, or other compensation in exchange for false, manipulated, or misleading reviews.`,
      `Service providers must not create fake customer accounts or otherwise manipulate their own rating or review history.`,
      `Bthere may investigate and remove reviews that violate these Terms or the platform’s review standards.`,
      `The fact that a service provider has a high rating does not constitute a guarantee by Bthere regarding future performance.`,
    ],
  },
  {
    title: "Prohibited Use",
    paragraphs: [
      `You must not use Bthere for unlawful, fraudulent, abusive, deceptive, harmful, or unauthorized purposes.`,
      `You must not impersonate another person, use an account without authorization, provide false identity information, misrepresent your qualifications, create deceptive service listings, falsify documents, manipulate payments, create fraudulent bookings, or intentionally mislead other users.`,
      `You must not interfere with the operation or security of Bthere, attempt to gain unauthorized access to accounts or systems, introduce malicious software, exploit technical vulnerabilities, bypass security measures, reverse engineer protected platform functionality where prohibited by law, or use automated tools to scrape or collect platform information without authorization.`,
      `You must not use Bthere to send spam, mass unsolicited communications, unlawful advertising, abusive messages, threats, discriminatory material, sexually exploitative material, illegal content, or content that encourages criminal activity.`,
      `You must not improperly collect, sell, disclose, distribute, or use personal information obtained through Bthere.`,
      `A service provider may not use customer information obtained through a service request for unrelated marketing, unauthorized solicitation, resale, harassment, or other purposes unrelated to the relevant service.`,
      `You must not manipulate reviews, ratings, promotions, discounts, payment mechanisms, refunds, or other platform functionality.`,
    ],
  },
  {
    title: "User Data and Privacy",
    paragraphs: [
      `Information collected through Bthere is handled in accordance with our Privacy Policy.`,
      `Service providers who receive customer information through the platform must protect that information and use it only for purposes reasonably related to responding to or completing the relevant service request.`,
      `Service providers must not sell customer personal information or disclose it to unrelated third parties unless they have a lawful basis to do so.`,
      `Where applicable, users must comply with privacy and data-protection laws when collecting or processing information about other Bthere users.`,
    ],
  },
  {
    title: "Safety and User Interactions",
    paragraphs: [
      `Users are responsible for exercising reasonable care when communicating with, meeting, hiring, or providing services to another person.`,
      `Although Bthere may introduce verification systems, reviews, reporting tools, safety processes, or other protective mechanisms, no online platform can guarantee the identity, reliability, conduct, qualifications, intentions, or safety of every user.`,
      `Customers should take reasonable steps to determine whether a service provider is appropriate for the required service.`,
      `Service providers should similarly assess service requests and should not accept work they believe would be unsafe, illegal, fraudulent, or outside their qualifications.`,
      `Where an immediate risk to personal safety exists, users should contact the appropriate emergency or law-enforcement services rather than relying solely on Bthere support.`,
    ],
  },
  {
    title: "No Endorsement or Guarantee",
    paragraphs: [
      `The inclusion of a service provider, profile, rating, review, verification status, badge, search ranking, recommendation, or other information on Bthere does not automatically constitute an endorsement, certification, guarantee, or warranty by Bthere.`,
      `Bthere may undertake processes intended to improve trust and safety, but such processes cannot eliminate all risk and should not replace users’ own reasonable judgment.`,
      `Bthere does not guarantee the availability, suitability, quality, legality, pricing, conduct, reliability, timing, completion, or outcome of services provided by independent service providers.`,
    ],
  },
  {
    title: "Disputes between Users",
    paragraphs: [
      `Disputes may sometimes arise between customers and service providers concerning service quality, payment, cancellation, refunds, damage, timing, conduct, or other matters.`,
      `Users should initially attempt to resolve such disputes directly and reasonably.`,
      `Bthere may provide support, communication tools, complaint procedures, evidence-submission mechanisms, mediation assistance, or other processes intended to help users reach a resolution.`,
      `However, unless required by law or expressly agreed otherwise, Bthere is not obligated to decide or legally resolve disputes between independent users.`,
      `The availability of Bthere support does not prevent either user from exercising legal rights available under applicable law.`,
    ],
  },
  {
    title: "Account Suspension and Termination",
    paragraphs: [
      `Bthere may restrict, suspend, deactivate, or terminate an account where we reasonably believe that the user has violated these Terms, provided false information, engaged in fraud, created safety concerns, abused another user, failed required verification, breached payment obligations, misused platform information, violated applicable law, or created a material risk to users or Bthere.`,
      `Bthere may also temporarily restrict an account while an investigation is conducted.`,
      `Where reasonably possible and appropriate, Bthere may provide notice or request additional information before taking action. Immediate action may nevertheless be taken where reasonably necessary for security, fraud prevention, safety, legal compliance, or protection of users.`,
      `A user may stop using Bthere and may request account closure in accordance with the platform’s available account-management procedures.`,
      `Closing an account does not automatically eliminate obligations, payments, disputes, liabilities, or records that arose before closure.`,
      `Personal information associated with a closed account will be handled according to the Bthere Privacy Policy.`,
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      `The Bthere name, logo, slogan, user-interface design, software, website design, application design, text, graphics, databases, functionality, branding, and other materials created by or for Bthere may be protected by copyright, trademark, and other intellectual-property laws.`,
      `Except for the limited right necessary to use the platform for its intended purpose, you are not granted ownership of Bthere intellectual property.`,
      `You may not copy, reproduce, distribute, sell, license, modify, create unauthorized derivative works from, or commercially exploit Bthere intellectual property without appropriate permission.`,
      `Content owned by third parties remains the property of its respective owners.`,
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      `Bthere may use or provide links to independent third-party services, including payment processors, mapping platforms, authentication providers, hosting providers, analytics systems, communication providers, verification services, and other external services.`,
      `Bthere does not own or control every such third-party service.`,
      `Your interaction with a third-party service may be governed by that third party’s own terms, privacy policy, fees, and practices.`,
      `Bthere is not responsible for independent third-party services except to the extent responsibility cannot lawfully be excluded.`,
    ],
  },
  {
    title: "Platform Availability",
    paragraphs: [
      `Bthere aims to provide a reliable platform but does not guarantee that the platform will be continuously available, uninterrupted, secure, error-free, or free from technical failures.`,
      `Access may occasionally be limited or interrupted due to maintenance, updates, technical problems, network failures, security incidents, third-party service failures, events beyond our reasonable control, or changes to the platform.`,
      `Bthere may add, modify, suspend, replace, or discontinue features where reasonably necessary.`,
    ],
  },
  {
    title: "Disclaimers",
    paragraphs: [
      `Bthere provides the platform on an “as available” and, to the extent permitted by law, “as is” basis.`,
      `To the maximum extent permitted by applicable law, Bthere does not make warranties concerning the conduct of independent users, the suitability of a particular service provider, the quality of independently provided services, the accuracy of all user-submitted information, or the successful completion of every service transaction.`,
      `Nothing in these Terms excludes warranties, consumer guarantees, statutory rights, or obligations that cannot lawfully be excluded.`,
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      `To the maximum extent permitted by applicable law, Bthere will not be responsible for indirect, incidental, special, exemplary, punitive, or consequential losses arising solely from the use of or inability to use the platform, except where such liability cannot legally be limited or excluded.`,
      `Bthere will not ordinarily be responsible for acts or omissions of independent customers or service providers, including poor workmanship, failure to attend, property damage, disagreements concerning the scope of work, personal disputes, unauthorized activity by users, or other conduct that is outside Bthere’s reasonable control.`,
      `Nothing in these Terms excludes or limits liability for fraud, wilful misconduct, or any other liability that applicable law does not permit to be excluded or limited.`,
    ],
  },
  {
    title: "Indemnification",
    paragraphs: [
      `To the extent permitted by applicable law, you agree to be responsible for losses, claims, liabilities, penalties, costs, or reasonable legal expenses suffered by Bthere as a result of your unlawful use of the platform, material breach of these Terms, violation of another person’s rights, fraudulent conduct, or unlawful service activity.`,
      `This provision does not require a user to indemnify Bthere for matters for which Bthere is legally responsible and which cannot lawfully be transferred to the user.`,
    ],
  },
  {
    title: "Governing Law and Dispute Resolution",
    paragraphs: [
      `These Terms and your use of Bthere will be governed by the laws applicable to the legal entity operating Bthere, without excluding any mandatory protections available to consumers under applicable law.`,
      `Before commencing formal proceedings against Bthere, users are encouraged to contact Bthere support and provide sufficient information about the issue so that both parties have a reasonable opportunity to resolve the matter informally.`,
      `If a dispute cannot be resolved informally, it may be referred to the courts, mediation, arbitration, or another dispute-resolution process available under the governing law.`,
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      `Bthere may modify these Terms from time to time to reflect changes in the platform, services, fees, payment systems, legal requirements, business practices, or other relevant circumstances.`,
      `The revised Terms may be published through the Bthere website or application together with an updated “Last Updated” date.`,
      `Where a material change affects users’ rights or obligations, Bthere may provide additional notice through email, an application notification, account message, or another appropriate method.`,
      `Where required by applicable law, material changes will take effect only after the required notice period or user acceptance.`,
      `If you continue using Bthere after revised Terms become effective, your continued use may constitute acceptance of those revised Terms where permitted by law.`,
    ],
  },
  {
    title: "Severability",
    paragraphs: [
      `If any provision of these Terms is found by a court or other competent authority to be invalid, illegal, or unenforceable, that provision will be interpreted or limited to the minimum extent necessary where legally possible, and the remaining provisions will continue in effect.`,
    ],
  },
  {
    title: "No Waiver",
    paragraphs: [
      `If Bthere delays or fails to enforce any provision of these Terms on one occasion, that does not mean Bthere has permanently waived the right to enforce that provision or any other provision in the future.`,
    ],
  },
  {
    title: "Force Majeure",
    paragraphs: [
      `Neither Bthere nor a user will be responsible for a failure or delay in performing an obligation where the failure results from circumstances reasonably beyond that party’s control, except for payment obligations or other obligations that applicable law does not excuse.`,
      `Such circumstances may include natural disasters, floods, fires, earthquakes, epidemics, war, civil disturbance, major telecommunications failures, widespread power outages, government restrictions, or failures of essential third-party infrastructure beyond the reasonable control of the affected party.`,
    ],
  },
  {
    title: "Electronic Communications",
    paragraphs: [
      `By using Bthere and providing electronic contact details, you acknowledge that certain notices, booking information, transaction records, policy updates, verification requests, and other communications may be delivered electronically through the application, website, email, SMS, push notifications, or other supported communication methods.`,
      `Where your consent is legally required for a particular type of communication, Bthere will obtain or manage that consent as required by applicable law.`,
      `You are responsible for maintaining accurate contact information so that important account and service communications can reach you.`,
    ],
  },
  {
    title: "Privacy",
    paragraphs: [
      `Your use of Bthere is also subject to the Bthere Privacy Policy.`,
      `The Privacy Policy explains how Bthere collects, uses, stores, discloses, and protects personal information relating to customers, service providers, payments, location information, communications, verification documents, and use of the platform.`,
      `If you do not agree with Bthere’s handling of information as described in the Privacy Policy, you should not use the platform.`,
    ],
  },
  {
    title: "Contact Information",
    paragraphs: [
      `If you have questions, concerns, complaints, or requests relating to these Terms or your use of Bthere, you may contact Bthere through the support functionality available within the application or website.`,
      `You may also contact us at info@pentarixlabs.com.`,
      `Formal notices may be sent to Pentarix (Pvt) Ltd, 44/31, Sri Sumangala Road South, Kalutara North, Kalutara.`,
    ],
  },
];
