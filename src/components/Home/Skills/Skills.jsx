import { cplus, figma, js, mongodb, nodejs, react, ts, cs, dotnet, mysql, postgres, sqlite, ubuntu, nextjs, vite, sequelize, express, android, bash, firebase, tailwind, python, NGINX, apache } from './assets';

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
    { src: tailwind, name: 'Tailwind CSS' },
    { src: mongodb, name: 'MongoDB' },
    { src: js, name: 'JavaScript' },
    { src: cplus, name: 'C++' },
    { src: python, name: 'Python' },
    { src: mysql, name: 'MySQL' },
    { src: postgres, name: 'PostgreSQL' },
    { src: sqlite, name: 'SQLite' },
    { src: sequelize, name: 'Sequelize' },
    {src: bash, name: 'Bash' },
    { src: firebase, name: 'Firebase' },
    { src: android, name: 'Android' },
    { src: ubuntu, name: 'Linux | Ubuntu' },
    { src: NGINX, name: 'NGINX' },
    { src: apache, name: 'Apache Server' },
    { src: figma, name: 'Figma' },
  ];

  return (
    <div id='skills' className='py-11'>
      <h1 className='text-4xl md:text-5xl md:ml-11 my-4 md:my-16 font-medium text-center'>MY TECH SKILLS</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-y-11 max-w-5xl 2xl:max-w-7xl mx-auto'>
        {
          images.map((image, key) => {
            return (
              <div 
                key={key} 
                className='p-4 w-fit flex justify-center items-center gap-4 border
                 border-gray-300 rounded-full text-center
                 hover:scale-110 transition-transform duration-300 ease-in-out'
              >
                <img
                  className='md:h-[3rem] h-[2rem]'
                  src={image.src}
                  alt={image.name}
                  style={{ imageRendering: 'pixelated' }}
                />
                <p className='mt-2 text-sm font-medium w-14'>{image.name}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Skills;