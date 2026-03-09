import { HTTP_STATUS } from "../constants/http-status.js";

export class ApiError extends Error {
  constructor(
    public override readonly message: string,
    public readonly statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR,
  ) {
    super(message);
    this.name = "ApiError";
  }
}
