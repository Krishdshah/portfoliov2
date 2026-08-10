"use client";

import { useState, useEffect } from "react";
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };

  const data = [
    {
      title: "Home",
      icon: (
        <HomeIcon className="h-full w-full text-[#2B1B10]" />
      ),
      href: "/",
    },
    {
      title: "Work",
      icon: (
        <Package className="h-full w-full text-[#2B1B10]" />
      ),
      href: "/work",
    },
    {
      title: "Research",
      icon: (
        <ScrollText className="h-full w-full text-[#2B1B10]" />
      ),
      href: "/#research",
    },
    {
      title: "About",
      icon: (
        <Component className="h-full w-full text-[#2B1B10]" />
      ),
      href: "/#about",
    },
    {
      title: "Now",
      icon: (
        <Activity className="h-full w-full text-[#2B1B10]" />
      ),
      href: "/#now",
    },
    {
      title: "Email",
      icon: (
        <Mail className="h-full w-full text-[#2B1B10]" />
      ),
      href: "mailto:krishdshah@example.com",
    },
    {
      title: "Theme",
      icon: (
        <SunMoon className="h-full w-full text-[#2B1B10]" />
      ),
      onClick: toggleTheme,
    },
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] pointer-events-auto flex justify-center items-start overflow-visible">
      <Dock
        panelHeight={isMobile ? 44 : 64}
        magnification={isMobile ? 48 : 80}
        distance={isMobile ? 0 : 150}
        className={isMobile ? "gap-2 px-3 py-1.5 bg-transparent border-none shadow-none" : "gap-3 px-4 py-2 bg-transparent border-none shadow-none"}
      >
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-foreground/5 hover:bg-foreground/10 border border-border-custom/30 flex items-center justify-center"
            href={item.href}
            onClick={item.onClick}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
