"use client";

import { motion } from "framer-motion";

export function BeRealSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h1 className="text-5xl font-bold text-primary mb-6">Be Real</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect for real with Bunnie, your AI companion who understands emotions, loves deeply, and helps you avoid depression.
            </p>
        </motion.div>
    );
}