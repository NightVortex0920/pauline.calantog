"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
};

const projects: Project[] = [
  {
    title: "Instinctools",
    description:
      "Instinctools is a technology services website that allows businesses to explore and request software development and IT solutions. It provides information about services such as custom software development, web and mobile app development, AI integration, business process automation, data analytics, and cloud computing. The website also showcases project case studies, technical expertise, and client success stories, enabling visitors to review solutions, request project estimates, and contact the team for consultation.",
    technologies: ["React", "Redux", "JavaScript", "CSS"],
    images: [
      "/projects/instinctools1.png",
      "/projects/instinctools2.png",
      "/projects/instinctools3.png",
      "/projects/instinctools4.png",
    ],
    category: "Web",
    liveUrl: "https://www.instinctools.com/",
  },
  {
    title: "Ecommerce Site",
    description:
      "This website is a full-featured e-commerce platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It enables users to browse products, search and filter items, manage shopping carts, place orders, and make secure payments through Stripe. The platform includes user authentication, product ratings and reviews, image uploads via Cloudinary, and Redux for state management. An admin dashboard provides tools to manage products, orders, users, and reviews, while pagination and search improve product navigation.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    images: [
      "/projects/Full-Ecommerce-Site1.png",
      "/projects/Full-Ecommerce-Site2.png",
      "/projects/Full-Ecommerce-Site3.png",
      "/projects/Full-Ecommerce-Site4.png",
      "/projects/Full-Ecommerce-Site5.png",
    ],
    category: "Web",
    githubUrl: "https://github.com/Maxcode0917/Full-Ecommerce-Site",
  },

  {
    title: "Career Intelligence",
    description:
      "Career Intelligence is a multi-tenant recruitment intelligence platform that evaluates how well candidates match specific job roles. It analyzes resumes against job descriptions to generate fit reports, helping recruiters make informed hiring decisions while giving candidates actionable feedback and learning recommendations. Platform Owners manage tenants, audit logs, and operations, while Tenant Admins manage organization settings, branding, courses, email templates, API keys, and integrations.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    images: [
      "/projects/Career Intelligence1.png",
      "/projects/Career Intelligence2.png",
      "/projects/Career Intelligence3.png",
    ],
    category: "Web",
  },
  {
    title: "Creatube Studio",
    description:
      "Creatube Studio is a comprehensive SaaS platform that automates the entire faceless YouTube video creation process. The platform enables creators to generate complete, upload-ready videos from a single workflow, including AI-generated video ideas, optimized scripts, professional voiceovers, stock footage, captions, thumbnails, and export-ready assets. I worked across the full stack to improve content generation reliability, optimize video creation workflows, integrate external AI and media services, and implement YouTube publishing capabilities.",
    technologies: [
      "Angular",
      "Supabase",
      "Laravel",
      "Tailwind CSS",
      "OpenAI API",
    ],
    images: [
      "/projects/Creatube1.png",
      "/projects/Creatube2.png",
      "/projects/Creatube3.png",
      "/projects/Creatube4.png",
    ],
    category: "Web",
  },
  {
    title: "My Musawo",
    description:
      "Built a cross-platform healthcare companion app on Google Play and App Store, featuring calm onboarding, health dashboards, and push-ready notification hooks. Developed with React Native navigation and state management, native modules for secure storage, care content API integration, and offline-friendly caching for core screens—supporting wellness routines, appointments, and care plans with a trustworthy mobile experience.",
    technologies: ["React Native", "Health", "Android", "IOS"],
    images: [
      "/projects/My Musawo1.png",
      "/projects/My Musawo2.png",
      "/projects/My Musawo3.png",
      "/projects/My Musawo4.png",
      "/projects/My Musawo5.png",
      "/projects/My Musawo6.png",
    ],
    category: "Mobile",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.mymusawo",
    appStoreUrl: "https://apps.apple.com/fi/app/my-musawo/id6443654420",
  },
  {
    title: "Meetup",
    description:
      "Built a high-scale social discovery app for iOS and Android, enabling users to find and join local events and communities, RSVP, and stay connected with groups matching their interests. Delivered event detail screens, messaging touchpoints, and profile management using React Native at scale, with GraphQL/REST feeds, image-heavy lists, deep linking into events, and performance tuning for millions of installs.",
    technologies: ["React Native", "GraphQL", "REST API"],
    images: [
      "/projects/Meetup1.png",
      "/projects/Meetup2.png",
      "/projects/Meetup3.png",
      "/projects/Meetup4.png",
      "/projects/Meetup5.png",
    ],
    category: "Mobile",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.meetup",
    appStoreUrl:
      "https://apps.apple.com/us/app/meetup-social-events-groups/id375990038",
  },
  {
    title: "Yokart",
    description:
      "Built a multi-vendor marketplace buyer app for iOS and Android, delivering the full buyer journey catalog, filters, wishlist, cart, payments, and order history tuned for mobile conversion. Developed with Flutter commerce flows and platform channels into native payment SDKs, plus pagination and image CDN optimization to handle large catalogs smoothly across both major stores.",
    technologies: ["Flutter", "Dart", "Firebase", "Stripe"],
    images: [
      "/projects/yokart1.jpg",
      "/projects/yokart2.jpg",
      "/projects/yokart3.jpg",
      "/projects/yokart4.jpg",
      "/projects/yokart5.jpg",
    ],
    category: "Mobile",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.fatbit.yokartv9.buyer",
    appStoreUrl: "https://apps.apple.com/us/app/yokart/id1619743463",
  },
  {
    title: "Kids360 Family",
    description:
      "Built a parental control ecosystem trusted by millions of families, delivering parent and child companion apps with screen time, app limits, policy sync, usage reports, and multi-app store presence (parent + kid builds). Developed with React Native using Device Admin APIs on Android and Screen Time integrations on iOS, plus secure parent-child pairing and background policy enforcement. Implemented Kotlin (Android) for screen-time and app-limit policies, and Swift (iOS) for Family Controls and Screen Time management.",
    technologies: ["React Native", "Kotlin", "Firebase", "Swift", "MDM-lite"],
    images: [
      "/projects/Family1.png",
      "/projects/Family2.png",
      "/projects/Family3.png",
      "/projects/Family4.png",
      "/projects/Family5.png",
    ],
    category: "Mobile",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=app.kids360.parent",
    appStoreUrl:
      "https://apps.apple.com/us/app/kids360-parental-control/id1596059191",
  },
  {
    title: "Meowcoin Cryptocurrency",
    description:
      "Built Meowcoin, a Kawpow-powered cryptocurrency based on Ravencoin, designed to bring blockchain technology to the animal sector. The project leverages Ravencoin's proven proof-of-work architecture and Kawpow mining algorithm to deliver a secure, decentralized digital currency tailored for animal-focused use cases—from pet services and shelters to veterinary payments and animal welfare initiatives. By combining battle-tested blockchain fundamentals with a purpose-driven mission, Meowcoin aims to bridge crypto innovation with real-world impact for the animal sector.",
    technologies: ["Blockchain", "Kawpow", "Ravencoin"],
    images: ["/projects/Meowcoin1.png", "/projects/Meowcoin2.png"],
    category: "Blockchain",
  },
  {
    title: "Presale Dapp Creation",
    description:
      "Built presale dApps on any EVM blockchain and Solana, with options for integrated websites and multi-cryptocurrency payment support. The solution covers secure smart contracts for token sales, tiered or staged pricing, whitelist and vesting logic, wallet connection, and real-time contribution tracking. Buyers can participate using multiple tokens across chains, while projects get a polished, conversion-optimized presale experience with transparent progress displays and safe fund handling.",
    technologies: ["Solana", "EVM", "Smart Contracts", "Presale Dapp"],
    images: [
      "/projects/Dapp1.png",
      "/projects/Dapp2.png",
      "/projects/Dapp3.png",
      "/projects/Dapp4.png",
      "/projects/Dapp5.png",
    ],
    category: "Blockchain",
  },
  {
    title: "Pool Creation",
    description:
      "Built professional cryptocurrency mining pools for Kaspa, Bitcoin, Bitcoin Cash, Ethereum Classic, and many other coins. The solution delivers reliable, high-performance pool infrastructure supporting multiple algorithms, with scalable architecture, real-time stats tracking, and optimized share handling for miners across diverse networks. Designed to handle high hash rates while maintaining stability, accurate payouts, and low-latency connections—providing a robust foundation for mining operations across major and emerging coins.",
    technologies: [
      "Blockchain",
      "Mining Pools",
      "Kaspa",
      "Bitcoin",
      "Ethereum Classic",
    ],
    images: [
      "/projects/Pool Creation1.png",
      "/projects/Pool Creation2.png",
      "/projects/Pool Creation3.png",
      "/projects/Pool Creation4.png",
      "/projects/Pool Creation5.png",
    ],
    category: "Blockchain",
  },
  {
    title: "Decentralized Exchanges",
    description:
      "Built decentralized exchanges (DEXs) across any EVM blockchain and Solana. The solution covers the full DEX stack—smart contract development for automated market maker (AMM) pools, liquidity provisioning, token swaps, and yield farming—paired with fast, low-fee execution on Solana. Delivered with secure audited contracts, seamless wallet integration, and scalable architecture to support high-volume trading across multiple chains.",
    technologies: ["Rust", "Solana", "EVM", "Smart Contracts", "DEX"],
    images: [
      "/projects/Decentralized1.png",
      "/projects/Decentralized2.png",
      "/projects/Decentralized3.png",
      "/projects/Decentralized4.png",
    ],
    category: "Blockchain",
  },
  {
    title: "Crypto Websites",
    description:
      "Built websites for coins, tokens, NFTs, and more—covering everything from landing pages and token dashboards to NFT galleries and minting portals. Delivered with modern, responsive design, wallet integration, live price feeds, and on-chain data displays. Each site is optimized for conversion, performance, and brand credibility, giving crypto projects a polished online presence to launch, promote, and grow their ecosystem.",
    technologies: ["Web3", "React", "Next.js", "Solana", "EVM"],
    images: [
      "/projects/Crypto1.png",
      "/projects/Crypto2.png",
      "/projects/Crypto3.png",
      "/projects/Crypto4.png",
      "/projects/Crypto5.png",
    ],
    category: "Blockchain",
  },
  {
    title: "QIS - Clinical AI Digital Twin with RAG & LLMs",
    description:
      "Built QIS (Qualitative Intelligence Systems), a clinical AI platform turning scattered patient records and meeting recordings into a living per-patient digital twin. Delivered a RAG-based patient memory store, LLM chatbot with source-grounded answers, three-lens Verity AI triangulation, care action extraction, human-in-the-loop review, drag-and-drop care calendar, and multi-patient dashboard with meeting transcription. Ensured trustworthiness through source-cited answers, multi-lens cross-checking, and a mandatory human approval gate on every AI finding.",
    technologies: [
      "AI integration",
      "RAG",
      "LLM",
      "Voice Synthesis",
      "Next.js",
      "TypeScript",
    ],
    images: ["/projects/QIS1.png", "/projects/QIS2.png", "/projects/QIS3.png"],
    category: "AI",
  },
  {
    title: "Disoriti - Your AI ad generator",
    description:
      "Built Disoriti, an AI-powered content management and performance analytics platform helping creators, marketers, and businesses optimize digital campaigns. Centralized post creation, campaign tracking, and engagement analysis into a single intuitive dashboard, empowering users to make data-driven decisions and scale their content strategy with precision.",
    technologies: [
      "AI integration",
      "Chatbot",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Next.js",
      "AI model fine-tuning",
    ],
    images: [
      "/projects/Disoriti1.png",
      "/projects/Disoriti2.png",
      "/projects/Disoriti3.png",
    ],
    category: "AI",
  },
  {
    title: "AI-Integrated Job Description Generator",
    description:
      "Built Job Post Pro, an intelligent drafting platform integrated directly into Google Docs via a custom sidebar. Powered by OpenAI GPT-3.5 Turbo, it drafts high-quality job briefs from structured intake forms with smart validation, budget estimation, and auto-markdown formatting. Developed using Google Workspace Integration and the OpenAI API, delivering a seamless tool that lets HR teams generate, refine, and export structured job descriptions without leaving their document editor.",
    technologies: [
      "AI integration",
      "Python",
      "OpenAI API",
      "Google Workspace Integration",
      "Google Docs Add-on",
    ],
    images: ["/projects/Job Description Generator.png"],
    category: "AI",
  },
  {
    title: "n8n Lead Outreach Workflow Automation",
    description:
      "Operationalized an enterprise-grade lead routing system in n8n, connecting live prospect pipelines with automated communications and Wix website assets. Built multi-branch n8n workflows with scheduled triggers, dynamic AI prompt building, Vapi voice calls, automated Gmail notifications for sales teams, Google Sheets synchronization, Drive storage, and seamless Wix lead capture. The system eliminates manual qualification bottlenecks, delayed outreach, and disjointed spreadsheet updates—delivering reliable, scalable automation that drives growth.",
    technologies: ["AI integration", "n8n workflow automation"],
    images: ["/projects/n8n.png"],
    category: "AI",
  },
  {
    title: "TitanBot - Feature-Rich Discord Bot",
    description:
      "Developed TitanBot, a feature-rich Discord bot using Discord.js v14 and PostgreSQL, integrating advanced moderation, economy systems, ticket management, reaction roles, XP leveling, giveaways, birthday tracking, and automated welcome messages. Implemented server statistics, utility commands, user reporting, and interactive multi-platform music controls. Designed for scalability and reliable data persistence, TitanBot streamlines server administration, automates community management, and enhances member engagement through a modular, all-in-one solution.",
    technologies: ["JavaScript", "PostgreSQL", "Docker", "Discord.js"],
    images: ["/projects/TitanBot Discord Showcase.png"],
    githubUrl: "https://github.com/Maxcode0917/TitanBot",
    category: "Automation",
  },
  {
    title: "Telegram E-Commerce Bot",
    description:
      "Developed a feature-rich Telegram e-commerce bot with PostgreSQL, Redis, and asynchronous Python, integrating product catalogs, inventory management, shopping carts, promo codes, restock notifications, and automated checkout. Implemented CryptoPay, Telegram Stars, and fiat payment integrations, alongside reviews, referrals, and granular role-based access control. Built an administrative web panel with analytics, CSV exports, audit logs, and user management. Strengthened security with transactional payments, duplicate-payment protection, rate limiting, and database-level safeguards, delivering a scalable, high-performance commerce platform with English and Russian localization.",
    technologies: ["Redis", "Python", "Payment", "SQL", "Telegram Bot API"],
    images: ["/projects/admin_pov.gif", "/projects/user_pov.gif"],
    githubUrl: "https://github.com/Maxcode0917/Telegram-shop",
    category: "Automation",
  },
  {
    title: "The Ultimate WhatsApp Bot",
    description:
      "Developed FLASH-MD-V3, a customizable WhatsApp automation bot using Node.js and the WhatsApp Web API. Implemented session-based authentication, automated messaging, group management, and multi-platform deployment support. Designed for flexible configuration and easy setup across cloud hosting services and Android Termux, providing an accessible solution for WhatsApp automation and community management.",
    technologies: [
      "Log collection and analysis",
      "Alerting rules",
      "Basic intrusion detection",
      "Visualization",
    ],
    images: ["/projects/Ultimate WhatsApp Bot.png"],
    githubUrl: "https://github.com/Maxcode0917/Flash-Md-V3",
    category: "Automation",
  },
  {
    title: "Web Scraping Automation - bypassing anti-captcha",
    description:
      "Developed an advanced browser automation solution featuring pre-warmed browser sessions, CAPTCHA-solving integration, and configurable browser workflows. Designed to streamline automated web interactions, reduce browser startup time, and improve execution efficiency through ready-to-use browser instances and flexible configuration options.",
    technologies: [
      "anti-captcha bypass",
      "Javascript",
      "TypeScript",
      "Web Scraping",
    ],
    images: ["/projects/anti.png"],
    githubUrl: "https://github.com/Maxcode0917/web-scraping-examples",
    category: "Automation",
  },
];

