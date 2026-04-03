/*
  Warnings:

  - Added the required column `date_created` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_created_origin` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_created_origin" TIMESTAMP(3) NOT NULL;
