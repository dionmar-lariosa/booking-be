import type { FastifyPluginAsync } from 'fastify';
import healthRoute from './health/health.route.js';

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(healthRoute, {
    prefix: '/health',
  });
};

export default routes;