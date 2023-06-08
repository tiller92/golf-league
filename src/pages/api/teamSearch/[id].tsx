//api route for team home page should load players and scores
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import type { NextApiRequest, NextApiResponse } from 'next'

async function main(req: NextApiRequest,res: NextApiResponse) {
  if (req.query.id !=  undefined) {
    const id = JSON.parse(req.query.id)
    const result: any = await prisma.teams.findUnique({
      where: {
        id: id,
      },
   })
   console.log(result)
    return result
  }
}

  export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      let team = await main(req,res)
      console.log(team)
      res.status(200).json({'team' : team})
    }catch (err){
      res.status(500).json({"message": "sorry somthing went wrong"})
    }
  }
