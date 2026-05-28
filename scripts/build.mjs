import { cp, mkdir, rm, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, 'index.html'), join(dist, 'index.html'));
await cp(join(root, 'src'), join(dist, 'src'), { recursive: true });

const rewrites = [
  [join(dist, 'index.html'), [['/src/main.jsx', '/src/main.js']]],
  [join(dist, 'src', 'main.jsx'), [['./App.jsx', './App.js']]],
  [join(dist, 'src', 'App.jsx'), [['./components/CtaButtons.jsx', './components/CtaButtons.js'], ['./components/Section.jsx', './components/Section.js'], ['brand.ts', 'brand.js']]],
  [join(dist, 'src', 'components', 'CtaButtons.jsx'), [['brand.ts', 'brand.js']]],
];

for (const [file, replacements] of rewrites) {
  let source = await readFile(file, 'utf8');
  for (const [from, to] of replacements) {
    source = source.replaceAll(from, to);
  }
  const output = file.replace(/\.jsx$/, '.js');
  await writeFile(output, source);
}

await cp(join(dist, 'src', 'components', 'Section.jsx'), join(dist, 'src', 'components', 'Section.js'));
await cp(join(dist, 'src', 'content', 'brand.ts'), join(dist, 'src', 'content', 'brand.js'));
console.log('Build exportado em dist/.');
