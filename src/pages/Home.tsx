import { useEffect, useRef } from "react";
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

export default function Home() {
  const tagRefs = useRef<(HTMLElement | null)[][]>([]);
  const logoRefs = useRef<HTMLImageElement[]>([]);

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

  return (
    <div className="flex flex-col items-center">
      <section className="max-w-6xl w-full flex items-center justify-center pt-42 pb-18">
        <h1 className="font-heading text-2xl text-pink-400">Hello, I’m Hanif 🚀</h1>
      </section>

      <section id="me" className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <div className="relative w-full bg-white border-3 rounded-xl p-12 grid grid-cols-12">
          <div className="col-span-4">
            <img
              src="assets\media\img\img-hnf-pixel.png"
              alt="Logo"
              className="absolute h-[540px] w-auto left-3 bottom-0"
            />
          </div>
          <div className="col-span-8">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <h3 className="font-pixel">Hi, i'm Hanif</h3>
                <h3 className="font-pixel">Mid Level UI/UX Designer and FrontEnd Developer from Indonesia.</h3>
              </div>
              <p className="font-medium">
                I am a UI/UX Designer who is passionate about exploring between design and technology. With over 3 years of experience in various projects such as mobile applications, web platforms, and responsive web applications, I enjoy solving complex design challenges through design thinking and iterative processes. In addition, I also have expertise in frontend development using HTML, CSS, Sass, JavaScript, and React. I am able to adapt quickly to changes, and am used to working independently and collaboratively in a team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skillsets" className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <h2 className="font-pixel text-white font-regular text-2xl pixel-border">SKILLSETS</h2>
        <div className="w-full bg-white border-3 rounded-2xl p-12 flex flex-col gap-6">
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
          <div className="flex justify-between">
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
        <h2 className="font-pixel">Works</h2>
        <div className="w-full bg-white border-3 rounded-xl p-12">
          a
        </div>
      </section>

      <section className="max-w-6xl w-full flex flex-col items-center gap-12 py-18 px-3 md:px-0">
        <h2 className="font-pixel">Contact</h2>
        <div className="w-full bg-white border-3 rounded-xl p-12">
          a
        </div>
      </section>
    </div>
  );
}
