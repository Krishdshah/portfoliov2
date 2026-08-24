"use client";

import { useState, useEffect } from "react";
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  SunMoon,
} from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = ["home", "projects", "profiles", "now"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of [...sections].reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.add("transitioning");
      root.classList.toggle("dark");
      setTimeout(() => root.classList.remove("transitioning"), 450);
    }
  };

  const data = [
    {
      id: "home",
      title: "Home",
      icon: (
        <HomeIcon className="h-full w-full text-[#4F46E5] dark:text-[#818CF8]" />
      ),
      href: "#home",
      onClick: () => scrollToSection("home"),
      colorClass: "bg-[#EEF2FF] border-[#C7D2FE] dark:bg-[#312E81]/30 dark:border-[#3730A3]/50 hover:bg-[#E0E7FF] dark:hover:bg-[#312E81]/50",
    },
    {
      id: "projects",
      title: "Projects",
      icon: (
        <Package className="h-full w-full text-[#0284C7] dark:text-[#38BDF8]" />
      ),
      href: "#projects",
      onClick: () => scrollToSection("projects"),
      colorClass: "bg-[#F0F9FF] border-[#BAE6FD] dark:bg-[#0C4A6E]/30 dark:border-[#075985]/50 hover:bg-[#E0F2FE] dark:hover:bg-[#0C4A6E]/50",
    },
    {
      id: "profiles",
      title: "Profiles",
      icon: (
        <Component className="h-full w-full text-[#15803D] dark:text-[#34D399]" />
      ),
      href: "#profiles",
      onClick: () => scrollToSection("profiles"),
      colorClass: "bg-[#F0FDF4] border-[#BBF7D0] dark:bg-[#064E3B]/30 dark:border-[#065F46]/50 hover:bg-[#D1FAE5] dark:hover:bg-[#064E3B]/50",
    },
    {
      id: "now",
      title: "Now",
      icon: (
        <Activity className="h-full w-full text-[#1A1A1A] dark:text-[#E2E8F0]" />
      ),
      href: "#now",
      onClick: () => scrollToSection("now"),
      colorClass: "bg-[#FFF9E6] border-[#FDE68A] dark:bg-[#78350F]/20 dark:border-[#92400E]/40 hover:bg-[#FEF3C7] dark:hover:bg-[#78350F]/30",
    },
    {
      id: "email",
      title: "Email",
      icon: (
        <Mail className="h-full w-full text-[#E11D48] dark:text-[#FB7185]" />
      ),
      href: "mailto:thekrishdshahbhs@gmail.com",
      colorClass: "bg-[#FFF1F2] border-[#FECDD3] dark:bg-[#831843]/20 dark:border-[#9D174D]/40 hover:bg-[#FCE7F3] dark:hover:bg-[#831843]/30",
    },
    {
      id: "theme",
      title: "Theme",
      icon: (
        <SunMoon className="h-full w-full text-[#4F46E5] dark:text-[#A78BFA]" />
      ),
      onClick: toggleTheme,
      colorClass: "bg-[#EEF2FF] border-[#C7D2FE] dark:bg-[#4C1D95]/30 dark:border-[#5B21B6]/50 hover:bg-[#EDE9FE] dark:hover:bg-[#4C1D95]/50",
    },
  ];

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-auto flex justify-center items-start overflow-visible">
      <Dock
        panelHeight={isMobile ? 50 : 64}
        magnification={isMobile ? 54 : 80}
        distance={isMobile ? 0 : 150}
        className={isMobile ? "gap-2 px-3 py-1.5 bg-transparent border-none shadow-none" : "gap-3 px-4 py-2 bg-transparent border-none shadow-none"}
      >
        {data.map((item, idx) => {
          const isActive = item.id ? activeSection === item.id : false;
          return (
            <DockItem
              key={idx}
              className={cn(
                "relative aspect-square rounded-full border flex items-center justify-center transition-all duration-200",
                isActive && "scale-110 shadow-sm",
                item.colorClass
              )}
              href={item.href}
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                }
              }}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
              {isActive && (
                <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-current opacity-70" />
              )}
            </DockItem>
          );
        })}
      </Dock>
    </div>
  );
}
