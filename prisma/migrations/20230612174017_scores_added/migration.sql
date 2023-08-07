-- AddForeignKey
ALTER TABLE "Scores" ADD CONSTRAINT "Scores_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
