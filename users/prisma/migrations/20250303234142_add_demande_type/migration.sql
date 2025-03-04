/*
  Warnings:

  - Added the required column `type` to the `Demandes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "demandeType" AS ENUM ('doc', 'pha', 'cli', 'den', 'dom');

-- AlterTable
ALTER TABLE "Demandes" ADD COLUMN     "type" "demandeType" NOT NULL;
