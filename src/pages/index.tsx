import { type GetStaticProps, type NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { env } from "../env/server.mjs";
import FlightSearch from "../components/FlightSearch";
import Nav from "../components/Nav";
const BASE_URL = "https://api.unsplash.com";

const Home: NextPage<{ src: string; location: string }> = (props) => {
  const [src] = useState(props.src);
  return (
    <>
      <Head>
        <title>FlightFetch</title>
        <meta
          name="description"
          content="Get the latest flight data and book your next flight"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-0 left-0 right-0 z-10">
        <Nav />
      </div>
      <main className="absolute flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="relative z-10 mt-auto text-2xl text-white shadow-black drop-shadow-sm">
          Faraway Lands Made Closer
        </div>
        <div className="z-10 mx-2 my-auto flex flex-col">
          <FlightSearch />
        </div>
        <Image
          className="z-0 object-cover"
          src={src}
          alt={`${props.location}`}
          fill
        />
        <div className="z-10 flex w-full flex-row justify-start">
          <span className="block pl-4 text-white shadow-black drop-shadow-sm">
            {props.location}
          </span>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${BASE_URL}/photos/random?` +
      new URLSearchParams({
        query: "touristic landscape",
        client_id: env.UNSPLASH_ACCESS_KEY,
      })
  );
  const data = await response.json();

  return {
    props: {
      src: data?.urls?.regular,
      location: data?.location?.name,
    },
  };
};
