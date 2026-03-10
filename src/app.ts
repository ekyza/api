import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import swaggerUi from "swagger-ui-express";
import { toNodeHandler } from "better-auth/node";

import * as LoggerMiddleware from "./middlewares/logger.middleware.js";
import * as NotFoundMiddleware from "./middlewares/notfound.middleware.js";

import UsersRoute from "./routes/users.route.js";

import { auth } from "./utils/auth.js";

import { openApiSpec } from "../docs/openApi.js";

const app = express();
const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression());
app.use(express.static("public"));

app.use(LoggerMiddleware.requestLogger);

app.use("/api", UsersRoute);
if (process.env.NODE_ENV === "development") {
  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(openApiSpec, {
      customCssUrl: "/swagger.css",
    }),
  );
}

app.use(NotFoundMiddleware.routeNotFoundHandler);

export default app;
