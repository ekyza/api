import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

import { HttpStatus } from "../utils/httpStatus";

export const validateRequest = (schema: ZodSchema, target: "body" | "query" | "params" = "body") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[target]);

    if (!result.success) {
      const message = result.error.issues[0]?.message;

      res.status(HttpStatus.BAD_REQUEST).json({
        message,
      });

      return;
    }

    Object.assign(req[target], result.data);

    next();
  };
};
