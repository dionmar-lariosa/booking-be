import type { FastifyPluginAsync } from "fastify";

import { getUsers, getUserById, createUser } from "./user.service.js";

import { createUserSchema } from "./user.schema.js";

const userRoutes: FastifyPluginAsync = async (fastify) => {
  // GET /users
  fastify.get("/", async () => {
    return getUsers();
  });

  // GET /users/:id
  fastify.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const user = getUserById(Number(request.params.id));

    if (!user) {
      return reply.status(404).send({
        message: "User not found"
      });
    }

    return user;
  });

  // POST /users
  fastify.post("/", { schema: createUserSchema }, async (request, reply) => {
    const user = createUser(
      request.body as {
        name: string;
        email: string;
        role: "admin" | "manager" | "employee" | "customer";
      }
    );

    return reply.status(201).send(user);
  });
};

export default userRoutes;
