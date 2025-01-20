-- AddForeignKey
ALTER TABLE "Demandes" ADD CONSTRAINT "Demandes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
