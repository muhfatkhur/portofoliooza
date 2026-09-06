"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  ImageOff,
  MapPin,
  Maximize2,
  Menu,
  MessageCircle,
  RefreshCw,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
};

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const project = {
  number: "04",
  slug: "siakad-mahad",
  title: "Ma'had Al-Jami'ah Academic Information ",
  shortTitle: "SIAKAD Ma'had Al-Jami'ah",
  category: "Full-Stack Web Admin & Flutter Mobile App",
  role: "Full-Stack Developer",
  platform: "Web Admin + Mobile Application",
  focus: "Laravel REST API, Web Admin & Flutter Mobile",
  description:
    "End-to-end academic management  dengan backend Laravel, panel administrasi web, serta aplikasi mobile Flutter untuk mahasiswa yang terhubung melalui REST API.",
  technologies: ["Laravel", "REST API", "Flutter", "Dart", "MySQL", "Postman", "Git", "Blade", "Tailwind CSS", "Android Studio", "VS Code"],
  screenshots: [
    {
      src: "/images/projects/siakad-mahad/dassis.png",
      alt: "Dashboard utama siswa SIAKAD Ma'had Al-Jami'ah",
      caption: "Dashboard utama yang menampilkan ringkasan profil dan status akademik siswa dalam satu tampilan.",
    },
    {
      src: "/images/projects/siakad-mahad/krssis.png",
      alt: "Halaman Kartu Rencana Studi siswa",
      caption: "Halaman KRS untuk melihat daftar mata pelajaran yang diambil pada semester berjalan.",
    },
    {
      src: "/images/projects/siakad-mahad/khs.png",
      alt: "Halaman Kartu Hasil Studi siswa",
      caption: "Halaman KHS yang merangkum capaian nilai siswa pada setiap semester.",
    },
    {
      src: "/images/projects/siakad-mahad/transkrip.png",
      alt: "Halaman transkrip akademik siswa",
      caption: "Transkrip akademik yang menampilkan akumulasi nilai siswa sejak awal hingga akhir masa studi.",
    },
    {
      src: "/images/projects/siakad-mahad/jadwal.png",
      alt: "Halaman jadwal akademik siswa",
      caption: "Jadwal akademik untuk memantau kelas dan kegiatan harian siswa.",
    },
    {
      src: "/images/projects/siakad-mahad/dadmin.png",
      alt: "Dashboard admin SIAKAD",
      caption: "Dashboard admin sebagai pusat kontrol yang menyajikan statistik dan kondisi data sistem secara keseluruhan.",
    },
    {
      src: "/images/projects/siakad-mahad/kllpengguna.png",
      alt: "Halaman kelola pengguna",
      caption: "Manajemen master data untuk mengelola akun siswa, dosen, dan admin melalui proses CRUD terpusat.",
    },
    {
      src: "/images/projects/siakad-mahad/kllmatkul.png",
      alt: "Halaman kelola mata kuliah",
      caption: "Pengelolaan data master mata kuliah dan kelas yang tersedia dalam sistem.",
    },
    {
      src: "/images/projects/siakad-mahad/setkrs.png",
      alt: "Halaman pengaturan KRS dan plotting kelas",
      caption: "Plotting KRS untuk memetakan atau mendaftarkan siswa ke kelas dan mata kuliah tertentu.",
    },
    {
      src: "/images/projects/siakad-mahad/ddosen.png",
      alt: "Dashboard utama dosen",
      caption: "Dashboard dosen yang merangkum informasi dan aktivitas mengajar secara terpusat.",
    },
    {
      src: "/images/projects/siakad-mahad/jadwald.png",
      alt: "Halaman jadwal dosen",
      caption: "Jadwal dosen untuk memantau kelas-kelas yang diampu pada periode berjalan.",
    },
    {
      src: "/images/projects/siakad-mahad/inputnilai.png",
      alt: "Form input nilai dosen",
      caption: "Form input nilai untuk memasukkan nilai mentah mahasiswa berdasarkan komponen penilaian.",
    },
  ] as Screenshot[],
  githubUrl: null as string | null,
  liveUrl: null as string | null,
};

