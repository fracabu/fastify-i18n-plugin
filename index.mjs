// index.mjs
import fp from 'fastify-plugin';
import fs from 'fs/promises';

// Funzione per caricare una singola lingua
async function loadTranslation(lang, path) {
  try {
    const data = await fs.readFile(`${path}/${lang}.json`, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error loading translation for language: ${lang}`, err);
    return null; // Se la lingua non esiste
  }
}

async function i18nPlugin(fastify, options) {
  const path = options.translationsPath || './translations';

  // Decoriamo il fastify con una funzione per caricare le traduzioni al volo
  fastify.decorate('translate', async (lang, key) => {
    const translations = await loadTranslation(lang, path);
    if (translations && translations[key]) {
      return translations[key];
    }
    // Fallback se non trova la traduzione o la lingua
    const defaultLang = 'en';
    const defaultTranslations = await loadTranslation(defaultLang, path);
    return defaultTranslations && defaultTranslations[key] || key;
  });
}

export default fp(i18nPlugin, {
  name: 'fastify-i18n-plugin',
});
