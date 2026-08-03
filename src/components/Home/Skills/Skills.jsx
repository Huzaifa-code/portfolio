import { cplus, figma, js, mongodb, nodejs, react, ts, cs, dotnet, mysql, postgres, sqlite, ubuntu, nextjs, vite, sequelize, express, android, bash, firebase, tailwind, python, NGINX, apache } from './assets';
import MangaText from '../../Blog/MangaText';

function Skills() {
  const images = [
    { src: react, name: 'React' },
    { src: dotnet, name: '.NET' },
    { src: nodejs, name: 'Node.js' },
    { src: express, name: 'Express' },
    { src: nextjs, name: 'Next.js' },
    { src: vite, name: 'Vite' },
    { src: cs, name: 'C#' },
    { src: ts, name: 'TypeScript' },
    { src: tailwind, name: 'Tailwind' },
    { src: mongodb, name: 'MongoDB' },
    { src: js, name: 'JavaScript' },
    { src: cplus, name: 'C++' },
    { src: python, name: 'Python' },
    { src: mysql, name: 'MySQL' },
    { src: postgres, name: 'PostgreSQL' },
    { src: sqlite, name: 'SQLite' },
    { src: sequelize, name: 'Sequelize' },
    { src: bash, name: 'Bash' },
    { src: firebase, name: 'Firebase' },
    { src: android, name: 'Android' },
    { src: ubuntu, name: 'Linux' },
    { src: NGINX, name: 'NGINX' },
    { src: apache, name: 'Apache' },
    { src: figma, name: 'Figma' },
  ];

  return (
    <div id='skills' className='py-16 max-w-7xl mx-auto px-4 font-sans'>
      {/* Title */}
      <div className="text-center mb-10">
        <div className="mb-2">
          <MangaText text="「技能」" translation="Ginō (Tech Skills)" className="text-xl md:text-2xl text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white tracking-tight">
          My Tech Skills
        </h2>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto'>
        {images.map((image, key) => {
          return (
            <div 
              key={key} 
              className='p-3 bg-white dark:bg-[#1E112C] text-black dark:text-[#EBD3F8] brutalist-border brutalist-shadow-sm flex items-center gap-3 hover:-translate-y-1 hover:bg-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black transition-all cursor-pointer'
            >
              <img
                className='h-8 w-8 object-contain'
                src={image.src.src || image.src}
                alt={image.name}
                style={{ imageRendering: 'pixelated' }}
              />
              <p className='text-xs md:text-sm font-bold uppercase tracking-wider truncate font-mono'>{image.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;