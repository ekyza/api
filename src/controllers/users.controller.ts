import type { Request, Response } from "express";

import * as Service from "../services/users.service.js";
import * as Schema from "../schemas/users.schema.js";

import { HTTP_STATUS } from "../constants/http-status.js";

import { ApiError } from "../errors/api-error.js";

import { log } from "../utils/logger.js";

export async function getUsersController(req: Request, res: Response) {
  log.info({ msg: "users.controller.getAll: request received" });

  try {
    const result = await Service.getAll();

    log.info({ msg: "users.controller.getAll: response sent", count: result.length });
    res.status(HTTP_STATUS.OK).json({
      message: "Users retrieved successfully",
      data: result,
    });
  } catch (error) {
    log.error({ msg: "users.controller.getAll: unexpected error", error });
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
    });
  }
}

export async function getUserByIdController(req: Request<Schema.GetUserByIdParamsRequest>, res: Response) {
  const id = Number(req.params.id);

  log.info({ msg: "users.controller.getById: request received", id });

  try {
    const result = await Service.getById(id);

    log.info({ msg: "users.controller.getById: response sent", id });
    res.status(HTTP_STATUS.OK).json({
      message: "User retrieved successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof ApiError) {
      log.warn({ msg: "users.controller.getById: api error", statusCode: error.statusCode, message: error.message });
      res.status(error.statusCode).json({
        message: error.message,
      });

      return;
    }

    log.error({ msg: "users.controller.getById: unexpected error", error });
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error",
    });
  }
}
