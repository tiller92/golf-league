//api route for team home page should load players and scores
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import type { NextApiRequest, NextApiResponse } from 'next'

async function main(req: NextApiRequest,res: NextApiResponse) {
  if (req.query.teamId && req.query.leagueId !=  undefined) {
    const teamId = JSON.parse(req.query.teamId)
    const leagueId = JSON.parse(req.query.leagueId)
    console.log(teamId, "teamId", leagueId, "leagueID")
    const result: any = await prisma.teams.findUnique({
      where: {
        id: teamId,
      },
   })
   console.log(result)
    return result
  }
}

  export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      let team = await main(req,res)
      res.status(200).json({
        status: res.statusCode,
        'team' : team
      })
    }catch (err){
      res.status(500).json({"message": err.status, "message": err.message})
    }
  }
