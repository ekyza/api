import type { Request, Response, NextFunction } from "express";
import { randomUUID } from "crypto";

import { log } from "../utils/logger.js";
import { requestContext } from "../utils/request-context.js";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const reqId = (req.headers["x-request-id"] as string) ?? randomUUID();
  const start = Date.now();
  const { method, url, ip } = req;
  const userAgent = req.headers["user-agent"] ?? "unknown";

  req.headers["x-request-id"] = reqId;

  requestContext.run({ requestId: reqId }, () => {
    log.info({ msg: "Incoming Request", method, url, ip, userAgent });

    res.on("finish", () => {
      const duration = Date.now() - start;
      const status = res.statusCode;

      if (status >= 500) {
        log.error({ msg: "Server Error", method, url, status, duration: `${duration}ms` });
      } else if (status >= 400) {
        log.warn({ msg: "Client Error", method, url, status, duration: `${duration}ms` });
      } else {
        log.info({ msg: "Request Completed", method, url, status, duration: `${duration}ms` });
      }
    });

    next();
  });
}
