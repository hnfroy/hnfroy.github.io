import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const sparkleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // set posisi awal
    gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2 });
    trailRefs.current.forEach((el) =>
      gsap.set(el, { x: window.innerWidth / 2, y: window.innerHeight / 2 })
    );

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: "power2.out",
      });

      // trailing squares
      trailRefs.current.forEach((el, i) => {
        gsap.to(el, {
          x: mouseX,
          y: mouseY,
          duration: 0.3 + i * 0.15,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // daftar warna sparkle random
    const colors = ["bg-yellow-300", "bg-red-400", "bg-blue-400", "bg-green-400", "bg-purple-400"];

    // sparkle generator
    const interval = setInterval(() => {
      if (!sparkleContainerRef.current) return;
      const sparkle = document.createElement("div");

      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      sparkle.className = `absolute w-2 h-2 ${randomColor} border border-white`;

      sparkle.style.left = `${mouseX}px`;
      sparkle.style.top = `${mouseY}px`;

      sparkleContainerRef.current.appendChild(sparkle);

      const xOffset = Math.random() * 40 - 20;
      const yOffset = Math.random() * 40 - 20;

      gsap.fromTo(
        sparkle,
        { opacity: 1, x: 0, y: 0 },
        {
          opacity: 0,
          x: xOffset,
          y: yOffset,
          duration: 0.6,
          ease: "power1.out",
          onComplete: () => sparkle.remove(),
        }
      );
    }, 250); // lebih cepat biar rame

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Container Sparkle */}
      <div
        ref={sparkleContainerRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
      />

      {/* Trail squares */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRefs.current[i] = el;
          }}
          className="fixed top-0 left-0 w-5 h-5 bg-pink-500 border-2 border-white opacity-60 pointer-events-none z-[9997]"
          style={{ imageRendering: "pixelated", transform: "translate(-50%, -50%)" }}
        />
      ))}

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 bg-black border-2 border-white z-[9999] pointer-events-none"
        style={{ imageRendering: "pixelated", transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
