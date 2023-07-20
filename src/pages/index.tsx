// external deps
import { useEffect, useState } from "react";

// external components
import Head from "next/head";
import Link from "next/link";

// my components
import { Sidebar } from "~/components/sidebar";
import { InfoHeader } from "~/components/InfoHeader";

const solanaPurple = "#9945FF";
const solanaGreen = "#14F195";

type measurement = number | undefined;

export default function Home() {
  useEffect(() => {}, []);

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{
      width: measurement;
      height: measurement;
    }>({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

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
      <main>
        <div className="flex min-h-screen flex-col items-center justify-center lg:grid lg:grid-cols-[0.25fr_1fr_0.25fr]">
          {/* {useWindowSize().width! > 1024 ? <Sidebar /> : ""} */}
          <Sidebar />
          <div
            className={`flex h-[5000px] w-full flex-col border-4 border-[#14F195] bg-[#150924] p-4 lg:p-16 xl:p-32`}
          >
            <InfoHeader />
            <p>middle</p>
          </div>
          <Sidebar />
          {/* {useWindowSize().width! > 1024 ? <Sidebar /> : ""} */}
        </div>
      </main>
    </>
  );
}
