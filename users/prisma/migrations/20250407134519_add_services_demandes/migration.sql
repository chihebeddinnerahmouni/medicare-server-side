-- CreateEnum
CREATE TYPE "serviceDemandeStatus" AS ENUM ('pending', 'accepted', 'refused');

-- CreateTable
CREATE TABLE "servicesDemandes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "status" "serviceDemandeStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "servicesDemandes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ServiceDemandes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ServiceDemandes_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ServiceDemandes_B_index" ON "_ServiceDemandes"("B");

-- AddForeignKey
ALTER TABLE "servicesDemandes" ADD CONSTRAINT "servicesDemandes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDemandes" ADD CONSTRAINT "_ServiceDemandes_A_fkey" FOREIGN KEY ("A") REFERENCES "HomeServices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServiceDemandes" ADD CONSTRAINT "_ServiceDemandes_B_fkey" FOREIGN KEY ("B") REFERENCES "servicesDemandes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
