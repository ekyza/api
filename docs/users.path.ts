export const usersPaths = {
  "/api/v1/users": {
    get: {
      tags: ["Users"],
      summary: "Get all users",
      responses: {
        200: { description: "Returns a list of all users" },
        500: { description: "Internal server error" },
      },
    },
  },

  "/api/v1/users/{id}": {
    get: {
      tags: ["Users"],
      summary: "Get user by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Returns the user with the specified ID" },
        404: { description: "User not found" },
        500: { description: "Internal server error" },
      },
    },
  },
};
