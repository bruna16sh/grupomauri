import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const clientHtmlPath = path.join(root, 'dist', 'index.html');
const ssrEntryPath = path.join(root, 'dist-ssr', 'entry-server.js');

const { render } = await import(`file://${ssrEntryPath}`);

const appHtml = render();
const html = readFileSync(clientHtmlPath, 'utf-8');
const prerendered = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

writeFileSync(clientHtmlPath, prerendered);
rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });

console.log('Prerender concluido: conteudo estatico injetado em dist/index.html');
