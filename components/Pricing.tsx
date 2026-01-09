"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Developer",
        price: "฿590",
        period: "/mo",
        description: "Perfect for personal projects and prototypes.",
        features: ["1 vCPU", "2GB RAM", "40GB NVMe", "2TB Transfer", "Standard Support"],
        highlight: false
    },
    {
        name: "Production",
        price: "฿1,490",
        period: "/mo",
        description: "High-performance power for scaling applications.",
        features: ["4 vCPU", "8GB RAM", "160GB NVMe", "5TB Transfer", "Priority Support", "Daily Backups"],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Dedicated infrastructure for mission-critical workloads.",
        features: ["Dedicated Cores", "Up to 512GB RAM", "Custom Storage", "Unmetered 10Gbps", "24/7 Phone Support", "SLA 99.99%"],
        highlight: false
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter"> Transparent Pricing</h2>
                    <p className="text-neutral-400 text-lg">Simple, predictable compute pricing. No hidden fees.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${plan.highlight
                                    ? "bg-white/[0.08] border-white/20 scale-105 z-10 shadow-2xl shadow-white/5"
                                    : "bg-black border-white/10 hover:border-white/20"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-4">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-neutral-500 ml-2">{plan.period}</span>
                            </div>
                            <p className="text-neutral-400 text-sm mb-8 h-10">{plan.description}</p>

                            <button className={`w-full py-3 px-6 rounded-full text-sm font-bold uppercase tracking-wider mb-8 transition-colors ${plan.highlight
                                    ? "bg-white text-black hover:bg-neutral-200"
                                    : "border border-white/20 text-white hover:bg-white/10"
                                }`}>
                                Choose {plan.name}
                            </button>

                            <ul className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-sm text-neutral-300">
                                        <Check className="w-4 h-4 mr-3 text-white" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
