/*
  Warnings:

  - Made the column `cast` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `location` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dob` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "cast" SET NOT NULL,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "dob" SET NOT NULL;
