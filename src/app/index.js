import { sendEmail } from "../functions/send.email.js"

/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { status: new Date()}
  })

  fastify.post('/send', async (request, reply) => {
    console.clear()
    await sendEmail(JSON.parse(request.body))
    return {status: 'ok'}
  })
}

export { routes }