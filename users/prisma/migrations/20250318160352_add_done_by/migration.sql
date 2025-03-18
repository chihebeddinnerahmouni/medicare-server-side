/*
  Warnings:

  - The values [cancelled] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('pending', 'inProgress', 'completed', 'cancelledByPatient', 'cancelledByProviders', 'autoCancelled');
ALTER TABLE "Visites" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Visites" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Visites" ALTER COLUMN "status" SET DEFAULT 'pending';
COMMIT;

-- AlterTable
ALTER TABLE "Visites" ADD COLUMN     "doneByProvider" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "doneByUser" BOOLEAN NOT NULL DEFAULT false;
