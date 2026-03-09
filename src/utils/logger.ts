import pino from "pino";

import { getRequestId } from "./request-context.js";

export const isDev = process.env.NODE_ENV !== "production";

const _log = pino({
  level: isDev ? "debug" : "info",
  transport: isDev
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
          ignore: "pid,hostname",
          levelFirst: true,
        },
      }
    : undefined,
});

const createLogger = (level: "debug" | "info" | "warn" | "error") => {
  return (data: Record<string, unknown>) => {
    _log[level]({ reqId: getRequestId(), ...data });
  };
};

const createPlainLogger = (level: "debug" | "info" | "warn" | "error") => {
  return (data: Record<string, unknown>) => {
    _log[level]({ ...data });
  };
};

export const log = {
  debug: createLogger("debug"),
  info: createLogger("info"),
  warn: createLogger("warn"),
  error: createLogger("error"),
  plain: {
    debug: createPlainLogger("debug"),
    info: createPlainLogger("info"),
    warn: createPlainLogger("warn"),
    error: createPlainLogger("error"),
  },
};
