"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-5xl font-bold tracking-tighter">About Me</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              I'm a creative developer passionate about building innovative digital experiences. 
              With expertise in modern web technologies and 3D graphics, I create immersive 
              applications that push the boundaries of web development.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold">5+</span>
                <span className="text-gray-400">Years of Experience</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold">50+</span>
                <span className="text-gray-400">Projects Completed</span>
              </div>
            </div>
            <Button variant="outline" size="lg" className="rounded-full group">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Developer at work"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}