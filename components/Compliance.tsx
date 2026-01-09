"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck } from "lucide-react";

export function Compliance() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/20 to-black z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.03] border border-white/10 rounded-3xl p-12 backdrop-blur-sm">

                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
                            Sovereign Compliance
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                            Operating strictly under Thai jurisdiction with full PDPA regulatory compliance.
                            Our infrastructure meets the highest global standards for security and data privacy.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium">
                                <span className="text-emerald-500 mr-2">✓</span> Thailand Based
                            </span>
                            <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium">
                                <span className="text-emerald-500 mr-2">✓</span> PDPA Compliant
                            </span>
                            <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium">
                                <span className="text-emerald-500 mr-2">✓</span> SOC 2 Type II
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 w-full max-w-md">
                        {[
                            { title: "PDPA Ready", icon: <FileCheck /> },
                            { title: "SOC Certified", icon: <ShieldCheck /> },
                            { title: "AES-256 Encryption", icon: <Lock /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-black border border-white/10"
                            >
                                <div className="text-white">{item.icon}</div>
                                <span className="text-white font-semibold">{item.title}</span>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
