"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Twitter, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// ソーシャルリンク
const socialLinks = {
  github: "https://github.com/Kazumakr",
  linkedin: "https://linkedin.com/in/kazumakuramoto",
  medium: "https://medium.com/@kazumajs",
};

// インターフェース定義
interface NavigationProps {
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

// クライアントサイドのみの機能を持つコンポーネント
const ClientNavigation = ({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center glow">
            <span className="text-white font-bold text-xl">KK</span>
          </div>
          <span className="text-xl font-bold text-gradient">
            Kazuma Kuramoto
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-1">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <Button
              variant="ghost"
              className="rounded-lg px-4 py-2 text-sm font-medium group-hover:text-white hover:bg-transparent"
              onClick={onAboutClick}
            >
              About
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] group-hover:w-4/5 -translate-x-1/2 transition-all duration-300"></span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <Button
              variant="ghost"
              className="rounded-lg px-4 py-2 text-sm font-medium group-hover:text-white hover:bg-transparent"
              onClick={onSkillsClick}
            >
              Skills
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] group-hover:w-4/5 -translate-x-1/2 transition-all duration-300"></span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <Button
              variant="ghost"
              className="rounded-lg px-4 py-2 text-sm font-medium group-hover:text-white hover:bg-transparent"
              onClick={onProjectsClick}
            >
              Projects
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] group-hover:w-4/5 -translate-x-1/2 transition-all duration-300"></span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <Button
              variant="ghost"
              className="rounded-lg px-4 py-2 text-sm font-medium group-hover:text-white hover:bg-transparent"
              onClick={onContactClick}
            >
              Contact
              <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] group-hover:w-4/5 -translate-x-1/2 transition-all duration-300"></span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4"
          >
            <Button
              className="rounded-lg px-6 py-2 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] hover:from-[#2570E0] hover:to-[#AD50DC] text-white glow"
              asChild
            >
              <Link
                href="/KazumaKuramoto_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="hidden md:flex items-center space-x-4 ml-6">
          {[
            { icon: Github, href: socialLinks.github },
            { icon: Linkedin, href: socialLinks.linkedin },
            {
              icon: () => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32h5.24v.319l-1.514 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.478 1.451v.319h-7.436v-.319l1.53-1.486c.15-.15.15-.194.15-.425V8.401L10.95 19.218h-.57L5.47 8.401v7.249c-.041.305.06.612.275.833l2.001 2.427v.319H2.36v-.319l2.001-2.427a.965.965 0 0 0 .256-.833V7.269z" />
                </svg>
              ),
              href: socialLinks.medium,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-full left-0 right-0 glass p-4 md:hidden border-t border-white/10"
        >
          <div className="flex flex-col space-y-4">
            <Button
              variant="ghost"
              className="w-full justify-start rounded-lg relative group hover:bg-transparent"
              onClick={() => {
                onAboutClick();
                setIsOpen(false);
              }}
            >
              About
              <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] group-hover:w-16 transition-all duration-300"></span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-lg relative group hover:bg-transparent"
              onClick={() => {
                onSkillsClick();
                setIsOpen(false);
              }}
            >
              Skills
              <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] group-hover:w-16 transition-all duration-300"></span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-lg relative group hover:bg-transparent"
              onClick={() => {
                onProjectsClick();
                setIsOpen(false);
              }}
            >
              Projects
              <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] group-hover:w-16 transition-all duration-300"></span>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start rounded-lg relative group hover:bg-transparent"
              onClick={() => {
                onContactClick();
                setIsOpen(false);
              }}
            >
              Contact
              <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] group-hover:w-16 transition-all duration-300"></span>
            </Button>
            <Button
              className="w-full justify-center rounded-lg bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] hover:from-[#2570E0] hover:to-[#AD50DC] text-white mt-2"
              asChild
            >
              <Link
                href="/KazumaKuramoto_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </Button>

            <div className="flex items-center space-x-4 pt-4 border-t border-white/10 mt-2">
              {[
                { icon: Github, href: socialLinks.github },
                { icon: Linkedin, href: socialLinks.linkedin },
                {
                  icon: () => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32h5.24v.319l-1.514 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.478 1.451v.319h-7.436v-.319l1.53-1.486c.15-.15.15-.194.15-.425V8.401L10.95 19.218h-.57L5.47 8.401v7.249c-.041.305.06.612.275.833l2.001 2.427v.319H2.36v-.319l2.001-2.427a.965.965 0 0 0 .256-.833V7.269z" />
                    </svg>
                  ),
                  href: socialLinks.medium,
                },
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  asChild
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Dynamic import with SSR disabled
const DynamicNavigation = dynamic(() => Promise.resolve(ClientNavigation), {
  ssr: false,
  loading: () => (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
            <span className="text-white font-bold text-xl">KK</span>
          </div>
          <span className="text-xl font-bold text-gradient">
            Kazuma Kuramoto
          </span>
        </div>
      </div>
    </div>
  ),
});

// メインのNavigationコンポーネント（SSR対応）
export default function Navigation(props: NavigationProps) {
  return <DynamicNavigation {...props} />;
}
