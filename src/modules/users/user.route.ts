import type { FastifyPluginAsync } from "fastify";
import { createUserSchema } from "./user.schema.js";
import UserService from "./user.service.js";

const userRoutes: FastifyPluginAsync = async (fastify) => {
  // GET /users
  fastify.get("/", async () => {
    return UserService.getUsers();
  });

  // GET /users/:id
  fastify.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const user = UserService.getUserById(request.params.id);

    // if (!user) {
    //   return reply.status(404).send({
    //     message: "User not found"
    //   });
    // }

    // return user;
  });

  // POST /users
  fastify.post("/", { schema: createUserSchema }, async (request, reply) => {
    const user = UserService.createUser(
      request.body as {
        firstName: string;
        lastName: string;
        middleName: string;
        email: string;
        password: string;
      }
    );

    return reply.status(201).send(user);
  });
};

export default userRoutes;
