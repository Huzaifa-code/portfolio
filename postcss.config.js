module.exports = {
    plugins: [
      require('postcss-import'),  // Required for Tailwind CSS to function with @import in CSS
      require('postcss-nesting'), // Enable CSS Nesting
      require('tailwindcss'),     // Tailwind CSS
      require('autoprefixer'),    // Autoprefixer for adding browser prefixes
    ],
  };
  