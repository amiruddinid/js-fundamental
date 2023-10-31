/*
  Warnings:

  - A unique constraint covering the columns `[account_number]` on the table `BankAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "source_account_number" INTEGER NOT NULL,
    "destination_account_number" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "transaction_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BankAccount_account_number_key" ON "BankAccount"("account_number");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_source_account_number_fkey" FOREIGN KEY ("source_account_number") REFERENCES "BankAccount"("account_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_destination_account_number_fkey" FOREIGN KEY ("destination_account_number") REFERENCES "BankAccount"("account_number") ON DELETE RESTRICT ON UPDATE CASCADE;
