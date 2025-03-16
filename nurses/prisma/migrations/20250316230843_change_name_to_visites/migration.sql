/*
  Warnings:

  - You are about to drop the `Services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_serviceTypeId_fkey";

-- DropTable
DROP TABLE "Services";

-- CreateTable
CREATE TABLE "Visites" (
    "id" SERIAL NOT NULL,
    "serviceTypeId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "patient" JSONB NOT NULL,
    "providers" JSONB[],
    "date" TIMESTAMP(3) NOT NULL,
    "hour" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "providersId" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Visites_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Visites" ADD CONSTRAINT "Visites_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "HomeServices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
