/*
  Warnings:

  - Added the required column `demandeId` to the `Documents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Documents" ADD COLUMN     "demandeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_demandeId_fkey" FOREIGN KEY ("demandeId") REFERENCES "Demandes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
