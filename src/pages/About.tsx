import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import {
  MonitorSmartphone,
  Layers,
  GraduationCap,
  Wrench,
  Camera,
  LayoutPanelTop,
  Clock,
  BadgeDollarSign,
} from 'lucide-react';

const provideCards = [
  {
    icon: MonitorSmartphone,
    title: 'Multi-Streaming Setup',
    body: 'Multi-streaming setup across 5 platforms at the same time.',
  },
  {
    icon: Layers,
    title: 'Off-Platform Income Sources',
    body: 'Up to 5 off-platform, done-for-you income sources.',
  },
  {
    icon: GraduationCap,
    title: 'Training & 1-to-1 Coaching',
    body: 'Personalized training and 1-to-1 coaching.',
  },
  {
    icon: Wrench,
    title: 'Complete Technical Support',
    body: 'Complete technical & back-end support for each platform.',
  },
  {
    icon: Camera,
    title: 'Streaming Equipment',
    body: 'Streaming equipment for your home studio.',
  },
  {
    icon: LayoutPanelTop,
    title: 'Full “Blue Page” Management',
    body: 'Full “blue page” management included.',
  },
  {
    icon: Clock,
    title: '24/7 Sales Coverage',
    body: '24/7 sales covered across all 10 platforms.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Zero Upfront Costs',
    body: 'Zero upfront costs, no hidden fees, and zero lock-in contracts (leave anytime).',
  },
];

const advantageChecklist = [
  'Yes, that’s right: 10 income sources for the effort of just one!',
  'Yes, you get paid for the time you spend creating content!',
  'Yes, you can monetize each step of the way!',
  'Yes, you can earn while you are not working!',
  'Yes, you can grow your “blue page” on autopilot at the same time!',
  'Yes, every system is done-for-you — your job is just to show up on time!',
  'Yes, your team works for you and you only!',
  'Yes, it’s 100% free to start: no hidden fees or costs!',
  "Yes, you can leave at any time if you think it's not for you!",
  "Yes, there aren't any contracts or agreements involved whatsoever!",
  'Yes, we accept fewer than 3% of the applications',
];

const aloneItems = [
  'Chatting every DM, in every timezone, all day',
  'Cross-posting and scheduling across platforms',
  'Reading analytics you were never trained to read',
  'Retention, customer service, and leak protection',
];

const runForYouItems = [
  '24/7 dedicated sales & chat teams across all streaming and messaging apps',
  'Full multi-stream setup, profile optimization, and content funnel automation',
  'Real-time data tracking, pricing adjustments, and 1-on-1 strategy coaching',
  'Complete privacy setup, stage-name protection, and strict geo-blocking',
];

const splitCards = [
  {
    platform: 'Streaming Platforms',
    creator: '50%',
    agency: '50%',
    creatorLabel: 'Creator Take-Home',
    agencyLabel: 'Agency',
    note: 'Half of every payout on streaming platforms is yours, straight after the split.',
  },
  {
    platform: 'Off-Platform Earnings',
    creator: '25%',
    agency: '75%',
    creatorLabel: 'Creator Take-Home',
    agencyLabel: 'Agency (24/7 Sales Coverage)',
    note: 'In most cases that 25% is double or triple your streaming earnings — thanks to 24/7 coverage.',
  },
];

const teamCards = [
  {
    title: 'Team Standards',
    body: 'We focus strictly on quality rather than quantity. We are highly selective with who we work with. In order to provide the best service to our creators, each new member before joining our back-end team in any position has to pass qualification skills tests, intelligence tests, performance tests, and live problem-solving tests before their opportunity for a job interview. We only work with highly skilled and dedicated people that naturally behave as sharks when it comes to performance.',
  },
  {
    title: 'Sales Team',
    body: 'Our ghost writers are the core of the earnings engine, for us and for each creator’s earnings. We hire only the best when it comes to sales talent. Each ghost writer we hire comes with previous experience in the same industry and exact same role. The ones who specialize in stream management work only on streams, and the ones that specialize in building long-lasting online relationships work only on messaging apps such as WhatsApp, Telegram, Snapchat, or any other app that creators or fans prefer. Our sales team works on commission-based pay only, so it\'s in their best interest to approach every communication with each fan in the smartest way possible in order to maximize earnings for the creators as well as their own.',
  },
  {
    title: 'Admin Team',
    body: 'Each team member that works in any position in the back-end operation — such as managers, coaches, profile and tech operators — either had previous experience in the same role or already has a career in this industry. Each one of them knows the ins and outs, has seen and experienced the mistakes beginners make, and knows how to avoid them so you don’t have to figure this out alone.',
  },
];

