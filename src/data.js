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

export const privacyPolicySections = [
  {
    title: "Purpose and Scope",
    paragraphs: [
      `Bthere and its affiliated entities, where applicable, collectively referred to as “Bthere,” “we,” “our,” or “us,” provide this Privacy Policy to explain how information is collected, used, stored, disclosed, and otherwise processed when individuals access or use the Bthere platform. The Bthere platform includes the Bthere mobile application, website, related digital services, communications, customer support channels, service-provider features, payment functionality, and any other services through which this Privacy Policy is made available.`,
      `Bthere is a service marketplace platform designed to connect customers who require services with individuals or businesses that provide those services. The platform operates under the slogan “When it matters” and is intended to make it easier for customers to find suitable service providers and for service providers to make their services available to customers.`,
      `This Privacy Policy applies to customers, service providers, visitors to the Bthere website or mobile application, and any other person who interacts with Bthere. References to a “User” may include a customer, service provider, or any individual authorized to access an account on behalf of another person or business.`,
      `By accessing or using the Bthere platform, creating an account, requesting or offering a service, communicating through the platform, or making or receiving payments through Bthere, you acknowledge the practices described in this Privacy Policy. If you do not agree with this Privacy Policy, you should not use the Bthere platform.`,
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      `The information we collect depends on how you interact with Bthere, the type of account you create, the services you request or offer, the permissions you grant to the application, and the features that you use. We may collect information directly from you, automatically through your use of the platform, from other users, from service providers that support our operations, from verification providers, payment providers, or from publicly available sources where permitted by law.`,
      `When you create or manage a Bthere account, you may provide information such as your name, email address, mobile number, profile photograph, residential or business address, location, login credentials, communication preferences, and other information needed to create or maintain your account. We may also collect information that you provide when you contact customer support, submit feedback, report a problem, participate in a survey, communicate with another user, or otherwise interact with Bthere.`,
      `The type of information collected may differ depending on whether you use Bthere as a customer or as a service provider.`,
    ],
  },
  {
    title: "Information We Collect from Customers",
    paragraphs: [
      `When you use Bthere as a customer, we may collect information relating to the services you are searching for or requesting. This may include the type of service required, the description of your request, the location where the service is needed, the preferred date or time, photographs, files, notes, preferences, instructions, booking information, service history, ratings, reviews, payment information, and communications with service providers.`,
      `We may also collect information about how you search for services, which providers you view, which providers you communicate with, which services you book, and whether a booking is completed, cancelled, disputed, refunded, or otherwise modified.`,
      `Where location-based services are enabled, we may collect your general location, such as a city, district, neighbourhood, or postal area, and, where you grant permission, your precise location through your device. Location information may be used to show service providers who are available near you, determine whether a provider serves your area, support service requests, improve search results, and enhance other location-based features.`,
      `When you submit a service request, certain information may be made available to relevant service providers so they can determine whether they are able to provide the requested service. Depending on the nature of the request, this may include your name or profile name, the type of service requested, the general or specific service location, preferred date and time, the description of your request, photographs or documents you choose to upload, and other information you intentionally include in the request.`,
      `Bthere does not intend to make sensitive account information, payment credentials, passwords, identification documents, or unrelated personal information publicly available to service providers.`,
    ],
  },
  {
    title: "Information We Collect from Service Providers",
    paragraphs: [
      `If you register as a service provider, we may collect additional information that is necessary to establish, verify, operate, and manage your service-provider account. This information may include your name, contact details, profile photograph, address, business name, service categories, service areas, pricing information, experience, availability, qualifications, licences, certifications, work samples, professional information, and other details relating to the services you offer.`,
      `Depending on the requirements of the platform and the nature of the services being offered, we may also request information or documents to help verify your identity, background, qualifications, or suitability. This may include a national identity document, passport, driving licence, police clearance certificate, local authority or Grama Niladhari certificate, professional registration, employment history, business registration, insurance information, or other similar documentation where relevant.`,
      `Information collected for verification purposes may be reviewed by Bthere personnel or by third-party verification providers acting on our behalf. Such information is intended to be used for verification, fraud prevention, platform safety, regulatory compliance, and related purposes and is not ordinarily displayed publicly.`,
      `Certain information provided by a service provider may be made visible to customers through a public or semi-public provider profile. This may include the provider’s display name, business name, profile photograph, service categories, service description, general service area, pricing information, qualifications, verification status, experience, ratings, reviews, completed-service information, and other information intended to help customers evaluate and select a provider.`,
      `Sensitive information such as identity-document numbers, passwords, full banking information, verification documents, and private account records will not be intentionally displayed as part of a public service-provider profile unless disclosure is required by law or specifically authorized by the user.`,
    ],
  },
  {
    title: "Payment and Transaction Information",
    paragraphs: [
      `Bthere may provide functionality that allows customers to pay for services through the platform and enables service providers to receive payments or payouts. When payments are made through Bthere, we may collect or receive information relating to the transaction, including the payment amount, currency, payment method, payment status, transaction reference, booking or service reference, refund status, payout information, platform fees, transaction date, and other information necessary to process or manage the transaction.`,
      `Bthere may use one or more third-party payment processors, payment gateways, banks, financial-service providers, or similar vendors to process payments, refunds, and payouts. In such cases, certain payment information may be collected directly by the payment provider rather than by Bthere. Bthere may receive only limited payment-related information, such as confirmation that a payment has been successful or unsuccessful, transaction identifiers, payment amounts, masked card information, refund status, payout status, or other transaction records.`,
      `Unless specifically required by the payment architecture and handled in accordance with applicable law and relevant security standards, Bthere does not intend to store complete credit-card numbers, security codes, online-banking passwords, or other highly sensitive payment credentials.`,
      `Where a customer requests a cancellation or refund, Bthere may collect and process information necessary to review, approve, reject, or complete that request. This may include the booking details, reason for cancellation, reason for the refund request, payment status, amount paid, amount requested for refund, service-provider response, supporting evidence, dispute information, communication records, and the final refund decision.`,
      `Refunds may be full, partial, or unavailable depending on the circumstances of the booking, the stage of the service, work already performed, expenses already incurred by the service provider, the reason for cancellation, any applicable cancellation rules, and any other conditions set out in the Bthere Refund Policy.`,
      `Where a refund is approved, the refund may be processed through the original payment method or through another method supported by Bthere or the relevant payment provider. The time required for the refunded amount to appear may depend on the payment provider, bank, card issuer, or other financial institution involved in the transaction.`,
      `Bthere may retain information relating to refunds, cancellations, payment disputes, chargebacks, and reversed transactions for accounting, fraud-prevention, customer-support, dispute-resolution, audit, regulatory, and legal purposes.`,
      `Users should review the Bthere Refund Policy for detailed information regarding refund eligibility, cancellation conditions, non-refundable amounts, partial refunds, refund processing, and dispute procedures.`,
    ],
  },
  {
    title: "Information from Other Sources",
    paragraphs: [
      `We may receive information about users from third parties where permitted by law. This may include information from payment processors, identity-verification providers, service-provider verification partners, analytics providers, cloud-service providers, app stores, social-login providers, business partners, or other services integrated with Bthere.`,
      `If users are allowed to register or sign in using a third-party account, such as a Google, Apple, or social-media account, Bthere may receive certain information associated with that account, subject to the permissions selected by the user and the policies of the relevant third-party provider.`,
      `We may also receive information that assists us in preventing fraud, verifying identity, improving account security, or determining whether a user is eligible to access certain features.`,
    ],
  },
  {
    title: "Information That Is Automatically Collected",
    paragraphs: [
      `When you access or use Bthere, we may automatically collect certain technical and usage information. This may include your IP address, device type, browser type, operating system, application version, unique device identifiers, device language, access time, referring pages, pages or screens viewed, features used, interactions with the platform, crash information, performance information, and other technical data relating to your use of Bthere.`,
      `We may use this information to maintain the platform, improve performance, identify technical problems, understand how users interact with Bthere, develop new features, detect unauthorized activity, prevent fraud, and improve overall user experience.`,
      `If Bthere uses cookies, software development kits, analytics tools, pixels, or similar technologies, those technologies may also collect information about usage, device activity, navigation, and interaction with the platform.`,
    ],
  },
  {
    title: "Location Information",
    paragraphs: [
      `Bthere may collect location information because the platform is designed to connect customers with service providers who operate in relevant geographic areas.`,
      `We may collect general location information, such as city, district, neighbourhood, postal area, or a location derived from an IP address. If the Bthere mobile application requests device-location access and you grant permission, we may also collect precise GPS-based location information.`,
      `Precise location may be used to help identify nearby service providers, determine service availability, support location-based searching, improve service matching, assist with booking and service fulfilment, and support security or fraud-prevention activities.`,
      `Users may be able to control location permissions through their mobile-device settings. If location permissions are disabled, certain Bthere features may not operate correctly or may provide less accurate results.`,
    ],
  },
  {
    title: "Communications between Users",
    paragraphs: [
      `Bthere may provide functionality that allows customers and service providers to communicate with one another. Communication features may include in-app messaging, notifications, telephone communication, email, SMS, or other forms of communication supported by the platform.`,
      `We may store or process communications made through Bthere where necessary to provide the service, support users, investigate complaints, detect fraud, resolve disputes, enforce platform rules, improve safety, or maintain records.`,
      `Where call recording, communication monitoring, or transcription features are introduced in the future, Bthere will provide appropriate notice and will process such information only in accordance with applicable law.`,
      `Users should avoid sending highly sensitive personal information, passwords, financial credentials, or unrelated confidential information through platform messaging features.`,
    ],
  },
  {
    title: "Photos, Documents, Reviews and User Content",
    paragraphs: [
      `Users may upload or submit information through Bthere, including profile photographs, service-request images, provider work samples, verification documents, certificates, reviews, ratings, comments, complaint evidence, and other files or content.`,
      `Information uploaded for public display, such as service-provider profile content, work samples, reviews, and ratings, may be visible to other users of the platform.`,
      `Information submitted for verification, identity checks, complaints, or support purposes is intended to be accessed only by authorized persons, service providers acting on our behalf, or legal authorities where disclosure is required or permitted by law.`,
      `Users are responsible for ensuring that content they upload does not unlawfully disclose personal information relating to another person.`,
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      `We may use the information we collect to provide, maintain, operate, secure, and improve Bthere. This includes using information to create and manage accounts, verify users, match customers with service providers, display relevant service-provider profiles, process service requests, support bookings, facilitate communications, process payments, process payouts, provide customer support, send notifications, respond to inquiries, prevent fraud, investigate complaints, resolve disputes, improve recommendations, conduct analytics, improve platform performance, develop new services, and comply with legal obligations.`,
      `We may also use information to detect suspicious or unauthorized activity, enforce our terms and platform rules, protect customers, service providers, Bthere, and third parties, and investigate conduct that may threaten the safety or security of users or the platform.`,
      `Where permitted by law, we may use account and platform information to communicate with users regarding promotions, updates, new services, product changes, or information that may be relevant to their use of Bthere. Users may be able to opt out of certain marketing communications while continuing to receive transactional, account-related, payment-related, booking-related, or security-related messages.`,
    ],
  },
  {
    title: "How We Disclose Your Information",
    paragraphs: [
      `Bthere may disclose information where necessary to provide the platform and its services. Information may be shared with other users when required to facilitate service requests, bookings, communications, reviews, payments, or service fulfilment.`,
      `For example, customer service-request information may be shared with relevant service providers, and information contained in a service provider’s public profile may be made available to customers.`,
      `We may disclose information to vendors and service providers that perform functions on our behalf, including payment processing, cloud hosting, identity verification, background verification, analytics, messaging, notifications, email delivery, customer support, fraud prevention, security, technical support, and platform infrastructure. These vendors may process information only as necessary to provide the services they perform for Bthere and subject to appropriate contractual or legal obligations.`,
      `We may disclose information when required to comply with legal obligations, court orders, regulatory requirements, law-enforcement requests, or other lawful processes. We may also disclose information where we reasonably believe it is necessary to protect the rights, safety, property, or security of Bthere, its users, service providers, employees, partners, or the public.`,
      `If Bthere is involved in a merger, acquisition, restructuring, financing, sale of assets, or similar business transaction, user information may be transferred or disclosed as part of that transaction, subject to applicable law.`,
    ],
  },
  {
    title: "Service Provider Responsibilities",
    paragraphs: [
      `Service providers who receive customer information through Bthere are expected to use such information only for legitimate purposes connected with the requested or agreed service.`,
      `A service provider should not use customer information for unrelated marketing, unauthorized contact, identity misuse, data resale, harassment, or any unlawful purpose.`,
      `Service providers are responsible for protecting any customer information they obtain outside the Bthere platform and for complying with any privacy or data-protection obligations that apply to their own business activities.`,
    ],
  },
  {
    title: "Fraud, Safety and Platform Integrity",
    paragraphs: [
      `Bthere may process information to identify, investigate, and prevent fraud, misuse, unsafe behaviour, fake accounts, identity misrepresentation, false service listings, payment fraud, stolen payment methods, harassment, suspicious booking activity, false reviews, abuse of platform functionality, or attempts to circumvent platform policies.`,
      `Where necessary, we may restrict, suspend, investigate, or terminate accounts, prevent certain transactions, require further verification, or cooperate with relevant authorities.`,
      `Information relating to fraud, security, disputes, and enforcement may be retained for a longer period where reasonably necessary to protect users and the platform.`,
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      `Bthere uses reasonable administrative, technical, and organizational measures intended to protect information from unauthorized access, loss, misuse, alteration, disclosure, or destruction.`,
      `Such measures may include secure authentication, password protection, encryption, role-based access controls, restricted administrative access, activity logging, secure server infrastructure, monitoring, secure communication protocols, and security practices used by our technology and payment providers.`,
      `However, no system, website, mobile application, network, or method of electronic transmission can be guaranteed to be completely secure. Users should take reasonable steps to protect their devices, passwords, login credentials, and account access.`,
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      `We retain personal information for as long as reasonably necessary to provide the Bthere platform and services, maintain accounts, complete transactions, process payments, resolve disputes, investigate fraud, comply with legal obligations, maintain records, enforce agreements, and protect the rights and safety of users and Bthere.`,
      `The duration for which specific information is retained may depend on the type of information, the purpose for which it was collected, legal requirements, accounting requirements, security considerations, dispute-resolution requirements, and whether an account remains active.`,
      `When information is no longer reasonably required, we may delete it, anonymize it, or otherwise process it in accordance with applicable law.`,
      `Certain information may continue to be retained after an account is closed where retention is required for legal, accounting, fraud-prevention, safety, dispute-resolution, enforcement, or regulatory reasons.`,
    ],
  },
  {
    title: "Account Access, Correction and Deletion",
    paragraphs: [
      `Users may be able to access and update certain account information directly through the Bthere application or website.`,
      `Users may also request correction of inaccurate information or deletion of their account, subject to applicable legal requirements and legitimate retention needs.`,
      `If an account is deleted, the user’s public profile may be removed or disabled. Certain information may still be retained where necessary to maintain financial records, comply with legal obligations, prevent fraud, resolve disputes, investigate complaints, enforce agreements, or protect platform security.`,
      `Where deletion of certain information makes it impossible to provide a service, the user may no longer be able to access some or all Bthere functionality.`,
    ],
  },
  {
    title: "Marketing and Communication Preferences",
    paragraphs: [
      `Bthere may send users communications relating to their account, bookings, payments, service requests, security, policy changes, and platform updates.`,
      `Where permitted by law, we may also send promotional or marketing communications.`,
      `Users may be able to unsubscribe from marketing communications through the unsubscribe mechanism provided in the communication or through account settings where such controls are available.`,
      `Opting out of marketing communications does not prevent Bthere from sending important operational, transactional, payment-related, booking-related, security-related, or legal communications.`,
    ],
  },
  {
    title: "Privacy of Minors",
    paragraphs: [
      `Bthere is intended for users who are legally permitted to create an account and enter into transactions for services.`,
      `Persons below the minimum age required by applicable law should not independently create or use a Bthere account unless the platform expressly permits such use with appropriate parental or guardian involvement.`,
      `If Bthere becomes aware that information has been collected from a child in circumstances where such collection is not permitted, we may take steps to delete the relevant account and information in accordance with applicable law.`,
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      `The Bthere platform may contain links to, or integrations with, third-party services, including payment gateways, mapping services, authentication providers, analytics services, cloud-service providers, and communication services.`,
      `These third parties may process information under their own terms and privacy policies.`,
      `Bthere is not responsible for the privacy practices of independent third-party services that are not operated or controlled by Bthere.`,
      `Users should review the privacy policies of such providers where appropriate.`,
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      `Bthere may update this Privacy Policy from time to time to reflect changes in the platform, new features, changes to payment or verification processes, operational changes, changes in law, or other relevant developments.`,
      `When we update this Privacy Policy, we may publish the revised version through the Bthere application or website and update the “Last Updated” date shown at the beginning of the Policy.`,
      `Where required or appropriate, we may also notify users through the platform, email, or other communication channels.`,
      `Continued use of Bthere after an updated Privacy Policy becomes effective may be subject to the updated version.`,
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      `If you have questions, concerns, requests, or complaints regarding this Privacy Policy or the way Bthere handles personal information, you may contact us using the contact details made available through the Bthere application or website.`,
      `You may contact Bthere by email at privacy@bthere.lk or support@bthere.lk, or by writing to [Bthere legal company name and registered address].`,
    ],
  },
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
    privacyLink: true,
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
    privacyLink: true,
  },
  {
    title: "Contact Information",
    paragraphs: [
      `If you have questions, concerns, complaints, or requests relating to these Terms or your use of Bthere, you may contact Bthere through the support functionality available within the application or website.`,
      `You may also contact us at support@bthere.lk.`,
      `Formal notices may be sent to [Bthere legal company name], [registered business address].`,
    ],
  },
];
