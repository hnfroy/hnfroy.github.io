import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const logos = [
  { src: "assets/media/img/logo/figma.png", alt: "Figma" },
  { src: "assets/media/img/logo/html.png", alt: "HTML" },
  { src: "assets/media/img/logo/css.png", alt: "CSS" },
  { src: "assets/media/img/logo/sass.png", alt: "Sass" },
  { src: "assets/media/img/logo/tailwind.png", alt: "Tailwind" },
  { src: "assets/media/img/logo/react.png", alt: "React" },
  { src: "assets/media/img/logo/js.png", alt: "JavaScript" },
  { src: "assets/media/img/logo/bootstrap.png", alt: "Bootstrap" },
  { src: "assets/media/img/logo/vscode.png", alt: "VSCode" },
  { src: "assets/media/img/logo/photoshop.png", alt: "Photoshop" },
];

const skills = [
  {
    title: "UI/UX\nDESIGN",
    bg: "bg-mint",
    desc: "I create user-centered, visually appealing UI/UX designs, adapting projects to meet both user and client needs while ensuring functional and impactful results.",
    tags: ["FIGMA","RESEARCH","DESIGNER","PROTOTYPING","VISUAL DESIGN","RESPONSIVE DESIGN",],
    hover: "hover:bg-lime-200",
  },
  {
    title: "CREATIVE\nTHINKING",
    bg: "bg-electricblue",
    desc: "I excel at creative thinking to design aesthetic and functional interfaces, as well as finding innovative solutions to streamline processes and overcome technical challenges.",
    tags: ["PROBLEM SOLVING","INNOVATION","IDEATE","CRITICAL THINKING","ANALYTICS","ADAPTABILITY",],
    hover: "hover:bg-blue-200",
  },
  {
    title: "FRONTEND\nDEVELOPER",
    bg: "bg-yellow-dent",
    desc: "I can convert designs into responsive web code using HTML, CSS/SCSS, React TypeScript, and Vue ensuring precision and seamless display across all devices.",
    tags: ["HTML5","CSS3","SASS","GIT","TAILWIND CSS","BOOTSTRAP","JAVASCRIPT","REACT TSX",],
    hover: "hover:bg-orange-200",
  },
];

interface Portfolio {
  type: string;
  images: string[];
  alt: string;
  title: string;
  desc: string;
  tech: string[];
}

