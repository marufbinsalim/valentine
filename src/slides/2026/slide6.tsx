"use client";

import { motion } from "framer-motion";
import { useStore, getNoButtonMessage } from "@/store/useStore";
import Image from "next/image";

export function Slide6() {
    const { 
        noButtonClicks, 
        incrementNoButton, 
        acceptProposal, 
        hasAccepted 
    } = useStore();

    // Both buttons start at same size
    const baseButtonSize = 1; // rem units

    // Yes button increases in size with each No click
    const yesButtonSize = baseButtonSize + noButtonClicks * 0.8;
    
    // No button decreases in size with each click, becomes invisible after enough clicks
    const noButtonScale = Math.max(0, baseButtonSize - noButtonClicks * 0.15);
    const noButtonOpacity = Math.max(0, 1 - noButtonClicks * 0.08);

    // Get the current No button message
    const noButtonMessage = getNoButtonMessage(noButtonClicks);

    return (
        <div className="text-center flex flex-col items-center justify-center h-full">
            <div className="mb-6 relative w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-pink-300">
                <Image
                    src="/assets/slides/our-february.webp"
                    alt="Our February"
                    fill
                    className="object-cover"
                />
            </div>
            
            {!hasAccepted ? (
                <>
                    <p className="text-4xl font-bold text-pink-300 mb-8">Will you be my Valentine?</p>
                    
                    <div className="flex gap-6 items-center justify-center">
                        {/* Yes Button */}
                        <motion.button
                            initial={{ scale: baseButtonSize }}
                            animate={{ scale: yesButtonSize }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            onClick={acceptProposal}
                            className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-colors cursor-pointer"
                        >
                            Yes! ❤️
                        </motion.button>

                        {/* No Button - becomes invisible */}
                        <motion.button
                            initial={{ scale: baseButtonSize, opacity: 1 }}
                            animate={{ 
                                scale: noButtonScale,
                                opacity: noButtonOpacity
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            onClick={incrementNoButton}
                            className="px-8 py-4 bg-gray-500 text-white font-bold rounded-full shadow-lg hover:bg-gray-600 transition-colors cursor-pointer"
                            style={{ 
                                minWidth: "100px",
                                pointerEvents: noButtonOpacity <= 0 ? 'none' : 'auto',
                            }}
                        >
                            {noButtonMessage}
                        </motion.button>
                    </div>
                </>
            ) : (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="text-5xl font-bold text-pink-300 mb-4">Yay! 💕</p>
                    <p className="text-2xl text-white">You made me the happiest person!</p>
                </motion.div>
            )}
        </div>
    );
}

export default Slide6;
