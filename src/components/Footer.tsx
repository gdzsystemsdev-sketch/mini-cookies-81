import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-jet-black border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        <Logo className="scale-75" taglineColor="#ffffff" />
        <p className="text-xs text-white/30 tracking-wider text-center max-w-md leading-relaxed">
          All creators must be 18+. Privacy guaranteed. <br />No contracts. No lock-in.
          <br />
          Earnings are not guaranteed and depend on individual effort and commitment.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="/about"
            className="text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 text-[#ff1493] hover:text-white"
          >
            About Us
          </a>
          <a
            href="/how-it-works"
            className="text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 text-[#ff1493] hover:text-white"
          >
            How It Works
          </a>
          <a
            href="/privacy"
            className="text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 text-[#ff1493] hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
        <p className="text-xs text-white/20">© 2026 mini cookies. All rights reserved.</p>
      </div>
    </footer>
  );
}
