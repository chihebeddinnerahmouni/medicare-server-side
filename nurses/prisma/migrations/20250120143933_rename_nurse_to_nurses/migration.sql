/*
  Warnings:

  - You are about to drop the `Nurse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Nurse";

-- CreateTable
CREATE TABLE "Nurses" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nurses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Nurses_email_key" ON "Nurses"("email");
