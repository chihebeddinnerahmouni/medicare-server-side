/*
  Warnings:

  - Added the required column `status` to the `Demandes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Demandes" ADD COLUMN     "status" TEXT NOT NULL;
