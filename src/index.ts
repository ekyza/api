import "dotenv/config";

import app from "./app.js";

import { log } from "./utils/logger.js";

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => {
  log.plain.info({ msg: `🚀 Server started on http://localhost:${PORT}`, env: process.env.NODE_ENV });
});

process.on("uncaughtException", (error) => {
  log.plain.error({ msg: "Uncaught Exception", error: error.message, stack: error.stack });
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  const error = err as Error;
  log.plain.error({ msg: "Unhandled Rejection", error: error.message, stack: error.stack });
});
