"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Award,
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Brain,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  Database,
  FileText,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Scale,
  Sun,
  Users,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
};

type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  period?: string;
  role?: string;
  category: string;
  technologies: string[];
  features: string[];
  screenshots: Screenshot[];
  githubUrl?: string | null;
  liveUrl?: string | null;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  work: { title: string; description: string }[];
  scope: string[];
};

const CV_FILE_NAME = "cv.pdf";
const CV_URL = `/cv/${CV_FILE_NAME}`;
const INTRO_STORAGE_KEY = "portfolio-intro-seen-v2";

const profile = {
  name: "Muh. Fatkhur Rozaq Nur Abin",
  role: "Software Developer",
  images: [
    {
      src: "/images/profile/profile-01.jpg",
      alt: "Profile photo of Muh. Fatkhur Rozaq Nur Abin",
    },
    {
      src: "/images/profile/profile-02.jpg",
      alt: "Profile photo of Muh. Fatkhur Rozaq Nur Abin",
    },
  ] as Screenshot[],
  email: "mfrnaoza@gmail.com",
  phone: "0895414256031",
  phoneInternational: "+62895414256031",
  whatsappUrl: "https://wa.me/62895414256031",
  cvUrl: CV_URL,
  location: "  Magetan, Jawa Timur",
  socials: {
    github: "https://github.com/muhfatkhur" as string | null,
    linkedin: null as string | null,
  },
};

