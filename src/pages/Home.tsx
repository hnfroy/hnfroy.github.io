import { useEffect, useRef, useState, type ReactNode } from "react";
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

type Skill = {
  title: string;
  desc: string;
  bg: string;
  hover: string;
  tags: string[];
};

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
  images: string[];
  alt: string;
  title: string;
  desc: string;
  tech: string[];
}

const portfolios: Portfolio[] = [
  {
    images: [
      "assets/media/img/portfolio/djki-pengaduan.png",
      "https://picsum.photos/500/300",
      "https://picsum.photos/500/301",
    ],
    alt: "DJKI Project",
    title: "DJKI Pengaduan",
    desc: "Sistem pengaduan online untuk Direktorat Jenderal Kekayaan Intelektual.",
    tech: ["React", "Tailwind", "TypeScript"],
  },
  {
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/500/303",
      "https://picsum.photos/500/304",
    ],
    alt: "Dummy Project",
    title: "Dummy Portfolio",
    desc: "Contoh portfolio menggunakan dummy image.",
    tech: ["Next.js", "GSAP", "Framer Motion"],
  },
  {
    images: [
      "https://picsum.photos/400/301",
      "https://picsum.photos/500/303",
      "https://picsum.photos/500/304",
    ],
    alt: "Dummy Project",
    title: "Dummy Portfolio",
    desc: "Contoh portfolio menggunakan dummy image.",
    tech: ["Next.js", "GSAP", "Framer Motion"],
  },
];



export default function Home() {
  const tagRefs = useRef<(HTMLElement | null)[][]>([]);
  const logoRefs = useRef<HTMLImageElement[]>([]);
  const [selected, setSelected] = useState<Portfolio | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

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
    logoRefs.current.forEach((el: gsap.TweenTarget, i: number) => {
      if (el) {
        gsap.to(el, {
          y: 15, // naik turun
          duration: 2 + i * 0.2, // durasi beda-beda biar lebih natural
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    });
  }, []);

  useEffect(() => {
    if (selected && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [selected]);

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
      <section className="max-w-6xl w-full flex items-center justify-center pt-42 pb-18">
        <h1 className="font-heading text-2xl text-pink-400">Hello, I’m Hanif 🚀</h1>
      </section>

      <section id="me" className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <div className="relative w-full bg-white border-3 rounded-xl p-12 grid grid-cols-1 md:grid-cols-12 items-center gap-6 transition transform hover:scale-105">
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
        <div className="w-full bg-white border-3 rounded-2xl p-12 flex flex-col gap-6 transition transform hover:scale-105">
          <h4 className="font-pixel text-white font-regular text-lg pixel-border">Skills</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skills.map((item, index) => (
              <div
                key={index}
                className={`border-3 px-4 py-5 rounded-xl flex flex-col gap-4 ${item.bg}`}
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

      <section className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <h2 className="font-pixel text-white font-regular text-2xl pixel-border">WORKS</h2>
        <div className="w-full bg-white border-3 rounded-2xl p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 transition transform hover:scale-105">
          {portfolios.map((item, index) => (
            <div
              key={index}
              className="border-3 rounded-xl overflow-auto cursor-pointer transform transition hover:scale-105"
              onClick={() => {
                setSelected(item);
                setCurrentImage(0);
              }}
            >
              <img src={item.images[0]} alt={item.alt} className="w-full h-[240px] object-cover" />
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

                <div className="flex flex-col items-center justify-center relative ">
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

      <section className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <h2 className="font-pixel">Contact</h2>
        <div className="w-full bg-white border-3 rounded-xl scale-100 hover:scale-105 transition p-12">
          a
        </div>
      </section>
    </div>
  );
}
