/*
  Warnings:

  - You are about to drop the column `from` on the `availabilities` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `availabilities` table. All the data in the column will be lost.
  - Added the required column `price` to the `CabinetServices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date` to the `availabilities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `availabilities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CabinetServices" ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "availabilities" DROP COLUMN "from",
DROP COLUMN "to",
ADD COLUMN     "end_date" TEXT NOT NULL,
ADD COLUMN     "start_date" TEXT NOT NULL;
