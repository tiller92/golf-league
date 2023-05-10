import { PrismaClient } from '@prisma/client'
// do not keep this only create one instance of prisma client and import it here
const prisma = new PrismaClient()
import type { NextApiRequest, NextApiResponse } from 'next'

async function main() {
  const allLeagues = await prisma.leagues.findMany()
  console.log(allLeagues)
  return allLeagues
}

  export default async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      let result = await main()
      res.status(200).json({"data": result})
    }catch (err){
      res.status(500).json({"message": "sorry somthing went wrong"})
    }
  }

