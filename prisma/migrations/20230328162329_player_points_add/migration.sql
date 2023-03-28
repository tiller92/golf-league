/*
  Warnings:

  - You are about to drop the column `points` on the `Players` table. All the data in the column will be lost.
  - You are about to drop the column `scores` on the `Players` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Players" DROP COLUMN "points",
DROP COLUMN "scores",
ADD COLUMN     "playerPoints" INTEGER[],
ADD COLUMN     "playerScores" INTEGER[];
