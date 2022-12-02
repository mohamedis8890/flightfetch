import { type AppType } from "next/app";

import { trpc } from "../utils/trpc";

import { Ropa_Sans } from "@next/font/google";
import "../styles/globals.css";
const ropaSans = Ropa_Sans({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-ropa",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${ropaSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default trpc.withTRPC(MyApp);
