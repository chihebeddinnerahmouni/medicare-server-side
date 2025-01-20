// import { Pool } from "pg";
// import dotenv from "dotenv";

// dotenv.config();
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// });

// pool.on("connect", () => {
//     console.log("Connected to the database");
// });

// export const query = (text: string, params?: any[]) => pool.query(text, params);

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

export { prisma };