import { PrismaClient } from '@prisma/client'

// do not keep this only create one instance of prisma client and import it here
const prisma = new PrismaClient()

import type { NextApiRequest, NextApiResponse } from 'next'

async function main(req: NextApiRequest,res: NextApiResponse) {
  if (req.query.id !=  undefined) {
    const id = JSON.parse(req.query.id)
    const result: any = await prisma.teams.findMany({
      where: {
        leagueId: id,
      },
   })
    return result
  }
}

  export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      let teams = await main(req,res)
      console.log(teams)
      res.status(200).json({"teams": teams})
    }catch (err){
      res.status(500).json({"message": "sorry somthing went wrong"})
    }
  }
