import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import {
  ChevronDown,
  ClipboardList,
  MessagesSquare,
  ShieldCheck,
  GraduationCap,
  Radio,
  Wallet,
  Headset,
  PenLine,
  MessageCircle,
  UserCheck,
  Wrench,
} from 'lucide-react';

type Tag = { label: string };

type Step = {
  number: string;
  title: string;
  icon: typeof ClipboardList;
  body: string;
  tags: Tag[];
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Apply — It Just Takes A Minute',
    icon: ClipboardList,
    body: 'Everyone starts here. This is your first step to your success. Just fill out a simple form, and leave contact details, and we will get in touch with you!',
    tags: [
      { label: 'Completely confidential' },
      { label: 'No photos required' },
      { label: '18+ only' },
      { label: 'Free to apply' },
    ],
  },
  {
    number: '02',
    title: 'Discovery-Call',
    icon: MessagesSquare,
    body: 'No commitments yet, just chill conversation with one person from our team, to see whether this fits your current situation. Camera on for both of us, because we are about to talk about your goals, and what success looks like for you, and realistic expectations based on your current situation. You will hear from us either way, even if the answer is no. If the answer is yes, shortly after you will be connected with your personal account manager on WhatsApp. Your goals, schedule, and initial personalized strategy are set here, based on your current situation. No matter what situation you’re in, we have the solution.',
    tags: [
      { label: '1-to-1 WhatsApp support' },
      { label: 'Zero-pressure intro' },
      { label: 'Your goals, your pace' },
    ],
  },
  {
    number: '03',
    title: 'Profile Setup & Full Privacy Configuration',
    icon: ShieldCheck,
    body: 'We handle the entire technical setup across all platforms: alias email/identity, profile creation and setup, geo-blocking (blocking country/region/postcode) required apps, softwares, setup off-platform profiles and payment systems.',
    tags: [
      { label: 'Geo-blocking configured' },
      { label: 'Alias identity setup' },
      { label: 'Multi-platform profiles' },
      { label: 'Privacy blueprint' },
    ],
  },
  {
    number: '04',
    title: 'Training & Blueprint',
    icon: GraduationCap,
    body: 'Personal onboarding session covering platform mechanics, audience engagement, show strategy, pricing, and building loyal regulars, plus a week-by-week blueprint plan.',
    tags: [
      { label: 'Structured plan' },
      { label: 'Show strategy coaching' },
      { label: 'Pricing guidance' },
      { label: 'Audience psychology' },
    ],
  },
  {
    number: '05',
    title: 'Go Live — With Your Team’s Support In Real Time',
    icon: Radio,
    body: 'Go live across platforms with your account manager guiding you in real time — refining strategy, pricing, and schedule as data comes in.',
    tags: [
      { label: 'First earnings' },
      { label: 'Live support' },
      { label: 'Multi-stream enabled' },
    ],
  },
  {
    number: '06',
    title: 'Get Paid — Every Single Week',
    icon: Wallet,
    body: 'You receive your earnings every week. No targets to hit, no holds, you get what\'s yours on time. You can access & track all incoming earnings on all platforms through your accounts, and off-platform sales update in real time with same-day transactions.',
    tags: [
      { label: 'Weekly payments' },
      { label: 'No holds' },
      { label: 'Real-time tracking' },
    ],
  },
];

const teamRoles = [
  {
    icon: Headset,
    role: 'Accounts Manager',
    body: 'WhatsApp contact daily help and support, daily calls, tracking progress and adapting strategy.',
  },
  {
    icon: PenLine,
    role: 'Stream-Platform Sales Team',
    body: 'Skilled ghost writers working your room live on every stream, greeting viewers, spotting spenders, driving earnings through tips and private invites while you focus only on performing.',
  },
  {
    icon: MessageCircle,
    role: 'Off-Platform Sales Team',
    body: 'This is the highest income source and the potential here is infinite. Skilled ghost writers that specialize in building real online relationships, are active 24/7 on all messaging apps for you.',
  },
  {
    icon: UserCheck,
    role: 'Personal Coach',
    body: '1-to-1 training on show performance, how pricing works, turning viewers into regulars, regulars into whales and stream ideas & scripts.',
  },
  {
    icon: ShieldCheck,
    role: 'Profile Operators',
    body: 'Profile creation and continuous conversion optimization (bio, thumbnails, pricing, folders).',
  },
  {
    icon: Wrench,
    role: 'Tech Support',
    body: 'Technical setup, multi-stream setup, equipment setup. Any tech issue resolves fast, so you can focus on performing, not troubleshoot errors.',
  },
];

const growthStages = [
  {
    stage: 'Stage 1',
    title: 'Getting Started',
    subtitle: 'Foundation & First Earnings',
    points: [
      'Profiles built, privacy & geo-blocking configured',
      'Trial sessions with 1-on-1 coaching',
      'Multistream activated',
      'Off-platform earning systems configured',
      'Earning early',
    ],
  },
  {
    stage: 'Stage 2',
    title: 'Building',
    subtitle: 'Growth & Consistency',
    points: [
      'Returning regular base built',
      'Content strategy introduced',
      '“Blue page” funnel activated',
      'Off-platform funnel activated',
      'Scheduling optimized',
    ],
  },
  {
    stage: 'Stage 3',
    title: 'Scaling',
    subtitle: 'Scale & Full-Time Freedom',
    points: [
      'Passive income fanbase',
      'Advanced show strategies',
      '24/7 cross-platform income',
      'Full-time independent income',
      'Top performer tiers unlocked',
    ],
  },
];

