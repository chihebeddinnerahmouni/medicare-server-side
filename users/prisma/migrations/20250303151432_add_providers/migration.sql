/*
  Warnings:

  - The `role` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'provider', 'user');

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE "ProviderImages" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "providerId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProviderImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProviderImages" ADD CONSTRAINT "ProviderImages_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
