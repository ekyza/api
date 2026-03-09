import express from "express";

import * as ValidatorMiddleware from "../middlewares/validator.middleware.js";
import * as Controller from "../controllers/users.controller.js";
import * as Schema from "../schemas/users.schema.js";

const router = express.Router();

router.get("/users", Controller.getUsersController);
router.get("/users/:id", ValidatorMiddleware.validateRequest(Schema.GetUserByIdParamsSchema, "params"), Controller.getUserByIdController);

export default router;
