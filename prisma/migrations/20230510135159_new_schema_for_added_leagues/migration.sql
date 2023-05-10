/*
  Warnings:

  - You are about to drop the column `playerPoints` on the `Players` table. All the data in the column will be lost.
  - You are about to drop the column `playerScores` on the `Players` table. All the data in the column will be lost.
  - Added the required column `teamId` to the `Players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Players" DROP COLUMN "playerPoints",
DROP COLUMN "playerScores",
ADD COLUMN     "teamId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Scores" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,

    CONSTRAINT "Scores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slope" DOUBLE PRECISION NOT NULL,
    "Rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);
