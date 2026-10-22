"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  { code: "const dev = 'Pavel';", color: "#22d3ee" },
  { code: "Senior Cybersecurity Engineer", color: "#e535ab" },
  { code: "npm run build", color: "#0ea5e9" },
  { code: "<Component />", color: "#a78bfa" },
  { code: "async/await", color: "#34d399" },
  { code: "Cross-functional Collaboration", color: "#f06f6f" },
  { code: "Trust", color: "#ff08ff" },
  { code: "Long-term Vision", color: "#ffffff" },
  { code: "useState()", color: "#f472b6" },
  { code: "export default", color: "#fbbf24" },
  { code: "TypeScript", color: "#3b82f6" },
  { code: "Next.js 14", color: "#ffffff" },
  { code: "Let's Connect", color: "#ffffff" },
  { code: "Pauline", color: "#ff08ff" },
  { code: "Supabase", color: "#22c55e" },
  { code: "Tailwind CSS", color: "#06b6d4" },
  { code: "REST API", color: "#f97316" },
  { code: "Xcode", color: "#fbbf24" },
  { code: "Python", color: "#d60a0a" },
  { code: "Django", color: "#e535ab" },
  { code: "React Native", color: "#fbbf24" },
  { code: "React", color: "#e535ab" },
  { code: "Firebase", color: "#22c55e" },
  { code: "<Component />", color: "#a78bfa" },
  { code: "PHP", color: "#a78bfa" },
  { code: "JavaScript", color: "#3b82f6" },
  { code: "Senior Full Stack Engineer", color: "#e535ab" },
  { code: "Flutter", color: "#f472b6" },
  { code: "Mobile App", color: "#f06f6f" },
  { code: "Rust", color: "#22c55e" },
  { code: "Pauline", color: "#ff08ff" },
  { code: "Trading Bot", color: "#ffffff" },
  { code: "Swift", color: "#d34d4d" },
  { code: "Kotlin", color: "#2f0ad6" },
  { code: "Blockchain", color: "#fbbf24" },
  { code: "Cross-functional Collaboration", color: "#f06f6f" },
  { code: "Trust", color: "#ff08ff" },
  { code: "Long-term Vision", color: "#ffffff" },
  { code: "Hacking", color: "#e535ab" },
  { code: "Anti Bot", color: "#22c55e" },
  { code: "Casino Game", color: "#a78bfa" },
  { code: "<Component />", color: "#a78bfa" },
  { code: "Senior Mobile Engineer", color: "#e535ab" },
  { code: "Solidity", color: "#3b82f6" },
  { code: "Pauline", color: "#ff08ff" },
  { code: "Web3", color: "#f472b6" },
  { code: "Smart Contracts", color: "#d36969" },
  { code: "Ethereum", color: "#ffffff" },
  { code: "Node.js", color: "#d60a0a" },
  { code: "Android", color: "#2f0ad6" },
  { code: "AI Risk Assessment", color: "#22d3ee" },
  { code: "Frontend Development", color: "#0ea5e9" },
  { code: "Backend Development", color: "#a78bfa" },
  { code: "Red Teaming", color: "#34d399" },
  { code: "Prompt Injection Testing", color: "#f472b6" },
  { code: "LLM Red Teaming", color: "#fbbf24" },
  { code: "Prompt Engineering", color: "#2f0ad6" },
  { code: "Startups", color: "#d36969" },
  { code: "Business", color: "#ff08ff" },
  { code: "Cross-functional Collaboration", color: "#f06f6f" },
  { code: "Trust", color: "#ff08ff" },
  { code: "Long-term Vision", color: "#ffffff" },
  { code: "Senior Software Engineer", color: "#e535ab" },
  { code: "IOS", color: "#2f0ad6" },
  { code: "Scrapping", color: "#ffffff" },
  { code: "Automation", color: "#d60a0a" },
  { code: "Diagram", color: "#2f0ad6" },
  { code: "Java", color: "#ffffff" },
  { code: "Angular", color: "#e535ab" },
  { code: "Vue", color: "#22c55e" },
  { code: "C#", color: "#a78bfa" },
  { code: ".NET", color: "#3b82f6" },
  { code: "Clean Code", color: "#ff08ff" },
  { code: "Devops", color: "#e535ab" },
  { code: "SQL", color: "#fbbf24" },
  { code: "Redux", color: "#e535ab" },
  { code: "Github", color: "#22c55e" },
  { code: "AWS", color: "#a78bfa" },
  { code: "PostgreSQL", color: "#3b82f6" },
  { code: "Senior Blockchain Engineer", color: "#e535ab" },
  { code: "MongoDB", color: "#f472b6" },
  { code: "Database Design", color: "#f06f6f" },
  { code: "Spring Boot", color: "#ff08ff" },
  { code: "Express.js", color: "#ffffff" },
  { code: "Software Engineering", color: "#ffffff" },
  { code: "AI/ML", color: "#e535ab" },
  { code: "LLM", color: "#22c55e" },
  { code: "AI Engineer", color: "#a78bfa" },
  { code: "Git", color: "#3b82f6" },
  { code: "Laravel", color: "#f472b6" },
  { code: "Cross-functional Collaboration", color: "#f06f6f" },
  { code: "Trust", color: "#ff08ff" },
  { code: "Long-term Vision", color: "#ffffff" },
  { code: "Sniper Bot", color: "#22c55e" },
  { code: "Arbitrage Bot", color: "#a78bfa" },
  { code: "Senior AI Engineer", color: "#e535ab" },
  { code: "SEO", color: "#3b82f6" },
  { code: "Open to work", color: "#f472b6" },
  { code: "Idea", color: "#f06f6f" },
  { code: "Bypass", color: "#3b82f6" },
  { code: "Solution", color: "#ff08ff" },
  { code: "Proxy", color: "#ffffff" },
];

interface SnippetPosition {
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

export default function FloatingCode() {
  const [positions, setPositions] = useState<SnippetPosition[]>([]);

  useEffect(() => {
    // Generate random positions only on client side
    const newPositions = codeSnippets.map(() => ({
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 10,
    }));
    setPositions(newPositions);
  }, []);

  if (positions.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {codeSnippets.map((snippet, index) => {
        const pos = positions[index];
        if (!pos) return null;

        return (
          <motion.div
            key={index}
            className="absolute font-mono text-sm whitespace-nowrap"
            style={{
              left: `${pos.startX}%`,
              top: `${pos.startY}%`,
              color: snippet.color,
              opacity: 0.15,
              textShadow: `0 0 20px ${snippet.color}40`,
            }}
            animate={{
              x: [0, 100, -50, 100, 0],
              y: [0, -100, 50, -50, 0],
              opacity: [0.1, 0.2, 0.15, 0.2, 0.1],
              rotate: [0, 5, -5, 3, 0],
            }}
            transition={{
              duration: pos.duration,
              delay: pos.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {snippet.code}
          </motion.div>
        );
      })}
    </div>
  );
}
