import { StarsBackground } from "@/components/star-background";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const startMusic = () => {
        if (!audioRef.current) return;
        audioRef.current.play();
        audioRef.current.muted = false;
    };

    return (
        <>

            <StarsBackground
                starColor={'#FFF'}
                className={cn(
                    'absolute inset-0 flex items-center justify-center',
                    'dark:bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)] bg-[radial-gradient(ellipse_at_bottom,#f5f5f5_0%,#fff_100%)]',
                )}
            />
            <button onClick={startMusic}>Play Music</button>
            <audio
                ref={audioRef}
                src="/assets/songs/encore-neelanjona.mp4"
                loop
                playsInline
            />
        </>
    );
}
