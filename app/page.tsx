"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowRight,
  Code,
  Terminal,
  Sparkles,
  Rocket,
  Github,
  ExternalLink,
  ChevronUp,
} from "lucide-react";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });
const Navigation = dynamic(() => import("@/components/Navigation"), {
  ssr: false,
});

// カスタムアニメーション変数
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // カスタムイージング
    },
  },
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [visibleProjects, setVisibleProjects] = useState(4);

  // プロジェクトの型定義
  type Project = {
    id: number;
    title: string;
    description: string;
    icon?: string;
    image?: string;
    tech: string[];
    color: string;
    link?: string;
    period?: string;
  };

  // プロジェクトデータ
  const projects: Project[] = [
    {
      id: 1,
      title: "Curated Art Show",
      description:
        "A 3D virtual art exhibition platform that enables artists and curators to create and customize online galleries for free, expanding their reach beyond physical limitations.",
      icon: "🎨",
      image: "/images/projects/curated-art-show.webp",
      tech: [
        "React",
        "React Three Fiber",
        "NestJS",
        "Tailwind",
        "Docker",
        "ECS",
        "S3",
        "CloudFront",
        "Lambda",
        "Prisma",
        "Stripe",
      ],
      color: "from-blue-500/30 to-purple-500/30",
      link: "https://curatedartshow.com",
      period: "Aug 2022 – Mar 2025",
    },
    {
      id: 2,
      title: "Curated Microfiction",
      description:
        "A biweekly microfiction platform where users can submit 300-word stories to compete for cash prizes or enjoy a curated collection of short fiction for free.",
      icon: "📝",
      image: "/images/projects/curated-microfiction.webp",
      tech: [
        "React",
        "TypeScript",
        "NestJS",
        "Tailwind",
        "Docker",
        "ECS",
        "S3",
        "CloudFront",
        "Lambda",
        "PayPal",
      ],
      color: "from-purple-500/30 to-pink-500/30",
      link: "https://curatedmicrofiction.com",
      period: "Jan 2024 – Jan 2025",
    },
    {
      id: 3,
      title: "WancoCam",
      description:
        "A social media platform for dog lovers, where users share pet photos and videos in themed contests to compete for top rankings.",
      icon: "🐕",
      image: "/images/projects/wancocam.webp",
      tech: [
        "React Native",
        "react-native-purchase",
        "NestJS",
        "Tailwind",
        "Docker",
        "ECS",
        "S3",
        "CloudFront",
        "Revenue Cat",
      ],
      color: "from-green-500/30 to-blue-500/30",
      period: "Sep 2023 – Jun 2024",
    },
    {
      id: 4,
      title: "Peaceful World Music",
      description:
        "A music app featuring recordings of traditional instruments from around the world.",
      icon: "🎵",
      image: "/images/projects/peaceful-world-music.webp",
      tech: [
        "React Native",
        "Redux",
        "react-native-track-player",
        "react-native-iap",
      ],
      color: "from-orange-500/30 to-red-500/30",
      link: "https://apps.apple.com/us/app/peaceful-world-music/id1531033141",
      period: "Apr 2023 – May 2023",
    },
  ];

  const totalProjects = projects.length;

  const isAboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const isSkillsInView = useInView(skillsRef, { once: false, amount: 0.3 });
  const isProjectsInView = useInView(projectsRef, { once: false, amount: 0.1 });
  const isContactInView = useInView(contactRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // スムーズスクロール関数
  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // ソーシャルリンク
  const socialLinks = {
    github: "https://github.com/Kazumakr",
    linkedin: "https://linkedin.com/in/kazumakuramoto",
    email: "kazumakuramoto.jp@gmail.com",
  };

  return (
    <main className="w-full relative gradient-bg text-white">
      {/* Navigation */}
      <Navigation
        onAboutClick={() => scrollToSection(aboutRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Hero Section */}
      <div
        ref={targetRef}
        className="h-screen w-full relative grid-pattern overflow-hidden"
      >
        <Canvas className="absolute inset-0">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>

        <motion.div
          style={{ opacity, scale, y }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center space-y-8 max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter glow-text"
            >
              <span className="text-gradient">Full-Stack</span>{" "}
              <span className="text-gradient">Developer</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              Bringing sci-fi visions to reality and enhancing lives through
              innovative technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-lg bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] hover:from-[#2570E0] hover:to-[#AD50DC] text-white glow"
                onClick={() => scrollToSection(projectsRef)}
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border-[#2D7CF6]/20"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection(aboutRef)}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        id="about"
        className="py-20 px-4 relative overflow-hidden"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={isAboutInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate developer creating innovative digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div variants={fadeInUp} className="md:col-span-7 space-y-6">
              <h3 className="text-2xl font-bold">
                Hi there! I&apos;m Kazuma Kuramoto, a Full-Stack Developer
              </h3>
              <p className="text-gray-400">
                I began my journey in Electrical and Electronic Engineering with
                a strong foundation in Computer Science. My passion for coding
                was ignited during my first year when I learned C programming,
                which led me to explore deep learning evaluation using Python
                for my thesis in a multimedia information processing lab.
              </p>
              <p className="text-gray-400">
                After graduation, I expanded my expertise in Canada, where I
                specialized in modern web development frameworks like React and
                Node.js. Since joining Yuyosoft, I&apos;ve contributed to
                numerous cutting-edge projects, including web applications with
                React and NestJS, and mobile apps using React Native.
              </p>
              <p className="text-gray-400">
                My ability to quickly adapt to and master new technologies has
                enabled me to play a key role in setting up AWS environments and
                make comprehensive contributions throughout the development
                lifecycle. I&apos;m passionate about creating seamless user
                experiences that are both beautiful and functional.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="default"
                  className="rounded-lg bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] hover:from-[#2570E0] hover:to-[#AD50DC] text-white"
                  asChild
                >
                  <a
                    href="/KazumaKuramoto_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-5">
              <div className="card-gradient rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-4">Personal Info</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">Tokyo, Japan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                      <Github className="h-4 w-4 text-white" />
                    </div>
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#2D7CF6] transition-colors"
                    >
                      github.com/Kazumakr
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </div>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#2D7CF6] transition-colors"
                    >
                      linkedin.com/in/kazumakuramoto
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">3+ Years Experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">
                      Available for Freelance
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Open to Collaboration</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div
        ref={skillsRef}
        id="skills"
        className="py-20 px-4 relative overflow-hidden bg-black/30"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={isSkillsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              My Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leveraging modern technologies to create exceptional digital
              experiences
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Languages",
                skills: ["JavaScript", "TypeScript", "PHP", "HTML", "CSS"],
              },
              {
                icon: Terminal,
                title: "Frameworks & Libraries",
                skills: [
                  "React",
                  "Next.js",
                  "React Native",
                  "Expo",
                  "NestJS",
                  "Node.js",
                  "Express",
                  "Prisma",
                  "Tailwind CSS",
                  "Jest",
                  "Three.js",
                  "React Three Fiber",
                  "Stripe",
                  "PayPal",
                ],
              },
              {
                icon: Sparkles,
                title: "Tools & Databases",
                skills: [
                  "MySQL",
                  "PostgreSQL",
                  "AWS EC2",
                  "AWS ECR",
                  "AWS ECS",
                  "AWS S3",
                  "AWS CloudFront",
                  "AWS Lambda",
                  "AWS RDS",
                  "Git",
                  "SourceTree",
                ],
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card-gradient rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {feature.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm bg-white/10 px-3 py-1.5 rounded text-gray-200 hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Projects Section */}
      <div
        ref={projectsRef}
        id="projects"
        className="py-20 px-4 relative overflow-hidden"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={isProjectsInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and creative endeavors
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            <AnimatePresence mode="wait" initial={false}>
              {projects.slice(0, visibleProjects).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: index < 4 ? index * 0.1 : 0.3 + (index - 4) * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 20,
                    scale: 0.95,
                    transition: {
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className={`card-gradient rounded-xl overflow-hidden border border-white/10 group h-full flex flex-col ${
                    project.link ? "cursor-pointer" : "opacity-90"
                  }`}
                  onClick={() =>
                    project.link &&
                    window.open(project.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <div
                    className={`h-56 md:h-72 bg-gradient-to-br ${project.color} relative`}
                  >
                    {project.image ? (
                      <div className="w-full h-full absolute inset-0">
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-6xl">
                        {project.icon}
                      </div>
                    )}
                    {!project.link && (
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-20">
                        Currently Unavailable
                      </div>
                    )}
                  </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-gray-500 mb-1 md:mb-2">
                      {project.period || ""}
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-xs md:text-sm"
                        >
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />{" "}
                          Visit Site
                        </Button>
                      )}
                      {!project.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-lg bg-white/10 border-white/20 cursor-not-allowed opacity-70 text-xs md:text-sm"
                          disabled
                        >
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />{" "}
                          No Longer Available
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div
        ref={contactRef}
        id="contact"
        className="py-20 px-4 relative overflow-hidden bg-black/30"
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={isContactInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s work together!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-gray-400">
                Feel free to reach out to me for collaborations, job
                opportunities, or just to say hello!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">Tokyo, Japan</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#2D7CF6] transition-colors"
                  >
                    github.com/Kazumakr
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </div>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#2D7CF6] transition-colors"
                  >
                    linkedin.com/in/kazumakuramoto
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="card-gradient rounded-xl p-8 border border-white/10"
            >
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Send Me a Message</h3>
                <p className="text-gray-400">
                  Click the button below to send me an email directly.
                </p>
                <div className="flex justify-center">
                  <a
                    href={`mailto:${socialLinks.email}?subject=Project%20Inquiry`}
                    className="inline-flex items-center justify-center"
                  >
                    <Button className="rounded-lg bg-gradient-to-r from-[#2D7CF6] to-[#BF5AF2] hover:from-[#2570E0] hover:to-[#AD50DC] text-white glow px-8 py-6 text-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Send Email
                    </Button>
                  </a>
                </div>
                <div className="flex justify-center space-x-4 mt-8">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2D7CF6] to-[#BF5AF2] flex items-center justify-center">
              <span className="text-white font-bold text-sm">KK</span>
            </div>
            <span className="text-lg font-bold text-gradient">
              Kazuma Kuramoto
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Kazuma Kuramoto. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
