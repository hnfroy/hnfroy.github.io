import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicBox() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

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
            console.log("Music started after interaction ✅");
          })
          .catch((err) => {
            console.log("Play blocked:", err);
          });
      }
    };

    // listen interaction
    window.addEventListener("scroll", startMusic, { once: true });
    window.addEventListener("mousemove", startMusic, { once: true });
    window.addEventListener("click", startMusic, { once: true });

    return () => {
      window.removeEventListener("scroll", startMusic);
      window.removeEventListener("mousemove", startMusic);
      window.removeEventListener("click", startMusic);
    };
  }, [hasStarted]);

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

  return (
    <div className="fixed top-24 right-12 bg-neonpink border-3 border-black rounded-lg p-4 shadow-xl flex items-center gap-3 font-pixel z-[99]">
      <div
        className="relative flex items-center justify-center w-12 h-12 border-3 rounded-lg border-black bg-red-400 text-black cursor-pointer active:translate-y-[2px]"
        onClick={togglePlay}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-[14px] text-black tracking-wider font-semibold">
          NOW PLAYING
        </span>
        <span className="text-[12px] text-black">Vaporwave Loop</span>
      </div>

      <audio ref={audioRef} src="assets/media/music/retro-game-80.mp3" loop />
    </div>
  );
}
