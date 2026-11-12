// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // GitHub Pages 주소: https://eunhyeme.github.io/whatIlearn/
  site: 'https://eunhyeme.github.io',
  base: '/whatIlearn',
  integrations: [
    starlight({
      title: 'What I Learn',
      description: '대규모 시스템 설계 이론을 직접 움직여 보며 이해하는 인터랙티브 노트',
      defaultLocale: 'root',
      locales: { root: { label: '한국어', lang: 'ko' } },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/eunhyeme/whatIlearn' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: '대규모 시스템 설계 기초 1',
          items: [
            { label: '목차와 진행 상황', slug: 'system-design' },
            { label: '4장. 처리율 제한 장치', slug: 'system-design/ch04-rate-limiter' },
          ],
        },
      ],
    }),
  ],
});
