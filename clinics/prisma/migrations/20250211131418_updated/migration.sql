/*
  Warnings:

  - You are about to drop the column `specialityId` on the `Cabinet` table. All the data in the column will be lost.
  - You are about to drop the `specialities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cabinet" DROP CONSTRAINT "Cabinet_specialityId_fkey";

-- AlterTable
ALTER TABLE "Cabinet" DROP COLUMN "specialityId";

-- DropTable
DROP TABLE "specialities";
