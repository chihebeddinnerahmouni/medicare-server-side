/*
  Warnings:

  - Added the required column `description` to the `HomeServices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `HomeServices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HomeServices" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
