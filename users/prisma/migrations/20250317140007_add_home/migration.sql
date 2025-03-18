-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'inProgress', 'completed', 'cancelled', 'cancelledByPatient', 'cancelledByProviders', 'autoCancelled');

-- CreateTable
CREATE TABLE "HomeServices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HomeServices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visites" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "address" TEXT,
    "description" TEXT NOT NULL,
    "patient" JSONB NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "hour" TEXT NOT NULL,
    "providers" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "status" "Status" NOT NULL DEFAULT 'pending',
    "providersId" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Visites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Counts" (
    "id" SERIAL NOT NULL,
    "completed" INTEGER NOT NULL DEFAULT 0,
    "pending" INTEGER NOT NULL DEFAULT 0,
    "inProgress" INTEGER NOT NULL DEFAULT 0,
    "cancelled" INTEGER NOT NULL DEFAULT 0,
    "cancelledByPatient" INTEGER NOT NULL DEFAULT 0,
    "cancelledByProviders" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Counts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HomeServices_name_key" ON "HomeServices"("name");

-- AddForeignKey
ALTER TABLE "Visites" ADD CONSTRAINT "Visites_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "HomeServices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
