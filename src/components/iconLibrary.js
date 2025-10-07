import React from 'react';
import {
  FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, FaJava, FaRobot, FaBrain,
  FaAws, FaDocker, FaCogs, FaDatabase, FaCube, FaNetworkWired, FaCode, FaMicrochip, FaFigma
} from 'react-icons/fa';

import {
  SiVercel, SiRender, SiFlutter, SiDart, SiMysql, SiExpress, SiGooglecloud, SiMongodb,
  SiFirebase, SiPostgresql, SiCanva, SiTailwindcss, SiMui, SiPlotly,
  SiSolidity, SiWeb3Dotjs, SiPython
} from 'react-icons/si';

import { BiLogoVisualStudio } from "react-icons/bi";

// Export icon components (not instantiated JSX). This avoids raw '<' tokens in a .js file
// which cause "Unexpected token '<'" when code isn't run through a JSX transform.
export const iconMap = {
  FaJsSquare: FaJsSquare,
  FaPython: FaPython,
  FaJava: FaJava,
  SiDart: SiDart,
  FaBrain: FaBrain,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  SiFlutter: SiFlutter,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  BiLogoVisualStudio: BiLogoVisualStudio,
  SiVercel: SiVercel,
  SiRender: SiRender,
  SiMysql: SiMysql,
  FaRobot: FaRobot,
  FaCode: FaCode,
  FaMicrochip: FaMicrochip,
  FaDatabase: FaDatabase,
  FaNetworkWired: FaNetworkWired,
  FaAws: FaAws,
  SiGooglecloud: SiGooglecloud,
  FaDocker: FaDocker,
  FaCogs: FaCogs,
  SiMongodb: SiMongodb,
  SiFirebase: SiFirebase,
  SiPostgresql: SiPostgresql,
  FaFigma: FaFigma,
  SiCanva: SiCanva,
  SiTailwindcss: SiTailwindcss,
  SiMui: SiMui,
  SiPython: SiPython,
  SiPlotly: SiPlotly,
  FaCube: FaCube,
  SiSolidity: SiSolidity,
  SiWeb3Dotjs: SiWeb3Dotjs,
};

// Helper to create an icon element with props without using JSX here.
export function renderIcon(key, props = { size: 40 }) {
  const Icon = iconMap[key];
  return Icon ? React.createElement(Icon, props) : null;
}