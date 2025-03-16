/*
  Warnings:

  - Added the required column `date` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "hour" TEXT NOT NULL;
