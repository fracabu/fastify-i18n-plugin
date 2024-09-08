
import fs from 'fs/promises';

async function validateTranslations(path) {
    const defaultLang = 'en';
    const defaultTranslations = await loadTranslation(defaultLang, path);

    if (!defaultTranslations) {
        console.error('Errore: Non è possibile caricare le traduzioni per la lingua predefinita');
        return;
    }

    const languages = ['en', 'it', 'fr']; // Aggiungi qui le lingue supportate
    for (const lang of languages) {
        if (lang !== defaultLang) {
            const translations = await loadTranslation(lang, path);
            if (!translations) {
                console.error(`Errore: Non è possibile caricare le traduzioni per la lingua ${lang}`);
                continue;
            }

            // Confronta chiavi tra la lingua attuale e quella predefinita
            for (const key in defaultTranslations) {
                if (!(key in translations)) {
                    console.warn(`Avviso: Chiave mancante "${key}" nella lingua ${lang}`);
                }
            }
        }
    }
}

async function loadTranslation(lang, path) {
    try {
        const data = await fs.readFile(`${path}/${lang}.json`, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error(`Errore nel caricamento della lingua: ${lang}`, err);
        return null;
    }
}

// Percorso alle traduzioni
const path = './translations';
validateTranslations(path);
