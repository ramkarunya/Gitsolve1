import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

export default defineConfig(async () => {
  const plugins = [react()]
  // The Netlify Vite plugin is dynamically imported as it might be optional
  // or only required in specific deployment environments (e.g., Netlify builds).
  // It's handled gracefully with a try...catch block.
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
        '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), './src'),
      },
    },
    server: {
      host: '127.0.0.1',
      port: 5173,
      strictPort: true
    }
  }
})