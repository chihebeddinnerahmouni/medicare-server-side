-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'cancelledByAdmin';

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "providerDescription" TEXT DEFAULT '';