const workflow = [
  {
    title: "Database Architecture & Design",
    description: "Merancang relasi MySQL untuk master user, kelas, KRS, komponen nilai, detail nilai, dan rekap akademik.",
  },
  {
    title: "Backend & REST API Development",
    description: "Membangun business logic Laravel, endpoint, dan kalkulasi nilai dinamis.",
  },
  {
    title: "Web Admin Dashboard",
    description: "Menyediakan portal pengurus untuk mengelola mahasiswa, pengajar, kelas, kegiatan, nilai, dan konfigurasi bobot.",
  },
  {
    title: "Flutter Mobile Application",
    description: "Mengembangkan aplikasi mahasiswa dengan Dart",
  },
  {
    title: "Testing & Integration",
    description: "Menguji response API melalui Postman",
  },
];

const features: Feature[] = [
  {
    title: "Token-Based Authentication",
    description: "Laravel Sanctum memvalidasi token akses pada setiap request dari web admin dan aplikasi mobile.",
    icon: MapPin,
  },
  {
    title: "Dynamic Grading Engine",
    description: "Komponen nilai seperti tugas, UTS, UAS, dan presensi dapat diatur fleksibel dengan validasi total bobot 100%.",
    icon: Camera,
  },
  {
    title: "Web Admin Management Panel",
    description: "Panel CRUD terpusat untuk mahasiswa, pengurus, kelas, mata pelajaran, nilai, dan laporan akademik.",
    icon: MessageCircle,
  },
  {
    title: "Interactive Flutter Student App",
    description: "Dashboard mobile, status KRS, pengumuman, dynamic grade viewer, profile, dan settings untuk mahasiswa.",
    icon: RefreshCw,
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg)]";

const techLogos: Record<string, string> = {
  Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  Flutter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "Leaflet.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leaflet/leaflet-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "Vanilla JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
};

