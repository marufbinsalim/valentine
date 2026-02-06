import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";

export type SlidePosition = 
    | "top-left" 
    | "top-center" 
    | "top-right" 
    | "center" 
    | "bottom-left" 
    | "bottom-center" 
    | "bottom-right";

export interface Slide {
    /** The React component to render */
    component: React.ReactNode;
    /** How long to show this slide in milliseconds */
    duration: number;
    /** Position of the slide on screen */
    position: SlidePosition;
}

interface SlideshowProps {
    /** Array of slides to display */
    slides: Slide[];
    /** Optional className for the container */
    className?: string;
}

const positionClasses: Record<SlidePosition, string> = {
    "top-left": "md:absolute md:top-4 md:left-4",
    "top-center": "md:absolute md:top-4 md:left-1/2 md:-translate-x-1/2",
    "top-right": "md:absolute md:top-4 md:right-4",
    "center": "md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
    "bottom-left": "md:absolute md:bottom-4 md:left-4",
    "bottom-center": "md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2",
    "bottom-right": "md:absolute md:bottom-4 md:right-4",
};

export function Slideshow({ slides, className }: SlideshowProps) {
    const { 
        isPlaying, 
        currentIndex, 
        slideshowKey,
        setCurrentIndex 
    } = useStore();

    // Reset slideshow when isPlaying becomes true
    useEffect(() => {
        if (isPlaying) {
            setCurrentIndex(0);
        }
    }, [isPlaying, setCurrentIndex]);

    // Auto-advance slides
    useEffect(() => {
        if (!isPlaying) return;
        if (currentIndex >= slides.length - 1) {
            // Last slide persists infinitely
            return;
        }

        const timer = setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
        }, slides[currentIndex].duration);

        return () => clearTimeout(timer);
    }, [currentIndex, isPlaying, slides, setCurrentIndex]);

    const currentSlide = slides[currentIndex];

    return (
        <div className={cn("relative w-full h-svh px-4 py-4 flex flex-col items-center justify-center", className)}>
            <AnimatePresence mode="wait">
                {isPlaying && (
                    <motion.div
                        key={`${slideshowKey}-${currentIndex}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className={cn(
                            positionClasses[currentSlide.position],
                            "w-max h-max max-w-[94svw] flex items-center justify-center mx-auto my-auto"
                        )}
                    >
                        {currentSlide.component}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Slideshow;
