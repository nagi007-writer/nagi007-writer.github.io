// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // あなたのGitHub PagesのトップURL（独自ドメインがあればそれを指定）
  site: 'https://nagi007-writer.github.io',
  // URLの末尾にリポジトリ名がつく場合は、それを指定（前後にスラッシュが必要）
  base: '/nagi007-writer.github.io',
});