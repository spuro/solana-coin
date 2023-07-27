// external deps
import { useEffect, useRef } from "react";

// external components
import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";

// my components
import { Sidebar } from "~/components/sidebar";
import { InfoHeader } from "~/components/InfoHeader";
import { Interview } from "~/components/Interview";
import { Confession } from "~/components/Confession";
import Gallery from "~/components/Gallery";

const kabelFont = localFont({ src: "../../src/fonts/kabel_norm.ttf" });

type measurement = number | undefined;

export default function Home() {
  const musicRef = useRef<HTMLAudioElement>(null);

  const muteMusic = () => {
    if (musicRef.current) {
      musicRef.current.muted = !musicRef.current.muted;
    }
  };

  useEffect(() => {
    if (musicRef.current) {
      musicRef.current.volume = 0.25;
      void musicRef.current.play();
    }
  }, []);

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
        <title>$SOLANA - BarbieCrashBandicootRFK888Inu</title>
        <meta
          name="description"
          content="$SOLANA - BarbieCrashBandicootRFK888Inu"
        />
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <main className="text-white" style={{ fontFamily: "serif" }}>
        <button
          onClick={muteMusic}
          className="fixed bottom-4 left-4 z-20 rounded-full border-2 bg-teal-500 p-4 text-black"
        >
          🔈
        </button>
        <button
          onClick={() => {
            musicRef.current ? void musicRef.current.play() : null;
          }}
          className="fixed bottom-4 right-4 z-20 rounded-full border-2 bg-orange-500 p-4 text-black"
        >
          🎵
        </button>
        <audio src={"/crash.mp3"} autoPlay loop ref={musicRef} />
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
              <h1
                className={`max-w-full bg-gradient-to-r from-red-500 to-blue-500 font-mono text-lg font-bold shadow-lg shadow-green-300 hover:mix-blend-overlay md:text-4xl ${kabelFont.className}`}
              >
                BarbieCrashBandicootRFK888Inu
              </h1>
              <h3 className="bg-gradient-to-bl from-fuchsia-400 to-green-800 text-lg font-bold shadow-2xl shadow-red-200 hover:mix-blend-overlay">
                the ticker is $SOLANA
              </h3>
              <InfoHeader />
              <Image
                src={"/images/logo.jpg"}
                width={250}
                height={250}
                alt="logo"
                className="border-8 border-red-950 hover:animate-spin"
              />
              <Confession />
              <Gallery />
              <Interview />
              {/* <Image
                src={"/images/applecat.gif"}
                width={100}
                height={100}
                alt="apple cat"
                className="hover:animate-spin"
              /> */}
            </div>
          </div>
          <Sidebar />
        </div>
      </main>
    </>
  );
}
