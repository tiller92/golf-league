import { type NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

import { GetServerSideProps } from 'next'

type Data = { 
  id:string;
  name:string;
 }

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
  const res = await fetch('http://localhost:3000/api/leagues')
  const data: Data = await res.json()

  return {
    props: {
      data,
    },
  }
}

const Home: NextPage = (props) => {
  // no need for this state on the home page yet
  const [leagues ,setLeague] = useState<Data[] | null>()
  let list:Data[] = props["data"]["data"]
  console.log(list)
 
  
  return (
    <>
      <Head>
        <title>Golf League Beta</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <>
        <h1 className="sm:text-4xl sm:flex sm:justify-center">Correy's Golf League</h1>
        <div className="sm:flex sm:justify-center">
          <form action="">
            <label htmlFor="">
              League ID
            </label>
            <input type="text" className="border p-2 m-2" />
            <button className="border p-2">Search</button>
          </form>
        </div>
           <ul>
            {list.map(item => (
              <li className="" key={item.id}>{item.name}</li>
            )) }
              
           </ul>
          </>
      </main>
    </>
  );
};

export default Home;
