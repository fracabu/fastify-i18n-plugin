// server.mjs
import Fastify from 'fastify';
import i18nPlugin from './index.mjs';

const fastify = Fastify({ logger: true });

fastify.register(i18nPlugin, {
  translationsPath: './translations', // Cartella dove vengono salvate le traduzioni
});

// Route che utilizza il caricamento asincrono
fastify.get('/:lang/greet', async (request, reply) => {
  const greeting = await fastify.translate(request.params.lang, 'greeting');
  reply.send({ greeting });
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server running at ${address}`);
});
