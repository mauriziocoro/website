#!/usr/bin/env node
"use strict";

/**
 * Scarica il feed RSS degli articoli di Zeno2k su Nerdando.com e rigenera
 * assets/articles.json, usato da script.js per popolare la sezione
 * "Zeno2k scrive" della home page senza dover aggiornare l'HTML a mano.
 *
 * Uso: node scripts/update-articles.mjs
 */

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const FEED_URL = "https://nerdando.com/author/zeno2k/feed/";
const ARTICLE_COUNT = 4;
const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "assets",
  "articles.json"
);

// Il feed restituisce 403 senza uno User-Agent da browser.
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// La categoria principale del feed è in italiano; sul sito le etichette
// sono sempre mostrate in inglese, indipendentemente dalla lingua attiva.
const CATEGORY_LABELS = {
  "Videogames": "Videogames",
  "Fumetti & Libri": "Comics & Books",
  "Film & Serie TV": "Film & TV",
};

const NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(text) {
  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity) => {
    if (entity[0] === "#") {
      const code = entity[1] === "x" || entity[1] === "X"
        ? parseInt(entity.slice(2), 16)
        : parseInt(entity.slice(1), 10);
      return Number.isNaN(code) ? match : String.fromCodePoint(code);
    }
    return NAMED_ENTITIES[entity] ?? match;
  });
}

function extractTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!match) return "";
  return match[1].replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, "$1").trim();
}

function extractAllTags(xml, tag) {
  const matches = [...xml.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "g"))];
  return matches.map((m) => m[1].replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, "$1").trim());
}

async function fetchFeed() {
  const res = await fetch(FEED_URL, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/rss+xml, text/xml" },
  });
  if (!res.ok) {
    throw new Error(`Richiesta feed fallita: HTTP ${res.status}`);
  }
  return res.text();
}

function parseItems(xml) {
  const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);

  return itemBlocks.map((block) => {
    const title = decodeEntities(extractTag(block, "title"));
    const link = extractTag(block, "link");
    const pubDate = extractTag(block, "pubDate");
    const categories = extractAllTags(block, "category").map(decodeEntities);
    const primaryCategory = categories[0] || "";
    const tag = CATEGORY_LABELS[primaryCategory] || primaryCategory || "Nerdando";

    return {
      title,
      link,
      isoDate: new Date(pubDate).toISOString(),
      tag,
    };
  });
}

async function main() {
  const xml = await fetchFeed();
  const articles = parseItems(xml).slice(0, ARTICLE_COUNT);

  if (articles.length === 0) {
    throw new Error("Nessun articolo trovato nel feed, file non aggiornato.");
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(articles, null, 2) + "\n", "utf8");
  console.log(`Scritti ${articles.length} articoli in ${OUTPUT_PATH}`);
}

main().catch((err) => {
  console.error("Aggiornamento articoli fallito:", err.message);
  process.exitCode = 1;
});
