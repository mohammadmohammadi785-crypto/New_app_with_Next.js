"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import ThemeSwither from "./ThemeSwither";
import LangSwither from "./LangSwither";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="bg-black border-b border-normal text-white py-3 sm:py-4 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl dancing-script gradient-bg sm:text-2xl md:text-3xl font-extrabold tracking-tight">
          {t("nav.title")}
        </h1>

        <div className="hidden sm:flex items-center gap-4">
          <nav>
            <ul className="flex gap-6 md:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-normal transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <LangSwither />
            <ThemeSwither />
          </div>
        </div>

        <div className="flex items-center text-normal gap-2 sm:hidden">
          <LangSwither />
          <ThemeSwither />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-normal"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-normal" />
            ) : (
              <Menu className="h-6 w-6 text-normal" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="sm:hidden fixed top-0 right-0 h-full w-64 bg-black z-40 shadow-2xl"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-7 w-7" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 px-6 pt-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg text-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
