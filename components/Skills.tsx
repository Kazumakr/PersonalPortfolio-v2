"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Code2, Palette, Globe2, Database, Cpu, File as Mobile } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Three.js",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, Redis",
  },
  {
    icon: Globe2,
    title: "Web Performance",
    description: "SEO, Core Web Vitals, Analytics",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Design Systems",
  },
  {
    icon: Cpu,
    title: "DevOps",
    description: "Docker, CI/CD, Cloud Services",
  },
  {
    icon: Mobile,
    title: "Mobile Development",
    description: "React Native, iOS, Android",
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen gradient-bg text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tighter mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build complete, scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-gradient border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="p-6">
                  <skill.icon className="w-12 h-12 mb-4 text-[#00C6FF] group-hover:text-[#0072FF] transition-colors" />
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}