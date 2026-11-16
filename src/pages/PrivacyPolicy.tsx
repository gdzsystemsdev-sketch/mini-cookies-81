import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type PrivacySection = {
  number: string;
  title: ReactNode;
  content: ReactNode;
};

function SectionHeading({ number, title }: { number: string; title: ReactNode }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">
          {number}
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h2
        className="font-extrabold tracking-tight leading-[1.05]"
        style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)' }}
      >
        {title}
      </h2>
    </div>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-6 space-y-3 text-white/70 leading-relaxed">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const sections: PrivacySection[] = [
  {
    number: '01',
    title: (
      <>
        Information <span className="text-[#ff1493]">We Collect</span>
      </>
    ),
    content: (
      <>
        <h3 className="text-xl sm:text-2xl font-bold mb-4">Information You Provide to Us</h3>
        <DetailList
          items={[
            'Application Data: Full name, date of birth, email address, phone number, social media usernames (if applicable), country of residence, nationality, stage name, and any additional information you choose to provide in your application.',
            'Identity Verification: A clear face photo submitted strictly for age-verification purposes as required by law.',
            'Communications: Any messages, emails, or inquiries you send to us.',
          ]}
        />
        <h3 className="text-xl sm:text-2xl font-bold mt-10 mb-4">
          Automatically Collected Technical & Telemetry Data
        </h3>
        <DetailList
          items={[
            'Device & Network Identifiers: IP address, browser type and version, operating system, device identifiers, screen resolution, and referral URLs.',
            'Behavioral & Interaction Logs: Session duration, page views, scroll depth, clickstream paths, form interaction events, and conversion triggers.',
          ]}
        />
      </>
    ),
  },
  {
    number: '02',
    title: (
      <>
        How We Use <span className="text-[#ff1493]">Your Information</span>
      </>
    ),
    content: (
      <>
        <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-5">
          <strong>We use the collected information to:</strong>
        </p>
        <DetailList
          items={[
            'Process and evaluate your agency application',
            'Schedule and conduct discovery calls',
            'Create and set up your accounts and profiles',
            'Communicate with you regarding our services',
            'Measure advertising attribution, analyze funnel performance, and optimize user experience',
            'Comply with legal and regulatory obligations',
          ]}
        />
      </>
    ),
  },
  {
    number: '03',
    title: (
      <>
        Cookies, Tracking Pixels & <span className="text-[#ff1493]">User <br />Activity Mapping</span>
      </>
    ),
    content: (
      <>
        <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-5">
          <strong>
            To ensure platform security, measure marketing campaign attribution, and optimize our onboarding funnel, we deploy client-side storage technologies, tracking pixels, and behavioral analytics scripts across our website.
          </strong>
        </p>
        <DetailList
          items={[
            'Essential & Functional Cookies: Small text files stored locally on your browser to maintain session state, preserve form inputs, enforce security protocols, and ensure core site functionality.',
            'Advertising & Conversion Pixels (Snap Pixel, Meta Pixel): Lightweight JavaScript tags and server-side event APIs that log specific conversion milestones. These technologies match hashed browser signals with advertising platforms to measure campaign ROI, prevent duplicate ad delivery, and build aggregated lookalike audiences without exposing your raw application data.',
            'User Activity & Behavioral Telemetry: Session-mapping and heatmap analytics tools that record anonymized interaction telemetry—including cursor trajectories, scroll velocity, click distribution, and drop-off points. This diagnostic data allows us to identify UI bottlenecks and improve mobile and desktop usability.',
            'Managing Tracking & Opt-Out Controls: You can restrict, block, or purge cookies and local storage at any time via your browser settings or by declining non-essential tracking through our cookie consent banner. You may also manage ad-level personalization directly within your Snapchat and Meta account privacy settings. Please note that disabling essential cookies may impact form submission stability.',
          ]}
        />
      </>
    ),
  },
  {
    number: '04',
    title: (
      <>
        Third-Party <span className="text-[#ff1493]">Services</span>
      </>
    ),
    content: (
      <>
        <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-5">
          <strong>We utilize trusted third-party service providers to run our operations efficiently:</strong>
        </p>
        <DetailList
          items={[
            'Calendly.com: Used for scheduling discovery calls. Subject to Calendly’s Privacy Policy.',
            'WhatsApp & Telegram: Used for daily communications. Subject to their respective Privacy Policies.',
            'Advertising & Analytics Partners (Snap Inc., Meta Platforms, Inc.): Used for conversion tracking, attribution modeling, and aggregated traffic analytics.',
          ]}
        />
      </>
    ),
  },
  {
    number: '04',
    title: (
      <>
        How We Share <span className="text-[#ff1493]">Your Data</span>
      </>
    ),
    content: (
      <>
        <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-5">
          <strong>
            We never sell, rent, or trade your personal data. We share data strictly on a need-to-know basis with the following infrastructure, operational, and advertising partners:
          </strong>
        </p>
        <DetailList
          items={[
            'Partner Streaming & Webcam Platforms: Shared exclusively to provision your creator profile using your chosen stage name—your legal identity and verification documents remain strictly confidential.',
            'Payment & Financial Processors: Encrypted financial routing details shared solely to disburse your creator earnings securely.',
            'Cloud & IT Infrastructure Providers: Hosting, database, email, and technical support vendors that process data on our behalf under strict Data Processing Agreements (DPAs) and encryption standards.',
            'Analytics & Telemetry Providers (Google Analytics 4): Used to measure anonymized site interaction metrics, including scroll depth, video engagement duration, and form completion steps, helping us optimize funnel performance.',
            'Advertising & Attribution Partners (Meta Platforms, and Snap Inc.): When you visit our site, submit an application, or schedule a call, client-side pixels (Meta Pixel, Snap Pixel) and server-side Conversions APIs transmit technical event signals—such as your IP address, browser metadata, referral URL, and cryptographically hashed contact identifiers (email, phone number, first name, and country). These platforms match hashed signals against user accounts to measure campaign attribution and optimize ad delivery under their respective Privacy Policies. We never transmit the personal answers you enter into your application questionnaire to advertising networks.',
            'Legal authorities: Where required by law, court order, or to protect our legal rights.',
          ]}
        />
        <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mt-8">
          All third-party payment and infrastructure processors are contractually bound to maintain industry-standard security controls and process data strictly in accordance with our documented instructions.
        </p>
      </>
    ),
  },
  {
    number: '06',
    title: (
      <>
        Data <span className="text-[#ff1493]">Security</span>
      </>
    ),
    content: (
      <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
        We implement rigorous technical and organizational measures—including end-to-end encryption in transit (TLS) and encrypted storage at rest—to protect your personal information against unauthorized access, loss, or misuse. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
      </p>
    ),
  },
  {
    number: '07',
    title: (
      <>
        Your <span className="text-[#ff1493]">Rights</span>
      </>
    ),
    content: (
      <>
        <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-5">
          <strong>
            You retain full control over your personal data. Under applicable data protection frameworks (including GDPR), you have the right to:
          </strong>
        </p>
        <DetailList
          items={[
            'Access, update, or correct your personal data',
            'Request the complete deletion of your personal data',
            'Withdraw consent for non-essential cookies and tracking pixels at any time',
            'Object to or restrict certain data processing activities',
          ]}
        />
      </>
    ),
  },
  {
    number: '08',
    title: (
      <>
        Children's <span className="text-[#ff1493]">Privacy</span>
      </>
    ),
    content: (
      <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
        Our services are strictly restricted to adults aged 18 and over. We do not knowingly collect or solicit personal data from anyone under 18. If you believe we have inadvertently collected data from a minor, please contact us immediately, and we will delete it promptly.
      </p>
    ),
  },
  {
    number: '09',
    title: (
      <>
        Changes to <span className="text-[#ff1493]">This Policy</span>
      </>
    ),
    content: (
      <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
        We may update this Privacy Policy from time to time to reflect operational, technical, or legal changes. Any updates will be posted on this page with a revised "Last updated" date at the top.
      </p>
    ),
  },
  {
    number: '10',
    title: (
      <>
        Contact <span className="text-[#ff1493]">Us</span>
      </>
    ),
    content: (
      <>
        <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-5">
          <strong>
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:
          </strong>
        </p>
        <DetailList
          items={[
            'Agency Name: Mini Cookies',
            'Email: [Insert Support Email]',
            'Telegram / WhatsApp: [Insert Agency Handle / Number]',
          ]}
        />
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />
      <main className="pt-24 sm:pt-32 pb-16 px-6">
        <header className="max-w-5xl mx-auto py-10 sm:py-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">00</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <h1
            className="font-extrabold tracking-tight leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
          >
            Privacy <span className="text-[#ff1493]">Policy</span>
          </h1>
          <p className="text-sm sm:text-base text-white/40 font-medium mb-8">
            Last updated: [Insert Date]
          </p>
          <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl">
            Building trust starts right here. When you interact with Mini Cookies <br />("we," "us," or "our"), we only collect what is required for verification, onboarding, and optimizing our platform experience. All data is stored securely using encryption. We do not sell, rent, or trade your data with third parties, and you can request the deletion of your personal data at any time.
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          {sections.map((section) => (
            <section key={`${section.number}-${section.title}`} className="py-10 sm:py-24">
              <SectionHeading number={section.number} title={section.title} />
              <div className="max-w-4xl">{section.content}</div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
