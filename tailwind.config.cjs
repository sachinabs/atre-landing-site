/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 38px 15px rgba(156, 156, 156, 0.01), 0px 22px 13px rgba(156, 156, 156, 0.03), 0px 10px 10px rgba(156, 156, 156, 0.04), 0px 2px 5px rgba(156, 156, 156, 0.05), 0px 0px 0px rgba(156, 156, 156, 0.05) !important",
        custom2:
          "0px 91px 36px rgba(156, 156, 156, 0.01), 0px 51px 31px rgba(156, 156, 156, 0.05), 0px 23px 23px rgba(156, 156, 156, 0.09), 0px 6px 12px rgba(156, 156, 156, 0.1), 0px 0px 0px rgba(156, 156, 156, 0.1) !important",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
