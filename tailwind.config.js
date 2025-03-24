export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Add the correct paths
    theme: {
      extend: {},
    },
    plugins: [require('@tailwindcss/line-clamp')],
  };