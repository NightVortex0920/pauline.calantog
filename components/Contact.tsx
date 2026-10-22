"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  MessageSquare,
  MessageCircle,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { FaReddit } from "react-icons/fa";
import type { ComponentType } from "react";

type ContactIcon = ComponentType<{ size?: number | string; className?: string }>;

type ContactInfo = {
  label: string;
  value: string;
  href: string | null;
  color: string;
} & (
  | { icon: ContactIcon; iconImage?: never }
  | { icon?: never; iconImage: string }
);

const contactInfo: ContactInfo[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MaxCode917",
    value: "MaxCode917",
    color: "#1506eb",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:paucalantog07@gmail.com",
    value: "paucalantog07@gmail.com",
    color: "#0ea5e9",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/fashion525",
    value: "Fashion",
    color: "#26A5E4",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/639309632136",
    value: "+63 997 278 0244",
    color: "#25D366",
  },
  {
    icon: FaReddit,
    label: "Reddit",
    href: "https://www.reddit.com/user/Pauline_Calantog",
    value: "Pauline Calantog",
    color: "#25D366",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/MaxCode917",
    color: "#ffffff",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:paucalantog07@gmail.com",
    color: "#0ea5e9",
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your message.");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
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
              Get In Touch
            </span>
            <Sparkles className="text-primary-400" size={20} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
            I&apos;m always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Contact Info */}
          <div className="space-y-6 flex flex-col">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group"
                  >
                    <motion.div
                      className={`w-12 h-12 flex-shrink-0 ${item.iconImage ? "" : `bg-gradient-to-br ${item.color}`} rounded-xl flex items-center justify-center relative`}
                      whileHover={{ scale: 1.05, rotate: 3 }}
                    >
                      {item.iconImage ? (
                        <Image
                          src={item.iconImage}
                          alt=""
                          aria-hidden="true"
                          width={24}
                          height={24}
                          className="brightness-0 invert"
                        />
                      ) : item.icon ? (
                        <item.icon
                          size={20}
                          className="text-white relative z-10"
                        />
                      ) : null}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-primary-400 transition-colors flex items-center gap-2 group-hover:gap-3 break-words"
                        >
                          {item.value}
                          <ArrowRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-all"
                          />
                        </a>
                      ) : (
                        <p className="text-white truncate">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            {/* <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Connect with Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-dark-200 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all relative group"
                    aria-label={link.label}
                  >
                    <link.icon size={22} />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div> */}

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 sm:p-8 border-primary-500/20 relative overflow-hidden flex-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 font-medium font-display">
                  Available for hire
                </span>
              </div>
              <p className="text-gray-400 text-lmd">
                Available for freelance projects and long-term partnerships. I
                specialize in building secure, scalable, and high-performance
                digital products across Web, Mobile, Blockchain, and AI. From
                initial concept and architecture to development, deployment, and
                optimization, I deliver reliable solutions aligned with business
                goals.
              </p>
              {/* Animated border */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </div>

          {/* Contact Form — Cyberpunk Glow Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="cyber-card h-full"
          >
            <div className="cyber-card-content p-6 sm:p-8 h-full flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 relative z-10">
                <MessageSquare size={24} className="text-primary-400" />
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center relative z-10"
                >
                  <motion.div
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={40} className="text-green-400" />
                  </motion.div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-400">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10 flex-1 flex flex-col"
                >
                  {[
                    {
                      name: "name",
                      label: "Your Name",
                      type: "text",
                      placeholder: "John Doe",
                    },
                    {
                      name: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "john@example.com",
                    },
                  ].map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium font-display text-gray-400 mb-2"
                      >
                        {field.label}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={
                            formState[field.name as keyof typeof formState]
                          }
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                          placeholder={field.placeholder}
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-cyan-500"
                          initial={{ width: 0 }}
                          animate={{
                            width: focusedField === field.name ? "100%" : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 flex flex-col"
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium font-display text-gray-400 mb-2"
                    >
                      Message
                    </label>
                    <div className="relative flex-1 flex flex-col">
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className="w-full flex-1 min-h-[120px] px-4 py-3 bg-dark-200 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-b-xl"
                        initial={{ width: 0 }}
                        animate={{
                          width: focusedField === "message" ? "100%" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {formError && (
                    <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      {formError}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 text-white font-semibold font-display rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyan-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
