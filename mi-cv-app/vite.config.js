import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/https://aleluboszyc.github.io/Porfolio_Martin_Luboszyc_CV/",
})
