import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail, Github, Linkedin, Instagram, ArrowUpRight, Sparkles,
  Code2, Palette, Layers, Rocket, GraduationCap, Briefcase,
} from "lucide-react";
import dikaPortrait from "@/assets/dika-portrait.png";
import logo from "@/assets/logo-dk.png";

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

const TECH_INFO: Record<string, { desc: string; use: string }> = {
  "HTML": { desc: "HyperText Markup Language — bahasa markup dasar untuk membuat struktur halaman web.", use: "Digunakan untuk membuat kerangka/struktur konten di setiap halaman website." },
  "JavaScript": { desc: "Bahasa pemrograman yang berjalan di browser untuk membuat halaman web menjadi interaktif.", use: "Digunakan untuk animasi, validasi form, fetch data dari API, dan logika frontend." },
  "Node JS": { desc: "Runtime JavaScript di sisi server yang memungkinkan JS berjalan di luar browser.", use: "Digunakan untuk membuat backend/server, REST API, dan tools development." },
  "Tailwind CSS": { desc: "Framework CSS berbasis utility-class yang mempercepat styling langsung di HTML.", use: "Digunakan untuk styling cepat tanpa menulis CSS manual, sangat populer di React." },
  "ReactJS": { desc: "Library JavaScript buatan Meta untuk membangun antarmuka pengguna berbasis komponen.", use: "Digunakan untuk membuat UI yang dinamis, reusable, dan mudah di-maintain." },
  "Vite": { desc: "Build tool generasi terbaru yang sangat cepat untuk project frontend modern.", use: "Digunakan sebagai pengganti Webpack, mempercepat development server dan build production." },
  "CSS": { desc: "Cascading Style Sheets — bahasa untuk mengatur tampilan dan gaya halaman HTML.", use: "Digunakan untuk mengatur warna, font, layout, animasi, dan responsivitas halaman." },
  "Bootstrap": { desc: "Framework CSS populer dengan komponen UI siap pakai seperti tombol, navbar, grid.", use: "Digunakan untuk membangun tampilan web responsif dengan cepat tanpa banyak CSS custom." },
  "Firebase": { desc: "Platform Backend-as-a-Service dari Google dengan database realtime, auth, dan hosting.", use: "Digunakan untuk autentikasi user, penyimpanan data realtime, dan deploy aplikasi web." },
  "Material UI": { desc: "Library komponen React yang mengikuti panduan desain Material Design dari Google.", use: "Digunakan untuk membuat UI yang konsisten dan profesional dengan komponen siap pakai." },
  "Vercel": { desc: "Platform cloud untuk deploy dan hosting aplikasi frontend, terutama Next.js dan React.", use: "Digunakan untuk deploy project secara instan dengan integrasi GitHub dan CDN global." },
  "SweetAlert2": { desc: "Library JavaScript untuk membuat dialog/popup/alert yang cantik dan customizable.", use: "Digunakan sebagai pengganti alert bawaan browser dengan tampilan yang lebih menarik." },
};

