import type { FastifySchema } from 'fastify';

export const createUserSchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['name', 'email', 'role'],
    additionalProperties: false,
    properties: {
      name: {
        type: 'string',
        minLength: 2,
      },
      email: {
        type: 'string',
        format: 'email',
      },
      role: {
        type: 'string',
        enum: ['admin', 'manager', 'employee', 'customer'],
      },
    },
  },
};