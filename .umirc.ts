import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: 'Ant Design',
    locale: true,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
