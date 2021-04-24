// @ts-nocheck
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from "fs";
import { baseParse } from "@vue/compiler-core";
import { vueDemoPlugin } from './plugins/vueDemo'
import { md } from './plugins/markdown'



// https://vitejs.dev/config//
export default defineConfig({
  base: "./",
  assetsDir: "assets",
  plugins: [vue(), vueDemoPlugin, md()],
})
