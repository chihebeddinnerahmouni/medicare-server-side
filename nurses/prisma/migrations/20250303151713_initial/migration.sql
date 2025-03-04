/*
  Warnings:

  - The values [cancelledByUser] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `cancelledByUser` on the `Counts` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Services` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Services` table. All the data in the column will be lost.
  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Providers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Specialties` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `patient` to the `Services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patientId` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('pending', 'inProgress', 'completed', 'cancelled', 'cancelledByPatient', 'cancelledByProviders', 'autoCancelled');
ALTER TABLE "Services" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Services" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Services" ALTER COLUMN "status" SET DEFAULT 'pending';
COMMIT;

-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_providerId_fkey";

-- DropForeignKey
ALTER TABLE "Providers" DROP CONSTRAINT "Providers_specialtyId_fkey";

-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_serviceTypeId_fkey";

-- AlterTable
ALTER TABLE "Counts" DROP COLUMN "cancelledByUser",
ADD COLUMN     "cancelledByPatient" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Services" DROP COLUMN "user",
DROP COLUMN "userId",
ADD COLUMN     "patient" JSONB NOT NULL,
ADD COLUMN     "patientId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Images";

-- DropTable
DROP TABLE "Providers";

-- DropTable
DROP TABLE "Specialties";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "HomeServices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeServices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HomeServices_name_key" ON "HomeServices"("name");

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "HomeServices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
