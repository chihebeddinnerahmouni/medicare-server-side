-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "providerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Providers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
