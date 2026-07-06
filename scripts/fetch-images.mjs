#!/usr/bin/env node
/*
 * Récupère les images listées dans le manifeste de CONTENU-SOURCE.md et les
 * enregistre dans src/assets/images/<section>/, puis génère un mapping lisible
 * (src/assets/images/PHOTOS.md).
 *
 * Utilisation (là où l'accès Internet est ouvert — poste local, CI, etc.) :
 *     node scripts/fetch-images.mjs
 *   ou
 *     npm run fetch:images
 *
 * Idempotent : ne re-télécharge pas un fichier déjà présent.
 * Node 18+ requis (fetch natif).
 */
import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(root, 'src/assets/images');

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// Découpe le manifeste "### Titre (N images)" + lignes "- URL"
function parseManifest(md) {
  const sections = [];
  let cur = null;
  for (const line of md.split('\n')) {
    const h = line.match(/^###\s+(.*?)\s*\((\d+)\s+images?\)/i);
    if (h) {
      cur = { title: h[1].trim(), urls: [] };
      sections.push(cur);
      continue;
    }
    const u = line.match(/^-\s+(https?:\/\/\S+)/);
    if (u && cur) cur.urls.push(u[1]);
  }
  return sections;
}

const extOf = (url) => {
  const m = url.split('?')[0].match(/\.(jpe?g|png|webp|avif|gif)$/i);
  return m ? m[0].toLowerCase().replace('.jpeg', '.jpg') : '.jpg';
};

async function main() {
  const md = await readFile(path.join(root, 'CONTENU-SOURCE.md'), 'utf8');
  const sections = parseManifest(md);
  if (!sections.length) throw new Error('Aucune section image trouvée dans CONTENU-SOURCE.md');

  const rows = [];
  let ok = 0;
  let fail = 0;

  for (const section of sections) {
    const dir = path.join(OUT, slug(section.title));
    await mkdir(dir, { recursive: true });
    let i = 0;
    for (const url of section.urls) {
      i += 1;
      const name = `${slug(section.title)}-${String(i).padStart(2, '0')}${extOf(url)}`;
      const dest = path.join(dir, name);
      const rel = path.relative(root, dest);
      if (existsSync(dest)) {
        rows.push({ section: section.title, name, rel, url, status: 'déjà présent' });
        ok += 1;
        continue;
      }
      try {
        const res = await fetch(url, { redirect: 'follow' });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = Buffer.from(await res.arrayBuffer());
        await writeFile(dest, buf);
        rows.push({ section: section.title, name, rel, url, status: 'OK' });
        ok += 1;
        console.log(`✓ ${rel}`);
      } catch (e) {
        rows.push({ section: section.title, name, rel, url, status: `ÉCHEC (${e.message})` });
        fail += 1;
        console.warn(`✗ ${rel} — ${e.message}`);
      }
    }
  }

  // Mapping lisible
  let doc = `# Mapping des photos\n\n`;
  doc += `> Généré par \`npm run fetch:images\`. Pour **remplacer une photo**, dépose ton\n`;
  doc += `> nouveau fichier au même emplacement avec **le même nom** — le site le reprend\n`;
  doc += `> automatiquement au prochain déploiement.\n\n`;
  let curSection = '';
  for (const r of rows) {
    if (r.section !== curSection) {
      curSection = r.section;
      doc += `\n## ${curSection}\n\n| Fichier | Statut | Source d'origine |\n|---|---|---|\n`;
    }
    doc += `| \`${r.rel}\` | ${r.status} | ${r.url} |\n`;
  }
  await writeFile(path.join(OUT, 'PHOTOS.md'), doc);

  console.log(`\n${ok} récupérées, ${fail} en échec. Mapping : src/assets/images/PHOTOS.md`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
