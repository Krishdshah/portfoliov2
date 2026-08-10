"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 10,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "pointer",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "dark" ? "#080808" : "#f3f3f3";
  const fallbackHex = theme === "dark" ? "#ffffff" : "#1a1a1a";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs?: string[];
  iconItems?: { name: string; logo: string }[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function IconCloud({ iconSlugs, iconItems }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (iconSlugs && iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const renderedIcons = useMemo(() => {
    if (data) {
      return Object.values(data.simpleIcons).map((icon) =>
        renderCustomIcon(icon, isDark ? "dark" : "light")
      );
    }
    return null;
  }, [data, isDark]);

  if (iconItems && iconItems.length > 0) {
    return (
      <Cloud {...cloudProps}>
        {iconItems.map((item, idx) => (
          <a
            key={`${idx}-${item.name}`}
            href="#"
            onClick={(e) => e.preventDefault()}
            title={item.name}
            style={{ cursor: "pointer" }}
          >
            <img
              src={item.logo}
              alt={item.name}
              height="42"
              width="42"
              style={{
                height: "42px",
                width: "42px",
                objectFit: "contain",
              }}
            />
          </a>
        ))}
      </Cloud>
    );
  }

  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}
