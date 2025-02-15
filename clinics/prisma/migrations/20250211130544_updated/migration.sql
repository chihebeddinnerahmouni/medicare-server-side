/*
  Warnings:

  - The primary key for the `PricingServices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `serviceId` on the `PricingServices` table. All the data in the column will be lost.
  - You are about to drop the `_CabinetToServices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PricingServices` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `specialityId` to the `Cabinet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PricingServices" DROP CONSTRAINT "PricingServices_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "_CabinetToServices" DROP CONSTRAINT "_CabinetToServices_A_fkey";

-- DropForeignKey
ALTER TABLE "_CabinetToServices" DROP CONSTRAINT "_CabinetToServices_B_fkey";

-- DropForeignKey
ALTER TABLE "_PricingServices" DROP CONSTRAINT "_PricingServices_A_fkey";

-- DropForeignKey
ALTER TABLE "_PricingServices" DROP CONSTRAINT "_PricingServices_B_fkey";

-- AlterTable
ALTER TABLE "Cabinet" ADD COLUMN     "daysOff" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ADD COLUMN     "specialityId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PricingServices" DROP CONSTRAINT "PricingServices_pkey",
DROP COLUMN "serviceId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PricingServices_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "_CabinetToServices";

-- DropTable
DROP TABLE "_PricingServices";

-- CreateTable
CREATE TABLE "specialities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "specialities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonPricingServices" (
    "id" SERIAL NOT NULL,
    "cabinetId" INTEGER NOT NULL,
    "service_name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NonPricingServices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cabinet" ADD CONSTRAINT "Cabinet_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "specialities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NonPricingServices" ADD CONSTRAINT "NonPricingServices_cabinetId_fkey" FOREIGN KEY ("cabinetId") REFERENCES "Cabinet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
