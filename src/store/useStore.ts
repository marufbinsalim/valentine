import { create } from 'zustand';

interface SlideshowState {
    // Slideshow state
    isPlaying: boolean;
    currentIndex: number;
    slideshowKey: number;

    // Music button state
    isMusicDone: boolean;
    isAudioPlaying: boolean;

    // Actions
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentIndex: (index: number) => void;
    resetSlideshow: () => void;
    incrementSlideshowKey: () => void;
    setIsMusicDone: (done: boolean) => void;
    setIsAudioPlaying: (playing: boolean) => void;
    startSlideshow: () => void;
}

export const useStore = create<SlideshowState>((set) => ({
    // Initial state
    isPlaying: false,
    currentIndex: 0,
    slideshowKey: 0,
    isMusicDone: false,
    isAudioPlaying: false,

    // Actions
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentIndex: (index) => set({ currentIndex: index }),
    resetSlideshow: () => set({ currentIndex: 0 }),
    incrementSlideshowKey: () => set((state) => ({ slideshowKey: state.slideshowKey + 1 })),
    setIsMusicDone: (done) => set({ isMusicDone: done }),
    setIsAudioPlaying: (playing) => set({ isAudioPlaying: playing }),
    startSlideshow: () => set((state) => ({
        isPlaying: true,
        isMusicDone: true,
        isAudioPlaying: true,
        currentIndex: 0,
        slideshowKey: state.slideshowKey + 1
    })),
}));

export default useStore;
