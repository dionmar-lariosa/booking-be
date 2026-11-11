import type { FastifySchema } from "fastify";

export const createUserSchema: FastifySchema = {
  body: {
    type: "object",
    required: ["firstName", "lastName", "middleName", "email", "password"],
    additionalProperties: false,
    properties: {
      firstName: {
        type: "string",
        minLength: 2
      },
      lastName: {
        type: "string",
        minLength: 2
      },
      middleName: {
        type: "string"
      },
      email: {
        type: "string",
        format: "email"
      },
      password: {
        type: "string",
        minLength: 8
      }
    }
  }
};
