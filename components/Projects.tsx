"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and Supabase",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    tags: ["Next.js", "Supabase", "Stripe", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "3D Product Configurator",
    description: "Interactive 3D product visualization using Three.js",
    image: "https://images.unsplash.com/photo-1633899306328-c5e70574afd8",
    tags: ["React", "Three.js", "WebGL", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "https://images.unsplash.com/photo-1673187756399-94dd556698a8",
    tags: ["OpenAI", "Socket.io", "Node.js", "React"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen gradient-bg text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tighter mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work showcasing web development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-gradient border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-md">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}