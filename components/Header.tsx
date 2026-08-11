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
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["hero", "work", "profiles", "now"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

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
      title: "Home",
      icon: (
        <HomeIcon className="h-full w-full text-[#4F46E5] dark:text-[#818CF8]" />
      ),
      href: "#hero",
      colorClass: "bg-[#EEF2FF] border-[#C7D2FE] dark:bg-[#312E81]/30 dark:border-[#3730A3]/50 hover:bg-[#E0E7FF] dark:hover:bg-[#312E81]/50",
    },
    {
      title: "Work",
      icon: (
        <Package className="h-full w-full text-[#0284C7] dark:text-[#38BDF8]" />
      ),
      href: "#work",
      colorClass: "bg-[#F0F9FF] border-[#BAE6FD] dark:bg-[#0C4A6E]/30 dark:border-[#075985]/50 hover:bg-[#E0F2FE] dark:hover:bg-[#0C4A6E]/50",
    },
    {
      title: "Profiles",
      icon: (
        <Component className="h-full w-full text-[#15803D] dark:text-[#34D399]" />
      ),
      href: "#profiles",
      colorClass: "bg-[#F0FDF4] border-[#BBF7D0] dark:bg-[#064E3B]/30 dark:border-[#065F46]/50 hover:bg-[#D1FAE5] dark:hover:bg-[#064E3B]/50",
    },
    {
      title: "Now",
      icon: (
        <Activity className="h-full w-full text-[#1A1A1A] dark:text-[#E2E8F0]" />
      ),
      href: "#now",
      colorClass: "bg-[#FFF9E6] border-[#FDE68A] dark:bg-[#78350F]/20 dark:border-[#92400E]/40 hover:bg-[#FEF3C7] dark:hover:bg-[#78350F]/30",
    },
    {
      title: "Email",
      icon: (
        <Mail className="h-full w-full text-[#E11D48] dark:text-[#FB7185]" />
      ),
      href: "mailto:thekrishdshahbhs@gmail.com",
      colorClass: "bg-[#FFF1F2] border-[#FECDD3] dark:bg-[#831843]/20 dark:border-[#9D174D]/40 hover:bg-[#FCE7F3] dark:hover:bg-[#831843]/30",
    },
    {
      title: "Theme",
      icon: (
        <SunMoon className="h-full w-full text-[#4F46E5] dark:text-[#A78BFA]" />
      ),
      onClick: toggleTheme,
      colorClass: "bg-[#EEF2FF] border-[#C7D2FE] dark:bg-[#4C1D95]/30 dark:border-[#5B21B6]/50 hover:bg-[#EDE9FE] dark:hover:bg-[#4C1D95]/50",
    },
  ];

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-auto flex justify-center items-start overflow-visible">
      <Dock
        panelHeight={isMobile ? 50 : 64}
        magnification={isMobile ? 54 : 80}
        distance={isMobile ? 0 : 150}
        className={isMobile ? "gap-2 px-3 py-1.5 bg-transparent border-none shadow-none" : "gap-3 px-4 py-2 bg-transparent border-none shadow-none"}
      >
        {data.map((item, idx) => {
          const isActive = item.href === `#${activeSection}`;
          return (
            <DockItem
              key={idx}
              className={cn(
                "relative aspect-square rounded-full border flex items-center justify-center transition-all duration-200",
                isActive && "scale-110 shadow-sm",
                item.colorClass
              )}
              href={item.href}
              onClick={item.onClick}
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
