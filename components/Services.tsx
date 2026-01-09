"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud } from "lucide-react";

const services = [
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "High-Performance Web Hosting",
        description: "Enterprise-grade hosting optimized for speed and reliability. Built on our global mesh network.",
        features: ["NVMe Storage", "Unmetered Bandwidth", "DDoS Protection"]
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Database as a Service",
        description: "Fully managed SQL and NoSQL databases. Scale instantly without managing infrastructure.",
        features: ["Auto-sharding", "Point-in-time Recovery", "99.99% Uptime"]
    },
    {
        icon: <Server className="w-8 h-8" />,
        title: "Bare Metal Datacenter",
        description: "Raw compute power with direct hardware access. Located in compliant Tier IV facilities.",
        features: ["Single-tenant Security", "Custom Hardware", "Dark Fibre Connectivity"]
    }
];

export function Services() {
    return (
        <section className="py-32 px-6 relative bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter">Core Infrastructure</h2>
                    <p className="text-neutral-400 max-w-2xl text-lg">Mission-critical services designed for deep tech applications.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-white">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                                <p className="text-neutral-400 mb-8 leading-relaxed h-20">
                                    {service.description}
                                </p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-neutral-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
