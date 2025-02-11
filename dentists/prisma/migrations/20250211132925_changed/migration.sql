/*
  Warnings:

  - You are about to drop the column `cabinetId` on the `Images` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `NonPricingServices` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `PricingServices` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `Reviews` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `availabilities` table. All the data in the column will be lost.
  - You are about to drop the `Cabinet` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dentistId` to the `Images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dentistId` to the `NonPricingServices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dentistId` to the `PricingServices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dentistId` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dentistId` to the `availabilities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "NonPricingServices" DROP CONSTRAINT "NonPricingServices_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "PricingServices" DROP CONSTRAINT "PricingServices_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "availabilities" DROP CONSTRAINT "availabilities_cabinetId_fkey";

-- AlterTable
ALTER TABLE "Images" DROP COLUMN "cabinetId",
ADD COLUMN     "dentistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "NonPricingServices" DROP COLUMN "cabinetId",
ADD COLUMN     "dentistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PricingServices" DROP COLUMN "cabinetId",
ADD COLUMN     "dentistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "cabinetId",
ADD COLUMN     "dentistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "availabilities" DROP COLUMN "cabinetId",
ADD COLUMN     "dentistId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Cabinet";

-- CreateTable
CREATE TABLE "Dentists" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "totalViews" INTEGER NOT NULL DEFAULT 0,
    "totalRate" INTEGER NOT NULL DEFAULT 0,
    "numberOfRates" INTEGER NOT NULL DEFAULT 0,
    "averageRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "ownerId" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "validated" BOOLEAN NOT NULL,
    "blocked" BOOLEAN NOT NULL,
    "rates" JSONB NOT NULL,
    "openTime" TEXT NOT NULL,
    "closeTime" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "daysOff" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "reviewsCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dentists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_dentistId_fkey" FOREIGN KEY ("dentistId") REFERENCES "Dentists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availabilities" ADD CONSTRAINT "availabilities_dentistId_fkey" FOREIGN KEY ("dentistId") REFERENCES "Dentists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_dentistId_fkey" FOREIGN KEY ("dentistId") REFERENCES "Dentists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingServices" ADD CONSTRAINT "PricingServices_dentistId_fkey" FOREIGN KEY ("dentistId") REFERENCES "Dentists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonPricingServices" ADD CONSTRAINT "NonPricingServices_dentistId_fkey" FOREIGN KEY ("dentistId") REFERENCES "Dentists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
