import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import type { NextApiRequest, NextApiResponse } from 'next'

async function main(req: NextApiRequest,res: NextApiResponse) {
  console.log(req.query.id)
  if (req.query.id !=  undefined) {
    const id = JSON.parse(req.query.id)
    const result: any = await prisma.players.findUnique({
      where: {
        id: id,
      },
   
   })

   console.log(await result, id, 'source')
    return result
  }
}

  export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      let player = await main(req,res)
      console.log(player, 'export player')
      res.status(200).json({'player' : player})
    }catch (err){
      res.status(500).json({"message": "sorry somthing went wrong"})
    }
  }