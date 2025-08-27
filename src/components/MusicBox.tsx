import { useEffect, useRef, useState } from "react";
import { Play, SkipBack, SkipForward } from "lucide-react";
import { gsap } from "gsap";

export default function MusicBox() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Playlist
  const playlist = [
    { title: "Arcade", src: "assets/media/music/retro-game-80.mp3" },
    { title: "Mountain Trials", src: "assets/media/music/mountain-trials.mp3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTrack = playlist[currentIndex];
  const [showDropdown, setShowDropdown] = useState(false);

  // Auto start saat scroll / mouse
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;

    const startMusic = () => {
      if (!hasStarted) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch((err) => console.log("Play blocked:", err));
      }
    };

    window.addEventListener("scroll", startMusic, { once: true });
    window.addEventListener("mousemove", startMusic, { once: true });
    window.addEventListener("click", startMusic, { once: true });

    return () => {
      window.removeEventListener("scroll", startMusic);
      window.removeEventListener("mousemove", startMusic);
      window.removeEventListener("click", startMusic);
    };
  }, [hasStarted]);

  // Equalizer animasi
  useEffect(() => {
    if (isPlaying) {
      barsRef.current.forEach((bar, i) => {
        gsap.to(bar, {
          scaleY: () => 0.5 + Math.random() * 1.5,
          repeat: -1,
          yoyo: true,
          duration: 0.3 + i * 0.1,
          ease: "power1.inOut",
        });
      });
    } else {
      gsap.killTweensOf(barsRef.current);
      barsRef.current.forEach((bar) =>
        gsap.to(bar, { scaleY: 1, duration: 0.2 })
      );
    }
  }, [isPlaying]);

  // Dropdown animasi
  useEffect(() => {
    if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        height: showDropdown ? "auto" : 0,
        opacity: showDropdown ? 1 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [showDropdown]);

  // Auto play kalau currentIndex berubah
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[currentIndex].src;
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [currentIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const nextTrack = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="fixed top-26 right-12 font-pixel z-[50]">
      {/* Main Box */}
      <div className="bg-neonpink border-3 border-black rounded-lg p-4 shadow-xl flex items-center gap-3 relative">
        {/* Prev button */}
        <button
          onClick={prevTrack}
          className="w-8 h-8 flex items-center justify-center border-2 border-black bg-red-400 rounded-md hover:bg-red-500"
        >
          <SkipBack size={16} />
        </button>

        {/* Play / Equalizer */}
        <div
          className="relative flex items-center justify-center w-12 h-12 border-3 rounded-lg border-black bg-red-400 text-black cursor-pointer overflow-hidden"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <div className="flex items-end gap-[3px]">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) barsRef.current[i] = el;
                  }}
                  className="w-[4px] h-[14px] bg-black"
                  style={{ transformOrigin: "center bottom" }}
                />
              ))}
            </div>
          ) : (
            <Play size={20} />
          )}
        </div>

        {/* Next button */}
        <button
          onClick={nextTrack}
          className="w-8 h-8 flex items-center justify-center border-2 border-black bg-red-400 rounded-md hover:bg-red-500"
        >
          <SkipForward size={16} />
        </button>

        {/* Info (klik untuk toggle dropdown) */}
        <div
          className="flex flex-col leading-tight cursor-pointer ml-2"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <span className="text-[14px] text-black tracking-wider font-semibold">
            NOW PLAYING
          </span>
          <span className="text-[12px] text-black">{currentTrack.title}</span>
        </div>
      </div>

      {/* Dropdown Playlist */}
      <div
        ref={dropdownRef}
        className="overflow-hidden bg-white border-3 border-black rounded-lg mt-2 shadow-md"
        style={{ height: 0, opacity: 0 }}
      >
        {playlist.map((track, i) => (
          <div
            key={i}
            className={`px-4 py-2 cursor-pointer hover:bg-neonpink hover:text-white border-b border-black last:border-none ${
              i === currentIndex ? "bg-neonpink text-white" : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          >
            {track.title}
          </div>
        ))}
      </div>

      {/* Audio element */}
      <audio ref={audioRef} src={currentTrack.src} loop />
    </div>
  );
}
