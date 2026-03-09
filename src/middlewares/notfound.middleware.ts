import type { Request, Response } from "express";

import { HTTP_STATUS } from "../constants/http-status.js";

export async function routeNotFoundHandler(req: Request, res: Response) {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    message: `This endpoint was not found: ${req.path}`,
  });
}
