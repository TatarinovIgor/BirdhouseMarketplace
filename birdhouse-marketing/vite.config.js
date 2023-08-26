import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: 'http://127.0.0.1:4455/ui/',
    plugins: [react()],
    server: {
        host: '127.0.0.1',
        port: 5173
    },
})
