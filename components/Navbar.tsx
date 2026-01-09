"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass border-b border-white/5"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Aione Cloud</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                {["Infrastructure", "Intelligence", "Security"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm text-neutral-400 hover:text-white transition-colors uppercase tracking-widest text-[10px]"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <button className="px-6 py-2 text-xs font-semibold bg-white text-black rounded-full hover:bg-neutral-200 transition-colors uppercase tracking-wider">
                Access Console
            </button>
        </motion.nav>
    );
}