const projects: Project[] = [
  {
    slug: "geofencing-attendance",
    title: "Sistem Presensi Berbasis Geofencing",
    shortDescription:
      "Validasi presensi berbasis lokasi dengan notifikasi WhatsApp otomatis dan real-time.",
    fullDescription:
      "Sistem presensi yang menggunakan Leaflet.js dan konsep geofencing untuk memvalidasi lokasi, lalu mengintegrasikan Fonnte API untuk mengirim notifikasi WhatsApp secara otomatis dan real-time.",
    period: "Desember 2025 — Juli 2026",
    role: "Freelance Software Developer",
    category: "Web System / Location Technology",
    technologies: ["Leaflet.js", "Geofencing", "Fonnte API", "API Integration"],
    features: [
      "Validasi lokasi untuk proses presensi",
      "Integrasi peta menggunakan Leaflet.js",
      "Notifikasi WhatsApp otomatis dan real-time melalui Fonnte API",
    ],
    screenshots: [
      {
        src: "/images/projects/geofencing-attendance/01.png",
        alt: "Preview sistem presensi berbasis geofencing",
        caption: "Preview utama — screenshot 01",
      },
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    slug: "workshop-recommendation",
    title: "Sistem Informasi Manajemen, Compro & SPK Bengkel",
    shortDescription:
      "Platform Company Profile, manajemen bengkel, helpdesk, K-Means, dan AHP dalam satu ekosistem web.",
    fullDescription:
      "Platform web terintegrasi yang berfungsi sebagai Company Profile interaktif sekaligus sistem informasi manajemen back-end Bengkel Mas Das Balai Karya, dengan helpdesk konsultasi, segmentasi pelanggan, dan pendukung keputusan strategi pemasaran.",
    period: "Desember 2025 — Juli 2026",
    role: "Full-Stack Developer",
    category: "Company Profile & Management System",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Vanilla JavaScript", "K-Means", "AHP"],
    features: [
      "Company Profile dan katalog layanan bengkel",
      "Helpdesk konsultasi pelanggan",
      "Segmentasi K-Means dan keputusan strategis AHP",
    ],
    screenshots: [
      {
        src: "/images/projects/workshop/workshop-01.jpg",
        alt: "Preview sistem rekomendasi bengkel",
        caption: "Preview utama — screenshot 01",
      },
    ],
    githubUrl: "https://github.com/muhfatkhur/Compro-AHP-KMeans",
    liveUrl: null,
  },
  {
    slug: "pos-sales-forecasting",
    title: "Point of Sales dengan Forecasting",
    shortDescription:
      "Sistem Point of Sales dengan fitur peramalan penjualan menggunakan metode Holt Linear.",
    fullDescription:
      "Sistem Point of Sales yang dilengkapi fitur forecasting penjualan menggunakan metode Holt Linear.",
    period: "Desember 2025 — Juli 2026",
    role: "Freelance Software Developer",
    category: "Business System / Forecasting",
    technologies: ["POS", "Holt Linear", "Forecasting", "Web Development"],
    features: [
      "Alur kerja Point of Sales",
      "Forecasting penjualan",
      "Perhitungan menggunakan metode Holt Linear",
    ],
    screenshots: [
      {
        src: "/images/projects/pos-sales-forecasting/01.png",
        alt: "Preview point of sales dengan forecasting",
        caption: "Preview utama — screenshot 01",
      },
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    slug: "siakad-mahad",
    title: "SIAKAD Ma'had Al-Jami'ah",
    shortDescription:
      "Sistem informasi akademik mobile dengan Flutter, backend Laravel, dan integrasi REST API.",
    fullDescription:
      "Sistem Informasi Akademik untuk Ma'had Al-Jami'ah yang dikembangkan mulai dari perancangan hingga implementasi, mencakup aplikasi mobile Flutter dan backend Laravel melalui REST API.",
    period: "Mei 2025 — Juli 2025",
    role: "Software Engineer Intern",
    category: "Mobile / Backend System",
    technologies: [
      "Flutter",
      "Laravel",
      "REST API",
      "Mobile Development",
      "Backend Development",
    ],
    features: [
      "Aplikasi mobile dengan antarmuka responsif",
      "Backend Laravel dan integrasi REST API",
      "Testing, bug fixing, dan maintenance",
      "Pengembangan dari perancangan hingga implementasi",
    ],
    screenshots: [
      {
        src: "/images/projects/siakad-mahad/01.png",
        alt: "Preview SIAKAD Ma'had Al-Jami'ah",
        caption: "Preview utama — screenshot 01",
      },
    ],
    githubUrl: null,
    liveUrl: null,
  },
];

const experiences: Experience[] = [
  {
    company: "Independent / Freelance",
    role: "Freelance Software Developer",
    period: "Desember 2025 — Juli 2026",
    description:
      "Mengembangkan beberapa sistem web yang berfokus pada validasi lokasi, rekomendasi berbasis data, dan forecasting penjualan.",
    work: [
      {
        title: "Location-aware attendance",
        description:
          "Mengembangkan sistem presensi berbasis geofencing menggunakan Leaflet.js untuk validasi lokasi secara akurat, serta Fonnte API untuk notifikasi WhatsApp otomatis dan real-time.",
      },
      {
        title: "Workshop recommendation",
        description:
          "Membangun website profil dan sistem rekomendasi bengkel menggunakan metode K-Means dan Analytical Hierarchy Process (AHP).",
      },
      {
        title: "Sales forecasting",
        description:
          "Mengembangkan sistem Point of Sales dengan fitur forecasting penjualan menggunakan metode Holt Linear.",
      },
    ],
    scope: [
      "Web Development",
      "Leaflet.js",
      "Geofencing",
      "Fonnte API",
      "K-Means",
      "AHP",
      "Holt Linear",
    ],
  },
  {
    company: "UIN Raden Mas Said Surakarta",
    role: "Software Engineer Intern",
    period: "Mei 2025 — Juli 2025",
    description:
      "Terlibat dalam siklus pengembangan SIAKAD Ma'had Al-Jami'ah, dari perancangan dan implementasi hingga pengujian serta pemeliharaan.",
    work: [
      {
        title: "Mobile application",
        description:
          "Membangun aplikasi mobile menggunakan Flutter dengan antarmuka yang responsif dan mudah digunakan.",
      },
      {
        title: "Backend & integration",
        description:
          "Mengembangkan backend menggunakan Laravel dan REST API untuk mendukung integrasi sistem.",
      },
      {
        title: "Quality & maintenance",
        description:
          "Melakukan pengujian, perbaikan bug, dan pemeliharaan aplikasi guna memastikan sistem berjalan optimal.",
      },
    ],
    scope: [
      "Flutter",
      "Laravel",
      "REST API",
      "Testing",
      "Bug Fixing",
      "Maintenance",
      "Software Development Lifecycle",
    ],
  },
];

const skills = [
  {
    number: "01",
    title: "Languages",
    items: ["PHP", "Dart", "Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    items: ["Laravel", "Flutter", "Tailwind CSS", "Leaflet.js"],
  },
  {
    number: "03",
    title: "Database & Tools",
    items: ["MySQL", "REST API", "Git/GitHub", "Laragon", "Postman"],
  },
  {
    number: "04",
    title: "Technical Concepts",
    items: [
      "MVC Architecture",
      "K-Means Clustering",
      "Analytical Hierarchy Process (AHP)",
      "Geofencing",
    ],
  },
  {
    number: "05",
    title: "Soft Skills",
    items: [
      "Teamwork",
      "Leadership",
      "Critical Thinking",
      "Problem Solving",
      "Time Management",
      "Project Management",
    ],
  },
];

const skillBrandLogos: Record<string, string> = {
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  Laravel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Leaflet.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leaflet/leaflet-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Git/GitHub":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
};

const skillGenericIcons: Record<string, LucideIcon> = {
  SQL: Database,
  "REST API": Network,
  Laragon: Wrench,
  "MVC Architecture": Boxes,
  "K-Means Clustering": Layers,
  "Analytical Hierarchy Process (AHP)": Scale,
  Geofencing: MapPin,
  Teamwork: Users,
  Leadership: Award,
  "Critical Thinking": Brain,
  "Problem Solving": Lightbulb,
  "Time Management": Clock,
  "Project Management": ClipboardList,
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skill" },
  { id: "projects", label: "Project" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

function TextReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const words = text.trim().split(/\s+/);

  return (
    <span ref={textRef} className={`text-reveal ${visible ? "text-reveal-visible" : ""} ${className}`}>
      <span className="text-reveal-accessible">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="text-reveal-word"
            style={{ "--word-delay": `${delay + index * 26}ms` } as CSSProperties}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="section-heading grid gap-3 border-t border-[var(--line)] pt-5 md:grid-cols-[9rem_1fr] md:gap-8">
        <p className="font-mono text-xs tracking-[0.16em] text-[var(--muted)]">
          {number} / {eyebrow.toUpperCase()}
        </p>
        <h2 className="max-w-4xl text-balance text-3xl font-medium tracking-[-0.04em] text-[var(--fg)] sm:text-4xl lg:text-5xl">
          <TextReveal text={title} />
        </h2>
      </div>
    </Reveal>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Technology and scope">
      {items.map((item) => (
        <li
          key={item}
          className="tag-item font-mono text-xs leading-6 text-[var(--muted)] before:mr-2 before:text-[var(--accent)] before:content-['/']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function InlineTags({ items }: { items: string[] }) {
  return (
    <span className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Technology and scope">
      {items.map((item) => (
        <span
          key={item}
          className="tag-item font-mono text-xs leading-6 text-[var(--muted)] before:mr-2 before:text-[var(--accent)] before:content-['/']"
        >
          {item}
        </span>
      ))}
    </span>
  );
}

function SkillLogo({ skill }: { skill: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const brandLogo = skillBrandLogos[skill];
  const GenericIcon = skillGenericIcons[skill];

  return (
    <span
      className="skill-logo grid size-8 shrink-0 place-items-center border border-[var(--line)] bg-[var(--surface)]"
      aria-hidden="true"
    >
      {brandLogo && !imageFailed ? (
        <img
          src={brandLogo}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          decoding="async"
          className="size-5 object-contain"
          onError={() => setImageFailed(true)}
        />
      ) : GenericIcon ? (
        <GenericIcon className="size-4 text-[var(--accent)]" strokeWidth={1.8} />
      ) : (
        <span className="font-mono text-[0.58rem] font-semibold text-[var(--accent)]">
          {skill.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  );
}

function ProfileCarousel({ screenshots, title }: { screenshots: Screenshot[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedSources, setFailedSources] = useState<Record<string, boolean>>({});

  const hasMultiple = screenshots.length > 1;
  const goTo = (index: number) => {
    if (!screenshots.length) return;
    setCurrent((index + screenshots.length) % screenshots.length);
  };
  const previous = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (!hasMultiple || isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % screenshots.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [hasMultiple, isPaused, screenshots.length]);

  const finishDrag = (clientX: number) => {
    if (dragStart === null) return;
    const distance = clientX - dragStart;
    if (Math.abs(distance) > 48 && hasMultiple) {
      distance > 0 ? previous() : next();
    }
    setDragStart(null);
    setDragOffset(0);
  };

  if (!screenshots.length) return null;

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div
        className="profile-carousel-shell group relative min-h-0 flex-1 overflow-hidden outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} profile photos`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" && hasMultiple) previous();
          if (event.key === "ArrowRight" && hasMultiple) next();
        }}
        onPointerDown={(event) => {
          setDragStart(event.clientX);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (dragStart !== null) setDragOffset(event.clientX - dragStart);
        }}
        onPointerUp={(event) => finishDrag(event.clientX)}
        onPointerCancel={() => {
          setDragStart(null);
          setDragOffset(0);
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        style={{ touchAction: "pan-y", cursor: dragStart === null ? "grab" : "grabbing" }}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
            transitionDuration: dragStart === null ? undefined : "0ms",
          }}
        >
          {screenshots.map((screenshot, index) => (
            <figure
              key={`${screenshot.src}-${index}`}
              className="profile-frame relative h-full w-full shrink-0"
              aria-hidden={index !== current}
            >
              {failedSources[screenshot.src] ? (
                <div className="grid size-full place-items-center bg-[var(--surface)] p-6 text-center text-xs leading-5 text-[var(--muted)]">
                  Foto profil belum tersedia.
                  <br />
                  <code className="mt-1 break-all text-[var(--accent)]">public{screenshot.src}</code>
                </div>
              ) : (
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="24rem"
                  priority={index === 0}
                  className="pointer-events-none select-none object-cover object-center sm:object-contain sm:object-top"
                  onError={() =>
                    setFailedSources((currentSources) => ({
                      ...currentSources,
                      [screenshot.src]: true,
                    }))
                  }
                />
              )}
            </figure>
          ))}
        </div>

        {hasMultiple && (
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
            <button
              type="button"
              onClick={previous}
              onPointerDown={(event) => event.stopPropagation()}
              className={`${focusRing} pointer-events-auto grid size-10 place-items-center bg-[color:var(--bg)]/85 text-[var(--fg)] opacity-80 shadow-sm transition-opacity hover:opacity-100 focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100`}
              aria-label="Previous profile photo"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              onPointerDown={(event) => event.stopPropagation()}
              className={`${focusRing} pointer-events-auto grid size-10 place-items-center bg-[color:var(--bg)]/85 text-[var(--fg)] opacity-80 shadow-sm transition-opacity hover:opacity-100 focus-visible:opacity-100 sm:opacity-0 sm:group-hover:opacity-100`}
              aria-label="Next profile photo"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        )}
      </div>

      {hasMultiple && (
        <div
          className="mt-3 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label="Choose profile photo"
        >
          {screenshots.map((screenshot, index) => (
            <button
              key={`${screenshot.src}-profile-dot-${index}`}
              type="button"
              onClick={() => goTo(index)}
              className={`size-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${
                index === current
                  ? "scale-125 bg-[var(--accent)]"
                  : "bg-[var(--line)] hover:bg-[var(--muted)]"
              }`}
              aria-label={`Go to profile photo ${index + 1} of ${screenshots.length}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CpuCoreMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={`cpu-core-mark ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <g className="cpu-core-orbit">
        <ellipse cx="120" cy="120" rx="94" ry="38" />
        <ellipse cx="120" cy="120" rx="94" ry="38" transform="rotate(60 120 120)" />
        <ellipse cx="120" cy="120" rx="94" ry="38" transform="rotate(-60 120 120)" />
      </g>
      <path
        className="cpu-core-pins"
        d="M70 72H48M70 88H40M70 104H34M70 136H34M70 152H40M70 168H48M170 72h22M170 88h30M170 104h36M170 136h36M170 152h30M170 168h22M72 70V48M88 70V40M104 70V34M136 70V34M152 70V40M168 70V48M72 170v22M88 170v30M104 170v36M136 170v36M152 170v30M168 170v22"
      />
      <rect className="cpu-core-board" x="70" y="70" width="100" height="100" rx="12" />
      <rect className="cpu-core-inner" x="89" y="89" width="62" height="62" rx="8" />
      <path className="cpu-core-circuit" d="M103 111h34M103 129h22M113 103v12M127 125v12M137 103v10" />
      <text className="cpu-core-label" x="120" y="125" textAnchor="middle">
        OZA
      </text>
    </svg>
  );
}

function PortfolioLoader({ progress, exiting }: { progress: number; exiting: boolean }) {
  return (
    <div
      className={`portfolio-loader ${exiting ? "portfolio-loader-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="portfolio-loader-grid" aria-hidden="true" />
      <div className="portfolio-loader-noise" aria-hidden="true" />
      <div className="portfolio-loader-scanline" aria-hidden="true" />
      <div className="portfolio-loader-header" aria-hidden="true">
        <span className="flex items-center gap-2">
          <span className="loader-status-dot" />
          OZA // PORTFOLIO OS
        </span>
        <span>BOOT SEQUENCE / 01</span>
      </div>
      <div className="portfolio-loader-content">
        <div className="cpu-core-scene" aria-hidden="true">
          <span className="cpu-core-radar" />
          <span className="cpu-core-ring cpu-core-ring-one" />
          <span className="cpu-core-ring cpu-core-ring-two" />
          <span className="cpu-core-ring cpu-core-ring-three" />
          <span className="cpu-core-particle cpu-core-particle-one" />
          <span className="cpu-core-particle cpu-core-particle-two" />
          <span className="cpu-core-particle cpu-core-particle-three" />
          <span className="cpu-core-particle cpu-core-particle-four" />
          <div className="cpu-core-wrap">
            <CpuCoreMark className="size-full" />
          </div>
        </div>
        <div className="portfolio-loader-copy">
          <p className="portfolio-loader-kicker">
            <span className="loader-status-dot" aria-hidden="true" />
            SYSTEM ONLINE
            <span className="portfolio-loader-code">/ CORE 01</span>
          </p>
          <h1 className="portfolio-loader-title">WELCOME TO MY PORTFOLIO</h1>
          <p className="portfolio-loader-subtitle">BUILDING DIGITAL EXPERIENCES</p>
        </div>
        <div className="portfolio-loader-progress-wrap">
          <div className="portfolio-loader-meta">
            <span>INITIALIZING PORTFOLIO</span>
            <span>{String(progress).padStart(3, "0")}%</span>
          </div>
          <div
            className="portfolio-loader-track"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label="Portfolio loading progress"
          >
            <span className="portfolio-loader-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
      <div className="portfolio-loader-footer" aria-hidden="true">
        <span>MUH. FATKHUR ROZAQ NUR ABIN</span>
        <span>PLEASE WAIT <span className="loader-footer-cursor" /></span>
      </div>
    </div>
  );
}

function CvPreviewModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], iframe, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="cv-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="cv-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
        <div className="cv-modal-header">
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.16em] text-[var(--accent)]">DOCUMENT / 01</p>
            <h2 id="cv-modal-title" className="mt-2 text-xl font-medium tracking-[-0.03em]">
              Curriculum Vitae
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className={`${focusRing} grid size-10 place-items-center border border-[var(--line)] text-[var(--fg)] transition-colors hover:border-[var(--fg)]`}
            aria-label="Close CV preview"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        <div className="cv-preview-frame">
          <iframe
            src={`${profile.cvUrl}#toolbar=0&navpanes=0&view=FitH`}
            title="CV preview"
            className="size-full border-0"
          />
        </div>

        <div className="cv-modal-footer">
          <div className="min-w-0">
            <p className="font-mono text-[0.6rem] tracking-[0.16em] text-[var(--muted)]">CV FILE</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Lihat ringkasan pengalaman dan keahlian.</p>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${focusRing} mt-2 inline-flex text-xs font-semibold text-[var(--accent)] hover:underline`}
            >
              Buka CV di tab baru
            </a>
          </div>
          <a
            href={profile.cvUrl}
            download={CV_FILE_NAME}
            className={`${focusRing} group inline-flex min-h-11 items-center justify-center gap-3 bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-contrast)]`}
          >
            Download CV
            <ArrowDownRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectPreviewImage({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const screenshot = project.screenshots[0];

  if (!screenshot || imageFailed) {
    return (
      <div className="project-preview-image grid aspect-[16/10] place-items-center border border-dashed border-[var(--line)] bg-[var(--surface)] p-5 text-center">
        <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">
          Tambahkan foto pertama project di:
          <br />
          <code className="break-all text-xs text-[var(--accent)]">
            public{screenshot?.src ?? `/images/projects/${project.slug}/01.png`}
          </code>
        </p>
      </div>
    );
  }

  return (
    <figure className="project-preview-image overflow-hidden border border-[var(--line)] bg-[var(--surface)]">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 1023px) 100vw, 42vw"
          loading="lazy"
          className="object-contain p-2 sm:p-3"
          onError={() => setImageFailed(true)}
        />
      </div>
      {screenshot.caption && (
        <figcaption className="border-t border-[var(--line)] px-3 py-2 text-xs text-[var(--muted)] sm:px-4 sm:py-3 sm:text-sm">
          {screenshot.caption}
        </figcaption>
      )}
    </figure>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--line)] pt-5">
      <span className="font-mono text-[0.6rem] tracking-[0.14em] text-[var(--muted)]">LINKS</span>
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${focusRing} inline-flex items-center gap-2 text-sm font-semibold text-[var(--fg)] hover:text-[var(--accent)]`}
        >
          GitHub <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      ) : (
        <span className="text-sm text-[var(--muted)]">GitHub belum tersedia</span>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${focusRing} inline-flex items-center gap-2 text-sm font-semibold text-[var(--fg)] hover:text-[var(--accent)]`}
        >
          Live demo <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      )}
    </div>
  );
}

function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      <ProjectVisual project={project} />
      <ProjectLinks project={project} />
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual" role="group" aria-label={`${project.title} project preview`}>
      <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-3 font-mono text-[0.6rem] tracking-[0.14em] text-[var(--muted)]">
        <span className="flex items-center gap-3">
          <span className="project-status-dot" aria-hidden="true" />
          PROJECT PREVIEW
        </span>
        <span>IMAGE 01</span>
      </div>
      <div className="mt-4">
        <ProjectPreviewImage project={project} />
      </div>
    </div>
  );
}

function ProjectIndex({
  project,
  index,
  active,
  onActivate,
  onNavigate,
}: {
  project: Project;
  index: number;
  active: boolean;
  onActivate: () => void;
  onNavigate: (event: ReactMouseEvent<HTMLAnchorElement>, href: string, project: Project) => void;
}) {
  const href = `/projects/${project.slug}`;
  const indexLabel = `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

  return (
    <article
      className={`project-row group border-t border-[var(--line)] transition-colors last:border-b ${active ? "project-row-active bg-[var(--surface)]" : "bg-transparent"}`}
      onMouseEnter={onActivate}
      onFocusCapture={onActivate}
    >
      <Link
        href={href}
        onClick={(event) => onNavigate(event, href, project)}
        className={`${focusRing} hidden w-full gap-5 px-5 py-8 lg:grid lg:grid-cols-[4.5rem_1fr_auto] lg:items-start`}
        aria-label={`View project: ${project.title}`}
      >
        <span className="project-row-index font-mono text-xs text-[var(--muted)]">{indexLabel}</span>
        <span>
          <span className="block text-2xl font-medium tracking-[-0.025em] text-[var(--fg)]">{project.title}</span>
          <span className="mt-2 block max-w-2xl text-base leading-7 text-[var(--muted)]">{project.shortDescription}</span>
          <span className="mt-4 block"><Tags items={project.technologies} /></span>
        </span>
        <ArrowUpRight aria-hidden="true" className="size-5 text-[var(--accent)] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>

      <div className="lg:hidden">
        <Link
          href={href}
          onClick={(event) => onNavigate(event, href, project)}
          className={`${focusRing} flex w-full items-start justify-between gap-4 px-0 py-7 text-left sm:px-5`}
          aria-label={`View project: ${project.title}`}
        >
          <span className="grid min-w-0 grid-cols-[3.5rem_1fr] gap-4 sm:grid-cols-[4.5rem_1fr]">
            <span className="project-row-index font-mono text-xs text-[var(--muted)]">{indexLabel}</span>
            <span>
              <span className="block text-xl font-medium tracking-[-0.025em] text-[var(--fg)] sm:text-2xl">{project.title}</span>
              <span className="mt-2 block text-base leading-7 text-[var(--muted)]">{project.shortDescription}</span>
              <span className="mt-4 block"><InlineTags items={project.technologies} /></span>
            </span>
          </span>
          <ArrowUpRight aria-hidden="true" className="mt-1 size-5 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <div className="pb-8 pt-2 sm:px-5">
          <ProjectOverview project={project} />
        </div>
      </div>
    </article>
  );
}

function ExperienceItem({ experience, index }: { experience: Experience; index: number }) {
  return (
    <article className="experience-item grid gap-8 border-t border-[var(--line)] py-10 lg:grid-cols-[9rem_0.8fr_1.2fr] lg:gap-10 lg:py-14">
      <p className="font-mono text-xs tracking-[0.12em] text-[var(--muted)]">
        EXP—{String(index + 1).padStart(2, "0")}
      </p>
      <div>
        <p className="text-sm leading-6 text-[var(--muted)]">{experience.period}</p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-[var(--fg)]">
          {experience.role}
        </h3>
        <p className="mt-2 text-base leading-7 text-[var(--muted)]">{experience.company}</p>
        <p className="mt-6 text-base leading-7 text-[var(--fg)]">{experience.description}</p>
        <div className="mt-6">
          <Tags items={experience.scope} />
        </div>
      </div>
      <div className="space-y-7 lg:border-l lg:border-[var(--line)] lg:pl-10">
        {experience.work.map((item) => (
          <div key={item.title} className="grid gap-3 sm:grid-cols-[1.1rem_1fr]">
            <Check aria-hidden="true" className="mt-1 size-4 text-[var(--accent)]" />
            <div>
              <h4 className="text-sm font-semibold text-[var(--fg)]">{item.title}</h4>
              <p className="mt-1 text-base leading-7 text-[var(--muted)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function ThemeButton({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`${focusRing} theme-button grid size-10 place-items-center border border-[var(--line)] text-[var(--fg)] transition-colors hover:border-[var(--fg)]`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      aria-pressed={theme === "dark"}
    >
      {theme === "light" ? (
        <Moon aria-hidden="true" className="size-4" />
      ) : (
        <Sun aria-hidden="true" className="size-4" />
      )}
    </button>
  );
}

export default function PortfolioPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [activeProject, setActiveProject] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [transitionProject, setTransitionProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [introProgress, setIntroProgress] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [introExiting, setIntroExiting] = useState(false);
  const [introReady, setIntroReady] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const navigationTimer = useRef<number | null>(null);

  const currentProjectIndex = projects[activeProject] ? activeProject : 0;
  const currentProject = useMemo(
    () => projects[currentProjectIndex] ?? null,
    [currentProjectIndex],
  );

  useEffect(() => {
    let frame = 0;
    let holdTimeout = 0;
    let exitTimeout = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    try {
      if (window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "1") {
        setIntroProgress(100);
        setIntroReady(true);
        setIntroVisible(false);
        return;
      }
    } catch {
      // The intro still runs when session storage is unavailable.
    }

    const duration = reducedMotion ? 320 : 1900;
    const startedAt = performance.now();

    const updateIntro = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      setIntroProgress(Math.round(progress * 100));

      if (progress < 1) {
        frame = window.requestAnimationFrame(updateIntro);
        return;
      }

      holdTimeout = window.setTimeout(() => {
        try {
          window.sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
        } catch {
          // The intro can still finish without session storage.
        }
        setIntroReady(true);
        setIntroExiting(true);
        exitTimeout = window.setTimeout(
          () => setIntroVisible(false),
          reducedMotion ? 0 : 720,
        );
      }, reducedMotion ? 0 : 240);
    };

    frame = window.requestAnimationFrame(updateIntro);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(holdTimeout);
      window.clearTimeout(exitTimeout);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (introVisible) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [introVisible]);

  useIsomorphicLayoutEffect(() => {
    let storedTheme: string | null = null;

    try {
      storedTheme = window.localStorage.getItem("portfolio-theme");
    } catch {
      storedTheme = null;
    }

    const initialTheme: "light" | "dark" =
      storedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleMenuKeyDown);
    return () => window.removeEventListener("keydown", handleMenuKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58%", threshold: [0.01, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [introReady]);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
        setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [introReady]);

  useEffect(() => {
    const motionQuery = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!motionQuery.matches) return;

    const updatePointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("theme-transition");
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Theme still applies for the current session when storage is unavailable.
    }
    window.setTimeout(() => document.documentElement.classList.remove("theme-transition"), 500);
  };

  const closeMenu = () => setMenuOpen(false);
  const openCvModal = useCallback(() => setCvModalOpen(true), []);
  const closeCvModal = useCallback(() => setCvModalOpen(false), []);
  const handleProjectNavigation = useCallback(
    (event: ReactMouseEvent<HTMLAnchorElement>, href: string, project?: Project) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      event.preventDefault();
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
      }
      setMenuOpen(false);
      setTransitionProject(project ?? null);
      setIsNavigating(true);
      navigationTimer.current = window.setTimeout(() => router.push(href), 560);
    },
    [router],
  );

  useEffect(() => {
    return () => {
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
      }
    };
  }, []);

  return (
    <>
      <title>Muh. Fatkhur Rozaq Nur Abin — Software Developer</title>
      <meta
        name="description"
        content="Portfolio Muh. Fatkhur Rozaq Nur Abin, lulusan Informatika dan software developer dengan pengalaman Laravel, Flutter, REST API, web, mobile, dan software engineering."
      />
      <meta property="og:title" content="Muh. Fatkhur Rozaq Nur Abin — Software Developer" />
      <meta
        property="og:description"
        content="Informatics graduate and software developer focused on practical web and mobile systems."
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <style jsx global>{`
        a,
        button {
          -webkit-tap-highlight-color: transparent;
        }

        .portfolio-main-waiting {
          display: block;
          visibility: hidden;
          pointer-events: none;
          opacity: 0;
        }

        .portfolio-main-ready {
          display: block;
          visibility: visible;
          pointer-events: auto;
          transform-origin: 50% 0;
          animation: portfolio-main-in 1350ms 80ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .portfolio-main-ready .site-header {
          animation: portfolio-nav-in 900ms 220ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .route-transition {
          --transition-bg: #05060b;
          --transition-panel: #0a0d16;
          --transition-line: rgba(167, 139, 250, 0.26);
          --transition-accent: #b8a7ff;
          --transition-cyan: #65ddff;
          position: fixed;
          inset: 0;
          z-index: 300;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 42%, rgba(101, 221, 255, 0.08), transparent 28rem),
            radial-gradient(circle at 50% 110%, rgba(167, 139, 250, 0.16), transparent 38rem),
            var(--transition-bg);
          color: #f4f2ff;
          pointer-events: none;
          animation: route-cover-in 560ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .route-transition::before {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(167, 139, 250, 0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(167, 139, 250, 0.13) 1px, transparent 1px);
          background-size: 48px 48px;
          content: "";
          mask-image: linear-gradient(to bottom, transparent, black 18%, black 80%, transparent);
          opacity: 0.5;
        }

        .route-transition::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 35%, rgba(101, 221, 255, 0.08) 50%, transparent 65%);
          content: "";
          mix-blend-mode: screen;
          animation: route-sheen 560ms both ease-out;
        }

        .route-transition-noise {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.22) 0.55px, transparent 0.55px);
          background-size: 5px 5px;
          content: "";
          opacity: 0.08;
          pointer-events: none;
        }

        .route-transition-scan {
          position: absolute;
          inset: -10% 0 auto;
          z-index: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--transition-cyan), transparent);
          box-shadow: 0 0 20px 2px rgba(101, 221, 255, 0.65);
          animation: route-scan 560ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .route-transition-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: min(88vw, 42rem);
          aspect-ratio: 1;
          border: 1px solid rgba(167, 139, 250, 0.16);
          border-radius: 999px;
          box-shadow: 0 0 70px rgba(101, 221, 255, 0.06), inset 0 0 70px rgba(167, 139, 250, 0.06);
          transform: translate(-50%, -50%) rotate(-18deg) scale(0.8);
          animation: route-orbit-in 560ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .route-transition-orbit::before,
        .route-transition-orbit::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(101, 221, 255, 0.4), transparent);
          content: "";
        }

        .route-transition-orbit::before { transform: translate(-50%, -50%) rotate(42deg); }
        .route-transition-orbit::after { transform: translate(-50%, -50%) rotate(-42deg); }

        .route-transition-shell {
          position: relative;
          z-index: 2;
          width: min(90vw, 42rem);
          padding: 1.2rem;
          border: 1px solid var(--transition-line);
          background: linear-gradient(145deg, rgba(16, 20, 32, 0.9), rgba(6, 8, 14, 0.82));
          box-shadow: 0 24px 90px rgba(0, 0, 0, 0.48), 0 0 80px rgba(101, 221, 255, 0.06);
          backdrop-filter: blur(18px);
          animation: route-shell-in 560ms 55ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .route-transition-shell::before {
          position: absolute;
          top: 0;
          left: 10%;
          width: 80%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--transition-cyan), transparent);
          content: "";
          opacity: 0.8;
        }

        .route-transition-topline,
        .route-transition-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: rgba(244, 242, 255, 0.62);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .route-transition-code {
          color: rgba(101, 221, 255, 0.68);
          font-size: 0.5rem;
        }

        .route-transition-dot {
          width: 0.42rem;
          height: 0.42rem;
          border-radius: 999px;
          background: var(--transition-cyan);
          box-shadow: 0 0 12px rgba(101, 221, 255, 0.9);
          animation: route-dot-pulse 900ms ease-in-out infinite;
        }

        .route-transition-center {
          display: grid;
          min-height: 18rem;
          place-content: center;
          padding: 3rem 1rem;
          text-align: center;
        }

        .route-transition-kicker {
          color: var(--transition-cyan);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .route-transition-title {
          max-width: 34rem;
          margin: 1rem auto 0;
          color: #fff;
          font-size: clamp(2.2rem, 8vw, 5.4rem);
          font-weight: 500;
          letter-spacing: -0.07em;
          line-height: 0.9;
          text-wrap: balance;
        }

        .route-transition-subtitle {
          margin-top: 1.25rem;
          color: rgba(244, 242, 255, 0.52);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .route-transition-progress {
          height: 2px;
          margin-top: 1rem;
          overflow: hidden;
          background: rgba(167, 139, 250, 0.14);
        }

        .route-transition-progress span {
          display: block;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, var(--transition-accent), var(--transition-cyan));
          box-shadow: 0 0 14px rgba(101, 221, 255, 0.75);
          transform-origin: left;
          animation: route-progress 560ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .portfolio-loader {
          --loader-blue: #4aa7ff;
          --loader-cyan: #a9e8ff;
          position: fixed;
          inset: 0;
          z-index: 200;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: var(--bg);
          color: var(--fg);
          user-select: none;
          transition:
            opacity 720ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility 720ms ease,
            transform 720ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 720ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .portfolio-loader::before {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--loader-blue) 20%, transparent), transparent 38%),
            linear-gradient(120deg, transparent 0%, color-mix(in srgb, var(--loader-blue) 5%, transparent) 48%, transparent 72%);
          content: "";
          pointer-events: none;
        }

        .portfolio-loader::after {
          position: absolute;
          inset: 0;
          border: 1px solid color-mix(in srgb, var(--loader-blue) 10%, transparent);
          box-shadow: inset 0 0 12rem color-mix(in srgb, var(--loader-blue) 6%, transparent);
          content: "";
          pointer-events: none;
        }

        .portfolio-loader-exiting {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: scale(1.045);
          filter: blur(12px);
        }

        .portfolio-loader-grid {
          position: absolute;
          inset: 0;
          opacity: 0.3;
          background-image:
            linear-gradient(to right, color-mix(in srgb, var(--loader-blue) 12%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--loader-blue) 12%, transparent) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(circle at center, black, transparent 72%);
          animation: loader-grid-drift 14s linear infinite;
          pointer-events: none;
        }

        .portfolio-loader-noise {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: radial-gradient(color-mix(in srgb, var(--loader-cyan) 40%, transparent) 0.6px, transparent 0.8px);
          background-size: 5px 5px;
          mix-blend-mode: screen;
          animation: loader-noise-shift 700ms steps(2, end) infinite;
          pointer-events: none;
        }

        .portfolio-loader-scanline {
          position: absolute;
          left: 0;
          right: 0;
          top: -12%;
          z-index: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--loader-cyan) 76%, transparent), transparent);
          box-shadow: 0 0 22px 2px color-mix(in srgb, var(--loader-blue) 55%, transparent);
          animation: loader-scanline 4.2s linear infinite;
          pointer-events: none;
        }

        .portfolio-loader-header,
        .portfolio-loader-footer {
          position: absolute;
          left: clamp(1.25rem, 5vw, 4.5rem);
          right: clamp(1.25rem, 5vw, 4.5rem);
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: var(--muted);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.58rem;
          letter-spacing: 0.16em;
          line-height: 1.4;
        }

        .portfolio-loader-header {
          top: clamp(1.25rem, 5vw, 3rem);
        }

        .portfolio-loader-footer {
          bottom: clamp(1.25rem, 5vw, 3rem);
        }

        .portfolio-loader-header > span:last-child,
        .portfolio-loader-footer > span:last-child {
          text-align: right;
        }

        .loader-status-dot {
          display: inline-block;
          width: 0.42rem;
          height: 0.42rem;
          flex: 0 0 auto;
          border-radius: 999px;
          background: var(--loader-cyan);
          box-shadow: 0 0 0 5px color-mix(in srgb, var(--loader-cyan) 10%, transparent), 0 0 16px var(--loader-blue);
          animation: loader-dot-pulse 1.8s ease-in-out infinite;
        }

        .portfolio-loader-content {
          position: relative;
          z-index: 2;
          display: flex;
          width: min(26rem, calc(100vw - 3rem));
          flex-direction: column;
          align-items: center;
          animation: loader-content-in 950ms 80ms both cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cpu-core-scene {
          position: relative;
          display: grid;
          width: clamp(13rem, 46vw, 20rem);
          aspect-ratio: 1;
          place-items: center;
          isolation: isolate;
          animation: cpu-scene-float 4.8s ease-in-out infinite;
        }

        .cpu-core-scene::before {
          position: absolute;
          inset: 14%;
          border-radius: 50%;
          background: radial-gradient(circle, color-mix(in srgb, var(--loader-blue) 28%, transparent), transparent 68%);
          content: "";
          filter: blur(10px);
          animation: cpu-core-glow 2.8s ease-in-out infinite;
        }

        .cpu-core-scene::after {
          position: absolute;
          inset: 4%;
          border: 1px solid color-mix(in srgb, var(--loader-blue) 18%, transparent);
          border-radius: 50%;
          content: "";
          transform: rotate(18deg) scaleY(0.42);
          animation: cpu-ring-breathe 3.8s ease-in-out infinite;
        }

        .cpu-core-radar {
          position: absolute;
          inset: 1%;
          border-radius: 50%;
          background: conic-gradient(from 0deg, transparent 0deg 278deg, color-mix(in srgb, var(--loader-cyan) 30%, transparent) 316deg, transparent 350deg);
          mask-image: radial-gradient(circle, transparent 0 54%, black 55% 57%, transparent 58%);
          animation: cpu-radar-spin 5.5s linear infinite;
        }

        .cpu-core-ring {
          position: absolute;
          border: 1px solid color-mix(in srgb, var(--loader-blue) 40%, transparent);
          border-radius: 50%;
          pointer-events: none;
        }

        .cpu-core-ring-one {
          inset: 2%;
          border-style: dashed;
          opacity: 0.72;
          animation: cpu-ring-spin 18s linear infinite;
        }

        .cpu-core-ring-two {
          inset: 10%;
          border-color: color-mix(in srgb, var(--loader-cyan) 52%, transparent);
          transform: rotate(42deg) scaleX(0.7);
          animation: cpu-ring-two-spin 9s linear infinite reverse;
        }

        .cpu-core-ring-three {
          inset: 19%;
          border-color: color-mix(in srgb, var(--loader-blue) 28%, transparent);
          border-top-color: var(--loader-cyan);
          border-bottom-color: var(--loader-cyan);
          transform: rotate(-30deg) scaleY(0.68);
          animation: cpu-ring-three-spin 7s linear infinite;
        }

        .cpu-core-particle {
          position: absolute;
          width: 0.35rem;
          height: 0.35rem;
          border-radius: 999px;
          background: var(--loader-cyan);
          box-shadow: 0 0 10px 2px color-mix(in srgb, var(--loader-blue) 78%, transparent);
          animation: cpu-particle-pulse 2s ease-in-out infinite;
        }

        .cpu-core-particle-one {
          top: 13%;
          left: 53%;
        }

        .cpu-core-particle-two {
          top: 46%;
          right: 7%;
          animation-delay: -0.55s;
        }

        .cpu-core-particle-three {
          bottom: 13%;
          left: 29%;
          animation-delay: -1.1s;
        }

        .cpu-core-particle-four {
          top: 31%;
          left: 8%;
          animation-delay: -1.55s;
        }

        .cpu-core-wrap {
          position: absolute;
          inset: 19%;
          width: auto;
          aspect-ratio: 1;
          color: var(--loader-blue);
          filter: drop-shadow(0 0 22px color-mix(in srgb, var(--loader-blue) 68%, transparent));
          animation: cpu-core-breathe 4s ease-in-out infinite;
          z-index: 2;
        }

        .cpu-core-mark {
          display: block;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .cpu-core-orbit {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.4;
          stroke-dasharray: 2 8;
          opacity: 0.72;
          transform-box: fill-box;
          transform-origin: center;
          animation: cpu-orbit 12s linear infinite;
        }

        .cpu-core-pins {
          fill: none;
          stroke: var(--loader-cyan);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 2 5;
          animation: cpu-pin-flow 2.2s linear infinite;
        }

        .cpu-core-board {
          fill: color-mix(in srgb, var(--loader-blue) 14%, transparent);
          stroke: currentColor;
          stroke-width: 2;
        }

        .cpu-core-inner {
          fill: var(--bg);
          stroke: var(--loader-cyan);
          stroke-width: 1.5;
        }

        .cpu-core-circuit {
          fill: none;
          stroke: var(--loader-cyan);
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: cpu-circuit-draw 2.8s ease-in-out infinite;
        }

        .cpu-core-label {
          fill: var(--loader-cyan);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .portfolio-loader-copy {
          text-align: center;
          animation: loader-copy-in 900ms 180ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .portfolio-loader-kicker,
        .portfolio-loader-meta {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
        }

        .portfolio-loader-kicker {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          margin-top: 1rem;
          color: var(--loader-cyan);
        }

        .portfolio-loader-code {
          color: var(--muted);
        }

        .portfolio-loader-title {
          margin-top: 0.65rem;
          color: var(--fg);
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 500;
          letter-spacing: -0.04em;
          text-align: center;
          text-shadow: 0 0 24px color-mix(in srgb, var(--loader-blue) 24%, transparent);
        }

        .portfolio-loader-subtitle {
          margin-top: 0.7rem;
          color: var(--muted);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
        }

        .portfolio-loader-progress-wrap {
          width: 100%;
          margin-top: 2.25rem;
          animation: loader-progress-in 800ms 430ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .portfolio-loader-meta {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          color: var(--muted);
        }

        .portfolio-loader-meta span:last-child {
          color: var(--loader-cyan);
        }

        .portfolio-loader-track {
          width: 100%;
          height: 4px;
          margin-top: 0.7rem;
          overflow: hidden;
          border: 1px solid color-mix(in srgb, var(--loader-blue) 38%, var(--line));
          background:
            repeating-linear-gradient(90deg, color-mix(in srgb, var(--loader-blue) 12%, var(--surface)) 0 1px, transparent 1px 18px),
            color-mix(in srgb, var(--loader-blue) 8%, var(--surface));
        }

        .portfolio-loader-bar {
          position: relative;
          display: block;
          height: 100%;
          background: linear-gradient(90deg, var(--loader-blue), var(--loader-cyan));
          box-shadow: 0 0 16px var(--loader-blue);
          transition: width 80ms linear;
        }

        .portfolio-loader-bar::after {
          position: absolute;
          inset: 0 auto 0 -4rem;
          width: 4rem;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
          content: "";
          animation: loader-bar-shine 1.35s linear infinite;
        }

        .loader-footer-cursor {
          display: inline-block;
          width: 0.4rem;
          height: 0.7rem;
          margin-left: 0.25rem;
          vertical-align: -0.15rem;
          background: var(--loader-cyan);
          animation: loader-cursor-blink 800ms steps(2, end) infinite;
        }

        .cv-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 180;
          display: grid;
          place-items: center;
          padding: 1rem;
          background: color-mix(in srgb, var(--bg) 78%, #05070b 22%);
          backdrop-filter: blur(12px);
          animation: cv-modal-backdrop-in 280ms ease-out both;
        }

        .cv-modal {
          display: flex;
          width: min(60rem, 100%);
          max-height: min(92svh, 58rem);
          flex-direction: column;
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--bg);
          box-shadow: 0 30px 90px color-mix(in srgb, var(--accent) 18%, transparent);
          animation: cv-modal-panel-in 520ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .cv-modal-header,
        .cv-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.25rem;
        }

        .cv-modal-header {
          border-bottom: 1px solid var(--line);
        }

        .cv-preview-frame {
          min-width: 0;
          min-height: 0;
          flex: 1;
          overflow: hidden;
          background: #f2f4f7;
        }

        .cv-preview-frame iframe {
          display: block;
          width: 100%;
          height: min(67svh, 44rem);
          min-height: 24rem;
        }

        .cv-modal-footer {
          border-top: 1px solid var(--line);
        }

        @media (max-width: 640px) {
          .portfolio-loader-header,
          .portfolio-loader-footer {
            font-size: 0.5rem;
            letter-spacing: 0.11em;
          }

          .portfolio-loader-header > span:first-child,
          .portfolio-loader-footer > span:first-child {
            max-width: 52%;
          }

          .portfolio-loader-subtitle {
            font-size: 0.5rem;
            letter-spacing: 0.15em;
          }

          .cv-modal-backdrop {
            padding: 0.6rem;
          }

          .cv-modal {
            max-height: calc(100svh - 1.2rem);
          }

          .cv-modal-header,
          .cv-modal-footer {
            padding: 0.85rem;
          }

          .cv-modal-footer {
            align-items: stretch;
            flex-direction: column;
          }

          .cv-modal-footer a {
            width: 100%;
          }

          .cv-preview-frame iframe {
            height: min(62svh, 34rem);
            min-height: 14rem;
          }
        }

        @media (max-width: 900px) and (max-height: 620px) {
          .portfolio-loader-header,
          .portfolio-loader-footer {
            font-size: 0.48rem;
            letter-spacing: 0.1em;
          }

          .portfolio-loader-content {
            width: min(27rem, calc(100vw - 2rem));
          }

          .cpu-core-scene {
            width: clamp(9rem, 34vh, 13rem);
          }

          .portfolio-loader-progress-wrap {
            margin-top: 1.1rem;
          }

          .route-transition-center {
            min-height: 12rem;
            padding: 2rem 0.75rem;
          }

          .cv-modal-header,
          .cv-modal-footer {
            padding-block: 0.65rem;
          }

          .cv-preview-frame iframe {
            height: 48svh;
            min-height: 11rem;
          }
        }

        .scroll-progress {
          position: fixed;
          inset: 0 0 auto;
          z-index: 120;
          height: 3px;
          width: 100%;
          transform-origin: left center;
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
          box-shadow: 0 0 18px var(--accent);
          pointer-events: none;
        }

        .pointer-glow {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(34rem circle at var(--pointer-x, 50%) var(--pointer-y, 15%), var(--pointer-glow), transparent 68%);
          opacity: 0.9;
        }

        .reveal {
          opacity: 0;
          transform: translateY(24px);
          filter: blur(7px);
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--reveal-delay, 0ms);
        }

        .reveal-visible {
          opacity: 1;
          transform: none;
          filter: none;
        }

        .text-reveal {
          display: inline;
        }

        .text-reveal-accessible {
          position: absolute;
          height: 1px;
          width: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
          clip-path: inset(50%);
        }

        .text-reveal-word {
          display: inline-block;
          margin-inline-end: 0.28em;
          opacity: 0;
          transform: translateY(0.65em);
          filter: blur(4px);
          transition:
            opacity 520ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 520ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--word-delay, 0ms);
        }

        .text-reveal-visible .text-reveal-word {
          opacity: 1;
          transform: none;
          filter: none;
        }

        .text-reveal-word:last-child {
          margin-inline-end: 0;
        }

        .section-heading {
          position: relative;
        }

        .section-heading::after {
          position: absolute;
          right: 0;
          top: -1px;
          height: 1px;
          width: min(10rem, 24vw);
          background: linear-gradient(90deg, transparent, var(--accent));
          content: "";
        }

        .tag-item {
          transition: color 200ms ease, transform 200ms ease;
        }

        .tag-item:hover {
          color: var(--fg);
          transform: translateX(3px);
        }

        .skill-logo {
          transition: transform 250ms cubic-bezier(0.22, 1, 0.36, 1), border-color 250ms ease, box-shadow 250ms ease;
        }

        .skill-card {
          position: relative;
          overflow: hidden;
          transition: background-color 260ms ease, transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .skill-card::before {
          position: absolute;
          inset: 0 0 auto;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent-2));
          content: "";
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .skill-card:hover {
          background: color-mix(in srgb, var(--accent) 4%, transparent);
          transform: translateY(-4px);
        }

        .skill-card:hover::before {
          transform: scaleX(1);
        }

        .skill-item {
          transition: color 220ms ease, transform 220ms ease;
        }

        .skill-item:hover {
          color: var(--fg);
          transform: translateX(4px);
        }

        .skill-item:hover .skill-logo {
          transform: rotate(-6deg) scale(1.08);
          border-color: var(--accent);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 12%, transparent);
        }

        .hero-section {
          isolation: isolate;
          overflow: hidden;
        }

        .hero-kicker,
        .hero-footer-note {
          animation: fade-up 800ms 80ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .status-dot,
        .project-status-dot {
          display: inline-block;
          height: 0.42rem;
          width: 0.42rem;
          flex: 0 0 auto;
          border-radius: 999px;
          background: var(--accent-2);
          box-shadow: 0 0 0 5px color-mix(in srgb, var(--accent-2) 13%, transparent), 0 0 16px var(--accent-2);
          animation: pulse-dot 2.4s ease-in-out infinite;
        }

        .availability-pill {
          border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
          padding: 0.35rem 0.55rem;
          color: var(--accent);
          font-size: 0.58rem;
          letter-spacing: 0.12em;
        }

        .hero-title-line {
          display: block;
          opacity: 0;
          transform: translateY(1.1em);
          animation: hero-rise 950ms both cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-title-line-one {
          animation-delay: 140ms;
        }

        .hero-title-line-two {
          animation-delay: 260ms;
        }

        .hero-title-accent {
          background: linear-gradient(110deg, var(--accent) 5%, var(--accent-2) 48%, var(--accent) 92%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation:
            hero-rise 950ms 260ms both cubic-bezier(0.16, 1, 0.3, 1),
            gradient-shift 8s ease-in-out 1.2s infinite;
        }

        .hero-copy {
          opacity: 0;
          animation: fade-up 850ms 520ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-actions {
          opacity: 0;
          animation: fade-up 850ms 650ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hero-actions a {
          position: relative;
          overflow: hidden;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .hero-actions a::before {
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.22) 48%, transparent 72%);
          content: "";
          transform: translateX(-130%);
          transition: transform 650ms ease;
        }

        .hero-actions a:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px color-mix(in srgb, var(--accent) 18%, transparent);
        }

        .hero-actions a:hover::before {
          transform: translateX(130%);
        }

        .hero-actions a > * {
          position: relative;
          z-index: 1;
        }

        .hero-scroll-hint {
          opacity: 0;
          animation: fade-up 850ms 820ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-hint-line {
          display: inline-block;
          height: 1px;
          width: 2.5rem;
          background: var(--accent);
          transform-origin: left center;
          animation: line-grow 1.4s 1s both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .profile-panel {
          animation: fade-up 950ms 460ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .profile-panel::before,
        .profile-panel::after,
        .profile-carousel-shell::before,
        .profile-carousel-shell::after {
          display: none !important;
          content: none !important;
        }

        .profile-carousel-shell {
          border: 1px solid var(--line);
          background: linear-gradient(145deg, var(--surface), color-mix(in srgb, var(--surface) 72%, var(--accent) 28%));
          box-shadow: 0 25px 70px color-mix(in srgb, var(--accent) 10%, transparent);
        }

        .theme-button {
          transition: transform 250ms ease, border-color 250ms ease, background-color 250ms ease;
        }

        .theme-button:hover {
          transform: rotate(10deg);
          background: var(--surface);
        }

        .brand-mark {
          position: relative;
          transition: transform 250ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 250ms ease;
        }

        a:hover .brand-mark {
          transform: rotate(-8deg) scale(1.08);
          box-shadow: 5px 5px 0 var(--accent);
        }

        .nav-link::after {
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 250ms ease;
        }

        .nav-link:hover::after,
        .nav-link[aria-current="location"]::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .mobile-menu {
          animation: menu-in 350ms both cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: top;
        }

        .mobile-menu a {
          transition: padding-left 220ms ease, color 220ms ease;
        }

        .mobile-menu a:hover {
          padding-left: 0.5rem;
          color: var(--accent);
        }

        .project-row {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .project-row::before {
          position: absolute;
          inset: 0 auto 0 0;
          z-index: -1;
          width: 3px;
          background: linear-gradient(var(--accent), var(--accent-2));
          content: "";
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-row:hover::before,
        .project-row-active::before {
          transform: scaleY(1);
          transform-origin: top;
        }

        .project-row-index {
          transition: color 250ms ease, transform 250ms ease;
        }

        .project-row:hover .project-row-index,
        .project-row-active .project-row-index {
          color: var(--accent);
          transform: translateX(4px);
        }

        .project-preview-panel {
          overflow: hidden;
          box-shadow: 0 24px 70px color-mix(in srgb, var(--accent) 8%, transparent);
        }

        .project-preview-enter {
          animation: preview-in 500ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-visual {
          position: relative;
          overflow: hidden;
          border: 1px solid color-mix(in srgb, var(--accent) 32%, var(--line));
          background: var(--surface);
        }

        .project-preview-image {
          box-shadow: 0 18px 50px color-mix(in srgb, var(--accent) 8%, transparent);
        }

        .project-preview-image img {
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .project-preview-image:hover img {
          transform: scale(1.025);
        }

        .experience-item {
          transition: background-color 250ms ease, transform 250ms ease;
        }

        .experience-item:hover {
          background: color-mix(in srgb, var(--accent) 4%, transparent);
        }

        .contact-copy {
          animation: fade-up 900ms 120ms both cubic-bezier(0.22, 1, 0.36, 1);
        }

        #contact {
          background: transparent !important;
          color: inherit !important;
        }

        @keyframes portfolio-main-in {
          from {
            opacity: 0;
            transform: perspective(1400px) translateY(34px) scale(0.985) rotateX(1.5deg);
            filter: blur(16px);
            clip-path: inset(5% 0 0 round 1.25rem);
          }
          55% {
            opacity: 1;
            filter: blur(0);
            clip-path: inset(1% 0 0 round 0.35rem);
          }
          to {
            opacity: 1;
            transform: none;
            filter: none;
            clip-path: inset(0);
          }
        }

        @keyframes portfolio-nav-in {
          from {
            opacity: 0;
            transform: translateY(-100%) scaleY(0.92);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        @keyframes loader-grid-drift {
          from {
            background-position: 0 0;
            transform: scale(1);
          }
          to {
            background-position: 44px 44px;
            transform: scale(1.06);
          }
        }

        @keyframes loader-noise-shift {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(1%, -1%);
          }
          50% {
            transform: translate(-1%, 1%);
          }
          75% {
            transform: translate(1%, 1%);
          }
          100% {
            transform: translate(-1%, -1%);
          }
        }

        @keyframes loader-scanline {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(125vh);
          }
        }

        @keyframes loader-dot-pulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        @keyframes loader-content-in {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.94);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        @keyframes loader-copy-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes loader-progress-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        @keyframes loader-bar-shine {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(100% + 8rem));
          }
        }

        @keyframes loader-cursor-blink {
          0%,
          48% {
            opacity: 1;
          }
          49%,
          100% {
            opacity: 0;
          }
        }

        @keyframes cpu-scene-float {
          0%,
          100% {
            transform: translateY(0) scale(0.985);
          }
          50% {
            transform: translateY(-8px) scale(1.01);
          }
        }

        @keyframes cpu-core-glow {
          0%,
          100% {
            opacity: 0.62;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes cpu-ring-breathe {
          0%,
          100% {
            opacity: 0.42;
            transform: rotate(18deg) scaleY(0.42);
          }
          50% {
            opacity: 0.9;
            transform: rotate(198deg) scaleY(0.56);
          }
        }

        @keyframes cpu-radar-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cpu-ring-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cpu-ring-two-spin {
          from {
            transform: rotate(42deg) scaleX(0.7);
          }
          to {
            transform: rotate(402deg) scaleX(0.7);
          }
        }

        @keyframes cpu-ring-three-spin {
          from {
            transform: rotate(-30deg) scaleY(0.68);
          }
          to {
            transform: rotate(330deg) scaleY(0.68);
          }
        }

        @keyframes cpu-particle-pulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.65);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes cv-modal-backdrop-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes cv-modal-panel-in {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: none;
            filter: none;
          }
        }

        @keyframes cpu-core-breathe {
          0%,
          100% {
            transform: translateY(0) scale(0.98);
          }
          50% {
            transform: translateY(-7px) scale(1.02);
          }
        }

        @keyframes cpu-orbit {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes cpu-pin-flow {
          to {
            stroke-dashoffset: -28;
          }
        }

        @keyframes cpu-circuit-draw {
          0%,
          18% {
            stroke-dashoffset: 100;
            opacity: 0.35;
          }
          45%,
          78% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -100;
            opacity: 0.35;
          }
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hero-rise {
          from {
            opacity: 0;
            transform: translateY(1.1em);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes line-grow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 0.65;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        @keyframes menu-in {
          from {
            opacity: 0;
            transform: translateY(-8px) scaleY(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scaleY(1);
          }
        }

        @keyframes preview-in {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes route-cover-in {
          from {
            opacity: 0;
            clip-path: inset(100% 0 0);
            transform: scale(1.04);
          }
          to {
            opacity: 1;
            clip-path: inset(0);
            transform: scale(1);
          }
        }

        @keyframes route-shell-in {
          from {
            opacity: 0;
            filter: blur(10px);
            transform: translateY(18px) scale(0.96);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1);
          }
        }

        @keyframes route-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes route-scan {
          from { transform: translateY(-10vh); }
          to { transform: translateY(110vh); }
        }

        @keyframes route-sheen {
          from { transform: translateX(-80%); opacity: 0; }
          35% { opacity: 1; }
          to { transform: translateX(80%); opacity: 0; }
        }

        @keyframes route-orbit-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(-18deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(8deg) scale(1);
          }
        }

        @keyframes route-dot-pulse {
          0%,
          100% { opacity: 0.55; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.18); }
        }

        .technical-grid {
          background-image:
            linear-gradient(to right, var(--grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {introVisible && <PortfolioLoader progress={introProgress} exiting={introExiting} />}
      {isNavigating && (
        <div className="route-transition" role="status" aria-live="polite">
          <div className="route-transition-noise" aria-hidden="true" />
          <div className="route-transition-scan" aria-hidden="true" />
          <div className="route-transition-orbit" aria-hidden="true" />
          <div className="route-transition-shell">
            <div className="route-transition-topline">
              <span className="flex items-center gap-2">
                <span className="route-transition-dot" aria-hidden="true" />
                ROUTE TRANSFER
              </span>
              <span className="route-transition-code">SYS://CASE-STUDY</span>
            </div>
            <div className="route-transition-center">
              <p className="route-transition-kicker">
                OPENING PROJECT / {transitionProject ? `0${projects.findIndex(({ slug }) => slug === transitionProject.slug) + 1}` : "--"}
              </p>
              <h2 className="route-transition-title">{transitionProject?.title ?? "CASE STUDY"}</h2>
              <p className="route-transition-subtitle">{transitionProject?.category ?? "Preparing detail view"}</p>
            </div>
            <div className="route-transition-bottom">
              <span>LOADING EXPERIENCE</span>
              <span>{transitionProject ? "ACCESS GRANTED" : "CONNECTING"}</span>
            </div>
            <div className="route-transition-progress" aria-hidden="true"><span /></div>
          </div>
        </div>
      )}
      <CvPreviewModal open={cvModalOpen} onClose={closeCvModal} />

      <a
        href="#main-content"
        className={`${focusRing} fixed left-4 top-4 z-[100] -translate-y-24 bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition-transform focus:translate-y-0`}
      >
        Skip to content
      </a>

      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <div
        className={`relative z-[1] min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--fg)] ${
          introReady ? "portfolio-main-ready" : "portfolio-main-waiting"
        }`}
        aria-hidden={!introReady}
      >
        <div className="pointer-glow" aria-hidden="true" />
        <header className="site-header sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg)]/95 backdrop-blur-md">
          <nav
            aria-label="Primary navigation"
            className="mx-auto flex h-[4.5rem] max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12"
          >
            <a
              href="#home"
              onClick={closeMenu}
              className={`${focusRing} flex items-center gap-3 text-sm font-semibold tracking-[-0.02em]`}
              aria-label="Go to home"
            >
              <span className="brand-mark grid size-8 place-items-center bg-[var(--fg)] font-mono text-[0.65rem] text-[var(--bg)]">
                OZA
              </span>
              <span className="hidden sm:inline">Muh. Fatkhur Rozaq Nur Abin</span>
            </a>

            <div className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  className={`${focusRing} nav-link relative py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)] ${
                    activeSection === item.id
                      ? "text-[var(--fg)] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-[var(--accent)]"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeButton theme={theme} onToggle={toggleTheme} />
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className={`${focusRing} grid size-10 place-items-center border border-[var(--line)] text-[var(--fg)] lg:hidden`}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </nav>

          {menuOpen && (
            <div className="mobile-menu max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-[var(--line)] bg-[var(--bg)] px-5 py-4 lg:hidden">
              <div className="mx-auto grid max-w-[88rem]">
                {navItems.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={`${focusRing} flex items-center justify-between border-b border-[var(--line)] py-4 text-lg`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-[var(--muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </header>

        <main id="main-content">
          <section id="home" className="hero-section relative scroll-mt-24 border-b border-[var(--line)]">
            <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[88rem] px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_26rem] lg:px-12">
              <div className="flex flex-col justify-between py-14 sm:py-20 lg:pr-16 lg:py-24">
                <div className="hero-kicker flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs tracking-[0.13em] text-[var(--muted)]">
                  <span className="status-dot" aria-hidden="true" />
                  <span>SOFTWARE DEVELOPER</span>
                  <span className="hidden h-px w-8 bg-[var(--line)] sm:block" />
                </div>

                <div className="py-16 sm:py-20 lg:py-24">
                  <h1 className="hero-title max-w-5xl text-balance text-[clamp(3.1rem,8.1vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
                    <span className="hero-title-line hero-title-line-one">Muh. Fatkhur</span>
                    <span className="hero-title-line hero-title-line-two hero-title-accent">Rozaq Nur Abin</span>
                  </h1>
                  <p className="hero-copy mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
                    <TextReveal text="Informatics graduate focused on practical web and mobile systems—working with Laravel, Flutter, REST APIs, location technology, data processing, and forecasting." />
                  </p>
                  <div className="hero-actions mt-9 flex flex-wrap gap-3">
                    <a
                      href="#projects"
                      className={`${focusRing} group inline-flex min-h-12 items-center gap-3 bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-contrast)]`}
                    >
                      View projects
                      <ArrowDownRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                      />
                    </a>
                    <a
                      href="#contact"
                      className={`${focusRing} group inline-flex min-h-12 items-center gap-3 border border-[var(--line)] px-5 text-sm font-semibold transition-colors hover:border-[var(--fg)]`}
                    >
                      Contact me
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                    <button
                      type="button"
                      onClick={openCvModal}
                      aria-haspopup="dialog"
                      className={`${focusRing} group inline-flex min-h-12 items-center gap-3 border border-[var(--line)] px-5 text-sm font-semibold transition-colors hover:border-[var(--fg)]`}
                    >
                      <FileText
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:-translate-y-0.5"
                      />
                      CV
                    </button>
                  </div>
                  <div className="hero-scroll-hint mt-12 flex items-center gap-3 font-mono text-xs tracking-[0.12em] text-[var(--muted)]">
                    <span className="scroll-hint-line" aria-hidden="true" />
                    <span>SCROLL TO EXPLORE</span>
                    <span className="ml-auto hidden text-[var(--accent)] sm:inline">01 / 06</span>
                  </div>
                </div>

                <p className="hero-footer-note font-mono text-xs leading-6 text-[var(--muted)]">
                  S1 INFORMATIKA / UNIVERSITAS MUHAMMADIYAH SURAKARTA / 2022—2026
                </p>
              </div>

              <aside className="profile-panel relative flex min-h-[32rem] flex-col justify-end border-t border-[var(--line)] py-10 sm:min-h-[38rem] sm:py-12 lg:min-h-0 lg:border-l lg:border-t-0 lg:py-0 lg:pb-24 lg:pl-10">
                <div className="mb-5 flex items-center justify-between gap-4 font-mono text-[0.6rem] tracking-[0.14em] text-[var(--muted)]">
                  <span className="flex items-center gap-2"><Activity className="size-3 text-[var(--accent)]" aria-hidden="true" /> PROFILE</span>
                  <span>02 / 02</span>
                </div>
                <div className="relative mb-8 min-h-[20rem] w-full flex-1 overflow-hidden">
                  <ProfileCarousel screenshots={profile.images} title={profile.name} />
                </div>
                <p className="font-mono text-xs tracking-[0.13em] text-[var(--muted)]">
                  PROFILE INDEX
                </p>
                <dl className="mt-6 border-t border-[var(--line)]">
                  {[
                    ["Focus", "Web & Mobile Development"],
                    ["Core", "Laravel / Flutter"],
                    ["Integration", "REST API"],
                    ["Location", "Magetan, East Java"],
                  ].map(([term, description]) => (
                    <div
                      key={term}
                      className="grid grid-cols-[7rem_1fr] gap-4 border-b border-[var(--line)] py-4"
                    >
                      <dt className="font-mono text-xs text-[var(--muted)]">{term}</dt>
                      <dd className="text-sm leading-6">{description}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </section>

          <section id="about" className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <SectionHeading
                number="01"
                eyebrow="About"
                title="A software developer grounded in engineering and collaboration."
              />

              <div className="mt-14 grid gap-12 lg:grid-cols-[9rem_minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:gap-10">
                <p className="font-mono text-xs tracking-[0.12em] text-[var(--muted)]">
                  PROFILE / 2026
                </p>
                <div className="max-w-3xl space-y-6 text-xl leading-9 tracking-[-0.015em] text-[var(--fg)] sm:text-2xl sm:leading-10">
                  <p>
                    Lulusan S1 Teknik Informatika Universitas Muhammadiyah Surakarta yang
                    menyelesaikan studi dalam waktu 3,5 tahun. Memiliki kompetensi dalam
                    pengembangan sistem berbasis web dan aplikasi mobile menggunakan Laravel
                    dan Flutter.
                  </p>
                  <p className="text-[var(--muted)]">
                    Berpengalaman dalam manajemen tim, penyelesaian konflik, serta koordinasi
                    lintas divisi melalui keterlibatan aktif dalam organisasi. Kemampuan
                    tersebut mendukung komunikasi yang efektif, kolaborasi yang baik, serta
                    penyelesaian proyek pengembangan perangkat lunak secara efisien.
                  </p>
                </div>
                <dl className="border-t border-[var(--line)]">
                  <div className="border-b border-[var(--line)] py-5">
                    <dt className="font-mono text-xs text-[var(--muted)]">STUDY DURATION</dt>
                    <dd className="mt-2 text-3xl font-medium tracking-[-0.04em]">3,5 tahun</dd>
                    <p className="mt-1 text-sm text-[var(--muted)]">S1 Informatika</p>
                  </div>
                  <div className="border-b border-[var(--line)] py-5">
                    <dt className="font-mono text-xs text-[var(--muted)]">GPA / IPK</dt>
                    <dd className="mt-2 text-3xl font-medium tracking-[-0.04em]">3.29</dd>
                    <p className="mt-1 text-sm text-[var(--muted)]">UMS, 2022—2026</p>
                  </div>
                  <div className="border-b border-[var(--line)] py-5">
                    <dt className="font-mono text-xs text-[var(--muted)]">FOCUS</dt>
                    <dd className="mt-2 text-base leading-7">Web & Mobile Development</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="scroll-mt-24 border-y border-[var(--line)] py-24 sm:py-32 lg:py-40"
          >
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <SectionHeading
                number="02"
                eyebrow="Skills"
                title="A practical toolkit for building and maintaining software systems."
              />

              <div className="mt-14 grid border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
                {skills.map((group) => (
                  <article
                    key={group.number}
                    className="skill-card border-b border-[var(--line)] py-7 sm:px-6 sm:first:pl-0 sm:[&:nth-child(2n+1)]:border-r lg:border-r lg:px-6 lg:last:border-r-0 lg:[&:nth-child(2n+1)]:border-r"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-base font-semibold">{group.title}</h3>
                      <span className="font-mono text-xs text-[var(--accent)]">{group.number}</span>
                    </div>
                    <ul className="mt-6 space-y-3">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="skill-item flex min-h-8 items-center gap-3 text-sm leading-6 text-[var(--muted)]"
                        >
                          <SkillLogo skill={skill} />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <SectionHeading
                number="03"
                eyebrow="Selected work"
                title="Four systems shaped around real operational needs."
              />

              <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)] lg:gap-16">
                <div>
                  {projects.map((project, index) => (
                    <ProjectIndex
                      key={project.slug}
                      project={project}
                      index={index}
                      active={activeProject === index}
                      onActivate={() => setActiveProject(index)}
                      onNavigate={handleProjectNavigation}
                    />
                  ))}
                </div>

                {currentProject ? (
                  <aside
                    className="project-preview-panel technical-grid sticky top-28 hidden min-h-[31rem] flex-col justify-between border border-[var(--line)] p-8 lg:flex"
                    aria-live="polite"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <p className="font-mono text-xs tracking-[0.12em] text-[var(--muted)]">
                        CASE {String(currentProjectIndex + 1).padStart(2, "0")}
                      </p>
                      <p className="max-w-[12rem] text-right font-mono text-xs leading-5 text-[var(--muted)]">
                        {currentProject.category}
                      </p>
                    </div>
                    <div key={currentProject.slug} className="project-preview-enter">
                      <h3 className="max-w-md text-4xl font-medium tracking-[-0.045em]">
                        <TextReveal text={currentProject.title} />
                      </h3>
                      <p className="mt-5 max-w-md text-base leading-7 text-[var(--muted)]">
                        <TextReveal text={currentProject.shortDescription} />
                      </p>
                      <div className="mt-7">
                        <Tags items={currentProject.technologies} />
                      </div>
                      <div className="mt-8">
                        <ProjectOverview project={currentProject} />
                      </div>
                    </div>
                    <Link
                      href={`/projects/${currentProject.slug}`}
                      onClick={(event) => handleProjectNavigation(event, `/projects/${currentProject.slug}`, currentProject)}
                      className={`${focusRing} group flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm font-semibold`}
                    >
                      View project details
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 text-[var(--accent)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </aside>
                ) : (
                  <div className="hidden min-h-[31rem] items-center justify-center border border-dashed border-[var(--line)] p-8 text-center text-sm text-[var(--muted)] lg:flex">
                    Belum ada data project.
                  </div>
                )}
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--surface)] py-24 sm:py-32 lg:py-40"
          >
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <SectionHeading
                number="04"
                eyebrow="Experience"
                title="Development work across web, mobile, APIs, and applied data methods."
              />
              <div className="mt-14 border-b border-[var(--line)]">
                {experiences.map((experience, index) => (
                  <Reveal key={`${experience.company}-${experience.role}`} delay={index * 90}>
                    <ExperienceItem experience={experience} index={index} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="scroll-mt-24 border-t border-[var(--line)] py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <div className="grid gap-12 lg:grid-cols-[9rem_1fr] lg:gap-10">
                <p className="font-mono text-xs tracking-[0.14em] opacity-60">05 / CONTACT</p>
                <div className="contact-copy">
                  <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                    <TextReveal text="Open to software development opportunities and thoughtful collaborations." />
                  </h2>
                  <p className="mt-7 max-w-2xl text-lg leading-8 opacity-70">
                    <TextReveal text="For a role, a project, or a conversation about web and mobile systems, reach me directly by email or WhatsApp." />
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className={`${focusRing} group inline-flex min-h-12 items-center gap-3 bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-contrast)] focus-visible:ring-offset-[var(--bg)]`}
                    >
                      <Mail aria-hidden="true" className="size-4" />
                      Send email
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                    <a
                      href={profile.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`${focusRing} group inline-flex min-h-12 items-center gap-3 border border-current px-5 text-sm font-semibold focus-visible:ring-offset-[var(--bg)]`}
                    >
                      WhatsApp
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                    {profile.socials.github && (
                      <a
                        href={profile.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${focusRing} group inline-flex min-h-12 items-center gap-3 border border-current px-5 text-sm font-semibold focus-visible:ring-offset-[var(--bg)]`}
                      >
                        GitHub
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={openCvModal}
                      aria-haspopup="dialog"
                      className={`${focusRing} group inline-flex min-h-12 items-center gap-3 border border-current px-5 text-sm font-semibold focus-visible:ring-offset-[var(--bg)]`}
                    >
                      <FileText
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:-translate-y-0.5"
                      />
                      CV
                    </button>
                  </div>

                  <address className="mt-16 grid gap-6 border-t border-current/20 pt-7 not-italic sm:grid-cols-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className={`${focusRing} group flex items-start gap-3 text-sm leading-6 opacity-70 transition-opacity hover:opacity-100`}
                    >
                      <Mail aria-hidden="true" className="mt-1 size-4 shrink-0" />
                      <span>
                        <span className="block font-mono text-xs opacity-70">EMAIL</span>
                        <span className="mt-1 block break-all">{profile.email}</span>
                      </span>
                    </a>
                    <a
                      href={`tel:${profile.phoneInternational}`}
                      className={`${focusRing} flex items-start gap-3 text-sm leading-6 opacity-70 transition-opacity hover:opacity-100`}
                    >
                      <Phone aria-hidden="true" className="mt-1 size-4 shrink-0" />
                      <span>
                        <span className="block font-mono text-xs opacity-70">PHONE</span>
                        <span className="mt-1 block">{profile.phone}</span>
                      </span>
                    </a>
                    <div className="flex items-start gap-3 text-sm leading-6 opacity-70">
                      <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />
                      <span>
                        <span className="block font-mono text-xs opacity-70">LOCATION</span>
                        <span className="mt-1 block">{profile.location}</span>
                      </span>
                    </div>
                  </address>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
          <div className="mx-auto flex max-w-[88rem] flex-col gap-4 px-5 py-7 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <p>© {new Date().getFullYear()} {profile.name}</p>
            <div className="flex items-center gap-5">
              <span>Software Developer</span>
              <a
                href="#home"
                className={`${focusRing} inline-flex items-center gap-2 text-[var(--fg)]`}
              >
                Back to top <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
  