const projectCategories = ["Web", "Mobile", "Blockchain", "AI", "Automation"];

/* ─── Project Card ───────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* ── Card Body ─────────────────────────────────────────── */}
      <div className="relative glass-card overflow-hidden md:grid md:grid-cols-2">
        <div className="order-2 p-6 md:order-1 md:p-8">
          <div className="mb-3">
            <h3 className="mb-1 text-xl font-bold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-cyan-400 md:text-2xl">
              {project.title}
            </h3>
          </div>

          <p className="mb-5 leading-relaxed text-sm text-gray-400">
            {project.description}
          </p>

          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 px-2.5 py-1 text-xs font-medium"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(6, 182, 212, 0.1))",
                  }}
                >
                  <span className="text-primary-400">{tech}</span>
                </span>
              ))}
            </div>
          )}

          {project.category === "Mobile"
            ? (project.googlePlayUrl || project.appStoreUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.googlePlayUrl && (
                    <a
                      href={project.googlePlayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-primary-400/30 px-3 py-2 text-sm font-medium text-primary-300 transition-colors hover:border-primary-300 hover:text-white"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Google Play
                    </a>
                  )}
                  {project.appStoreUrl && (
                    <a
                      href={project.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/40 hover:text-white"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      App Store
                    </a>
                  )}
                </div>
              )
            : (project.liveUrl || project.githubUrl) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-primary-400/30 px-3 py-2 text-sm font-medium text-primary-300 transition-colors hover:border-primary-300 hover:text-white"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-white/40 hover:text-white"
                    >
                      <Github size={16} aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
        </div>

        <div className="relative order-1 min-h-60 overflow-hidden bg-dark-200 md:order-2 md:min-h-[360px]">
          <Image
            src={project.images[activeImageIndex]}
            alt={`${project.title} screenshot ${activeImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
            className="object-contain"
          />
          {project.images.length > 1 && (
            <>
              <button
                type="button"
                aria-label={`Previous image for ${project.title}`}
                onClick={() =>
                  setActiveImageIndex(
                    (currentIndex) =>
                      (currentIndex - 1 + project.images.length) %
                      project.images.length,
                  )
                }
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-dark-300/70 text-white backdrop-blur transition-colors hover:bg-dark-300"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label={`Next image for ${project.title}`}
                onClick={() =>
                  setActiveImageIndex(
                    (currentIndex) =>
                      (currentIndex + 1) % project.images.length,
                  )
                }
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-dark-300/70 text-white backdrop-blur transition-colors hover:bg-dark-300"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
              <span
                aria-live="polite"
                aria-atomic="true"
                className="absolute bottom-3 right-3 rounded-full bg-dark-300/75 px-3 py-1 text-xs text-white backdrop-blur"
              >
                {activeImageIndex + 1} / {project.images.length}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden bg-dark-200/70"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      {/* <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      /> */}
      {/* <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0] }}
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
              Featured Work
            </span>
            <Sparkles className="text-primary-400" size={20} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the full project collection, organized by focus area.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projectCategories.map((category, categoryIndex) => {
            const categoryProjects = projects.filter(
              (project) => project.category === category,
            );

            return (
              <section
                key={category}
                aria-labelledby={`projects-${category.toLowerCase()}`}
                className="space-y-8"
              >
                <div className="flex flex-col items-center gap-3 pb-1">
                  <h3
                    id={`projects-${category.toLowerCase()}`}
                    className="text-center text-2xl font-semibold text-white"
                  >
                    {category}
                  </h3>
                  <div
                    aria-hidden="true"
                    className="h-[3px] w-full max-w-4xl rounded-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                  />
                  <span className="text-sm text-gray-400">
                    {categoryProjects.length} projects
                  </span>
                </div>

                {categoryProjects.length > 0 ? (
                  <div className="grid gap-8">
                    {categoryProjects.map((project, index) => (
                      <ProjectCard
                        key={`${project.title}-${index}`}
                        project={project}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="border border-dashed border-white/10 px-5 py-8 text-sm text-gray-500">
                    No projects listed in this category yet.
                  </p>
                )}
              </section>
            );
          })}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/Maxcode0917"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-dark-100/50 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-primary-500/50 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Hover background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-cyan-500/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <Github size={22} className="relative z-10" />
            <span className="relative z-10 font-medium font-display">
              View More on GitHub
            </span>
            <ExternalLink
              size={18}
              className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
