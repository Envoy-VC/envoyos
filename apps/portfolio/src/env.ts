import { createEnv } from "@t3-oss/env-nextjs";
import { Schema } from "effect";

export const env = createEnv({
  client: {},
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
  server: {
    NODE_ENV: Schema.standardSchemaV1(
      Schema.Literal("development", "production", "staging"),
    ),
  },
  skipValidation: Boolean(process.env.SKIP_ENV_VALIDATION),
});
