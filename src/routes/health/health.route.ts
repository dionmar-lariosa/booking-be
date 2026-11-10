import type { FastifyPluginAsync } from "fastify";
import { db } from "../../config/database.js";

const healthRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get("/", async (_request, reply) => {
    try {
      await db.query("SELECT 1");

      return {
        status: "ok",
        message: "API and database are running",
        database: "connected",
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      fastify.log.error(error);

      return reply.status(503).send({
        status: "error",
        database: "disconnected",
        timestamp: new Date().toISOString(),
        message: error
      });
    }
  });
};

export default healthRoute;
