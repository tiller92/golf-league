import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const allLeagues = await prisma.leagues.findMany()
  console.log(allLeagues)
  return JSON.stringify(allLeagues)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })