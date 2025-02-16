// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../generated/clinics-client";

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