const includedFeatures = [
  'Dedicated sales team on every stream',
  'Dedicated sales team on all off-platform messaging apps',
  '1-to-1 training',
  'Guide library',
  'Account optimization',
  'Multistreaming',
  'Privacy & geo-blocking',
  'Weekly payouts',
];

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">{number}</span>
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

function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 text-[#ff1493] text-xs font-medium">
      {label}
    </span>
  );
}

function StepCard({
  step,
  open,
  onToggle,
}: {
  step: Step;
  open: boolean;
  onToggle: () => void;
}) {
  const Icon = step.icon;
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? 'border-[#ff1493]/50 bg-[#ff1493]/[0.06]'
          : 'border-white/10 bg-white/[0.03] hover:border-white/30 hover:-translate-y-0.5'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 sm:gap-6 px-6 py-6 sm:px-8 text-left"
        aria-expanded={open}
      >
        <span
          className={`text-sm font-bold tracking-[0.2em] transition-colors duration-300 ${
            open ? 'text-[#ff1493]' : 'text-white/40'
          }`}
        >
          {step.number}
        </span>
        <Icon
          className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
            open ? 'text-[#ff1493]' : 'text-white/50'
          }`}
          strokeWidth={1.5}
        />
        <h3 className="flex-1 text-base sm:text-xl font-bold">{step.title}</h3>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-white/50 transition-transform duration-300 ${
            open ? 'rotate-180 text-[#ff1493]' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 sm:px-8 pb-7 sm:pl-[4.75rem]">
            <p className="text-white/70 leading-relaxed mb-6 max-w-3xl">{step.body}</p>
            <div className="flex flex-wrap gap-2">
              {step.tags.map((tag) => (
                <TagPill key={tag.label} label={tag.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState<string | null>('01');

  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="py-24 sm:py-40 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 text-[#ff1493] text-xs tracking-[0.2em] uppercase font-medium mb-8">
              Your roadmap to success
            </div>
            <h1
              className="font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              Six Step System That Works.
              <br />
              <span className="text-[#ff1493]">Zero Guesswork.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-12">
              From the moment you apply, to your first earnings. What happens in each step of the
              way once you apply to become a Mini Cookie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton label="Apply" variant="solid" color="pink" href="/#application" />
              <a
                href="#team"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]"
              >
                I Still Have Questions
              </a>
            </div>
          </div>
        </section>

        {/* 6-Step Onboarding Process */}
        <section className="py-10 sm:py-32 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="01" title="The 6-Step Onboarding Process" />
            <p className="text-base sm:text-lg text-white/50 font-light -mt-6 mb-12">
              Tap each step to see exactly what happens.
            </p>
            <div className="flex flex-col gap-4">
              {steps.map((step) => (
                <StepCard
                  key={step.number}
                  step={step}
                  open={openStep === step.number}
                  onToggle={() => setOpenStep(openStep === step.number ? null : step.number)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Earnings & Payouts */}
        <section className="py-10 sm:py-32 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="02" title="Earnings & Payouts" />
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-10 sm:py-12 hover:border-white/25 transition-colors duration-300">
              <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mb-10">
                You receive your earnings every week. No targets to hit, no holds, you get what's
                yours on time. You can access & track all incoming earnings on all platforms through
                your accounts. For the off-platform earnings you are getting daily sale updates at
                real time, and transactions are made the same day.
              </p>
              <div className="flex flex-wrap gap-2">
                <TagPill label="Daily sales updates" />
                <TagPill label="Live earnings dashboard" />
                <TagPill label="Weekly payments" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Breakdown */}
        <section id="team" className="py-10 sm:py-32 px-6 bg-jet-black scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="03" title="The Team Behind Your Results" />
            <p className="text-base sm:text-lg text-white/50 font-light -mt-6 mb-12">
              You never work alone — six roles dedicated to your growth.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamRoles.map((role) => {
                const Icon = role.icon;
                return (
                  <div
                    key={role.role}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-[#ff1493]/50 hover:bg-[#ff1493]/[0.06] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-[#ff1493]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-3">{role.role}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{role.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3-Stage Growth Blueprint */}
        <section className="py-10 sm:py-32 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="04" title="3-Stage Growth Blueprint" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {growthStages.map((stage, i) => (
                <div
                  key={stage.stage}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <span className="text-sm font-bold tracking-[0.2em] text-[#ff1493] mb-2">
                    {stage.stage}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{stage.title}</h3>
                  <p className="text-sm text-white/40 mb-6">{stage.subtitle}</p>
                  <ul className="flex flex-col gap-3 mt-auto">
                    {stage.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff1493]" />
                        <span className="text-sm text-white/70 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {i < growthStages.length - 1 && null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency & Inclusions & Final CTA */}
        <section className="py-10 sm:py-32 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="05" title="Transparency & Inclusions" />
            <div className="rounded-2xl border border-[#ff1493]/40 bg-[#ff1493]/[0.06] px-6 py-10 sm:px-10 sm:py-12 mb-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                Free to join. <span className="text-[#ff1493]">Really.</span>
              </h3>
              <p className="text-white/70 leading-relaxed max-w-3xl mb-10">
                No starting fee, no monthly retainer, no contracts whatsoever. We highly believe the
                results should keep our partnership alive. We only earn when you do, so your success
                is in our best interest.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {includedFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 py-3 border-b border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff1493] shrink-0" />
                    <span className="text-sm sm:text-base text-white/80 font-bold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3
                className="font-extrabold tracking-tight leading-[1.05] mb-10"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
              >
                Ready When <span className="text-[#ff1493]">You Are.</span>
              </h3>
              <CTAButton label="Apply" variant="solid" color="pink" href="/#application" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
