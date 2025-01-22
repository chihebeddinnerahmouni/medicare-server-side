/*
  Warnings:

  - You are about to drop the `Demanded` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Demanded";

-- CreateTable
CREATE TABLE "Demandes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userType" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,

    CONSTRAINT "Demandes_pkey" PRIMARY KEY ("id")
);
