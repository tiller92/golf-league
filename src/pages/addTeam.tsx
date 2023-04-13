import { type NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

import { GetServerSideProps } from 'next'

type Data = { 
  id:string;
  name:string;
 }

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
  const res = await fetch('http://localhost:3000/api/teams')
  const data: Data = await res.json()
  return {
    props: {
      data,
    },
  }
}

const addTeam: NextPage = (props) => {
  // no need for this state on the home page yet
  const [teams ,setTeams] = useState<Data[] | null>([])
  if (!teams) {
    return <h1>sorry idiot</h1>
  }
  return (
    <>
      <Head>
        <title>Golf League Beta</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <>
        <h1 className="sm:text-4xl sm:flex sm:justify-center">Add a new Team</h1>
        <div className="sm:flex sm:justify-center">
          <form action="">
            <label htmlFor="">
              Team name
            </label>
            <input type="text" className="border p-2 m-2" />
            <label htmlFor="">
              player one
            </label>
            <input type="text" className="border p-2 m-2" />
            <label htmlFor="">
              player two
            </label>
            <input type="text" className="border p-2 m-2" />
            <button className="border p-2">Search</button>
          </form>
        </div>
        <h3 className="sm:flex sm:justify-center sm:m-3">Teams</h3>
        <div className="sm:h-1/2 sm:w-1/2 sm:flex sm:justify-center">
           <ul className="sm:border sm:flex sm:justify-center">
            {
              teams.map(item => (
              <li className="sm:flex justify-center sm:m-3 sm:p-3" key={item.id}>{item.name}</li>
            )) }

              
           </ul>
           </div>
          </>
      </main>
    </>
  );
};

export default addTeam;
