/*
  Warnings:

  - Added the required column `service_name` to the `CabinetServices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CabinetServices" ADD COLUMN     "service_name" TEXT NOT NULL;
