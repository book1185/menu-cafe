/** @type {import('tailwindcss').Config} */
glob = require("glob");
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: glob.sync("./src/**/*.{html,ts}"),
  },
  content: [
    './src/**/*.{html,ts}',
    './src/app/**/*.{html,ts}',
  
  ],
 
  
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
