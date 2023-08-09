-- AlterTable
ALTER TABLE "Players" ADD COLUMN     "image" INTEGER;

-- CreateTable
CREATE TABLE "ImagePlayers" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "file" BYTEA NOT NULL,

    CONSTRAINT "ImagePlayers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImagePlayers" ADD CONSTRAINT "ImagePlayers_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
