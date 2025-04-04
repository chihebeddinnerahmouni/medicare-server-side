-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "providerWorking" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "_HomeServiceProviders" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_HomeServiceProviders_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_HomeServiceProviders_B_index" ON "_HomeServiceProviders"("B");

-- AddForeignKey
ALTER TABLE "_HomeServiceProviders" ADD CONSTRAINT "_HomeServiceProviders_A_fkey" FOREIGN KEY ("A") REFERENCES "HomeServices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HomeServiceProviders" ADD CONSTRAINT "_HomeServiceProviders_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
