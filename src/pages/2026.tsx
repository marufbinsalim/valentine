import MusicButton from "@/components/music-button";
import { StarsBackground } from "@/components/star-background";
import { cn } from "@/lib/utils";

export default function Home2026() {
    return (
        <div className="h-svh flex items-center justify-center">
            <StarsBackground
                starColor={'#FFF'}
                className={cn(
                    'absolute inset-0 flex items-center justify-center',
                    'dark:bg-[radial-gradient(ellipse_at_bottom,#262626_0%,#000_100%)] bg-[radial-gradient(ellipse_at_bottom,#f5f5f5_0%,#fff_100%)]',
                )}
            />
            <div className="relative z-100 h-20 m-auto flex items-center">
                <MusicButton />
            </div>          
        </div>
    );
}
