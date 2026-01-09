"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
    const [text, setText] = useState("Aione");

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setText("Aione Cloud");
        }, 1500);

        const timer2 = setTimeout(() => {
            onComplete();
        }, 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                    {text.split(" ").map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className={i === 1 ? "ml-4 text-neutral-500" : ""}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    className="absolute -bottom-4 left-0 h-[1px] bg-white/20"
                />
            </motion.div>
        </motion.div>
    );
}
