-- CreateTable
CREATE TABLE "Demande" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "userType" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,

    CONSTRAINT "Demande_pkey" PRIMARY KEY ("id")
);
