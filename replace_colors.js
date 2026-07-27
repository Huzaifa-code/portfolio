const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Backgrounds
  content = content.replace(/dark:bg-neutral-900/g, 'dark:bg-darkTheme-900');
  content = content.replace(/dark:bg-neutral-800/g, 'dark:bg-darkTheme-800');
  content = content.replace(/dark:bg-neutral-700/g, 'dark:bg-darkTheme-800');
  content = content.replace(/dark:bg-gray-[89]00/g, 'dark:bg-darkTheme-900');
  content = content.replace(/dark:bg-gray-700/g, 'dark:bg-darkTheme-800');
  content = content.replace(/dark:bg-gray-600/g, 'dark:bg-darkTheme-800');
  
  // Texts
  content = content.replace(/dark:text-neutral-[234]00/g, 'dark:text-darkTheme-600');
  content = content.replace(/dark:text-gray-[234]00/g, 'dark:text-darkTheme-600');
  
  // Borders
  content = content.replace(/dark:border-neutral-[678]00/g, 'dark:border-darkTheme-700');
  
  // Gradients
  content = content.replace(/dark:from-\[#[0-9a-fA-F]+\]/g, 'dark:from-darkTheme-900');
  content = content.replace(/dark:to-\[#[0-9a-fA-F]+\]/g, 'dark:to-darkTheme-800');
  content = content.replace(/dark:from-purple-[0-9]+\/?[0-9]*/g, 'dark:from-darkTheme-900');
  content = content.replace(/dark:via-indigo-[0-9]+/g, 'dark:via-darkTheme-800');
  content = content.replace(/dark:to-blue-[0-9]+/g, 'dark:to-darkTheme-700');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      replaceInFile(fullPath);
    }
  }
}

traverseDir(srcDir);
console.log('Replaced colors successfully!');
