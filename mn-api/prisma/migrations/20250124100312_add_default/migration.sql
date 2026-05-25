/*
  Warnings:

  - Made the column `is_premium` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_new_user` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "is_premium" SET NOT NULL,
ALTER COLUMN "is_premium" SET DEFAULT false,
ALTER COLUMN "is_new_user" SET NOT NULL,
ALTER COLUMN "is_new_user" SET DEFAULT true;
