import { ENV } from "./scr/config/env.js";

export default {
schema: "./scr/db/schema.js",
out: "./scr/db/migrations",
dialect: "postgresql",
dbCredentials: { url: process.env.DATABASE_URL },
};