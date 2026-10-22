"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Bell,
  Blocks,
  CloudUpload,
  Code2,
  Coins,
  CreditCard,
  GitBranch,
  MessageSquare,
  Network,
  Radio,
  Smartphone,
  Sparkles,
  Wallet,
  Webhook,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Angular" },
      { name: "Vue" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Express.js" },
      { name: "Java" },
      { name: "C#" },
      { name: "PHP" },
      { name: "Python" },
      { name: "Django / FastAPI" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "WebSockets" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "Android" },
      { name: "iOS" },
       { name: "Flutter" },
      { name: "Firebase" },
      { name: "Supabase" }, 
      { name: "Push Notifications" },
    ],
  },
  {
    title: "Blockchain & Web3",
    skills: [
      { name: "Solidity" },
      { name: "Ethereum" },
      { name: "Smart Contracts" },
      { name: "Web3.js / Ethers.js" },
      { name: "Wallet Integration" },
      { name: "NFT Development" },
      { name: "Token Integration" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "OpenAI / LLM APIs" },
      { name: "AI Agents" },
      { name: "Generative AI" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "AI Chatbots" },
      { name: "AI Automation" },
      { name: "Vector Databases" },
    ],
  },
  {
    title: "Cloud, DevOps & Databases",
    skills: [
      { name: "AWS" },
      { name: "Cloud Deployment" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Git / GitHub" },
    ],
  },
] as const;

type SkillName = (typeof skillCategories)[number]["skills"][number]["name"];

const skillIcons: Record<SkillName, string | LucideIcon> = {
  "React.js": "react-dark.svg",
  "Next.js": "nextjs-dark.svg",
  Angular: "angular-dark.svg",
  Vue: "vue.svg",
  "React Native": Smartphone,
  TypeScript: "typescript.svg",
  Flutter: "flutter.svg",
  JavaScript: "javascript.svg",
  HTML5: "html.svg",
  CSS3: "css.svg",
  "Tailwind CSS": "tailwindcss-dark.svg",
  "Node.js": "nodejs-dark.svg",
  NestJS: "nestjs-dark.svg",
  "Express.js": "expressjs-dark.svg",
  Java: "java-dark.svg",
  "C#": "cs.svg",
  PHP: "php-dark.svg",
  Python: "python-dark.svg",
  "Django / FastAPI": "django.svg",
  "REST APIs": Webhook,
  GraphQL: "graphql-dark.svg",
  WebSockets: Radio,
  Expo: "expo.svg",
  Android: "androidstudio-dark.svg",
  iOS: "app-store.svg",
  Firebase: "firebase.svg",
  "Push Notifications": Bell,
  Solidity: "solidity.svg",
  Ethereum: "ethereum.svg",
  "Smart Contracts": Code2,
  "Web3.js / Ethers.js": "Web3.svg",
  "Wallet Integration": Wallet,
  "NFT Development": Blocks,
  "Token Integration": Coins,
  "OpenAI / LLM APIs": "openai.svg",
  "AI Agents": "AIAutomation.svg",
  "Generative AI": Sparkles,
  RAG: "rag.svg",
  "Prompt Engineering": MessageSquare,
  "AI Chatbots": "chatbot.svg",
  "AI Automation": Workflow,
  "Vector Databases": "VectorDatabases.svg",
  AWS: "aws-dark.svg",
  "Cloud Deployment": CloudUpload,
  Docker: "docker.svg",
  "CI/CD": GitBranch,
  PostgreSQL: "postgresql-logo.svg",
  MySQL: "mysql-dark.svg",
  MongoDB: "mongodb.svg",
  Supabase: "supabase-dark.svg",
  "Git / GitHub": "git.svg",
};

function SkillIcon({ icon }: { icon: string | LucideIcon }) {
  if (typeof icon === "string") {
    return (
      <Image
        src={`/skill/${icon}`}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 object-contain"
        aria-hidden="true"
      />
    );
  }

  const Icon = icon;
  return (
    <Icon
      size={32}
      className="h-8 w-8 shrink-0 text-gray-300"
      aria-hidden="true"
    />
  );
}

function SkillItem({ name }: { name: SkillName }) {
  return (
    <div className="flex min-w-0 flex-col items-center gap-2 text-center">
      <SkillIcon icon={skillIcons[name]} />
      <span className="w-full text-xs leading-tight text-gray-200 font-display">
        {name}
      </span>
    </div>
  );
}

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="relative glass-card p-6 h-full">
        {/* Category Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-4 gap-x-2 gap-y-5">
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      {/* <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      /> */}

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeaderInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="text-primary-400" size={20} />
            <span className="text-primary-400 font-display text-sm tracking-wider uppercase">
              Skills & Expertise
            </span>
            <Sparkles className="text-primary-400" size={20} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A versatile toolkit for building secure, secure, scalable solutions
            across AI, mobile, web, and blockchain while automation, and
            emerging technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional Skills Banner */}
      </div>
    </section>
  );
}
