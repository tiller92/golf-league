// search for players with team id
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import type { NextApiRequest, NextApiResponse } from 'next'

async function main(req: NextApiRequest,res: NextApiResponse) {
  console.log(req.query.teamid)
  if (req.query.teamid !=  undefined) {
    const id = JSON.parse(req.query.teamid)
    const result: any = await prisma.players.findMany({
      where: {
        teamId: id,
      },
   })
   console.log(await result, id, 'source')
    return result
  }
}

  export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      let players = await main(req,res)
      console.log(players, 'export players')
      res.status(200).json({'players' : players})
    }catch (err){
      res.status(500).json({"message": "sorry somthing went wrong"})
    }
  }