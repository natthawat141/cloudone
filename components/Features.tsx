"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Shield, Zap } from "lucide-react";

const features = [
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "Neural Architecture",
        description: "Self-optimizing compute clusters that adapt to your workload in real-time."
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Quantum-Resistant",
        description: "Future-proof encryption standards securing every byte of your data."
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Mesh",
        description: "Low-latency edge network distributed across 150+ locations worldwide."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Instant Provisioning",
        description: "Deploy complex infrastructure stacks in milliseconds, not minutes."
    }
];

export function Features() {
    return (
        <section id="infrastructure" className="py-24 px-6 md:px-0 relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                        >
                            <div className="mb-4 text-neutral-400 group-hover:text-white transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
