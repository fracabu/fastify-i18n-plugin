<h1 align="center">fastify-i18n-plugin</h1>
<h3 align="center">Dynamic internationalization for Fastify</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/fastify-i18n-plugin"><img src="https://img.shields.io/npm/v/fastify-i18n-plugin.svg" alt="npm version" /></a>
  <img src="https://img.shields.io/badge/Fastify-000000?style=flat-square&logo=fastify&logoColor=white" alt="Fastify" />
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" />
</p>

<p align="center">
  :gb: <a href="#english">English</a> | :it: <a href="#italiano">Italiano</a>
</p>

---

## Overview

<!-- ![fastify-i18n-plugin Overview](assets/i18n-overview.png) -->

---

<a name="english"></a>
## :gb: English

### Features

- **Dynamic Translations**: Load translations from JSON files
- **Route-Based Language**: Language determined by route parameter
- **Performance Caching**: Translation files are cached
- **Multi-Language Support**: Add languages by adding JSON files

### Install

```bash
npm install fastify-i18n-plugin
```

### Quick Start

```typescript
import Fastify from 'fastify'
import i18nPlugin from 'fastify-i18n-plugin'

const fastify = Fastify()

fastify.register(i18nPlugin, {
  defaultLocale: 'en',
  directory: './translations'
})

fastify.get('/:lang/greet', async (request, reply) => {
  const lang = request.params.lang
  const greeting = request.i18n(lang).greeting
  reply.send({ greeting })
})
```

### Translation Files

```json
// translations/en.json
{ "greeting": "Hello", "farewell": "Goodbye" }

// translations/it.json
{ "greeting": "Ciao", "farewell": "Arrivederci" }
```

---

<a name="italiano"></a>
## :it: Italiano

### Funzionalita

- **Traduzioni Dinamiche**: Carica traduzioni da file JSON
- **Lingua Basata su Route**: Lingua determinata dal parametro della rotta
- **Caching Prestazioni**: I file di traduzione sono in cache
- **Supporto Multilingue**: Aggiungi lingue aggiungendo file JSON

### Installazione

```bash
npm install fastify-i18n-plugin
```

### Quick Start

```typescript
import Fastify from 'fastify'
import i18nPlugin from 'fastify-i18n-plugin'

const fastify = Fastify()

fastify.register(i18nPlugin, {
  defaultLocale: 'en',
  directory: './translations'
})

fastify.get('/:lang/greet', async (request, reply) => {
  const lang = request.params.lang
  const greeting = request.i18n(lang).greeting
  reply.send({ greeting })
})
```

### Aggiungere Nuove Lingue

Crea un nuovo file JSON nella directory `translations`:

```json
// translations/fr.json
{ "greeting": "Bonjour", "farewell": "Au revoir" }
```

---

## License

MIT

---

<p align="center">
  <a href="https://github.com/fracabu">
    <img src="https://img.shields.io/badge/Made_by-fracabu-8B5CF6?style=flat-square" alt="Made by fracabu" />
  </a>
</p>
