import * as Repository from "../repositories/users.repository.js";

import { HTTP_STATUS } from "../constants/http-status.js";

import { ApiError } from "../errors/api-error.js";

import { log } from "../utils/logger.js";

export async function getAll() {
  log.debug({ msg: "users.service.getAll: fetching all users" });
  const users = await Repository.findAll();

  log.info({ msg: "users.service.getAll: users fetched", count: users.length });
  return users;
}

export async function getById(id: number) {
  log.debug({ msg: "users.service.getById: finding user", id });
  const user = await Repository.findById(id);

  if (!user) {
    log.warn({ msg: "users.service.getById: user not found", id });
    throw new ApiError("User not found", HTTP_STATUS.NOT_FOUND);
  }

  log.info({ msg: "users.service.getById: user found", id });
  return user;
}
