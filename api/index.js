"use strict";

import Fastify from "fastify";
import {routes} from "../src/app/index.js";
import cors from '@fastify/cors'
/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const app = Fastify({
  logger: false,
});


app.register(cors, {
  origin: '*',
})

app.register(routes);

export default async (req, res) => {
  await app.ready();
  app.server.emit('request', req, res);
}