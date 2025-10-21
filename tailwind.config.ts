import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Bu satırlar Vercel'in doğru dosyaları bulmasını sağlayacak:
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
