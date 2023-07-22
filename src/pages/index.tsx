// external deps
// import { useEffect, useState } from "react";

// external components
import Head from "next/head";
import Image from "next/image";

// my components
import { Sidebar } from "~/components/sidebar";
import { InfoHeader } from "~/components/InfoHeader";
import { Interview } from "~/components/Interview";
import { Confession } from "~/components/Confession";

type measurement = number | undefined;

export default function Home() {
  // Hook
  // function useWindowSize() {
  //   // Initialize state with undefined width/height so server and client renders match
  //   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  //   const [windowSize, setWindowSize] = useState<{
  //     width: measurement;
  //     height: measurement;
  //   }>({
  //     width: undefined,
  //     height: undefined,
  //   });

  //   useEffect(() => {
  //     // only execute all the code below in client side
  //     // Handler to call on window resize
  //     function handleResize() {
  //       // Set window width/height to state
  //       setWindowSize({
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       });
  //     }

  //     // Add event listener
  //     window.addEventListener("resize", handleResize);

  //     // Call handler right away so state gets updated with initial window size
  //     handleResize();

  //     // Remove event listener on cleanup
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []); // Empty array ensures that effect is only run on mount
  //   return windowSize;
  // }

  return (
    <>
      <Head>
        <title>$SOLANA - CrashBandicootSBFCuck103Pepe</title>
        <meta
          name="description"
          content="SOLANA - CrashBandicootSBFCuck103Pepe"
        />
        <link rel="icon" href="/images/solanaLogoMark.svg" />
      </Head>
      <main className="text-white" style={{ fontFamily: "serif" }}>
        <div className="flex min-h-screen flex-col items-center justify-center lg:grid lg:grid-cols-[0.25fr_1fr_0.25fr]">
          <Sidebar />
          <div
            style={{
              borderImage:
                "linear-gradient(90deg, rgba(252,159,203,1) 0%, rgba(248,176,73,1) 13%, rgba(248,176,73,1) 21%, rgba(254,231,242,1) 63%, rgba(249,82,160,1) 67%, rgba(197,8,73,1) 69%, rgba(180,62,133,1) 82%, rgba(248,176,73,1) 100%) 180 / 20px",
              background:
                "linear-gradient(90deg, #0e5a3a, #150924), linear-gradient(0deg, rgba(252,159,203,0.2) 0%, rgba(248,176,73,0.2) 13%, rgba(248,176,73,0.2) 21%, rgba(254,231,242,0.2) 63%, rgba(249,82,160,0.2) 67%, rgba(197,8,73,0.2) 69%, rgba(180,62,133,0.2) 82%, rgba(248,176,73,0.2) 100%)",
              backgroundBlendMode: "overlay",
            }}
            className={`flex w-full flex-col p-4 lg:p-4 xl:p-4`}
          >
            <Image
              src={"/images/banner.jpg"}
              alt="banner"
              width={1024}
              height={400}
              className="mb-4"
            />
            <div className="flex flex-col items-center gap-16">
              <InfoHeader />
              <Image
                src={"/images/logo.jpg"}
                width={250}
                height={250}
                alt="logo"
              />
              <Confession />
              <Interview />
            </div>
          </div>
          <Sidebar />
        </div>
      </main>
    </>
  );
}
