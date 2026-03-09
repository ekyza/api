import type { Request, Response, NextFunction } from "express";
import * as z from "zod";

import { HTTP_STATUS } from "../constants/http-status.js";

export const validateRequest = (schema: z.ZodType, target: "body" | "query" | "params" = "body") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      const message = result.error.issues[0]?.message;

      res.status(HTTP_STATUS.BAD_REQUEST).json({
        message,
      });

      return;
    }

    Object.assign(req[target], result.data);

    next();
  };
};
