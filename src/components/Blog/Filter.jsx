import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFilter, 
  FaCheckCircle,
  FaReact,
  FaCode,
  FaLinux,
  FaGlobe,
  FaBook,
  FaLightbulb,
  FaLaptopCode,
  FaGamepad,
  FaTag,
  FaFolder,
  FaHashtag,
  FaLayerGroup,
  FaCube,
  FaDatabase,
  FaServer,
  FaCloud,
  FaMobile,
  FaPalette,
  FaHandPointRight,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaPython,
  FaGitAlt,
  FaTerminal
} from 'react-icons/fa';

// Pool of available icons (defined outside component for consistency)
const iconPool = [
  FaReact, FaCode, FaLinux, FaGlobe, FaBook, FaLightbulb, 
  FaLaptopCode, FaGamepad, FaTag, FaFolder, FaHashtag, 
  FaLayerGroup, FaCube, FaDatabase, FaServer, FaCloud, 
  FaMobile, FaPalette, FaJs, FaHtml5, FaCss3Alt, FaNode, FaPython, FaGitAlt, FaTerminal
];

// Mapping for common categories
const categoryIconMap = {
  'react': FaReact,
  'javascript': FaJs,
  'js': FaJs,
  'node': FaNode,
  'node.js': FaNode,
  'html': FaHtml5,
  'css': FaCss3Alt,
  'linux': FaLinux,
  'python': FaPython,
  'database': FaDatabase,
  'mongodb': FaDatabase,
  'sql': FaDatabase,
  'cloud': FaCloud,
  'design': FaPalette,
  'ui/ux': FaPalette,
  'mobile': FaMobile,
  'git': FaGitAlt,
  'coding': FaCode,
  'programming': FaCode,
  'web dev': FaGlobe,
  'web development': FaGlobe,
  'tutorial': FaBook,
  'tips': FaLightbulb,
  'tricks': FaLightbulb,
  'productivity': FaLaptopCode,
  'terminal': FaTerminal,
  'cli': FaTerminal,
};

// High-contrast brutalist color palette
const brutalistColors = [
  { bg: 'bg-red-500', text: 'text-white' },
  { bg: 'bg-blue-600', text: 'text-white' },
  { bg: 'bg-green-500', text: 'text-black' },
  { bg: 'bg-yellow-400', text: 'text-black' },
  { bg: 'bg-purple-500', text: 'text-white' },
  { bg: 'bg-cyan-400', text: 'text-black' },
  { bg: 'bg-pink-500', text: 'text-white' },
];

const hashString = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

const getCategoryConfig = (title) => {
  const lowerTitle = title.toLowerCase();

  // Special case for "All"
  if (lowerTitle === 'all') {
    return {
      icon: FaGamepad,
      bg: 'bg-white',
      text: 'text-black'
    };
  }

  // Try to find a mapped icon
  let selectedIcon = categoryIconMap[lowerTitle];
  
  // If no direct map, check if title contains a keyword
  if (!selectedIcon) {
    const keyword = Object.keys(categoryIconMap).find(key => lowerTitle.includes(key));
    if (keyword) selectedIcon = categoryIconMap[keyword];
  }

  // Fallback to hash if still no icon found
  const hash = hashString(title);
  const iconIndex = hash % iconPool.length;
  const colorIndex = hash % brutalistColors.length;

  return {
    icon: selectedIcon || iconPool[iconIndex],
    bg: brutalistColors[colorIndex].bg,
    text: brutalistColors[colorIndex].text
  };
};

export default function Filter({ categories, activeFilter, setActiveFilter }) {
  const categoryConfigs = useMemo(() => {
    if (!categories) return {};
    const configs = {};
    categories.forEach(category => {
      if (category && category.title) {
        configs[category.title] = getCategoryConfig(category.title);
      }
    });
    return configs;
  }, [categories]);

  return (
    <div className="w-full bg-[#f3f0e8] dark:bg-neutral-900 py-12 relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-4">
            <h2 className="text-4xl md:text-6xl uppercase text-black dark:text-[#EBD3F8] tracking-tighter bg-white dark:bg-[#2E073F] px-4 py-2 brutalist-border brutalist-shadow-sm transform -rotate-2">
              Categories
            </h2>
          </div>
        </div>

        {/* Brutalist Filter Cards Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories?.map((category, index) => {
            if (!category || !category.title) return null;
            
            const config = categoryConfigs[category.title] || getCategoryConfig(category.title);
            const IconComponent = config.icon;
            const isActive = activeFilter === category.title;
            
            return (
              <button
                key={index}
                onClick={() => setActiveFilter(category.title)}
                className={`group relative flex items-center gap-3 px-6 py-4 transition-all duration-150 brutalist-border ${
                  isActive 
                    ? `${config.bg} ${config.text} brutalist-shadow-sm transform translate-x-1 translate-y-1` 
                    : 'bg-white text-black dark:bg-[#2E073F] dark:text-[#EBD3F8] brutalist-shadow brutalist-card-hover hover:bg-gray-100 dark:hover:bg-[#4a1c6a]'
                }`}
              >
                <IconComponent className="text-2xl" />
                <span className="uppercase tracking-wider text-sm md:text-base">
                  {category.title}
                </span>

                {isActive && (
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-black brutalist-border px-2 py-0.5 text-xs transform rotate-12">
                    ACTIVE
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
