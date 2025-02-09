/*
  Warnings:

  - The primary key for the `PricingServices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `serviceId` on the `PricingServices` table. All the data in the column will be lost.
  - You are about to drop the `_CabinetToServices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PricingServices" DROP CONSTRAINT "PricingServices_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "_CabinetToServices" DROP CONSTRAINT "_CabinetToServices_A_fkey";

-- DropForeignKey
ALTER TABLE "_CabinetToServices" DROP CONSTRAINT "_CabinetToServices_B_fkey";

-- AlterTable
ALTER TABLE "PricingServices" DROP CONSTRAINT "PricingServices_pkey",
DROP COLUMN "serviceId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PricingServices_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "_CabinetToServices";

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
ALTER TABLE "NonPricingServices" ADD CONSTRAINT "NonPricingServices_cabinetId_fkey" FOREIGN KEY ("cabinetId") REFERENCES "Cabinet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
