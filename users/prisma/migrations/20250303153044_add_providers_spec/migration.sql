/*
  Warnings:

  - You are about to drop the `ProviderImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ProviderType" AS ENUM ('nurse', 'doctor');

-- DropForeignKey
ALTER TABLE "ProviderImages" DROP CONSTRAINT "ProviderImages_providerId_fkey";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "providerSpeciality" TEXT,
ADD COLUMN     "providerType" "ProviderType";

-- DropTable
DROP TABLE "ProviderImages";
