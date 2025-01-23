/*
  Warnings:

  - You are about to drop the column `speciality` on the `Cabinet` table. All the data in the column will be lost.
  - Added the required column `specialityId` to the `Cabinet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cabinet" DROP COLUMN "speciality",
ADD COLUMN     "specialityId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "specialities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "specialities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cabinet" ADD CONSTRAINT "Cabinet_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "specialities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
