import * as z from "zod";

export const GetUserByIdParamsSchema = z.object({
  id: z.string().regex(/^\d+$/, "Id must be a number"),
});

export type GetUserByIdParamsRequest = z.infer<typeof GetUserByIdParamsSchema>;
