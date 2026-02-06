import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicButton({
    text = '🎵 Start',
    handleClick = () => { }
}: {
    text?: string;
    handleClick?: () => void
}) {
    const [done, setDone] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const startMusic = () => {
        if (!audioRef.current) return;
        setDone(true);
        handleClick();
        audioRef.current.play();
        audioRef.current.muted = false;
    };


    return (
        <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
                {!done ?
                    (
                        <motion.button
                            key="button"
                            layout
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={() => {
                                startMusic();
                            }}
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
