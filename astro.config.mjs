import { defineConfig } from 'astro/config';
// import svelte from '@astrojs/svelte'
import mdx from '@astrojs/mdx';

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://vikramsoni2.github.io',
  // base: '/astro-blog',
  integrations: [mdx(), vue()],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    remarkPlugins: ['remark-gfm', 'remark-smartypants'],
    rehypePlugins: [['rehype-external-links', {
      target: '_blank'
    }]]
  }
});