function SectionHeading({ number, title }: { 
  number: string;
  title: string;
}) {
  return (
    <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-3 border-t border-[var(--line)] pt-5">
      <p className="font-mono text-xs tracking-[0.16em] text-[var(--muted)]">{number}</p>
      <h2 className="text-center text-3xl font-medium tracking-[-0.04em] text-[var(--fg)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <span aria-hidden="true" />
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(node);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function TechItem({ name }: { name: string }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const logo = techLogos[name];

  if (!logo || logoFailed) {
    return (
      <span className="font-mono text-xs leading-6 text-[var(--muted)]">
        {name}
      </span>
    );
  }

  return (
    <span
      className="grid size-9 place-items-center border border-[var(--line)] bg-[var(--surface)]"
      title={name}
      role="img"
      aria-label={name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt=""
        width={22}
        height={22}
        loading="lazy"
        decoding="async"
        className="size-5 object-contain"
        onError={() => setLogoFailed(true)}
      />
    </span>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-3" aria-label="Technology stack">
      {items.map((item) => (
        <li key={item}>
          <TechItem name={item} />
        </li>
      ))}
    </ul>
  );
}

function ProjectImage({
  screenshot,
  priority = false,
}: {
  screenshot: Screenshot;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[var(--surface)] p-6 text-center">
        <div>
          <ImageOff aria-hidden="true" className="mx-auto size-7 text-[var(--accent)]" />
          <p className="mt-4 text-sm font-semibold text-[var(--fg)]">Screenshot belum tersedia</p>
          <p className="mt-2 break-all font-mono text-[0.68rem] leading-5 text-[var(--muted)]">
            {screenshot.src}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={screenshot.src}
      alt={screenshot.alt}
      fill
      sizes="(max-width: 1024px) 100vw, 48vw"
      priority={priority}
      className="pointer-events-none select-none object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02] sm:p-5"
      onError={() => setFailed(true)}
    />
  );
}

function ScreenshotCarousel({
  screenshots,
  title,
  priority = false,
}: {
  screenshots: Screenshot[];
  title: string;
  priority?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const draggedRef = useRef(false);

  const hasMultiple = screenshots.length > 1;
  const goTo = (index: number) => {
    if (!screenshots.length) return;
    setCurrent((index + screenshots.length) % screenshots.length);
  };
  const previous = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const openLightbox = () => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus());
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft" && hasMultiple) {
        setCurrent((value) => (value - 1 + screenshots.length) % screenshots.length);
      }
      if (event.key === "ArrowRight" && hasMultiple) {
        setCurrent((value) => (value + 1) % screenshots.length);
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [current, hasMultiple, lightboxOpen, screenshots.length]);

  if (!screenshots.length) return null;

  const finishDrag = (clientX: number) => {
    if (dragStart === null) return;
    const distance = clientX - dragStart;
    if (Math.abs(distance) > 48 && hasMultiple) {
      if (distance > 0) previous();
      else next();
    }
    setDragStart(null);
    setDragOffset(0);
    draggedRef.current = false;
  };

  return (
    <>
      <div
        className="group relative overflow-hidden border border-[var(--line)] bg-[var(--surface)] outline-none"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" && hasMultiple) {
            event.preventDefault();
            previous();
          }
          if (event.key === "ArrowRight" && hasMultiple) {
            event.preventDefault();
            next();
          }
        }}
        onPointerDown={(event) => {
          draggedRef.current = false;
          setDragStart(event.clientX);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (dragStart !== null) {
            const distance = event.clientX - dragStart;
            if (Math.abs(distance) > 8) draggedRef.current = true;
            setDragOffset(distance);
          }
        }}
        onPointerUp={(event) => finishDrag(event.clientX)}
        onPointerCancel={() => {
          draggedRef.current = false;
          setDragStart(null);
          setDragOffset(0);
        }}
        style={{ touchAction: "pan-y", cursor: dragStart === null ? "grab" : "grabbing" }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
            transitionDuration: dragStart === null ? undefined : "0ms",
          }}
        >
          {screenshots.map((screenshot, index) => (
            <figure
              key={`${screenshot.src}-${index}`}
              className="w-full shrink-0"
              aria-hidden={index !== current}
            >
              <button
                type="button"
                onClick={(event) => {
                  if (draggedRef.current) {
                    event.preventDefault();
                    draggedRef.current = false;
                    return;
                  }
                  openLightbox();
                }}
                className={`${focusRing} relative block aspect-[16/10] w-full cursor-zoom-in`}
                tabIndex={index === current ? 0 : -1}
                disabled={index !== current}
                aria-label={`Open screenshot ${index + 1} of ${screenshots.length} in fullscreen`}
              >
                <ProjectImage screenshot={screenshot} priority={priority && index === 0} />
                <span className="absolute right-3 top-3 grid size-9 place-items-center bg-[var(--bg)] text-[var(--fg)] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 aria-hidden="true" className="size-4" />
                </span>
              </button>
              {screenshot.caption && (
                <figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm text-[var(--muted)]">
                  {screenshot.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {hasMultiple && (
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-3">
            <button
              type="button"
              onClick={previous}
              onPointerDown={(event) => event.stopPropagation()}
              className={`${focusRing} pointer-events-auto grid size-10 place-items-center bg-[color:var(--bg)]/90 text-[var(--fg)] opacity-80 shadow-sm transition-opacity hover:opacity-100`}
              aria-label="Previous screenshot"
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              onClick={next}
              onPointerDown={(event) => event.stopPropagation()}
              className={`${focusRing} pointer-events-auto grid size-10 place-items-center bg-[color:var(--bg)]/90 text-[var(--fg)] opacity-80 shadow-sm transition-opacity hover:opacity-100`}
              aria-label="Next screenshot"
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        )}

        <p className="absolute bottom-14 right-3 bg-[var(--bg)] px-2.5 py-1.5 font-mono text-xs text-[var(--fg)]">
          {current + 1} / {screenshots.length}
        </p>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Screenshot {current + 1} dari {screenshots.length}: {screenshots[current].alt}
        </p>
      </div>

      {hasMultiple && (
        <div
          className="mt-3 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label="Choose screenshot"
        >
          {screenshots.map((screenshot, index) => (
            <button
              key={`${screenshot.src}-dot-${index}`}
              type="button"
              onClick={() => goTo(index)}
              className={`size-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${
                index === current
                  ? "scale-125 bg-[var(--accent)]"
                  : "bg-[var(--line)] hover:bg-[var(--muted)]"
              }`}
              aria-label={`Go to screenshot ${index + 1} of ${screenshots.length}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
      )}

      {lightboxOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot preview`}
          className="fixed inset-0 z-[100] grid bg-[#090a09]/95 p-3 text-white sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="relative flex min-h-0 flex-col">
            <div className="flex items-center justify-between gap-4 pb-3">
              <p className="font-mono text-xs text-white/70">
                {current + 1} / {screenshots.length}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                className={`${focusRing} grid size-11 place-items-center border border-white/25 text-white transition-colors hover:border-white focus-visible:ring-white focus-visible:ring-offset-[#090a09]`}
                aria-label="Close fullscreen preview"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <figure className="flex min-h-0 flex-1 flex-col items-center justify-center">
              <div className="relative min-h-0 w-full flex-1">
                <ProjectImage screenshot={screenshots[current]} priority />
              </div>
              {screenshots[current].caption && (
                <figcaption className="max-w-3xl px-12 pt-3 text-center text-sm text-white/70">
                  {screenshots[current].caption}
                </figcaption>
              )}
            </figure>

            {hasMultiple && (
              <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
                <button
                  type="button"
                  onClick={previous}
                  className={`${focusRing} pointer-events-auto grid size-11 place-items-center border border-white/25 bg-black/30 text-white hover:border-white focus-visible:ring-white focus-visible:ring-offset-[#090a09]`}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft aria-hidden="true" className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className={`${focusRing} pointer-events-auto grid size-11 place-items-center border border-white/25 bg-black/30 text-white hover:border-white focus-visible:ring-white focus-visible:ring-offset-[#090a09]`}
                  aria-label="Next screenshot"
                >
                  <ChevronRight aria-hidden="true" className="size-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function RouteTransition({ label }: { label: string }) {
  return (
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
          <span className="route-transition-code">SYS://CASE-{project.number}</span>
        </div>
        <div className="route-transition-center">
          <p className="route-transition-kicker">{label}</p>
          <h2 className="route-transition-title">{project.title}</h2>
          <p className="route-transition-subtitle">TRANSITIONING PROJECT VIEW</p>
        </div>
        <div className="route-transition-bottom">
          <span>LOADING EXPERIENCE</span>
          <span>ACCESS GRANTED</span>
        </div>
        <div className="route-transition-progress" aria-hidden="true"><span /></div>
      </div>
    </div>
  );
}

export default function WorkshopRecommendationPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigationLabel, setNavigationLabel] = useState("OPENING PROJECT");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigationTimerRef = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      document.querySelector<HTMLButtonElement>("[aria-controls='project-mobile-menu']")?.focus();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (navigationTimerRef.current !== null) {
        window.clearTimeout(navigationTimerRef.current);
        navigationTimerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (navigationTimerRef.current !== null) {
      window.clearTimeout(navigationTimerRef.current);
      navigationTimerRef.current = null;
    }

    const frame = window.requestAnimationFrame(() => setIsNavigating(false));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const clearNavigation = () => {
      if (navigationTimerRef.current !== null) {
        window.clearTimeout(navigationTimerRef.current);
        navigationTimerRef.current = null;
      }
      setIsNavigating(false);
    };

    window.addEventListener("popstate", clearNavigation);
    window.addEventListener("pageshow", clearNavigation);
    return () => {
      window.removeEventListener("popstate", clearNavigation);
      window.removeEventListener("pageshow", clearNavigation);
    };
  }, []);

  const handleNavigation = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
    label: string,
  ) => {
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
    if (navigationTimerRef.current !== null) {
      window.clearTimeout(navigationTimerRef.current);
    }

    setMenuOpen(false);
    setNavigationLabel(label);
    setIsNavigating(true);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      router.push(href);
      return;
    }

    navigationTimerRef.current = window.setTimeout(() => {
      navigationTimerRef.current = null;
      router.push(href);
    }, 560);
  };

  return (
    <>
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          filter: blur(7px);
          transition: opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal-visible {
          opacity: 1;
          transform: none;
          filter: none;
        }

        .route-transition {
          --transition-bg: #05060b;
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
          opacity: 0.08;
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

        @keyframes route-cover-in {
          from { opacity: 0; clip-path: inset(100% 0 0); transform: scale(1.04); }
          to { opacity: 1; clip-path: inset(0); transform: scale(1); }
        }

        @keyframes route-shell-in {
          from { opacity: 0; filter: blur(10px); transform: translateY(18px) scale(0.96); }
          to { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
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
          from { opacity: 0; transform: translate(-50%, -50%) rotate(-18deg) scale(0.8); }
          to { opacity: 1; transform: translate(-50%, -50%) rotate(8deg) scale(1); }
        }

        @keyframes route-dot-pulse {
          0%, 100% { opacity: 0.55; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.18); }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none;
          }

          .route-transition,
          .route-transition::after,
          .route-transition-scan,
          .route-transition-orbit,
          .route-transition-shell,
          .route-transition-dot,
          .route-transition-progress span {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
      {isNavigating && <RouteTransition label={navigationLabel} />}
      <title>{project.title} — Muh. Fatkhur Rozaq Nur Abin</title>
      <meta
        name="description"
        content="Case study ekosistem informasi akademik Ma'had Al-Jami'ah dengan Laravel REST API, web admin, dan aplikasi mobile Flutter."
      />

      <a
        href="#main-content"
        className={`${focusRing} fixed left-4 top-4 z-[100] -translate-y-24 bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--accent-contrast)] transition-transform focus:translate-y-0`}
      >
        Skip to content
      </a>

      <div className="min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--fg)]">
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--bg)]/95 backdrop-blur-md">
          <nav
            aria-label="Project navigation"
            className="mx-auto flex h-[4.5rem] max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12"
          >
            <Link
              href="/"
              onClick={(event) => handleNavigation(event, "/", "RETURN TO PORTFOLIO")}
              className={`${focusRing} flex items-center gap-3 text-sm font-semibold tracking-[-0.02em]`}
              aria-label="Return to portfolio homepage"
            >
              <span className="grid size-8 place-items-center bg-[var(--fg)] font-mono text-[0.65rem] text-[var(--bg)]">
                OZA
              </span>
              <span className="hidden sm:inline">Muh. Fatkhur Rozaq Nur Abin</span>
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {[
                ["title", "Title"],
                ["gallery", "Gallery"],
                ["overview", "Overview"],
                ["workflow", "Workflow"],
                ["features", "Features"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`${focusRing} py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]`}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className={`${focusRing} grid size-10 place-items-center border border-[var(--line)] text-[var(--fg)] lg:hidden`}
                aria-label={menuOpen ? "Close project menu" : "Open project menu"}
                aria-expanded={menuOpen}
                aria-controls="project-mobile-menu"
              >
                {menuOpen ? (
                  <X aria-hidden="true" className="size-5" />
                ) : (
                  <Menu aria-hidden="true" className="size-5" />
                )}
              </button>
            </div>
          </nav>

          <div
            id="project-mobile-menu"
            ref={mobileMenuRef}
            aria-hidden={!menuOpen}
            className={`overflow-hidden border-t border-[var(--line)] bg-[var(--bg)] px-5 transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
              menuOpen
                ? "max-h-[28rem] py-4 opacity-100"
                : "pointer-events-none max-h-0 py-0 opacity-0"
            }`}
          >
            <div className="mx-auto grid max-w-[88rem]">
              {[
                ["title", "Title"],
                ["gallery", "Gallery"],
                ["overview", "Overview"],
                ["workflow", "Workflow"],
                ["features", "Features"],
              ].map(([id, label], index) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`${focusRing} flex items-center justify-between border-b border-[var(--line)] py-4 text-lg`}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  <span>{label}</span>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </header>

        <main id="main-content">
          <section id="title" className="relative scroll-mt-24 border-b border-[var(--line)]">
            <div className="relative mx-auto max-w-[88rem]">
              <div className="flex flex-col justify-between px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:px-12 lg:py-24 lg:pr-16">
                <div>
                  <Link
                    href="/#projects"
                    onClick={(event) => handleNavigation(event, "/#projects", "RETURN TO PORTFOLIO")}
                    className={`${focusRing} inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-[var(--muted)] transition-colors hover:text-[var(--fg)]`}
                  >
                    <ArrowLeft aria-hidden="true" className="size-3.5" />
                    BACK TO PROJECTS
                  </Link>

                  <Reveal className="mt-14">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs tracking-[0.13em] text-[var(--muted)]">
                      <span>CASE {project.number}</span>
                      <span className="hidden h-px w-8 bg-[var(--line)] sm:block" />
                      <span>{project.category.toUpperCase()}</span>
                    </div>
                  </Reveal>

                  <Reveal className="mt-8" delay={80}>
                    <h1 className="max-w-5xl text-balance text-[clamp(3rem,7vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.07em]">
                      {project.title}
                    </h1>
                  </Reveal>

                  <Reveal className="mt-8" delay={160}>
                    <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl sm:leading-9">
                      {project.description}
                    </p>
                  </Reveal>

                  <Reveal className="mt-8" delay={220}>
                    <Tags items={project.technologies} />
                  </Reveal>

                  {(project.liveUrl || project.githubUrl) && (
                    <Reveal className="mt-9 flex flex-wrap gap-3" delay={280}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`${focusRing} inline-flex min-h-12 items-center gap-3 bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--accent-contrast)]`}
                        >
                          Live project <ExternalLink aria-hidden="true" className="size-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`${focusRing} inline-flex min-h-12 items-center gap-3 border border-[var(--line)] px-5 text-sm font-semibold`}
                        >
                          GitHub <Code2 aria-hidden="true" className="size-4" />
                        </a>
                      )}
                    </Reveal>
                  )}
                </div>

                <Reveal className="mt-16 lg:mt-24">
                  <dl className="grid border-t border-[var(--line)] sm:grid-cols-2">
                    {[
                      ["ROLE", project.role],
                      ["PLATFORM", project.platform],
                      ["FOCUS", project.focus],
                    ].map(([term, description], index) => (
                      <div
                        key={term}
                        className={`border-b border-[var(--line)] py-4 ${
                          index % 2 === 0 ? "sm:border-r sm:pr-5" : "sm:pl-5"
                        }`}
                      >
                        <dt className="font-mono text-xs text-[var(--muted)]">{term}</dt>
                        <dd className="mt-2 text-sm leading-6">{description}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>
            </div>
          </section>

          <section id="gallery" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <Reveal>
                <SectionHeading number="01" title="Project gallery" />
              </Reveal>

              <Reveal className="mt-12" delay={120}>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,1fr)] lg:gap-10">
                  <div className="lg:pt-2">
                    <p className="font-mono text-xs tracking-[0.12em] text-[var(--muted)]">
                      SWIPE
                    </p>
                  </div>
                  <ScreenshotCarousel
                    screenshots={project.screenshots}
                    title={project.title}
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </section>

          <section
            id="overview"
            className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--surface)] py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <Reveal>
                <SectionHeading number="02" title="Project overview" />
              </Reveal>

              <Reveal className="mt-12" delay={120}>
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-16">
                  <div className="max-w-3xl space-y-6 text-lg leading-8 tracking-[-0.01em] sm:text-xl sm:leading-9">
                    <p>{project.description}</p>
                    <p className="text-[var(--muted)]">
                      Ekosistem akademik terintegrasi untuk Ma&apos;had Al-Jami&apos;ah. Web Admin dan Mobile App
                      mahasiswa berbagi satu pusat kendali Laravel REST API
                      untuk menjaga konsistensi data, keamanan token, dan
                      pemisahan tanggung jawab antara server dan client.
                    </p>
                  </div>

                  <dl className="border-t border-[var(--line)]">
                    {[
                      ["PROJECT TYPE", project.category],
                      ["PRIMARY USER", "Pengurus, pengajar & mahasiswa"],
                      ["BACKEND", "Laravel REST API"],
                      ["AUTH", "Laravel Sanctum"],
                      ["PLATFORM", project.platform],
                    ].map(([term, description]) => (
                      <div key={term} className="border-b border-[var(--line)] py-4">
                        <dt className="font-mono text-xs text-[var(--muted)]">{term}</dt>
                        <dd className="mt-2 text-sm leading-6">{description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="workflow" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <Reveal>
                <SectionHeading number="03" title="How it works" />
              </Reveal>

              <Reveal className="mt-12" delay={120}>
                <div className="grid border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
                  {workflow.map((step, index) => (
                    <article
                      key={step.title}
                      className="relative border-b border-[var(--line)] py-7 sm:px-6 lg:border-r lg:px-8 lg:[&:nth-child(3n)]:border-r-0"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-xs text-[var(--accent)]">
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>
                        {index < workflow.length - 1 && (
                          <ArrowRight aria-hidden="true" className="size-4 text-[var(--line)]" />
                        )}
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-[-0.025em] sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-7 text-[var(--muted)]">{step.description}</p>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          <section
            id="features"
            className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--surface)] py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
              <Reveal>
                <SectionHeading number="04" title="Core features" />
              </Reveal>

              <Reveal className="mt-12" delay={120}>
                <div className="grid border-t border-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <article
                        key={feature.title}
                        className="border-b border-[var(--line)] py-7 md:px-7 lg:border-r lg:px-8 lg:[&:nth-child(3n)]:border-r-0"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <Icon aria-hidden="true" className="size-5 text-[var(--accent)]" />
                          <span className="font-mono text-xs text-[var(--muted)]">
                            F—{String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-[-0.025em] sm:text-xl">
                          {feature.title}
                        </h3>
                        <p className="mt-3 leading-7 text-[var(--muted)]">
                          {feature.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </section>

          <section className="border-y border-[var(--line)] bg-[var(--bg)] text-[var(--fg)]">
            <div className="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
              <Reveal>
                <div className="grid gap-12 lg:grid-cols-[9rem_1fr] lg:gap-10">
                <p className="font-mono text-xs tracking-[0.14em] opacity-60"></p>
                <div>
                  <p className="font-mono text-xs tracking-[0.13em] opacity-60">

                  </p>
                  <h2 className="mt-5 max-w-5xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  </h2>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href="/#projects"
                      onClick={(event) => handleNavigation(event, "/#projects", "OPEN PROJECT INDEX")}
                      className={`${focusRing} inline-flex min-h-12 items-center gap-3 border border-[var(--line)] px-5 text-sm font-semibold`}
                    >
                      <ArrowLeft aria-hidden="true" className="size-4" />
                      All projects
                    </Link>
                  </div>
                </div>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
          <div className="mx-auto flex max-w-[88rem] flex-col gap-4 px-5 py-7 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
            <p>© {new Date().getFullYear()} Muh. Fatkhur Rozaq Nur Abin</p>
            <div className="flex flex-wrap items-center gap-5">
              <span>{project.shortTitle}</span>
              <Link
                href="/"
                onClick={(event) => handleNavigation(event, "/", "RETURN TO PORTFOLIO")}
                className={`${focusRing} inline-flex items-center gap-2 text-[var(--fg)]`}
              >
                Portfolio <ArrowRight aria-hidden="true" className="size-3.5" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
