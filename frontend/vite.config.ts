import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(async () => {
  const plugins = [react()]
  try {
    const netlifyPlugin = await import('@netlify/vite-plugin')
    if (netlifyPlugin && netlifyPlugin.default) {
      plugins.push(netlifyPlugin.default())
    }
  } catch (e) {
    console.error('Failed to load netlify plugin', e)
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '127.0.0.1',
      port: 5173,
      strictPort: true
    }
  }
})
