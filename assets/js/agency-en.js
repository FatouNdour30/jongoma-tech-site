/* ==========================================================================
   Jongoma Tech — English content for the "agency" sections (loaded on -en.html pages
   before agency.js, which picks these lists instead of the French ones).
   Rule: no impact figures, no invented clients or projects.
   ========================================================================== */
window.JG_EN = {
  POLES: [
    {
      id: "logiciel", icon: "bi-code-slash", photo: "pro-laptop.jpg",
      title: "Software engineering",
      lead: "Websites, apps and platforms designed for the people who actually use them.",
      text: "Everyone is going digital, but a digital tool is only worth something if people really use it. We design and build your products with a people-centred method: your customers, your teams, your beneficiaries. We deliver clean products that are fast even on a small data plan, and easy to pick up.",
      items: [
        "Web applications: showcase site, online shop, portal, content management",
        "Native or hybrid mobile apps, all the way to publication on Play Store and App Store",
        "Web and mobile platforms with a short, intuitive user journey",
        "Modular applications, ready to grow with your users",
        "Cloud-native development",
        "WordPress, Drupal or Joomla websites",
      ],
    },
    {
      id: "design", icon: "bi-vector-pen", photo: "tech-clic.jpg",
      title: "UX/UI Design",
      lead: "The end user at the heart of the project, before the first line of code.",
      text: "Before we design, we listen. We meet future users, in the field if needed, to understand how they really live: reading, language, phone, connection. We audit what already exists or design the interactive prototype of your product, so you can see and test its final look before any development starts.",
      items: [
        "User research and field interviews",
        "Audit of the existing user experience",
        "User journeys and information architecture",
        "Mock-ups and interactive prototype",
        "Testing with real users",
        "Accessibility: voice messages, pictograms, local languages",
      ],
    },
    {
      id: "marketing", icon: "bi-megaphone", photo: "pro-equipe.jpg",
      title: "Digital marketing",
      lead: "Making your products and services known, wherever your audience is.",
      text: "We support your marketing and communication projects: building your brand, launching a product, finding new clients, generating qualified leads or bringing an event to life. We also know how to speak to audiences that standard campaigns overlook, in their language and on the channels they really use, such as WhatsApp.",
      items: [
        "Marketing and editorial strategy",
        "Written, audio and video content",
        "Web marketing audit and support",
        "Search engine optimisation and advertising (SEO, SEA)",
        "Content marketing and community management",
        "WhatsApp and SMS campaigns",
        "Webmastering",
      ],
    },
    {
      id: "creation", icon: "bi-camera-reels", photo: "numerique.jpg",
      title: "Graphic design & video",
      lead: "A strong visual identity and content that stands out.",
      text: "Online, a company is first recognised by its image. Pictures, infographics, podcasts, videos: together we create the communication materials that carry your message and reach your goals.",
      items: [
        "Logo and visual identity",
        "Posters, flyers, business cards",
        "Social media visuals",
        "Scriptwriting and video shoots",
        "Video editing and motion design",
        "Podcasts and audio clips",
      ],
    },
    {
      id: "cloud", icon: "bi-cloud-check", photo: "tech-start.jpg",
      title: "Cloud factory",
      lead: "Solid architectures for demanding projects.",
      text: "Innovative projects come with high requirements: many users, sensitive data, constant availability. This practice is fully dedicated to cloud-based projects, from architecture to production.",
      items: [
        "Web platforms built to scale",
        "API design and integrations: mobile money, SMS, WhatsApp",
        "Information system architecture",
        "Cloud-native development",
        "Hosting, backups and monitoring",
      ],
    },
    {
      id: "data-ia", icon: "bi-stars", photo: "ai-voix.jpg",
      title: "Data & Artificial intelligence",
      lead: "True data, and AI that leaves out neither women nor local languages.",
      text: "Decisions are too often made without knowing the reality on the ground. We collect reliable field data, turn it into clear dashboards, and design useful artificial intelligence tools, including for people who read little.",
      items: [
        "Field surveys and dashboards",
        "Monitoring and evaluation with time-stamped evidence",
        "Voice assistants and AI tools in French and local languages",
        "Data analysis and reporting",
        "AI training for your teams",
      ],
      services: ["ai", "insights", "mel"],
    },
    {
      id: "cyber", icon: "bi-shield-lock", photo: "cyber.jpg",
      title: "Cybersecurity & trust",
      lead: "Protecting your data, your clients and your documents.",
      text: "Scams, hacking, forged documents: trust is quickly lost. We help you secure your tools, protect your users' data in line with Senegalese law and the GDPR, and verify the authenticity of documents.",
      items: [
        "Security audit of your tools",
        "Scam awareness training for your teams",
        "Compliance: CDP and GDPR",
        "Document authentication",
        "Incident response plan",
      ],
      services: ["cyber", "authentification"],
    },
    {
      id: "support", icon: "bi-headset", photo: "pro-bureau.jpg",
      title: "Managed services & IT support",
      lead: "Your tools kept up to date and monitored, so you can focus on your work.",
      text: "Every digital product needs maintenance, updates and quick fixes when something goes wrong. Outsource your support and maintenance: we check your tools regularly to prevent breakdowns, and you follow every intervention in your client area.",
      items: [
        "Management and monitoring of your websites",
        "Domain names and professional email",
        "Training on day-to-day use and webmastering",
        "IT equipment monitoring and workstation setup",
        "Incident tracking in your client area",
      ],
    },
  ],

  DOMAINS: [
    ["bi-stars", "Artificial intelligence"],
    ["bi-graph-up-arrow", "Data & analytics"],
    ["bi-shield-lock", "Cybersecurity"],
    ["bi-cloud-check", "Cloud & IT infrastructure"],
    ["bi-bag-heart", "E-commerce"],
    ["bi-mortarboard", "Education & e-learning"],
    ["bi-heart-pulse", "Health & wellbeing"],
    ["bi-people", "Social networks & communities"],
    ["bi-controller", "Games & gamification"],
    ["bi-airplane", "Travel & hospitality"],
    ["bi-truck", "Logistics & transport"],
    ["bi-megaphone", "Marketing & community management"],
    ["bi-bezier2", "Design & prototyping"],
    ["bi-puzzle", "Custom solutions"],
    ["bi-cup-hot", "Food & restaurants"],
    ["bi-buildings", "Real estate & land"],
    ["bi-wallet2", "Finance & mobile money"],
    ["bi-flower1", "Agriculture"],
    ["bi-bank", "NGOs, donors & institutions"],
    ["bi-globe-europe-africa", "Diaspora"],
    ["bi-person-vcard", "E-government & civil registration"],
    ["bi-bank2", "Justice & legal"],
    ["bi-scissors", "Fashion, crafts & textiles"],
    ["bi-sun", "Energy & environment"],
  ],

  METHOD: [
    { t: "Listen", d: "A first conversation to understand your need, your audience and your constraints. A manager replies within 48 hours.", out: "Scoping note" },
    { t: "Understand the field", d: "Interviews, surveys, visits: we start from your users' reality, not from assumptions.", out: "Field summary" },
    { t: "Design", d: "User journeys, mock-ups and an interactive prototype, approved with you before anything is built.", out: "Prototype and detailed quote" },
    { t: "Build", d: "Development in short steps with a demo at each one. For field missions, our agents work on site.", out: "Regular demos" },
    { t: "Prove", d: "Testing with real users, acceptance, time-stamped evidence. Nothing is delivered until it has been checked.", out: "Acceptance report" },
    { t: "Support", d: "Go-live, training for your teams, maintenance and tracking of every intervention in your client area.", out: "Training and support" },
  ],

  REALISATIONS: [
    { name: "Colombe Academy of Technology", url: "https://www.cat.sn/", shot: "real-cat.jpg",
      sector: "Education", kind: "Institutional website", poles: ["logiciel", "design"],
      text: "The website of CAT, a technology school in Dakar: programmes, certifications, cyber range, blog and admissions." },
    { name: "Scolarité CAT", url: "https://scolarite.cat-sn.com/", shot: "real-scolarite.jpg",
      sector: "Education", kind: "Management platform", poles: ["logiciel", "design", "cloud"],
      text: "CAT's enrolment tracking platform: student files from first-year Bachelor's to Master's, fees and accounts, forms, receipts and certificates ready to print." },
    { name: "OpenMove", url: "https://openmove.sn/", shot: "real-openmove.jpg",
      sector: "Mobility & transport", kind: "Showcase website", poles: ["logiciel", "design"],
      text: "The showcase site of OpenMove, a mobility platform in Senegal: rides, deliveries and express parcels, booked in one tap." },
    { name: "OpenMove app", url: null, app: true, shot: "app-openmove-1.jpg", screens: ["app-openmove-1.jpg", "app-openmove-2.jpg"],
      sector: "Mobility & transport", kind: "Mobile app", poles: ["logiciel", "design", "cloud"],
      text: "The OpenMove mobile app: book a Standard, Eco or Premium ride, follow the trip live on the map, contact the driver, wallet and loyalty points." },
    { name: "OpenFabrics", url: "https://openfabrics.sn/", shot: "real-openfabrics.jpg",
      sector: "E-commerce", kind: "Online shop", poles: ["logiciel", "design"],
      text: "OpenFabrics' online shop in Dakar: collections and categories of premium fabrics, customer account and online ordering." },
    { name: "OpenCloud", url: "https://www.opencloud.sn/", shot: "real-opencloud.jpg",
      sector: "Cybersecurity & IT", kind: "Institutional website", poles: ["logiciel", "design"],
      text: "The website of OpenCloud, a cybersecurity and IT infrastructure integrator in Dakar: areas of expertise, services, resources and quote requests." },
    { name: "AFATECH", url: null, shot: "real-afa.jpg",
      sector: "Women & technology", kind: "Non-profit website", poles: ["logiciel", "design"],
      text: "The website of AFATECH, the Association of African Women in Technology based in Dakar: programmes, volunteering, Women in Tech, activities and donations." },
    { name: "SamaLearn", url: null, shot: "real-machine.jpg",
      sector: "Education & AI", kind: "Learning platform", poles: ["logiciel", "design", "data-ia"],
      text: "SamaLearn, an adaptive learning platform: artificial intelligence builds a unique path for each learner and adjusts it in real time based on their results." },
  ],

  WORKS_EXTRA: [
    { real: true, title: "The Jongoma platform", poles: ["logiciel", "design", "cloud"], domain: "Social networks & communities", photo: "communaute.jpg",
      text: "A complete client area: requests and files tracked step by step, quotes and receipts, attachments, a women's Community and Chats with voice messages.", link: "plateforme.html" },
    { real: true, title: "The Jongoma Tech website", poles: ["design", "logiciel", "creation"], domain: "Design & prototyping", photo: "hero.jpg",
      text: "The site you are visiting: editorial art direction, a two-question guidance quiz, a filterable catalogue of our services.", link: "index.html" },
    { title: "Online shop for a women's food-processing cooperative", poles: ["logiciel", "marketing"], domain: "E-commerce", photo: "commercante.jpg",
      text: "Catalogue, mobile ordering, Wave and Orange Money payment, delivery tracking and a WhatsApp launch campaign." },
    { title: "Pregnancy follow-up through voice messages", poles: ["design", "data-ia"], domain: "Health & wellbeing", photo: "maternite.jpg",
      text: "Appointment reminders and advice by voice message, designed with women who read little, on any phone." },
    { title: "Monitoring and evaluation dashboard", poles: ["data-ia", "cloud"], domain: "NGOs, donors & institutions", photo: "audit.jpg",
      text: "Offline data collection by women enumerators, time-stamped and geolocated evidence, indicators the donor can check live." },
    { title: "Digital skills training platform", poles: ["logiciel", "design"], domain: "Education & e-learning", photo: "formation.jpg",
      text: "Short learning paths, lightweight videos for small data plans, quizzes and certificates for women starting out in digital." },
    { title: "Campaign against mobile money scams", poles: ["marketing", "creation", "cyber"], domain: "Finance & mobile money", photo: "appel.jpg",
      text: "Video spots, visuals and audio clips in French and Wolof, shared on social media and WhatsApp." },
    { title: "Visual identity for a woman entrepreneur", poles: ["creation", "marketing"], domain: "Food & restaurants", photo: "portrait-femme.jpg",
      text: "Logo, brand guidelines, menus, social media visuals and a showcase website to launch her business." },
    { title: "Construction monitoring for the diaspora", poles: ["logiciel", "data-ia"], domain: "Real estate & land", photo: "terrain.jpg",
      text: "Every site visit, every expense and every photo of the build available from abroad, with receipts and GPS location." },
    { title: "Managed IT for a small business", poles: ["support", "cyber"], domain: "Custom solutions", photo: "equipe.jpg",
      text: "Professional email, configured workstations, backups, team training and incident tracking." },
  ],

  RESOURCES: [
    { id: "brief", type: "Template", icon: "bi-file-earmark-text", title: "The project brief in 10 questions",
      desc: "The questions to ask yourself before launching a website, an app or a campaign.",
      body: `<ol>
        <li>What problem do you want to solve, in one sentence?</li>
        <li>For whom? Describe your users: age, language, phone, connection.</li>
        <li>What must they be able to do, from most to least important?</li>
        <li>What already exists: website, Facebook page, Excel file, app?</li>
        <li>Which tools must be connected: mobile payment, SMS, WhatsApp, accounting?</li>
        <li>Which references do you like, and why?</li>
        <li>Who, on your side, approves each step and provides the content?</li>
        <li>What is your ideal launch date, and why that date?</li>
        <li>What budget do you have in mind, even roughly?</li>
        <li>How will you know the project has succeeded?</li>
      </ol><p>You can answer online: our "Start a project" form follows these questions.</p>`,
      cta: ["projet.html", "Fill in my brief"] },
    { id: "momo", type: "Guide", icon: "bi-shield-exclamation", title: "Mobile money: 8 habits against scams",
      desc: "The most common traps and how to avoid them, to share with the people around you.",
      body: `<ul>
        <li><strong>Never give out your PIN</strong>, to anyone, even someone who says they are calling from the operator.</li>
        <li>A "deposit by mistake" on your account? Do not send anything back yourself: contact the official customer service.</li>
        <li>Be wary of prizes, lotteries and promotions you did not ask for.</li>
        <li>Check the recipient's name shown before confirming a transfer.</li>
        <li>Do not click links received by SMS or WhatsApp to "unlock" your account.</li>
        <li>Turn on the lock for your phone and for the app.</li>
        <li>Keep confirmation messages: they serve as proof.</li>
        <li>If in doubt, hang up and call the official number yourself.</li>
      </ul>` },
    { id: "chantier", type: "Guide", icon: "bi-house-check", title: "Following a building project back home from abroad",
      desc: "How to avoid bad surprises when you build from a distance.",
      body: `<ul>
        <li>Get a detailed quote broken down by item: foundations, walls, roof, finishing.</li>
        <li>Pay in stages, once the previous stage has been checked.</li>
        <li>Ask for dated, geolocated photos, not just photos sent on WhatsApp.</li>
        <li>Require a receipt for every purchase of materials.</li>
        <li>Have the land documents checked before you start.</li>
        <li>Arrange for an independent, trusted person to make surprise visits.</li>
      </ul><p>This is exactly what the Jongoma Diaspora service does, with verified agents and tracking in your file.</p>`,
      cta: ["services.html?pole=impact", "Discover Jongoma Diaspora"] },
    { id: "lancement", type: "Checklist", icon: "bi-check2-square", title: "Before putting a website online",
      desc: "The essential checks on launch day.",
      body: `<ul>
        <li>The site displays well on a small phone and with a slow connection.</li>
        <li>Every form sends its messages, and someone receives them.</li>
        <li>The domain name and security certificate (https) are active.</li>
        <li>The legal notice and data protection policy are published.</li>
        <li>The texts have been proofread, phone numbers and addresses checked.</li>
        <li>Automatic backups are in place.</li>
        <li>Audience measurement is installed, with proper consent.</li>
        <li>Someone knows how to update the content.</li>
      </ul>` },
    { id: "donnees", type: "Factsheet", icon: "bi-lock", title: "Protecting your beneficiaries' data",
      desc: "Data protection basics for an NGO or a company.",
      body: `<ul>
        <li>Only collect the information you really need.</li>
        <li>Explain simply why you collect it and who will have access to it.</li>
        <li>Keep sensitive data separate: health, violence, family situation.</li>
        <li>Limit access to the people concerned, and keep a record of who views it.</li>
        <li>Set a retention period, then delete.</li>
        <li>In Senegal, check with the Personal Data Protection Commission (CDP); in Europe, the GDPR applies.</li>
      </ul>` },
    { id: "documents", type: "Factsheet", icon: "bi-patch-question", title: "Does a document look suspicious?",
      desc: "First steps when facing a doubtful certificate, diploma or title deed.",
      body: `<ul>
        <li>Do not trust appearances: a forgery can be very well made.</li>
        <li>Check with the authority that issued the document: town hall, court, university, land registry.</li>
        <li>Compare names, dates and numbers with other official documents.</li>
        <li>Never pay money on the basis of a copy alone.</li>
        <li>Keep the messages and copies: they may serve as evidence.</li>
      </ul><p>Our document authentication service checks with the official sources for you.</p>`,
      cta: ["services.html?pole=pro", "See the service"] },
    { id: "glossaire", type: "Glossary", icon: "bi-book", title: "Digital words made simple",
      desc: "The words you hear in a digital project, explained without jargon.",
      body: `<dl>
        <dt>UX (user experience)</dt><dd>Everything a person feels when using your tool: is it simple, fast, reassuring?</dd>
        <dt>UI (interface)</dt><dd>What you see on screen: colours, buttons, text, images.</dd>
        <dt>Prototype</dt><dd>A clickable mock-up to test the tool before building it.</dd>
        <dt>API</dt><dd>A "plug" that lets two pieces of software talk to each other, for example your website and Wave.</dd>
        <dt>Cloud</dt><dd>Remote servers rented to host your tools and data.</dd>
        <dt>Domain name</dt><dd>Your website's address, for example mycompany.sn.</dd>
        <dt>SEO</dt><dd>Techniques to appear in Google results without paying.</dd>
        <dt>Hybrid app</dt><dd>A single app that works on both Android and iPhone.</dd>
      </dl>` },
    { id: "presse", type: "Kit", icon: "bi-images", title: "Press and partner kit",
      desc: "Official Jongoma Tech logos, presentation and photos.", soon: true },
  ],

  POSTS: [
    { slug: "startup-feminine", cat: "Jongoma", photo: "equipe.jpg", read: 4,
      title: "Why a 100% women-led tech startup?",
      excerpt: "Women are the first hit by our society's problems and the last served by technology. We decided to change that, from the inside.",
      body: [
        "Mothers' health, violence, access to land, girls' schooling, jobs, banking: the burden falls first on women. Yet digital tools are rarely designed for them, in their language, for their phones or for their daily lives.",
        ["h", "Designing with, not for"],
        "An all-women team, from the field to management, does not guarantee everything. But it changes the way questions are asked. Who will use this tool? Can she read? Does she have a smartphone, airtime, time? These questions become the basis of every project.",
        ["h", "A company, not a charity"],
        "Jongoma Pro sells technology services to companies, NGOs and institutions. That income, together with donor funding, pays for Jongoma Impact, our free or nearly free programmes for women and families. This model is what allows us to last.",
        "Our motto sums up our standard: what Jongoma promises, Jongoma proves.",
      ] },
    { slug: "site-ou-application", cat: "Engineering", photo: "tech-code.jpg", read: 5,
      title: "Showcase website, app or platform: which one to choose?",
      excerpt: "Before talking tech, let's talk about your users. Three simple questions to choose the right tool without overspending.",
      body: [
        "\"We need an app.\" It is often the first sentence of a project. But an app is not always the right answer. Before choosing, ask yourself three questions.",
        ["h", "1. What do your users need to do?"],
        "If they only need to discover you and contact you, a showcase website is enough. If they need to order, pay, follow a file or talk to each other, you need a platform with accounts.",
        ["h", "2. How often will they come back?"],
        "A mobile app makes sense when people open it often. For occasional use, a web platform designed for phones avoids downloads and costs less to maintain.",
        ["h", "3. What phone and connection do they have?"],
        "If your audience has modest phones and limited data plans, lightness comes first. A page that loads fast is better than a beautiful animation nobody will see.",
        "Still unsure? Tell us about your project: we will recommend the simplest solution that truly meets the need.",
      ] },
    { slug: "ux-afrique", cat: "Design", photo: "tech-clic.jpg", read: 4,
      title: "Designing for voice, Wolof and small data plans",
      excerpt: "What we learn by designing tools for women who read little or mostly speak Wolof.",
      body: [
        "Many digital tools assume you read French easily and have a good connection. For many of the women we serve, that is not the case.",
        ["h", "Voice first"],
        "A voice message often feels more natural than a form. On the Jongoma platform, you can write to us, but you can also talk to us.",
        ["h", "Pictures that speak"],
        "Pictograms, colours and real photos help people understand without reading. Every icon is tested with real users.",
        ["h", "Always light"],
        "Pages that load fast, compressed images, features that work offline and sync later. It is less spectacular, but it is what makes a tool actually used.",
      ] },
    { slug: "arnaques-mobile-money", cat: "Cybersecurity", photo: "cyber.jpg", read: 3,
      title: "Mobile money scams: recognising them to stay protected",
      excerpt: "Fake deposits, fake agents, fake prizes: scams look alike. Here is how to beat them.",
      body: [
        "Mobile money has transformed daily life. Fraudsters understand this well, and their methods almost always rely on haste and trust.",
        ["h", "The fake deposit"],
        "You get an SMS announcing a deposit, then a call: \"I made a mistake, send the money back.\" Check your real balance in the app first. If in doubt, send nothing and contact the official customer service.",
        ["h", "The fake agent"],
        "Someone claims to work for the operator and asks for your PIN. No operator will ever ask you for your PIN.",
        ["h", "The fake prize"],
        "You \"won\" without playing? You will have to pay \"fees\" to receive the prize. It is always a scam.",
        "Find our 8 habits to share on the Resources page.",
      ] },
    { slug: "prouver-impact", cat: "Data & AI", photo: "audit.jpg", read: 4,
      title: "Proving impact: what time-stamped evidence changes",
      excerpt: "A report is no longer enough. Donors want to see what has changed, and to be able to check it.",
      body: [
        "Many social programmes struggle to show what they have really changed. It is not always a lack of results; it is often a lack of evidence.",
        ["h", "Collect as it happens"],
        "A photo taken on site, with the date, time and location, is worth more than a table filled in afterwards. Our enumerators collect this evidence even without network coverage.",
        ["h", "Make evidence easy to check"],
        "The donor follows progress in their own space, without waiting for the final report.",
        ["h", "Never embellish"],
        "Our rule: a single false figure can destroy trust. We prefer a modest, true result to a spectacular promise.",
      ] },
    { slug: "faux-documents", cat: "Trust", photo: "pro.jpg", read: 3,
      title: "Forged documents: why authentication is becoming essential",
      excerpt: "Civil records, diplomas, land titles: before signing or hiring, checking is no longer optional.",
      body: [
        "A forged document can cost a house, a job or years of legal proceedings. With today's tools, a copy can be very convincing.",
        ["h", "Check at the source"],
        "The only reliable check is with the authority that issued the document: town hall, court, university, land registry. It takes time when you are far away, or when you do not know who to ask.",
        ["h", "What we do"],
        "Our authentication service carries out these checks for you and gives you a documented answer. It serves individuals, companies that are hiring and institutions.",
      ] },
  ],

  PARTNER_TYPES: [
    ["bi-bank", "Donor / foundation"],
    ["bi-building", "Company / CSR"],
    ["bi-globe2", "NGO / institution"],
    ["bi-cpu", "Technology partner"],
    ["bi-mortarboard", "School / university"],
    ["bi-megaphone", "Media / event"],
  ],
};
