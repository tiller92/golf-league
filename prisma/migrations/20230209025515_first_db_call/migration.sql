/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Leagues" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Leagues_pkey" PRIMARY KEY ("id")
);
