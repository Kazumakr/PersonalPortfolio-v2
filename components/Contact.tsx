"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/yourusername",
  },
  {
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32h5.24v.319l-1.514 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.478 1.451v.319h-7.436v-.319l1.53-1.486c.15-.15.15-.194.15-.425V8.401L10.95 19.218h-.57L5.47 8.401v7.249c-.041.305.06.612.275.833l2.001 2.427v.319H2.36v-.319l2.001-2.427a.965.965 0 0 0 .256-.833V7.269z" />
      </svg>
    ),
    label: "Medium",
    href: "https://medium.com/@kazumajs",
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen gradient-bg text-white py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tighter mb-6 text-gradient">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Let&apos;s collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-gradient rounded-2xl p-8 text-center mb-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 rounded-full text-lg mb-8 w-full sm:w-auto"
              onClick={() => {
                window.location.href = "mailto:your.email@example.com";
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              your.email@example.com
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border-white/10 rounded-xl transition-all duration-300"
                  >
                    <link.icon className="w-5 h-5 mr-2" />
                    {link.label}
                  </Button>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
