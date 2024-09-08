import Fastify from 'fastify';
import tap from 'tap';
import i18nPlugin from '../index.mjs';

tap.test('Fastify i18n Plugin - Should return correct translation', async t => {
  const fastify = Fastify();

  // Registra il plugin
  fastify.register(i18nPlugin, {
    translationsPath: './translations'
  });

  // Registra la route
  fastify.get('/:lang/greet', async (request, reply) => {
    const greeting = await fastify.translate(request.params.lang, 'greeting');
    reply.send({ greeting });
  });

  // Aspetta che il server sia pronto
  await fastify.ready();

  // Test traduzione in inglese
  const responseEn = await fastify.inject({
    method: 'GET',
    url: '/en/greet'
  });

  t.equal(responseEn.statusCode, 200, 'English route should return 200');
  t.same(JSON.parse(responseEn.payload), { greeting: 'Hello' }, 'English greeting should be correct');

  // Test traduzione in italiano
  const responseIt = await fastify.inject({
    method: 'GET',
    url: '/it/greet'
  });

  t.equal(responseIt.statusCode, 200, 'Italian route should return 200');
  t.same(JSON.parse(responseIt.payload), { greeting: 'Ciao' }, 'Italian greeting should be correct');

  t.end();
});
