import { tags } from "./tags.js";
import { usersPaths } from "./users.path.js";
import { components } from "./compenents.js";

export const openApiSpec = {
  openapi: "3.0.0",
  info: {
    title: "API",
    version: "1.0.0",
    description: "API reference for all available endpoints.",
  },
  tags,
  paths: {
    ...usersPaths,
  },
  components,
};
