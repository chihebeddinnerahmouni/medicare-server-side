/*
  Warnings:

  - You are about to drop the `CabinetServices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CabinetServices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CabinetServices" DROP CONSTRAINT "CabinetServices_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "CabinetServices" DROP CONSTRAINT "CabinetServices_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "_CabinetServices" DROP CONSTRAINT "_CabinetServices_A_fkey";

-- DropForeignKey
ALTER TABLE "_CabinetServices" DROP CONSTRAINT "_CabinetServices_B_fkey";

-- DropTable
DROP TABLE "CabinetServices";

-- DropTable
DROP TABLE "_CabinetServices";

-- CreateTable
CREATE TABLE "PricingServices" (
    "cabinetId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "service_name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PricingServices_pkey" PRIMARY KEY ("cabinetId","serviceId")
);

-- CreateTable
CREATE TABLE "_PricingServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PricingServices_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PricingServices_B_index" ON "_PricingServices"("B");

-- AddForeignKey
ALTER TABLE "PricingServices" ADD CONSTRAINT "PricingServices_cabinetId_fkey" FOREIGN KEY ("cabinetId") REFERENCES "Cabinet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingServices" ADD CONSTRAINT "PricingServices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PricingServices" ADD CONSTRAINT "_PricingServices_A_fkey" FOREIGN KEY ("A") REFERENCES "Cabinet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PricingServices" ADD CONSTRAINT "_PricingServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
