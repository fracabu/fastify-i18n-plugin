import Fastify from 'fastify';
import i18nPlugin from './index.mjs';

const fastify = Fastify({ logger: true });

// Registra il plugin i18n e definisci il percorso delle traduzioni
fastify.register(i18nPlugin, {
  translationsPath: './translations' // Percorso alla cartella delle traduzioni
});

// Definisci una route per testare le traduzioni
fastify.get('/:lang/greet', async (request, reply) => {
  const greeting = await fastify.translate(request.params.lang, 'greeting');
  reply.send({ greeting });
});

// Avvia il server solo quando non è in modalità di test
if (process.env.NODE_ENV !== 'test') {
  fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`Server running at ${address}`);
  });
}
