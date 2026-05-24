export function Footer() {
  return (
    <footer className="footer-glow relative overflow-hidden border-t border-white/8 px-5 py-10 text-sm text-flo-muted sm:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flo-glow/30 to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-flo-foam/54">FLO — Emotional products for the digital age.</p>
        <p className="text-flo-glow/78">所有灵感，终会靠岸。</p>
      </div>
    </footer>
  );
}
