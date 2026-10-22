"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  GraduationCap,
  RotateCcw,
} from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Engineer",
    company: "Freelance",
    location: "Remote",
    period: "November 2020 – Present",
    duration: "6+ years",
    description:
      "Senior Full Stack Engineer specializing in Web, Mobile, Blockchain, and AI, helping startups and businesses turn ideas into secure, scalable, high-performing digital products from concept to deployment.",
    achievements: [
      "Led end-to-end development of secure, scalable, and high-performance digital products across Web, Mobile, Blockchain, and AI, from architecture and development through deployment and optimization.",

      "Architected and delivered modern full-stack applications using React, Next.js, TypeScript, Node.js, REST/GraphQL APIs, cloud infrastructure, databases, and third-party integrations.",

      "Partnered directly with founders, startups, and business stakeholders to turn product ideas and technical requirements into production-ready solutions with clear milestones and scalable architectures.",

      "Designed robust backend systems, APIs, databases, and cloud architectures with a strong focus on security, reliability, maintainability, and long-term scalability.",

      "Integrated AI capabilities and automation into digital products to improve workflows, user experiences, data processing, and overall product efficiency.",

      "Developed blockchain-based applications and integrations, including smart contracts, Web3 functionality, wallet connectivity, token-based systems, and decentralized application architectures.",

      "Improved application performance, reliability, and user experience through scalable engineering practices, code optimization, testing, monitoring, and continuous technical improvements.",

      "Delivered projects independently as a freelance senior engineer, managing technical decisions, development, integrations, deployment, and ongoing product improvements from concept to production.",
    ],
    technologies: [
      "AI",
      "WEB",
      "Mobile",
      "Blockchain",
    ],
    color: "from-primary-500 to-cyan-500",
    gradientColors: "rgba(14,165,233,0.5), rgba(6,182,212,0.35)",
  },
  {
    title: "Software Engineer",
    company: "Truework",
    location: "Remote",
    period: "March 2018 – October 2020",
    duration: "2+ years",
    description:
      "Developed API-driven e-commerce and business web applications using JavaScript, React, Express, and MongoDB in an Agile delivery environment.",
    achievements: [
      "Delivered MERN-stack web experiences with responsive UI flows, authentication-aware product journeys, and data-driven application pages.",
      "Implemented RESTful APIs and Express.js services that connected frontend features with reliable data persistence and business logic.",
      "Worked in cross-functional Agile delivery cycles to prioritize sprint goals, improve release cadence, and ship product features faster.",
      "Contributed to cleaner engineering standards through reusable components, practical debugging, and better service integration patterns.",
    ],
    technologies: [],
    color: "from-orange-500 to-red-500",
    gradientColors: "rgba(249,115,22,0.5), rgba(239,68,68,0.35)",
  },
];

const educations = [
  {
    degree: "MSc",
    field: "MEng Computing",
    institution: "University of Toronto",
    location: "Canada",
    period: "Graduated 2018",
  },
  {
    degree: "BSc",
    field: "Computer Science",
    institution: "De La Salle University",
    location: "Philippines",
    period: "Graduated 2015",
  },
];

/* ── Flip Card Timeline Item ──────────────────────────────────── */
function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }
      }
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={
        "relative flex " +
        (isEven ? "md:justify-start" : "md:justify-end") +
        " w-full mb-12 md:mb-16"
      }
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-20"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
      >
        <div
          className={`w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} border-4 border-dark-300`}
        >
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color}`}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* 3D Flip Card */}
      <div
        className={`ml-8 md:ml-0 md:w-[calc(50%-40px)] ${isEven ? "" : "md:ml-auto"}`}
      >
        <div
          className={`flip-card-container ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="flip-card-inner" style={{ minHeight: "320px" }}>
            {/* ── FRONT ─────────────────────────────────────── */}
            <div className="flip-card-face">
              {/* Animated gradient border */}
              <div className="flip-card-border" />
              <div className="flip-card-content">
                {/* Accent line */}
                {/* <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.color} opacity-70 rounded-t-2xl`}
                /> */}

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-400 font-medium font-display">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Duration badge */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-10 rounded-full text-xs font-semibold font-display text-white/80`}
                    style={{
                      background: `linear-gradient(135deg, ${exp.gradientColors})`,
                      opacity: 0.8,
                    }}
                  >
                    {exp.duration}
                  </span>
                </div>

                {/* Technologies */}
                {/* <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-200 border border-white/10 rounded-md text-xs font-semibold font-display text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* Flip hint */}
                <span className="flip-hint font-display">
                  Click to see details →
                </span>
              </div>
            </div>

            {/* ── BACK ──────────────────────────────────────── */}
            <div className="flip-card-face flip-card-back">
              {/* Animated gradient border */}
              <div className="flip-card-border-back" />
              <div className="flip-card-content-back">
                {/* Title */}
                <h3
                  className="text-lg font-bold text-center mb-5 bg-clip-text text-transparent font-display"
                  style={{
                    backgroundImage: `linear-gradient(45deg, ${exp.gradientColors})`,
                  }}
                >
                  Key Achievements
                </h3>

                {/* Achievement list */}
                <ul className="space-y-0 flex-1">
                  {exp.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="relative pl-6 py-3 text-gray-300 text-sm border-b border-white/5 last:border-b-0 leading-relaxed"
                    >
                      <span className="absolute left-0 top-3.5 text-primary-400 text-xs">
                        ✦
                      </span>
                      {ach}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-white/5 text-center">
                  <span className="text-gray-500 text-xs font-display flex items-center justify-center gap-1.5">
                    <RotateCcw size={12} />
                    Click to flip back
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-200/70" />
      {/* <motion.div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{ x: [-20, 20, -20], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
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
              Work Experience
            </span>
            <Sparkles className="text-primary-400" size={20} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            7+ years of building production-grade applications for leading tech
            companies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full"
              style={{
                background:
                  "linear-gradient(to bottom, #0ea5e9, #06b6d4, transparent)",
              }}
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="text-primary-400" />
            Education
          </motion.h3>

          {educations.map((education, index) => (
            <motion.div
              key={`${education.institution}-${index}`}
              className="relative rounded-2xl mb-4 last:mb-0"
              whileHover={{ y: -5 }}
            >
              {/* Animated neon gradient border */}
              <div className="flip-card-border" />

              <div className="relative p-6 md:p-8 rounded-2xl bg-[rgba(15,23,42,0.92)] backdrop-blur-xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap size={24} className="text-green-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {education.degree} in {education.field}
                      </h4>
                      <p className="text-primary-300 font-medium font-display">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