const goodFitItems = [
  'Committed to work a minimum of 20 hours weekly',
  'Stay consistent',
  'Positive / happy personality and vibe',
  'Fast & stable internet connection is essential',
  'Laptop or decent smartphone (iPhone 13 or above)',
  'Quiet room without any distractions while working',
  'Choosing this as a serious income path, not just testing the waters',
  'Coachable & ready to follow proven systems',
  'You don’t need anyone chasing you to show up',
  'You’ve thought about this for months, and you’re ready to stop thinking',
];

const notFitItems = [
  'You want fast results without consistent execution',
  'You’re not comfortable with adult content creation',
  'You want someone to keep you on schedule every day',
  "You're looking for a shortcut rather than a business",
  'This is a backup plan you’re considering, not a decision you’ve made',
  'You want to disappear for weeks at a time — the system requires consistency',
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

function PinkDot({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff1493]" />
      <span className="text-sm text-white/70 leading-relaxed">{text}</span>
    </li>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-jet-black text-pure-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="py-24 sm:py-40 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 text-[#ff1493] text-xs tracking-[0.2em] uppercase font-medium mb-8">
              About Mini Cookies
            </div>
            <h1
              className="font-extrabold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              Built to give creators what every other agency{' '}
              <span className="text-[#ff1493]">couldn’t</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-12">
              A dedicated personal team that works only for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#who-we-are"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]"
              >
                About Us
              </a>
              <a
                href="#our-team"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]"
              >
                Our Team
              </a>
              <a
                href="#requirements"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full border border-white/30 text-white hover:border-white hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]"
              >
                Creator Requirements
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: Who We Are */}
        <section id="who-we-are" className="py-10 sm:py-32 px-6 bg-jet-black scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="01" title="Who We Are" />
            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mb-10">
              Mini Cookies is a Talent Management Agency that operates worldwide completely remote.
              We provide everything you need to transform ambition into success — a dedicated team
              that works only for you, personalized 1-on-1 coaching, complete technical & live
              support, full privacy protection, multi-streaming across 5 platforms, 5 off-platform
              earnings engine setup, and a strategy designed around your current situation, goals,
              and boundaries.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">What the Agency Does</h3>
            <p className="text-white/70 leading-relaxed max-w-3xl mb-10">
              Navigating this industry alone can feel overwhelming. It requires lots of technical
              knowledge, human psychology, multi-tasking skills, tracking analytics, and months
              wasted in trial and error — and there are a set amount of things that one person can
              realistically manage to get done in a day. That’s why we built Mini Cookies, an
              all-in-one management agency designed to cover all, to give creators what every other
              agency couldn’t, or what they couldn’t do alone. As your agency, our main job is to
              remove the guesswork. Every creator has their own dedicated team that works for them
              only, and each creator is fully managed. We handle the technical setup and the
              day-to-day admin side while you focus on your performance: full account setup and
              optimization across the platforms we work with, off-platform earning engine setup that
              runs 24/7, dedicated live ghost writers on every stream, 1-to-1 training and live
              coaching, and a library of training guides. Privacy is configured from the start, with
              a separate stage name and geo-blocking.
            </p>

            <div className="rounded-2xl border border-[#ff1493]/40 bg-[#ff1493]/[0.06] px-6 py-10 sm:px-10 sm:py-12">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">One Simple, Flat Arrangement</h3>
              <p className="text-white/70 leading-relaxed max-w-3xl mb-8">
                There is just one simple, flat arrangement for everyone: a fully-managed setup with
                everything included. No commission tiers, no percentages that change with your
                hours, and no cheaper "self-managed" option to weigh up. Everything is included,
                from the chatters and coaching to the kit you need, such as a webcam, and we also
                help you scale into a full-time career. It is free to join, with no upfront fees and
                no lock-in contract. You can read the full picture on our How It Works and Earnings
                pages, or in our free guides.
              </p>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff1493] mb-3">
                Single Offer Structure
              </h4>
              <p className="text-white/70 leading-relaxed max-w-3xl mb-6">
                One simple, flat arrangement for everyone — a fully-managed setup with everything
                included. No commission tiers, no variable percentages based on hours, and no
                cheaper "self-managed" tiers.
              </p>
              <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-[#ff1493] mb-3">
                Inclusions
              </h4>
              <ul className="flex flex-col gap-2 max-w-3xl">
                {[
                  'Dedicated chatters on every stream',
                  '1-to-1 live coaching',
                  'Profile optimization',
                  'Privacy/geo-blocking configuration',
                  'Free equipment (webcam/kit)',
                  'Weekly payouts with zero lock-in contracts',
                ].map((item) => (
                  <PinkDot key={item} text={item} />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: What We Provide */}
        <section className="py-10 sm:py-32 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="02" title="What We Provide" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {provideCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#ff1493]/50 hover:bg-[#ff1493]/[0.06] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-[#ff1493] mb-4" strokeWidth={1.5} />
                    <h3 className="text-sm sm:text-base font-bold mb-2">{card.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{card.body}</p>
                  </div>
                );
              })}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-6">The Mini Cookies Advantage</h3>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-10 sm:py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {advantageChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-3 py-3 border-b border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff1493] shrink-0" />
                    <span className="text-sm sm:text-base text-white/80 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What You Carry Alone vs What We Run For You */}
        <section className="py-10 sm:py-32 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="03" title="Stop Doing Everything Yourself" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 hover:border-white/25 transition-colors duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white/60">
                  What You Carry Alone
                </h3>
                <ul className="flex flex-col gap-4">
                  {aloneItems.map((item) => (
                    <PinkDot key={item} text={item} />
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/[0.06] p-6 sm:p-10 hover:border-[#ff1493] transition-colors duration-300">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#ff1493]">
                  What We Run For You
                </h3>
                <ul className="flex flex-col gap-4">
                  {runForYouItems.map((item) => (
                    <PinkDot key={item} text={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How Does Your Agency Earn? */}
        <section className="py-10 sm:py-32 px-6 bg-jet-black">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="04" title="How Does Your Agency Earn?" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {splitCards.map((card) => (
                <div
                  key={card.platform}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 hover:border-[#ff1493]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-8">{card.platform}</h3>
                  <div className="flex items-end gap-6 mb-6">
                    <div>
                      <span
                        className="block font-extrabold text-[#ff1493] leading-none"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
                      >
                        {card.creator}
                      </span>
                      <span className="block text-xs tracking-[0.2em] uppercase text-white/40 mt-2">
                        {card.creatorLabel}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-white/10 mb-8" />
                    <div className="text-right">
                      <span
                        className="block font-extrabold text-white leading-none"
                        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
                      >
                        {card.agency}
                      </span>
                      <span className="block text-xs tracking-[0.2em] uppercase text-white/40 mt-2">
                        {card.agencyLabel}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{card.note}</p>
                </div>
              ))}
            </div>

            <p className="text-white/70 leading-relaxed max-w-3xl">
              We take 50% from the earnings on the streaming platforms and the remaining 50% are
              your take-home earnings. From the off-platform earnings we take 75%, and the remaining
              25% are your take-home earnings. We charge a higher percentage on off-platform
              earnings due to the 24/7 coverage and activity on your accounts. (In most cases, that
              25% earned from off-platform apps is double or triple compared to the earnings from
              streaming platforms.) More detailed information on how everything works and estimates
              on your earnings potential will be discussed on the call. Our success is entirely tied
              to yours. If you don’t earn, we don’t earn. Single, one-off payments don’t interest us
              — we focus on building strong, long-term partnerships that generate high income for
              both of us consistently. We highly prefer to get paid consistently rather than once.
              We’re in this with you for the long run. All earnings predicted and mentioned on our
              website are after the split and are completely yours.
            </p>
          </div>
        </section>

        {/* Section 5: Agency Standards & Operations */}
        <section id="our-team" className="py-10 sm:py-32 px-6 bg-jet-black scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <SectionHeading number="05" title="Agency Standards & Operations" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {teamCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-[#ff1493]/50 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-4">{card.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Creator Requirements */}
        <section id="requirements" className="py-10 sm:py-32 px-6 bg-jet-black scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm tracking-[0.3em] uppercase text-white/40 font-medium">06</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ff1493]/40 bg-[#ff1493]/10 text-[#ff1493] text-xs tracking-[0.2em] uppercase font-medium mb-6">
                We accept fewer than 3% of applications
              </div>
              <h2
                className="font-extrabold tracking-tight leading-[1.05]"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)' }}
              >
                Creator Requirements
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed max-w-3xl mb-10">
              We don't select creators based on age, looks, or body type. What truly matters is your
              mindset. We are looking for ambitious, disciplined, and open-minded women who bring
              real charisma and positive energy. Once you join, an entire team and system is built
              around you. We can only do that for creators who are ALL IN, and most who apply are
              not. The filter protects both of us from wasting each other's time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl border border-[#ff1493]/50 bg-[#ff1493]/[0.06] p-6 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#ff1493]">Good Fit If…</h3>
                <ul className="flex flex-col gap-3">
                  {goodFitItems.map((item) => (
                    <PinkDot key={item} text={item} />
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white/60">Not a Fit If…</h3>
                <ul className="flex flex-col gap-3">
                  {notFitItems.map((item) => (
                    <PinkDot key={item} text={item} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-[#ff1493]/40 bg-[#ff1493]/[0.06] px-6 py-10 sm:px-10 sm:py-12 text-center">
              <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                Read the right-hand column and thought “that’s not me”? Good. That’s exactly how we
                know you belong in the left one, and it’s why we turn most applicants away. The ones
                we keep are the ones who just nodded.
              </p>
              <CTAButton label="Apply" variant="solid" color="pink" href="/#application" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