function Portfolio() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          
          {/* Logo */}
          <a href="#" className="-my-3 md:-my-6">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-9 w-auto md:h-12" 
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden gap-8 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a href="#contact" className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 md:inline-block">
            Hubungi
          </a>

          {/* Hamburger mobile */}
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
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

        {/* Mobile dropdown */}
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
        className="relative overflow-hidden px-6 pt-12 pb-0"
        style={{ background: "var(--gradient-lime)" }}
      >
        <div className="mx-auto max-w-6xl">
          {/* Top badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-4 py-1.5 text-xs backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Tugas Portofolio — Interaksi Manusia & Komputer
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-center font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
            Hi I'm Dika
            <br />
            <span className="italic-display">Mahasiswa Informatika</span>
          </h1>

          {/* Foto + pill + deskripsi */}
          <div className="relative mt-[-30px] md:mt-[-60px]">
            <div className="relative mx-auto flex justify-center">
              <img
                src={dikaPortrait}
                alt="Foto Dika Rahmat Fadillah"
                width={1024}
                height={1024}
                className="relative z-10 h-auto w-[320px] object-contain md:w-[460px] lg:w-[520px]"
                style={{ filter: "drop-shadow(0 30px 40px oklch(0.18 0.01 240 / 0.18))" }}
              />
            </div>

            {/* Pill kiri */}
            <div className="absolute left-8 top-[40%] z-20 hidden md:block">
              <div className="inline-flex items-center gap-2 rounded-full bg-background py-2 pl-2 pr-4 text-sm font-medium shadow-lg">
                <span className="relative grid h-6 w-6 place-items-center rounded-full" style={{ background: "var(--lime)" }}>
                  <span className="h-2 w-2 rounded-full bg-foreground" />
                </span>
                Tersedia untuk kerja sama
              </div>
            </div>

            {/* Teks deskripsi kanan */}
            <div className="absolute right-8 top-[40%] z-20 hidden max-w-[220px] text-sm leading-relaxed text-foreground/80 md:block">
              passionate dalam menciptakan pengalaman digital yang intuitif dengan prinsip IMK.
            </div>

            {/* CTA desktop */}
            <div className="absolute bottom-12 right-8 z-20 hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-primary-foreground shadow-xl transition-transform hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" /> Hubungi Saya
              </a>
            </div>

            {/* Trusted kiri bawah */}
            <div className="absolute bottom-12 left-8 z-20 hidden max-w-[200px] text-xs text-foreground/70 md:block">
              Mahasiswa <strong className="text-foreground">Teknik Informatika</strong> yang fokus pada front-end dan desain UI berlandaskan IMK.
            </div>

            {/* CTA mobile */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center md:hidden">
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
      <div className="w-full overflow-hidden border-y border-border bg-background py-4">
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
            <span key={i} className="italic-display whitespace-nowrap text-lg text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.5fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Tentang <span className="italic-display">Saya</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Saya seorang mahasiswa yang antusias dalam dunia desain dan teknologi.
            Berfokus pada perpaduan antara <span className="text-foreground">strategi yang jelas, desain yang rapi, dan empati terhadap pengguna</span> untuk menciptakan pengalaman digital yang benar-benar bermakna.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { i: Palette, t: "UI Design" },
            { i: Code2, t: "Front-end" },
            { i: Layers, t: "Prototyping" },
            { i: Rocket, t: "Research" },
          ].map(({ i: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <span
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{ background: "var(--lime)" }}
              >
                <Icon className="h-5 w-5 text-foreground" />
              </span>
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative overflow-hidden bg-background px-6 py-28">
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
            { n: "HTML", s: "html5", c: "FFFFFF", bg: "#E34F26", hoverBg: "#E34F26", hoverText: "#FFFFFF" },
            { n: "JavaScript", s: "javascript", c: "000000", bg: "#F7DF1E", hoverBg: "#F7DF1E", hoverText: "#000000" },
            { n: "Node JS", s: "nodedotjs", c: "FFFFFF", bg: "#339933", hoverBg: "#339933", hoverText: "#FFFFFF" },
          ];
          const right = [
            { n: "Tailwind CSS", s: "tailwindcss", c: "FFFFFF", bg: "#06B6D4", hoverBg: "#06B6D4", hoverText: "#FFFFFF" },
            { n: "ReactJS", s: "react", c: "000000", bg: "#61DAFB", hoverBg: "#61DAFB", hoverText: "#000000" },
            { n: "Vite", s: "vite", c: "FFFFFF", bg: "#646CFF", hoverBg: "#646CFF", hoverText: "#FFFFFF" },
          ];
          return (
            <>
              <div className="md:hidden">
                <div className="mb-6 flex flex-wrap justify-center gap-3">
                  {left.map(t => makePill(t))}
                  {right.map(t => makePill(t))}
                </div>
                <div className="text-center px-2 mb-6">
                  <h2 className="font-display text-3xl leading-[1.15] tracking-tight">
                    fokus saya pada perpaduan <span className="italic-display">strategi yang jelas</span>, desain yang rapi, dan empati pengguna untuk{" "}
                    <span className="text-muted-foreground">menciptakan pengalaman yang bermakna</span>
                  </h2>
                </div>
              </div>

              <div className="hidden md:grid mx-auto max-w-6xl items-center gap-10 md:grid-cols-[auto_1fr_auto]">
                <div className="flex flex-col gap-10">
                  {left.map((t, i) => makePill(t, { transform: i === 1 ? "translateX(28px)" : i === 2 ? "translateX(10px)" : "translateX(-10px)" }))}
                </div>
                <div className="text-center">
                  <h2 className="font-display text-5xl leading-[1.15] tracking-tight">
                    fokus saya pada perpaduan <span className="italic-display">strategi yang jelas</span>, desain yang rapi, dan empati pengguna untuk{" "}
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

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-3">
          {[
            { n: "CSS", s: "css3", c: "FFFFFF", bg: "#1572B6", hoverBg: "#1572B6", hoverText: "#FFFFFF" },
            { n: "Bootstrap", s: "bootstrap", c: "FFFFFF", bg: "#7952B3", hoverBg: "#7952B3", hoverText: "#FFFFFF" },
            { n: "Firebase", s: "firebase", c: "000000", bg: "#FFCA28", hoverBg: "#FFCA28", hoverText: "#000000" },
            { n: "Material UI", s: "mui", c: "FFFFFF", bg: "#007FFF", hoverBg: "#007FFF", hoverText: "#FFFFFF" },
            { n: "Vercel", s: "vercel", c: "FFFFFF", bg: "#000000", hoverBg: "#000000", hoverText: "#FFFFFF" },
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
      <section className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">
                Riwayat <span className="italic-display">Pendidikan</span>
              </h2>
            </div>
            <GraduationCap className="hidden h-10 w-10 text-muted-foreground md:block" />
          </div>

          <div className="space-y-px overflow-hidden rounded-3xl border border-border bg-card">
            {[
              { y: "2024 — Sekarang", s: "S1 Teknik Informatika", i: "Universitas Pamulang" },
              { y: "2021 — 2024", s: "SMA — Jurusan IPA", i: "SMA Negeri 1 Sendang Agung" },
              { y: "2018 — 2021", s: "SMP", i: "SMP Negeri 2 Sendang Agung" },
            ].map((e) => (
              <div key={e.s} className="grid grid-cols-1 gap-2 border-b border-border p-6 last:border-0 md:grid-cols-3">
                <span className="text-sm text-muted-foreground">{e.y}</span>
                <span className="italic-display text-xl md:col-span-1">{e.s}</span>
                <span className="text-sm text-muted-foreground md:text-right">{e.i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-4xl md:text-5xl">
            My <span className="italic-display">Project</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                t: "KantinKu",
                desc: "Aplikasi pemesanan makanan kantin berbasis web. Pesan makan, tanpa antre.",
                tag: "React • Vite • Firebase",
                url: "https://kantinku-chi.vercel.app/",
                img: "/kantinku.png", // GANTI NAMA INI SESUAI FILE GAMBAR KAMU DI FOLDER PUBLIC
              },
              {
                t: "do.it",
                desc: "Aplikasi todo list simpel dan bersih untuk mengelola tugas harian.",
                tag: "React • Vite • Tailwind CSS",
                url: "https://todo-app-dikarahmats-projects.vercel.app/",
                img: "/doit.png", // GANTI NAMA INI SESUAI FILE GAMBAR KAMU DI FOLDER PUBLIC
              },
              {
                t: "skies.",
                desc: "Aplikasi cuaca modern untuk cek kondisi cuaca real-time kota mana saja.",
                tag: "React • Vite • OpenWeather API",
                url: "https://weather-app-hazel-delta-31.vercel.app/",
                img: "/skies.png", // GANTI NAMA INI SESUAI FILE GAMBAR KAMU DI FOLDER PUBLIC
              },
              {
                t: "memory_",
                desc: "Card matching memory game dengan 4 level kesulitan, timer, dan best score.",
                tag: "React • Vite • CSS",
                url: "https://memory-dk.vercel.app/",
                img: "/memory.png", // GANTI NAMA INI SESUAI FILE GAMBAR KAMU DI FOLDER PUBLIC
              },
            ].map((p) => (
              <a key={p.t} href={p.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div
                  className="aspect-[4/3] overflow-hidden rounded-3xl border border-border transition-transform group-hover:-translate-y-2 bg-secondary"
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
                      <ArrowUpRight className="h-6 w-6 text-white/70 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">{p.t}</h3>
                    <span className="text-xs text-muted-foreground">{p.tag}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-secondary px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">
                Organisasi & <span className="italic-display">Kegiatan</span>
              </h2>
            </div>
            <Briefcase className="hidden h-10 w-10 text-muted-foreground md:block" />
          </div>

          <div className="space-y-4">
            {[
              { r: "OSIS", c: "Ketua OSIS", y: "2022 — 2023" },
              { r: "Pramuka", c: "Pradana Putra", y: "2021 — 2023" },
            ].map((e) => (
              <div key={e.r} className="grid grid-cols-1 items-center gap-2 rounded-2xl border border-border bg-card p-6 md:grid-cols-[2fr_2fr_1fr]">
                <span className="italic-display text-xl">{e.r}</span>
                <span className="text-muted-foreground">{e.c}</span>
                <span className="text-sm text-muted-foreground md:text-right">{e.y}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 py-28 text-center"
        style={{ background: "var(--gradient-lime)" }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            Mari <span className="italic-display">Berkolaborasi</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Saya selalu terbuka untuk diskusi, kolaborasi proyek kampus,
            ataupun sekadar bertukar ide kreatif seputar desain dan teknologi.
          </p>
          <a
            href="https://wa.me/6281538781271"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <div className="mt-10 flex justify-center gap-4">
            {[
              { i: Github, h: "https://github.com/dikarahmat" },
              { i: Linkedin, h: "https://www.linkedin.com/in/dika-rahmat-fadillah-43a68231a/" },
              { i: Instagram, h: "https://www.instagram.com/paparazzziii_?igsh=bGdxMnl1cDg5amxt" },
            ].map(({ i: Icon, h }, idx) => (
              <a
                key={idx}
                href={h}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur transition-transform hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="mailto:dikarahmat998@gmail.com"
              className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 bg-background/70 backdrop-blur transition-transform hover:scale-110"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-row items-center justify-between gap-x-4 text-sm text-muted-foreground">
          <p className="shrink-0">© 2026 Dika Rahmat Fadillah</p>
          <div className="flex flex-wrap justify-end gap-x-4 gap-y-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground">{n.label}</a>
            ))}
          </div>
        </div>
        <p className="italic-display mt-8 text-center text-4xl text-foreground/90 sm:text-6xl md:text-9xl">
          Dika Rahmat Fadillah
        </p>
      </footer>

      {/* SKILL MODAL */}
      {activeSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setActiveSkill(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl border border-border bg-background p-6 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSkill(null)}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:bg-secondary"
            >
              ✕
            </button>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={`https://cdn.simpleicons.org/${
                  activeSkill === "HTML" ? "html5/E34F26" :
                  activeSkill === "JavaScript" ? "javascript/F7DF1E" :
                  activeSkill === "Node JS" ? "nodedotjs/339933" :
                  activeSkill === "Tailwind CSS" ? "tailwindcss/06B6D4" :
                  activeSkill === "ReactJS" ? "react/61DAFB" :
                  activeSkill === "Vite" ? "vite/646CFF" :
                  activeSkill === "CSS" ? "css3/1572B6" :
                  activeSkill === "Bootstrap" ? "bootstrap/7952B3" :
                  activeSkill === "Firebase" ? "firebase/FFCA28" :
                  activeSkill === "Material UI" ? "mui/007FFF" :
                  activeSkill === "Vercel" ? "vercel/000000" :
                  "sweetalert2/FF7043"
                }`}
                alt={activeSkill}
                className="h-8 w-8"
              />
              <h3 className="font-display text-2xl">{activeSkill}</h3>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-foreground">{TECH_INFO[activeSkill]?.desc}</p>
            <div className="rounded-2xl bg-secondary p-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">Kegunaan</p>
              <p className="text-sm leading-relaxed">{TECH_INFO[activeSkill]?.use}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}