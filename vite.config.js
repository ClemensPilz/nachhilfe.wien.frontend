import {fileURLToPath, URL} from "node:url";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({

        plugins: [vue(), vueJsx()],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        server: {
            watch: {
                onRestart() {
                    this.sendHmrMessage({type: "full-reload"});
                },
            },
        },
        build: {
            rollupOptions: {
                external: ['src/assets/videos/pexels-pressmaster-3209298-1920x1080-25fps.mp4']
            }
        }
    }
);
