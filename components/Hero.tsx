"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Hydration fix: Generate particles only on client side
    const [particles, setParticles] = useState<Array<{ x: string, y: string, scale: number, duration: number, width: string, height: string }>>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
            duration: Math.random() * 10 + 10,
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
        >

            {/* Dynamic Background Grid & Particles */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Glowing Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.05] rounded-full blur-[100px]"
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {particles.map((p, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full opacity-20"
                            initial={{
                                x: p.x,
                                y: p.y,
                                scale: p.scale,
                            }}
                            animate={{
                                y: [null, parseFloat(p.y) - 100 + "%"],
                                opacity: [0.2, 0],
                            }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                width: p.width,
                                height: p.height,
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
            >

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                            <span className="mr-2 text-emerald-400">●</span> Operational in BKK01 Zone
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 relative"
                >
                    <span className="absolute -inset-2 blur-2xl bg-white/10 rounded-full opacity-50 block w-full h-full -z-10" />
                    Aione Cloud
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-6 text-xl md:text-2xl text-neutral-400 max-w-3xl font-light tracking-wide leading-relaxed"
                >
                    Premier Deep Tech Infrastructure for high-performance computing.
                    <br className="hidden md:block" />
                    <span className="text-white font-medium">Data Center • DBaaS • Web Hosting</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row gap-6"
                >
                    <button className="group relative px-8 py-4 bg-white text-black text-sm font-bold rounded-full overflow-hidden transition-all hover:scale-105">
                        <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            Deploy Instance
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </button>

                    <button className="px-8 py-4 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        View Thailand Nodes
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-neutral-600">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
}
