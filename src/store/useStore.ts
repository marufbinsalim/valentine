import { create } from 'zustand';

interface SlideshowState {
    // Slideshow state
    isPlaying: boolean;
    currentIndex: number;
    slideshowKey: number;

    // Music button state
    isMusicDone: boolean;
    isAudioPlaying: boolean;

    // Proposal game state
    noButtonClicks: number;
    hasAccepted: boolean;

    // Actions
    setIsPlaying: (isPlaying: boolean) => void;
    setCurrentIndex: (index: number) => void;
    resetSlideshow: () => void;
    incrementSlideshowKey: () => void;
    setIsMusicDone: (done: boolean) => void;
    setIsAudioPlaying: (playing: boolean) => void;
    startSlideshow: () => void;
    incrementNoButton: () => void;
    acceptProposal: () => void;
    resetProposal: () => void;
}

// Array of silly messages for the No button
const noButtonMessages = [
    "No!",
    "Why not? 🥺",
    "But I love you! 💕",
    "Please? 🥺",
    "Think again! 🤔",
    "Are you sure? 😢",
    "Don't break my heart 💔",
    "I'll wait! ⏰",
    "One more chance? 🙏",
    "Pretty please? 🎀",
    "My heart hurts 😢",
    "Give it a thought 💭",
    "Can't you see? 👀",
    "I'm right here! 📍",
    "Love me back? 💗",
    "Don't say no! 🚫",
    "Your heart says yes ❤️",
    "I can wait! 🕐",
    "Second thoughts? 💭",
    "I'm devoted! 🦋",
    "Be mine? 💍",
    "Trust me! 🤝",
    "Say yes! 📢",
    "I'll make you happy! 😊",
    "Choose love! 💝",
    "Open your heart! 🗝️",
    "Feel the love! 💓",
    "Together forever! ♾️",
    "Say the magic word! ✨",
    "Yes is beautiful! 🌸",
    "Last chance! 🎯",
];

export const useStore = create<SlideshowState>((set) => ({
    // Initial state
    isPlaying: false,
    currentIndex: 0,
    slideshowKey: 0,
    isMusicDone: false,
    isAudioPlaying: false,
    noButtonClicks: 0,
    hasAccepted: false,

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
    incrementNoButton: () => set((state) => ({ 
        noButtonClicks: Math.min(state.noButtonClicks + 1, noButtonMessages.length - 1)
    })),
    acceptProposal: () => set({ hasAccepted: true }),
    resetProposal: () => set({ noButtonClicks: 0, hasAccepted: false }),
}));

// Helper function to get the current No button message
export const getNoButtonMessage = (clicks: number): string => {
    return noButtonMessages[Math.min(clicks, noButtonMessages.length - 1)];
};

export default useStore;
