import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/tailwind.css"],

  modules: ["@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://alvereduan.com",
    gzip: true,
    routes: [
      "/",
      {
        url: "/",
        changefreq: "once in a week",
        priority: 1,
        lastmod: "2022-05-23T13:30:00.000Z",
      },
    ],
  },

  // nitro: {
  //   prerender: {
  //     routes: [""],
  //   },
  // },
  ssr: false,
  target: "static",
});
