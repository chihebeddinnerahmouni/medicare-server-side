/*
  Warnings:

  - You are about to drop the column `patient` on the `Visites` table. All the data in the column will be lost.
  - You are about to drop the column `patientId` on the `Visites` table. All the data in the column will be lost.
  - You are about to drop the column `providers` on the `Visites` table. All the data in the column will be lost.
  - You are about to drop the column `providersId` on the `Visites` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Visites` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visites" DROP COLUMN "patient",
DROP COLUMN "patientId",
DROP COLUMN "providers",
DROP COLUMN "providersId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_VisiteProviders" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_VisiteProviders_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_VisiteProviders_B_index" ON "_VisiteProviders"("B");

-- AddForeignKey
ALTER TABLE "Visites" ADD CONSTRAINT "Visites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VisiteProviders" ADD CONSTRAINT "_VisiteProviders_A_fkey" FOREIGN KEY ("A") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VisiteProviders" ADD CONSTRAINT "_VisiteProviders_B_fkey" FOREIGN KEY ("B") REFERENCES "Visites"("id") ON DELETE CASCADE ON UPDATE CASCADE;
