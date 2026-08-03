import React from 'react';

const PALETTES = [
  ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F'],
  ['#90BE6D', '#43AA8B', '#577590', '#277DA1', '#4D908E'],
  ['#E01E37', '#DA1E37', '#B71040', '#A0093E', '#8F0037'],
  ['#7209B7', '#560BAD', '#480CA8', '#3F37C9', '#4361EE'],
  ['#FF007F', '#FF70A6', '#FF9770', '#FFD670', '#E9FF70']
];

function stringToHash(str = 'user') {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

const CustomAvatar = ({ size = 32, name = 'User', className = '' }) => {
  const safeName = typeof name === 'string' ? name : 'User';
  const hash = stringToHash(safeName);
  const palette = PALETTES[hash % PALETTES.length];
  const bg = palette[hash % palette.length];
  const accent = palette[(hash + 2) % palette.length];
  
  const initials = safeName
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase() || 'U';

  return (
    <div
      className={`relative inline-flex items-center justify-center font-mono font-black text-white brutalist-border border border-black uppercase select-none overflow-hidden ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: bg,
        fontSize: `${Math.max(10, Math.floor(size * 0.4))}px`,
      }}
      title={safeName}
    >
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${accent} 25%, transparent 25%)`,
          backgroundSize: '4px 4px'
        }}
      />
      <span className="relative z-10 drop-shadow-[1px_1px_0px_#000]">{initials}</span>
    </div>
  );
};

export default CustomAvatar;
