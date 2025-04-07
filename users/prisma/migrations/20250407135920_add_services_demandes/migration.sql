/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `servicesDemandes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "servicesDemandes_userId_key" ON "servicesDemandes"("userId");
