import type { FastifyPluginAsync } from 'fastify';
import healthRoute from './health/health.route.js';
import userRoutes from '../modules/users/user.route.js';

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(healthRoute, {
    prefix: '/health',
  });
  fastify.register(userRoutes, {
    prefix: '/users',
  });
};

export default routes;