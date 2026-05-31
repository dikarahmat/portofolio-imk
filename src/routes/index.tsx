import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Mail, Github, Linkedin, Instagram, ArrowUpRight, Sparkles,
  Code2, Palette, Layers, Rocket, GraduationCap, Briefcase,
  Sun, Moon,
} from "lucide-react";

// Asset Imports
import dikaPortrait from "@/assets/dika-portrait.png";
import logo from "@/assets/logo-dk.png";
import kantinkuImg from "@/assets/projects/kantinku.png";
import doitImg from "@/assets/projects/doit.png";
import skiesImg from "@/assets/projects/skies.png";
import memoryImg from "@/assets/projects/memory.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portofolio — Mahasiswa IMK" },
      { name: "description", content: "Portofolio pribadi berbasis prinsip Interaksi Manusia dan Komputer (IMK)." },
      { property: "og:title", content: "Portofolio — Mahasiswa IMK" },
      { property: "og:description", content: "Portofolio pribadi berbasis prinsip Interaksi Manusia dan Komputer." },
    ],
    links: [
      { rel: "icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Tentang", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

const TECH_INFO: Record<string, { desc: string; use: string; color: string; textColor: string; icon: string }> = {
  "HTML":        { color: "#E34F26", textColor: "#fff", icon: "html5/ffffff",        desc: "HyperText Markup Language — bahasa markup dasar untuk membuat struktur halaman web.", use: "Digunakan untuk membuat kerangka/struktur konten di setiap halaman website." },
  "JavaScript":  { color: "#F7DF1E", textColor: "#1a1a1a", icon: "javascript/1a1a1a",  desc: "Bahasa pemrograman yang berjalan di browser untuk membuat halaman web menjadi interaktif.", use: "Digunakan untuk animasi, validasi form, fetch data dari API, dan logika frontend." },
  "Node JS":     { color: "#339933", textColor: "#fff", icon: "nodedotjs/ffffff",     desc: "Runtime JavaScript di sisi server yang memungkinkan JS berjalan di luar browser.", use: "Digunakan untuk membuat backend/server, REST API, dan tools development." },
  "Tailwind CSS":{ color: "#06B6D4", textColor: "#fff", icon: "tailwindcss/ffffff",   desc: "Framework CSS berbasis utility-class yang mempercepat styling langsung di HTML.", use: "Digunakan untuk styling cepat tanpa menulis CSS manual, sangat populer di React." },
  "ReactJS":     { color: "#20232A", textColor: "#61DAFB", icon: "react/61DAFB",      desc: "Library JavaScript buatan Meta untuk membangun antarmuka pengguna berbasis komponen.", use: "Digunakan untuk membuat UI yang dinamis, reusable, dan mudah di-maintain." },
  "Vite":        { color: "#646CFF", textColor: "#fff", icon: "vite/ffffff",          desc: "Build tool generasi terbaru yang sangat cepat untuk project frontend modern.", use: "Digunakan sebagai pengganti Webpack, mempercepat development server dan build production." },
  "CSS":         { color: "#1572B6", textColor: "#fff", icon: "css3/ffffff",          desc: "Cascading Style Sheets — bahasa untuk mengatur tampilan dan gaya halaman HTML.", use: "Digunakan untuk mengatur warna, font, layout, animasi, dan responsivitas halaman." },
  "Bootstrap":   { color: "#7952B3", textColor: "#fff", icon: "bootstrap/ffffff",     desc: "Framework CSS populer dengan komponen UI siap pakai seperti tombol, navbar, grid.", use: "Digunakan untuk membangun tampilan web responsif dengan cepat tanpa banyak CSS custom." },
  "Firebase":    { color: "#FFCA28", textColor: "#1a1a1a", icon: "firebase/1a1a1a",   desc: "Platform Backend-as-a-Service dari Google dengan database realtime, auth, dan hosting.", use: "Digunakan untuk autentikasi user, penyimpanan data realtime, dan deploy aplikasi web." },
  "Material UI": { color: "#007FFF", textColor: "#fff", icon: "mui/ffffff",           desc: "Library komponen React yang mengikuti panduan desain Material Design dari Google.", use: "Digunakan untuk membuat UI yang konsisten dan profesional dengan komponen siap pakai." },
  "Vercel":      { color: "#000000", textColor: "#fff", icon: "vercel/ffffff",        desc: "Platform cloud untuk deploy dan hosting aplikasi frontend, terutama Next.js dan React.", use: "Digunakan untuk deploy project secara instan dengan integrasi GitHub dan CDN global." },
  "SweetAlert2": { color: "#FF7043", textColor: "#fff", icon: "sweetalert2/ffffff",   desc: "Library JavaScript untuk membuat dialog/popup/alert yang cantik dan customizable.", use: "Digunakan sebagai pengganti alert bawaan browser dengan tampilan yang lebih menarik." },
};

const ABOUT_CARDS = [
  { t: "UI Design",    color: "#7C3AED", lightColor: "#EDE9FE", desc: "Merancang tampilan visual yang intuitif, estetis, dan berpusat pada pengguna — dari warna, tipografi, hingga layout yang konsisten." },
  { t: "Front-end",   color: "#0EA5E9", lightColor: "#E0F2FE", desc: "Membangun antarmuka web yang responsif dan interaktif menggunakan React, Tailwind CSS, dan teknologi modern lainnya." },
  { t: "Prototyping", color: "#F59E0B", lightColor: "#FEF3C7", desc: "Membuat prototipe interaktif di Figma untuk menguji alur dan pengalaman pengguna sebelum masuk ke tahap development." },
  { t: "Research",    color: "#10B981", lightColor: "#D1FAE5", desc: "Melakukan riset pengguna, analisis kebutuhan, dan usability testing agar produk benar-benar sesuai kebutuhan." },
];

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/dikarahmat",
    label: "GitHub",
    hoverBg: "#24292e",
    hoverColor: "#ffffff",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dika-rahmat-fadillah-43a68231a/",
    label: "LinkedIn",
    hoverBg: "#0A66C2",
    hoverColor: "#ffffff",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/paparazzziii_?igsh=bGdxMnl1cDg5amxt",
    label: "Instagram",
    hoverBg: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    hoverColor: "#ffffff",
  },
];

