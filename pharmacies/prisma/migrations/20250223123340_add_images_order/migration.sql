/*
  Warnings:

  - Added the required column `order` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "order" INTEGER NOT NULL;
