// search for players with team id and check to make sure the league is the rigth leagus players can be in more then one league
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import type { NextApiRequest, NextApiResponse } from 'next'

async function main(req: NextApiRequest,res: NextApiResponse) {
  console.log(req.query)
  //TODO: create function taht checks the current league to makes sure you are pulling the right team
  const currentLeagueId = req.query.leagueId
  console.log(currentLeagueId, 'currentLeagueId')
  if (req.query.teamid !=  undefined) {
    console.log(req.query.teamid)
    const id = JSON.parse(req.query.teamid)
    const result: any = await prisma.players.findMany({
      where: {
        teamId: id,
      },
      include: {
        Scores: true,
      },
   })
    return result
  }
}

  export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      let players = await main(req,res)
      res.status(200).json({
        'players' : players,
        'status': res.statusCode
      })
    }catch (err){
      res.status(500).json({"message": err.message})
    }
  }