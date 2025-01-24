-- CreateTable
CREATE TABLE "_CabinetToServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CabinetToServices_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CabinetToServices_B_index" ON "_CabinetToServices"("B");

-- AddForeignKey
ALTER TABLE "_CabinetToServices" ADD CONSTRAINT "_CabinetToServices_A_fkey" FOREIGN KEY ("A") REFERENCES "Cabinet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CabinetToServices" ADD CONSTRAINT "_CabinetToServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
