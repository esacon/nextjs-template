import { createEnv } from "@t3-oss/env-nextjs"
import { z, type ZodError } from "zod"

export const env = createEnv({
    client: {
        NEXT_PUBLIC_APP_URL: z.string().min(1),
        NEXT_PUBLIC_APP_NAME: z.string().min(1),
    },
    server: {
        APP_PORT: z.string().min(1).default("3001"),
        AUTH_SECRET: z.string().min(1),
        API_URL: z.string().min(1),
    },
    runtimeEnv: {
        // Server-side variables
        API_URL: process.env.API_URL,
        APP_PORT: process.env.PORT,
        AUTH_SECRET: process.env.AUTH_SECRET,
        // Client-side variables
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    },
    // Called when the schema validation fails.
    onValidationError: (error: ZodError) => {
        console.error(
            "❌ Invalid environment variables:",
            error.flatten().fieldErrors
        )
        throw new Error("Invalid environment variables")
    },
    // Called when server variables are accessed on the client.
    onInvalidAccess: () => {
        throw new Error(
            "❌ Attempted to access a server-side environment variable on the client"
        )
    },
})
