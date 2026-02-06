import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";

export default function MusicButton({
    text = '🎵 Start',
}: {
    text?: string;
}) {
    const { isMusicDone, startSlideshow, setIsAudioPlaying } = useStore();
    const audioRef = useRef<HTMLAudioElement>(null);

    const startMusic = () => {
        if (!audioRef.current) return;
        startSlideshow();
        audioRef.current.play();
        audioRef.current.muted = false;
        setIsAudioPlaying(true);
    };

    return (
        <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
                {!isMusicDone ?
                    (
                        <motion.button
                            key="button"
                            layout
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={startMusic}
                            className="px-6 py-3 rounded-xl bg-[#00000030] text-white"
                        >
                            {text}
                        </motion.button>
                    ) :
                    null
                }
            </AnimatePresence>
            <audio
                ref={audioRef}
                src="/assets/songs/encore-neelanjona.mp4"
                loop
                playsInline
            />
        </div>
    );
}
