# fastify-i18n-plugin

A **Fastify** plugin that adds dynamic internationalization (i18n) to your Fastify project. This plugin allows you to load translations dynamically from JSON files and serve translated content based on the user's locale.

## Installation

You can install the plugin via npm:

```bash
npm install fastify-i18n-plugin
```

## Usage

Here's an example of how to register the plugin in your Fastify project:

```js
import Fastify from 'fastify';
import i18nPlugin from 'fastify-i18n-plugin';

const fastify = Fastify({
  logger: true,
});

// Register the i18n plugin
fastify.register(i18nPlugin, {
  defaultLocale: 'en',
  directory: './translations',
});

// Define some routes
fastify.get('/:lang/greet', async (request, reply) => {
  const lang = request.params.lang;
  const greeting = request.i18n(lang).greeting;
  reply.send({ greeting });
});

// Start the server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
```

## Features

- **Dynamic Translations**: Load translations from JSON files in a specified directory.
- **Route-based Language Switching**: The language is determined based on the route parameter (`:lang`).
- **Caching for Performance**: Caching of translation files for improved performance.
- **Supports Multiple Languages**: Easily add support for multiple languages by adding JSON translation files.

### Example Route

The following route will respond with a greeting in the requested language:

- `GET /en/greet`: Responds with the greeting in English.
- `GET /it/greet`: Responds with the greeting in Italian.

### Example Response:

```json
{
  "greeting": "Hello"  // For English
}
```

Or:

```json
{
  "greeting": "Ciao"  // For Italian
}
```

### Translation Files

You can add translation files in the `translations` folder like this:

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

## Adding New Languages

To add support for a new language, simply create a new JSON file in the `translations` directory and include the necessary translations. For example, to add French:

```json
// translations/fr.json
{
  "greeting": "Bonjour",
  "farewell": "Au revoir"
}
```

## Contributing

If you would like to contribute or suggest new features, feel free to open a **pull request** or create an **issue** on the project's GitHub repository.

## License

This project is licensed under the **ISC License**.


