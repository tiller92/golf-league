import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router';
// import { useState } from "next";
import Link from 'next/link';
import { GetServerSideProps } from 'next'
import { useEffect, useState } from "react";


type Data = { 
  id:number;
  name:string;
 }

// export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
//   const router = useRouter()
//   const leagueId = router.query.id

//   const res = await fetch(`/api/teamSearch/${leagueId}`)
//   const data: Data = await res.json()
//   return {
//     props: {
//       data,
//     },
//   }
// }

const leagueHome: NextPage = (props) => {
  const router = useRouter()
  const leagueId = router.query.id
  const [teams,setTeams] = useState([])
  useEffect(() => {
    if(leagueId !== undefined){
    fetch(`/api/teamSearch/${leagueId}`)
    .then((res)  =>  
      res.json()
    )
    .then((data) =>{ 
      console.log(data)
      setTeams(data['teams'])})
    }
  },[leagueId])  
  if (!teams) {
    return <h1>sorry idiot</h1>
  }
  return (
    <>
    <Head>
    <title></title>
    <meta name="description" content="Generated by create-t3-app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main>
        <h1> list leagues and link to add teams and players </h1>
        <div className="sm:h-1/2 sm:w-12/12 sm:flex sm:justify-center">
           <ul className="sm:flex sm:flex-col sm:justify-center">
            {
              teams.map(item => (
                <div className="sm:flex sm:justify-center">
                <Link href={`leagueHome/${item.name}?name=${item.name}&id=${item.id}`}>
              <li className="sm:flex sm:border sm:cursor-pointer sm:hover:bg-sky-700 sm:justify-center sm:m-3 sm:p-3" key={item.id}>
                League Name: {item.name} id: {item.id}</li>
                </Link>
                </div>
            )) }

              
           </ul>
           </div>
  </main>
        </>
  )
}

export default leagueHome;