/*
  Warnings:

  - You are about to drop the `Demande` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Demande";

-- CreateTable
CREATE TABLE "Demanded" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userType" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,

    CONSTRAINT "Demanded_pkey" PRIMARY KEY ("id")
);
