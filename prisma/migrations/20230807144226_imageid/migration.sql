/*
  Warnings:

  - You are about to drop the column `image` on the `Players` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Players" DROP COLUMN "image",
ADD COLUMN     "imageId" INTEGER;