function Portfolio() {
  const [dark, setDark] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeAbout, setActiveAbout] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">

          <a href="#" className="-my-3 md:-my-6">
            <img
              src={logo}
              alt="Logo"
              className="h-13 w-auto md:h-17 transition-all duration-300 dark:invert"
            />
          </a>

          <nav className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {/* Dark mode toggle — desktop */}
            <button
              onClick={() => setDark(!dark)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border transition-all duration-200 hover:scale-105 hover:bg-secondary"
              aria-label="Toggle dark mode"
            >
              {dark
                ? <Sun className="h-4 w-4 text-foreground" />
                : <Moon className="h-4 w-4 text-foreground" />
              }
            </button>

            <a
              href="#contact"
              className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Hubungi
            </a>
          </div>

          {/* Mobile: dark toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDark(!dark)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border transition-all hover:bg-secondary"
              aria-label="Toggle dark mode"
            >
              {dark
                ? <Sun className="h-4 w-4 text-foreground" />
                : <Moon className="h-4 w-4 text-foreground" />
              }
            </button>

            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-border"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                Hubungi
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden px-6 pt-8 pb-4 md:pt-12 md:pb-0"
        style={{ background: "var(--gradient-lime)" }}
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-4 flex justify-center md:mb-8">
            <a
              href="/tugas-imk.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-4 py-1.5 text-xs backdrop-blur transition-all duration-200 hover:scale-105 hover:border-foreground/30 hover:bg-background"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Tugas Portofolio — Interaksi Manusia &amp; Komputer
            </a>
          </div>

          <h1 className="relative z-0 text-center font-display text-4xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Hi I'm Dika
            <br />
            <span className="italic-display">Mahasiswa Informatika</span>
          </h1>

          <div className="relative z-10 mt-[-20px] md:mt-[-50px] lg:mt-[-60px]">
            <div className="relative mx-auto flex justify-center">
              <img
                src={dikaPortrait}
                alt="Foto Dika Rahmat Fadillah"
                width={1024}
                height={1024}
                className="relative z-10 h-auto w-[260px] object-contain md:w-[400px] lg:w-[460px]"
                style={{ filter: "drop-shadow(0 30px 40px oklch(0.18 0.01 240 / 0.18))" }}
              />
            </div>

            <div className="absolute left-8 top-[40%] z-20 hidden md:block">
              <div className="inline-flex items-center gap-2 rounded-full bg-background py-2 pl-2 pr-4 text-sm font-medium shadow-lg">
                <span className="relative grid h-6 w-6 place-items-center rounded-full" style={{ background: "var(--lime)" }}>
                  <span className="h-2 w-2 rounded-full bg-foreground" />
                </span>
                Tersedia untuk kerja sama
              </div>
            </div>

            <div className="absolute right-8 top-[40%] z-20 hidden max-w-[220px] text-sm leading-relaxed text-foreground/80 md:block">
              passionate dalam menciptakan pengalaman digital yang intuitif dengan prinsip IMK.
            </div>

            <div className="absolute bottom-12 right-8 z-20 hidden w-[220px] md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground shadow-xl transition-transform hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" /> Hubungi Saya
              </a>
            </div>

            <div className="absolute bottom-12 left-8 z-20 hidden max-w-[200px] text-xs text-foreground/70 md:block">
              Mahasiswa <strong className="text-foreground">Teknik Informatika</strong> yang fokus pada front-end dan desain UI berlandaskan IMK.
            </div>

            {/* Mobile CTA — inside hero flow, not absolute */}
            <div className="flex justify-center pb-4 md:hidden">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground shadow-xl transition-transform hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" /> Hubungi Saya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full overflow-hidden border-y border-border bg-background py-3 md:py-4">
        <div
          className="flex w-max items-center gap-x-12"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {[
            "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite", "Node.js",
            "Bootstrap", "Firebase", "Material UI", "Vercel", "SweetAlert2",
            "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite", "Node.js",
            "Bootstrap", "Firebase", "Material UI", "Vercel", "SweetAlert2",
          ].map((t, i) => (
            <span key={i} className="italic-display whitespace-nowrap text-lg md:text-xl text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-6 pt-10 pb-8 md:pt-24 md:pb-16">
        <div className="mx-auto grid max-w-5xl gap-4 md:gap-6 md:grid-cols-[1fr_1.5fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Tentang <span className="italic-display">Saya</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Saya seorang mahasiswa yang antusias dalam dunia desain dan teknologi.
            Berfokus pada perpaduan antara{" "}
            <span className="text-foreground">strategi yang jelas, desain yang rapi, dan empati terhadap pengguna</span>{" "}
            untuk menciptakan pengalaman digital yang benar-benar bermakna.
          </p>
        </div>

        <div className="mx-auto mt-4 grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:mt-5 md:gap-4">
          {ABOUT_CARDS.map(({ t, color, lightColor }) => {
            const isHovered = hoveredCard === t;
            return (
              <div
                key={t}
                className="flex flex-col justify-center rounded-2xl border cursor-pointer select-none transition-all duration-200 overflow-hidden"
                style={{
                  borderColor: isHovered ? color : "var(--border)",
                  backgroundColor: isHovered ? lightColor : "var(--card)",
                  boxShadow: isHovered ? `0 8px 24px ${color}33` : "none",
                }}
                onMouseEnter={() => setHoveredCard(t)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveAbout(t)}
              >
                <div className="flex items-center gap-3 p-4">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors duration-200"
                    style={{ backgroundColor: isHovered ? color : "var(--lime)" }}
                  >
                    {t === "UI Design"    && <Palette className="h-5 w-5" style={{ color: isHovered ? "#fff" : "var(--foreground)" }} />}
                    {t === "Front-end"   && <Code2   className="h-5 w-5" style={{ color: isHovered ? "#fff" : "var(--foreground)" }} />}
                    {t === "Prototyping" && <Layers  className="h-5 w-5" style={{ color: isHovered ? "#fff" : "var(--foreground)" }} />}
                    {t === "Research"    && <Rocket  className="h-5 w-5" style={{ color: isHovered ? "#fff" : "var(--foreground)" }} />}
                  </span>
                  <span
                    className="font-medium text-sm transition-colors duration-200"
                    style={{ color: isHovered ? color : "var(--foreground)" }}
                  >
                    {t}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative bg-background px-6 pt-8 pb-10 md:pt-20 md:pb-32">
        {(() => {
          const pillClass = "inline-flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pr-5 pl-1.5 text-sm font-medium transition-all duration-300 cursor-pointer";
          const makePill = (t: { n: string; s: string; c: string; bg: string; hoverBg: string; hoverText: string }, extraStyle?: React.CSSProperties) => (
            <div
              key={t.n}
              className={pillClass}
              style={{ boxShadow: "var(--shadow-card)", ...extraStyle }}
              onClick={() => setActiveSkill(t.n)}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = t.hoverBg;
                el.style.color = t.hoverText;
                el.style.borderColor = t.hoverBg;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "";
                el.style.color = "";
                el.style.borderColor = "";
              }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: t.bg }}>
                <img src={`https://cdn.simpleicons.org/${t.s}/${t.c}`} alt="" className="h-4 w-4" loading="lazy" />
              </span>
              {t.n}
            </div>
          );

          const left = [
            { n: "HTML",       s: "html5",      c: "FFFFFF", bg: "#E34F26", hoverBg: "#E34F26", hoverText: "#FFFFFF" },
            { n: "JavaScript", s: "javascript", c: "000000", bg: "#F7DF1E", hoverBg: "#F7DF1E", hoverText: "#000000" },
            { n: "Node JS",    s: "nodedotjs",  c: "FFFFFF", bg: "#339933", hoverBg: "#339933", hoverText: "#FFFFFF" },
          ];
          const right = [
            { n: "Tailwind CSS", s: "tailwindcss", c: "FFFFFF", bg: "#06B6D4", hoverBg: "#06B6D4", hoverText: "#FFFFFF" },
            { n: "ReactJS",      s: "react",        c: "000000", bg: "#61DAFB", hoverBg: "#61DAFB", hoverText: "#000000" },
            { n: "Vite",         s: "vite",         c: "FFFFFF", bg: "#646CFF", hoverBg: "#646CFF", hoverText: "#FFFFFF" },
          ];

          return (
            <>
              {/* Mobile layout */}
              <div className="md:hidden px-2 py-4 text-center">
                <h2 className="font-display text-2xl leading-[1.2] tracking-tight">
                  fokus saya pada perpaduan{" "}
                  <span className="italic-display">strategi yang jelas</span>,
                  desain yang rapi, dan empati pengguna untuk{" "}
                  <span className="text-muted-foreground">menciptakan pengalaman yang bermakna</span>
                </h2>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:grid mx-auto max-w-6xl items-center gap-10 md:grid-cols-[auto_1fr_auto]">
                <div className="flex flex-col gap-10">
                  {left.map((t, i) => makePill(t, { transform: i === 1 ? "translateX(28px)" : i === 2 ? "translateX(10px)" : "translateX(-10px)" }))}
                </div>
                <div className="text-center">
                  <h2 className="font-display text-5xl leading-[1.15] tracking-tight">
                    fokus saya pada perpaduan{" "}
                    <span className="italic-display">strategi yang jelas</span>,
                    desain yang rapi, dan empati pengguna untuk{" "}
                    <span className="text-muted-foreground">menciptakan pengalaman yang bermakna</span>
                  </h2>
                </div>
                <div className="flex flex-col gap-10">
                  {right.map((t, i) => makePill(t, { transform: i === 1 ? "translateX(-28px)" : i === 2 ? "translateX(-10px)" : "translateX(10px)" }))}
                </div>
              </div>
            </>
          );
        })()}

        <div className="mx-auto mt-16 hidden max-w-5xl flex-wrap justify-center gap-3 md:flex">
          {[
            { n: "CSS",         s: "css3",        c: "FFFFFF", bg: "#1572B6", hoverBg: "#1572B6", hoverText: "#FFFFFF" },
            { n: "Bootstrap",   s: "bootstrap",   c: "FFFFFF", bg: "#7952B3", hoverBg: "#7952B3", hoverText: "#FFFFFF" },
            { n: "Firebase",    s: "firebase",    c: "000000", bg: "#FFCA28", hoverBg: "#FFCA28", hoverText: "#000000" },
            { n: "Material UI", s: "mui",         c: "FFFFFF", bg: "#007FFF", hoverBg: "#007FFF", hoverText: "#FFFFFF" },
            { n: "Vercel",      s: "vercel",      c: "FFFFFF", bg: "#000000", hoverBg: "#000000", hoverText: "#FFFFFF" },
            { n: "SweetAlert2", s: "sweetalert2", c: "FFFFFF", bg: "#FF7043", hoverBg: "#FF7043", hoverText: "#FFFFFF" },
          ].map((t) => (
            <div
              key={t.n}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pr-5 pl-1.5 text-sm font-medium transition-all duration-300 cursor-pointer"
              onClick={() => setActiveSkill(t.n)}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = t.hoverBg;
                el.style.color = t.hoverText;
                el.style.borderColor = t.hoverBg;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "";
                el.style.color = "";
                el.style.borderColor = "";
              }}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: t.bg }}>
                <img src={`https://cdn.simpleicons.org/${t.s}/${t.c}`} alt="" className="h-4 w-4" loading="lazy" />
              </span>
              {t.n}
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-secondary px-6 py-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 md:mb-12 flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-5xl">
              Riwayat <span className="italic-display">Pendidikan</span>
            </h2>
            <GraduationCap className="hidden h-10 w-10 text-muted-foreground md:block" />
          </div>

          <div className="space-y-3 md:space-y-4">
            {[
              { y: "2024 — Sekarang", s: "S1 Teknik Informatika", i: "Universitas Pamulang",       color: "#84cc16" },
              { y: "2021 — 2024",     s: "SMA — Jurusan IPA",     i: "SMA Negeri 1 Sendang Agung", color: "#0EA5E9" },
              { y: "2018 — 2021",     s: "SMP",                   i: "SMP Negeri 2 Sendang Agung", color: "#F59E0B" },
            ].map((e) => (
              <div
                key={e.s}
                className="flex flex-col gap-1 rounded-2xl border border-border bg-card px-5 py-4 md:p-6"
                style={{ borderLeft: `4px solid ${e.color}`, boxShadow: "var(--shadow-card)" }}
              >
                <span className="text-xs text-muted-foreground">{e.y}</span>
                <span className="italic-display text-lg md:text-xl">{e.s}</span>
                <span className="text-sm text-muted-foreground">{e.i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-4xl md:text-5xl">
            My <span className="italic-display">Project</span>
          </h2>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
            {[
              {
                t: "KantinKu",
                desc: "Aplikasi pemesanan makanan kantin berbasis web. Pesan makan, tanpa antre.",
                tag: "React • Vite • Firebase",
                url: "https://kantinku-chi.vercel.app/",
                img: kantinkuImg,
              },
              {
                t: "do.it",
                desc: "Aplikasi todo list simpel dan bersih untuk mengelola tugas harian.",
                tag: "React • Vite • Tailwind CSS",
                url: "https://todo-app-dikarahmats-projects.vercel.app/",
                img: doitImg,
              },
              {
                t: "skies.",
                desc: "Aplikasi cuaca modern untuk cek kondisi cuaca real-time kota mana saja.",
                tag: "React • Vite • OpenWeather API",
                url: "https://weather-app-hazel-delta-31.vercel.app/",
                img: skiesImg,
              },
              {
                t: "memory_",
                desc: "Card matching memory game dengan 4 level kesulitan, timer, dan best score.",
                tag: "React • Vite • CSS",
                url: "https://memory-dk.vercel.app/",
                img: memoryImg,
              },
            ].map((p) => (
              <a key={p.t} href={p.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div
                  className="aspect-[2/1] md:aspect-video overflow-hidden rounded-2xl border border-border bg-secondary transition-transform group-hover:-translate-y-2 md:rounded-3xl"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="relative h-full w-full">
                    <img
                      src={p.img}
                      alt={p.t}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="absolute top-3 right-3">
                      <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform group-hover:rotate-45 md:h-6 md:w-6" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 md:mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium md:text-lg">{p.t}</h3>
                    <span className="hidden text-xs text-muted-foreground md:inline">{p.tag}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-secondary px-6 py-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 md:mb-12 flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-5xl">
              Organisasi &amp; <span className="italic-display">Kegiatan</span>
            </h2>
            <Briefcase className="hidden h-10 w-10 text-muted-foreground md:block" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                r: "Organisasi Siswa Intra Sekolah",
                c: "Ketua OSIS",
                s: "SMA Negeri 1 Sendang Agung",
                y: "2022 — 2023",
                color: "#7C3AED"
              },
              {
                r: "Pramuka",
                c: "Pradana Putra",
                s: "SMA Negeri 1 Sendang Agung",
                y: "2021 — 2023",
                color: "#F59E0B"
              },
            ].map((e) => (
              <div
                key={e.r}
                className="flex flex-col rounded-2xl border border-border bg-card px-5 py-5 md:p-6"
                style={{ borderLeft: `4px solid ${e.color}`, boxShadow: "var(--shadow-card)" }}
              >
                <span className="mb-2 text-xs text-muted-foreground">{e.y}</span>
                <div className="flex justify-between items-start gap-2">
                  <span className="italic-display text-xl leading-tight md:text-2xl w-[55%]">
                    {e.r}
                  </span>
                  <div className="flex flex-col text-right w-[45%]">
                    <span className="text-sm font-medium text-foreground">{e.c}</span>
                    <span className="mt-1 text-xs leading-tight text-muted-foreground">{e.s}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 py-14 text-center md:py-28"
        style={{ background: "var(--gradient-lime)" }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl leading-tight md:text-7xl">
            Mari <span className="italic-display">Berkolaborasi</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-sm text-muted-foreground md:mt-6 md:max-w-xl md:text-base">
            Terbuka untuk kolaborasi proyek dan diskusi seputar desain &amp; teknologi.
          </p>
          <a
            href="https://wa.me/6281538781271"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 md:mt-8"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <div className="mt-8 flex justify-center gap-3 md:mt-10 md:gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label, hoverBg, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-12 w-12 place-items-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur transition-all duration-200 hover:scale-110 hover:border-transparent"
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = hoverBg;
                  el.style.color = hoverColor;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "";
                  el.style.color = "";
                }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="mailto:dikarahmat998@gmail.com"
              aria-label="Email"
              className="grid h-12 w-12 place-items-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur transition-all duration-200 hover:scale-110 hover:border-transparent"
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#EA4335";
                el.style.color = "#ffffff";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "";
                el.style.color = "";
              }}
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background px-6 py-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:justify-between">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-foreground">
                  {n.label}
                </a>
              ))}
            </div>
            <p>© 2026 Dika Rahmat Fadillah</p>
          </div>
        </div>
        <p className="italic-display mt-8 hidden text-center text-foreground/90 sm:block sm:text-6xl md:text-9xl">
          Dika Rahmat Fadillah
        </p>
      </footer>

      {/* ABOUT MODAL */}
      {activeAbout && (() => {
        const info = ABOUT_CARDS.find(c => c.t === activeAbout);
        if (!info) return null;
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={() => setActiveAbout(null)}
          >
            <div
              className="relative w-full max-w-sm rounded-3xl p-6 shadow-2xl"
              style={{ backgroundColor: info.color, color: "#fff" }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveAbout(null)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-lg font-bold transition-opacity hover:opacity-70"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
              >
                ✕
              </button>
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  {info.t === "UI Design"    && <Palette className="h-7 w-7" />}
                  {info.t === "Front-end"    && <Code2   className="h-7 w-7" />}
                  {info.t === "Prototyping"  && <Layers  className="h-7 w-7" />}
                  {info.t === "Research"     && <Rocket  className="h-7 w-7" />}
                </div>
                <h3 className="font-display text-2xl" style={{ color: "#fff" }}>{info.t}</h3>
              </div>
              <div
                className="rounded-2xl p-4"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "#fff", opacity: 0.92 }}>
                  {info.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })()}

      {/* SKILL MODAL */}
      {activeSkill && (() => {
        const info = TECH_INFO[activeSkill];
        const bgColor = info?.color ?? "#1a1a1a";
        const txtColor = info?.textColor ?? "#fff";
        const iconSlug = info?.icon ?? "code/ffffff";
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            onClick={() => setActiveSkill(null)}
          >
            <div
              className="relative w-full max-w-sm rounded-3xl p-6 shadow-2xl"
              style={{ backgroundColor: bgColor, color: txtColor }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveSkill(null)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-lg font-bold transition-opacity hover:opacity-70"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: txtColor }}
              >
                ✕
              </button>
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${iconSlug}`}
                    alt={activeSkill}
                    className="h-7 w-7"
                  />
                </div>
                <h3 className="font-display text-2xl" style={{ color: txtColor }}>{activeSkill}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: txtColor, opacity: 0.92 }}>
                {info?.desc}
              </p>
              <div
                className="rounded-2xl p-3"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: txtColor, opacity: 0.7 }}>
                  Kegunaan
                </p>
                <p className="text-sm leading-relaxed" style={{ color: txtColor }}>
                  {info?.use}
                </p>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
}