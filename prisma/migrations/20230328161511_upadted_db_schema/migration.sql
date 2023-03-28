-- CreateTable
CREATE TABLE "Teams" (
    "id" SERIAL NOT NULL,
    "leagueId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "players" INTEGER[],
    "scores" INTEGER[],

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "handicap" INTEGER NOT NULL,
    "scores" INTEGER NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Teams" ADD CONSTRAINT "Teams_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "Leagues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
