import { PrismaClient } from '@prisma/client'
// do not keep this only create one instance of prisma client and import it here
const prisma = new PrismaClient()

import type { NextApiRequest, NextApiResponse } from 'next'

async function main() {
  const allTeams = await prisma.teams.findMany()
  return allTeams
}

  export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      let result = await main()
      res.status(200).json({"teams": result})
    }catch (err){
      res.status(500).json({"message": "sorry somthing went wrong"})
    }
  }

