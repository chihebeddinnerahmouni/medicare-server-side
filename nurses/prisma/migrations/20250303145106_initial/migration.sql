/*
  Warnings:

  - You are about to drop the `Nurses` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'inProgress', 'completed', 'cancelled', 'cancelledByUser', 'cancelledByProviders', 'autoCancelled');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('nurse', 'doctor');

-- DropTable
DROP TABLE "Nurses";

-- CreateTable
CREATE TABLE "Specialties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Specialties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "serviceTypeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "providersId" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "user" JSONB NOT NULL,
    "providers" JSONB[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Providers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "specialtyId" INTEGER NOT NULL,
    "role" "Role" NOT NULL,
    "serviceCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Counts" (
    "id" SERIAL NOT NULL,
    "completed" INTEGER NOT NULL DEFAULT 0,
    "pending" INTEGER NOT NULL DEFAULT 0,
    "inProgress" INTEGER NOT NULL DEFAULT 0,
    "cancelled" INTEGER NOT NULL DEFAULT 0,
    "cancelledByUser" INTEGER NOT NULL DEFAULT 0,
    "cancelledByProviders" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Counts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialties_name_key" ON "Specialties"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Providers_email_key" ON "Providers"("email");

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_serviceTypeId_fkey" FOREIGN KEY ("serviceTypeId") REFERENCES "Specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Providers" ADD CONSTRAINT "Providers_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "Specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