const portfolios: Portfolio[] = [
  {
    images: ["assets/media/img/portfolio/gpn.png"],
    alt: "WebApp",
    title: "Gerakan Pemuda Natuna",
    desc: "Sistem manajemen organisasi berbasis web yang dirancang untuk mempermudah administrasi, pengelolaan keanggotaan, serta transparansi laporan keuangan bagi komunitas Gerakan Pemuda Natuna.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/kredit-pensiun.png"],
    alt: "Wordpress Project",
    title: "Kredit Pensiun",
    desc: "KreditPensiun.id is a pension credit information service website developed using WordPress and successfully completed in just 2 days. This website is designed with a simple, professional, and responsive look so that it is comfortably accessible through various devices. The focus of development is on ease of navigation, clear presentation of information, and the integration of a contact form so that visitors can directly ask questions or requests in a practical manner. This website is an effective digital solution to expand the reach of pension credit services online.",
    tech: ["WordPress", "WP Admin", "WP Plugin"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/djki-pengaduan.png"],
    alt: "DJKI Project",
    title: "DJKI Pengaduan",
    desc: "Website DJKI Pengaduan adalah platform digital yang dikembangkan untuk memudahkan masyarakat dalam menyampaikan pengaduan terkait layanan Direktorat Jenderal Kekayaan Intelektual. Website ini dirancang dengan tampilan sederhana, responsif, dan user-friendly sehingga dapat diakses dengan mudah melalui berbagai perangkat.",
    tech: ["React", "Tailwind", "TypeScript", "UI/UX Design", "Design Thinking"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/fumira-cmd.png"],
    alt: "Website Fumira - Cipta Multi Distribusindo",
    title: "Website Fumira - Cipta Multi Distribusindo",
    desc: "Website company profile untuk Cipta Multi Distribusindo (Fumira), menampilkan informasi produk, layanan, dan profil perusahaan secara jelas dan modern.",
    tech: ["React", "Responsive Design", "UI/UX Design", "SCSS"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/intrakasa.png"],
    alt: "Website Inti Ragam Perkasa",
    title: "Website Inti Ragam Perkasa",
    desc: "Website profesional untuk perusahaan Inti Ragam Perkasa, dirancang dengan struktur yang rapi dan fungsional untuk kebutuhan korporasi.",
    tech: ["React", "Responsive Design", "UI/UX Design", "SCSS"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/mpkreasi.png"],
    alt: "Website Muda Penuh Kreasi",
    title: "Website Muda Penuh Kreasi",
    desc: "Platform digital kreatif yang menampilkan portofolio dan karya dari Muda Penuh Kreasi, dengan desain modern dan interaktif.",
    tech: ["React", "Responsive Design", "UI/UX Design", "SCSS"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/itk.png"],
    alt: "Website Indonesia Traditional Knowledge",
    title: "Website Indonesia Traditional Knowledge",
    desc: "Website yang mengangkat pengetahuan tradisional Indonesia, menampilkan konten budaya dengan desain yang elegan dan mudah diakses.",
    tech: ["React Tsx", "Responsive Design", "UI/UX Design", "SCSS"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/kikomunal.png"],
    alt: "Website DJKI KIKomunal",
    title: "Website DJKI KIKomunal",
    desc: "Portal resmi KIKomunal DJKI yang menyediakan informasi terkait kekayaan intelektual komunal di Indonesia, dengan tampilan informatif dan navigasi yang mudah.",
    tech: ["React Tsx", "Responsive Design", "UI/UX Design", "SCSS"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/anrize.png"],
    alt: "Website Anrize Tridaya Utama",
    title: "Website Anrize Tridaya Utama",
    desc: "Website company profile resmi Anrize Tridaya Utama, menghadirkan informasi produk dan layanan perusahaan dengan desain modern dan profesional.",
    tech: ["React", "Responsive Design", "UI/UX Design", "SCSS"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/compro-it.png"],
    alt: "Company Profile IT",
    title: "Company Profile IT",
    desc: "Website company profile untuk sektor teknologi informasi, dengan fokus pada desain profesional, struktur rapi, dan optimasi performa.",
    tech: ["Next.js", "Tailwind CSS", "GSAP"],
    type: "Study Case",
  },
  {
    images: ["assets/media/img/portfolio/compro.png"],
    alt: "Company Profile",
    title: "Company Profile",
    desc: "Website company profile generik yang dirancang dengan tampilan elegan dan responsif, cocok untuk kebutuhan presentasi perusahaan.",
    tech: ["WordPress", "Bootstrap", "Responsive Design"],
    type: "Study Case",
  },
  {
    images: ["assets/media/img/portfolio/asean-japan.png"],
    alt: "Website ASEAN-JAPAN",
    title: "Website ASEAN-JAPAN",
    desc: "Website yang mendukung kolaborasi ASEAN-Japan, dengan tampilan profesional dan aksesibilitas yang responsif.",
    tech: ["Vue", "Responsive Design", "UI/UX Design", "SCSS"],
    type: "Project",
  },
  {
    images: ["assets/media/img/portfolio/compro-archive.png"],
    alt: "Company Profile Archive",
    title: "Company Profile Archive",
    desc: "Website arsip company profile yang menyajikan dokumentasi perusahaan dalam format digital, memudahkan akses informasi secara historis.",
    tech: ["WordPress", "Tailwind", "SEO Optimization"],
    type: "Study Case",
  },
];




export default function Home() {
  const tagRefs = useRef<(HTMLElement | null)[][]>([]);
  const logoRefs = useRef<HTMLImageElement[]>([]);
  const [selected, setSelected] = useState<Portfolio | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animasi parallax dengan GSAP
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!container || !content || !bg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // range -1 sampai 1
      const y = (e.clientY / innerHeight - 0.5) * 2;

      // Background GIF → depth jauh (lambat, subtle)
      gsap.to(bg, {
        x: x * 40,
        y: y * 40,
        scale: 1.05,
        duration: 1.2,
        ease: "power3.out",
      });

      // Content text → depth dekat (cepat, lebih responsif)
      gsap.to(content, {
        x: x * 100,
        y: y * 100,
        rotateY: x * 10,
        rotateX: -y * 10,
        transformPerspective: 1200,
        scale: 1.05,
        duration: 1,
        ease: "power3.out",
      });
    };

    // Disable di layar kecil biar gak berat
    if (window.innerWidth > 768) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 🔹 Animasi skill tags
  useEffect(() => {
    tagRefs.current.forEach((skillTags) => {
      skillTags.forEach((tag) => {
        if (tag) {
          gsap.to(tag, {
            backgroundColor: gsap.utils.random([
              "#ffb6c1", // pink
              "#90ee90", // green
              "#add8e6", // blue
              "#ffff99", // yellow
              "#ffa07a", // orange
            ]),
            repeat: -1,
            yoyo: true,
            duration: gsap.utils.random(0.8, 2),
            delay: gsap.utils.random(0, 1),
            ease: "power1.inOut",
          });
        }
      });
    });
  }, []);

  // 🔹 Animasi logo floating
  useEffect(() => {
    logoRefs.current.forEach((el, i) => {
      if (el) {
        gsap.to(el, {
          y: 15, // naik turun
          duration: 2 + i * 0.4, // durasi beda-beda biar lebih natural
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
  }, []);

  // 🔹 Animasi modal ketika muncul
  const animateModal = () => {
    if (selected && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  };

  useEffect(() => {
    animateModal();
  }, [selected]);

  // Navigasi modal image
  const handleNext = () => {
    if (!selected) return;
    setCurrentImage((prev) => (prev + 1) % selected.images.length);
  };

  const handlePrev = () => {
    if (!selected) return;
    setCurrentImage((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="flex flex-col items-center">
      <section
        ref={containerRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <img
          ref={bgRef}
          src="assets/media/img/gif/vaporwave.gif"
          alt="vaporwave"
          className="absolute w-full h-full object-cover"
        />

        {/* Content Text */}
        <div
          ref={contentRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <small className="font-bold text-[22px] md:text-[32px] pixel-border text-electricblue block">
            UI/UX Designer
          </small>
          <h1 className="font-pixel text-[48px] md:text-[72px] text-white text-bordered ms-0 md:ms-12">
            HANIF ROYYAN
          </h1>
        </div>
      </section>

      <section id="me" className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <div className="relative w-full bg-white border-3 rounded-xl p-12 grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          <img src="assets/media/img/accent/vaporwave.png" alt="vaporwave" className="absolute -right-12 -bottom-5" />
          <div className="hidden md:flex md:col-span-4 justify-center">
            <img
              src="assets/media/img/img-hnf-pixel.png"
              alt="Hanif Pixel"
              className="absolute h-[540px] w-auto left-3 bottom-0"
            />
          </div>

          <div className="md:hidden flex justify-center">
            <img
              src="assets/media/img/img-hnf-pixel.png"
              alt="Hanif Pixel"
              className="w-3/4 max-h-[350px] object-contain"
            />
          </div>

          <div className="md:col-span-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-pixel">Hi, i'm Hanif</h3>
              <h3 className="font-pixel">Mid Level UI/UX Designer and FrontEnd Developer from Indonesia.</h3>
            </div>
            <p className="font-medium text-sm sm:text-base leading-relaxed">
              I am a UI/UX Designer who is passionate about exploring between design and
              technology. With over 3 years of experience in various projects such as
              mobile applications, web platforms, and responsive web applications, I
              enjoy solving complex design challenges through design thinking and
              iterative processes. In addition, I also have expertise in frontend
              development using HTML, CSS, Sass, JavaScript, and React. I am able to
              adapt quickly to changes, and am used to working independently and
              collaboratively in a team.
            </p>
          </div>
        </div>
      </section>

      <section id="skillsets" className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <h2 className="font-pixel text-white font-regular text-2xl pixel-border">SKILLSETS</h2>
        <div className="relative w-full bg-white border-3 rounded-2xl p-12 flex flex-col gap-6">
          <img src="assets/media/img/accent/game.png" alt="game" className="absolute -left-12 -top-12" />
          <img src="assets/media/img/accent/gameboy.png" alt="game" className="absolute -bottom-15 -right-15" />
          <h4 className="font-pixel text-white font-regular text-lg pixel-border">Skills</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skills.map((item, index) => (
              <div
                key={index}
                className={`border-3 px-4 py-5 rounded-xl flex flex-col gap-4 hover:scale-110 transition ${item.bg}`}
              >
                <h3 className="uppercase font-bold text-3xl whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="font-medium text-lg">{item.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, i) => (
                    <small
                      key={i}
                      ref={(el) => {
                        if (!tagRefs.current[index]) tagRefs.current[index] = [];
                        if (el) tagRefs.current[index][i] = el;
                      }}
                      className={`bg-white ${item.hover} cursor-pointer px-1 w-fit border-3 rounded font-medium`}
                    >
                      {tag}
                    </small>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <h4 className="font-pixel text-white font-regular text-lg pixel-border">Software & tools</h4>
          <div className="flex flex-wrap justify-between">
            {logos.map((logo, index) => (
              <img
                key={index}
                ref={(el) => {
                  if (el) logoRefs.current[index] = el;
                }}
                src={logo.src}
                alt={logo.alt}
                className="h-[76px] w-[70px] object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <h2 className="font-pixel text-white font-regular text-2xl pixel-border">WORKS</h2>
        <div className="relative w-full bg-white border-3 rounded-2xl p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <img src="assets/media/img/accent/headphone.png" alt="game" className="absolute -top-15 -left-15" />
          <img src="assets/media/img/accent/bottle.png" alt="game" className="absolute -bottom-15 -right-15" />
          {portfolios.map((item, index) => (
            <div
              key={index}
              className="relative border-3 rounded-xl overflow-hidden cursor-pointer transform transition hover:scale-105"
              onClick={() => {
                setSelected(item);
                setCurrentImage(0);
              }}
            >
              {/* Label */}
              <span className="absolute top-3 right-3 bg-yellow-400 text-black border-2 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.type ?? "Project"} {/* bisa diisi "Study Case" / "Project" */}
              </span>

              {/* Image */}
              <img
                src={item.images[0]}
                alt={item.alt}
                className="w-full h-[240px] object-cover"
              />
            </div>
          ))}

          {selected && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
              <div
                ref={modalRef}
                className="bg-white border-3 rounded-2xl p-8 max-w-5xl w-full relative grid md:grid-cols-2 gap-6"
              >
                <button
                  className="cursor-pointer absolute top-3 right-4 text-black text-2xl font-bold"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>

                <div className="flex flex-col items-start justify-start relative">
                  <img
                    src={selected.images[currentImage]}
                    alt={selected.alt}
                    className="w-full h-[300px] object-cover rounded-xl border-2 "
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <button
                      onClick={handlePrev}
                      className="bg-black/50 text-white px-3 py-2 rounded-full"
                    >
                      ‹
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                      onClick={handleNext}
                      className="bg-black/50 text-white px-3 py-2 rounded-full"
                    >
                      ›
                    </button>
                  </div>

                  <div className="flex gap-2 mt-4">
                    {selected.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${selected.alt}-${i}`}
                        className={`w-16 h-12 object-cover rounded cursor-pointer border-2 ${
                          i === currentImage
                            ? "border-pink-500"
                            : "border-transparent"
                        }`}
                        onClick={() => setCurrentImage(i)}
                      />
                    ))}
                  </div>
                </div>

                {/* Konten */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold">{selected.title}</h2>
                  <p className="text-lg text-gray-700">{selected.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selected.tech.map((t: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm border-2 rounded-full bg-gray-100 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <h2 className="font-pixel text-white font-regular text-2xl pixel-border">CONTACT</h2>
        <div className="w-full bg-white flex flex-col md:flex-row items-center gap-12 border-3 rounded-xl p-12 md:px-24">
          <img
            src="assets/media/img/accent/img-contact.png"
            alt="Hanif Pixel"
            className="h-[150px] w-auto"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-pixel text-white text-3xl pixel-border">GET IN TOUCH</h3>
            <p className="font-medium">Whether you have a question, want to collaborate, or just say hi, my inbox is always open! I'll try my best to get back to you as soon as possible.</p>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 bg-yellow-dent h-1/2 rounded-t-2xl border-3 text-center">
        ©2025 - Hanif Royyan
      </footer>
    </div>
  );
} 

