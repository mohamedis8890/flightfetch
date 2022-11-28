import { type GetStaticProps, type NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { ImAirplane } from "react-icons/im";
import { MdHotel, MdLocationPin, MdTour } from "react-icons/md";
import { env } from "../env/server.mjs";
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
      <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-around bg-white backdrop-blur-sm">
        <div>
          <Image src="/logo.jpeg" alt="logo" width={108} height={36} />
        </div>
        <div>
          <ul className="flex ">
            <li className="flex cursor-pointer px-3">
              <ImAirplane className="m-auto px-0.5" /> Flights
            </li>
            <li className="flex cursor-pointer px-3">
              <MdHotel className="m-auto px-0.5" /> Hotels
            </li>
            <li className="flex cursor-pointer px-3">
              <MdLocationPin className="m-auto px-0.5" /> Locations
            </li>
            <li className="flex cursor-pointer px-3">
              <MdTour className="m-auto px-0.5" /> Tours
            </li>
          </ul>
        </div>
        <div className="text-mainBlue-1">Sign In</div>
      </nav>
      <main className="absolute flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="z-10 my-auto mx-2 flex flex-col rounded-sm bg-mainBlue-1 p-5 text-white">
          <div className="-mt-2 flex justify-start">
            <div className="inline-block pl-0 pr-2">Round-Trip</div>
            <div className="inline-block px-2 text-mainBlue-2">One-Way</div>
            <div className="inline-block px-2 text-mainBlue-2">Multi-City</div>
          </div>
          <div>
            <form className="flex-start mt-4 flex text-black">
              <input
                type="text"
                placeholder="From"
                className="ml-0 mr-1 grow rounded-md p-2"
              />
              <input
                type="text"
                placeholder="To"
                className="mx-1 grow rounded-md p-2"
              />
              <input
                type="datetime-local"
                className="mx-1 grow rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Passengers, Class"
                className="mx-1 grow  rounded-md p-2"
              />
              <input
                type="submit"
                value="Search"
                className="mx-1 grow rounded-md bg-mainBlue-2 p-2 text-white"
              />
            </form>
          </div>
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
