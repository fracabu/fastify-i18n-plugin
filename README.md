# 🌐 fastify-i18n-plugin

**fastify-i18n-plugin** è un plugin per [Fastify](https://www.fastify.io/) che aggiunge funzionalità di internazionalizzazione (i18n) dinamica al tuo progetto. Consente di caricare traduzioni da file JSON e di servire contenuti tradotti in base alla lingua dell'utente.

[![npm version](https://img.shields.io/npm/v/fastify-i18n-plugin.svg)](https://www.npmjs.com/package/fastify-i18n-plugin)

## 🚀 Installazione

Per installare il plugin, utilizza npm:

```bash
npm install fastify-i18n-plugin
```

## 🛠️ Utilizzo

Ecco un esempio di come registrare il plugin nel tuo progetto Fastify:

```javascript
import Fastify from 'fastify';
import i18nPlugin from 'fastify-i18n-plugin';

const fastify = Fastify({
  logger: true,
});

// Registra il plugin i18n
fastify.register(i18nPlugin, {
  defaultLocale: 'en',
  directory: './translations',
});

// Definisci alcune rotte
fastify.get('/:lang/greet', async (request, reply) => {
  const lang = request.params.lang;
  const greeting = request.i18n(lang).greeting;
  reply.send({ greeting });
});

// Avvia il server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server in ascolto su ${address}`);
});
```

## ✨ Caratteristiche

- **Traduzioni Dinamiche**: Carica traduzioni da file JSON in una directory specificata.
- **Cambio Lingua Basato sulle Rotte**: La lingua è determinata in base al parametro della rotta (`:lang`).
- **Caching per le Prestazioni**: Cache dei file di traduzione per migliorare le prestazioni.
- **Supporto Multilingue**: Aggiungi facilmente supporto per più lingue aggiungendo file di traduzione JSON.

## 📂 File di Traduzione

Puoi aggiungere file di traduzione nella cartella `translations` come segue:

```json
// translations/en.json
{
  "greeting": "Hello",
  "farewell": "Goodbye"
}
```

```json
// translations/it.json
{
  "greeting": "Ciao",
  "farewell": "Arrivederci"
}
```

## 🌍 Aggiungere Nuove Lingue

Per aggiungere il supporto a una nuova lingua, crea un nuovo file JSON nella directory `translations` e includi le traduzioni necessarie. Ad esempio, per aggiungere il francese:

```json
// translations/fr.json
{
  "greeting": "Bonjour",
  "farewell": "Au revoir"
}
```

## 🤝 Contributi

Se desideri contribuire o suggerire nuove funzionalità, sentiti libero di aprire una **pull request** o creare una **issue** sul [repository GitHub del progetto](https://github.com/fracabu/fastify-i18n-plugin).

## 📄 Licenza

Questo progetto è distribuito sotto la licenza **MIT**. Consulta il file [LICENSE](./LICENSE) per maggiori informazioni. 
