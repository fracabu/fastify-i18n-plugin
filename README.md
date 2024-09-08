
# fastify-i18n-plugin

A Fastify plugin for dynamic internationalization (i18n) that supports real-time translation updates and validation tools. This plugin allows you to easily manage translations in multiple languages and load them dynamically to optimize performance in large-scale applications.

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

// Register the plugin
fastify.register(i18nPlugin, {
  translationsPath: './translations', // Path to the translations folder
});

// Add a route that uses the translation function
fastify.get('/:lang/greet', async (request, reply) => {
  const greeting = await fastify.translate(request.params.lang, 'greeting');
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

- **Dynamic Translation Loading**: Load translations only when requested, improving performance in large applications.
- **Real-Time Updates**: Update translations without restarting the server.
- **Translation Validation**: Validate translation files to ensure all keys are present and correctly structured.
- **Multi-language Support**: Easily add new languages by creating simple JSON files.

### Example Response:

```json
{
  "greeting": "Hello"
}
```

## Translation Validation

To ensure your translations are valid and complete, you can run the included validation tool:

```bash
npm run validate:translations
```

This tool will check for missing keys or misformatted JSON in your translation files.

## Directory Structure

Make sure your project structure looks like this:

```
fastify-i18n-plugin/
│
├── translations/
│   ├── en.json
│   ├── it.json
│   └── fr.json
├── index.mjs
├── server.mjs
├── validateTranslations.mjs
└── package.json
```

## Contributing

If you would like to contribute or suggest new features, feel free to open a **pull request** or create an **issue** on the project's GitHub repository.

## License

This project is licensed under the **ISC License**.


