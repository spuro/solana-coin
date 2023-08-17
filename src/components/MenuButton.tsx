import { useEffect, useRef, useState } from "react";

const entries = [
  {
    title: "Home",
    link: "#Home",
  },
  {
    title: "Info",
    link: "#Info",
  },
  // {
  //   title: "Viewing",
  //   link: "#Viewing",
  // },
  {
    title: "Confession",
    link: "#Confession",
  },
  {
    title: "Ceremony",
    link: "#Ceremony",
  },
  {
    title: "Meme Gallery",
    link: "#Gallery",
  },
  {
    title: "Writings",
    link: "#Writings",
  },
];

const MenuButton = () => {
  const [menuShown, setMenuShown] = useState<boolean>(false);
  const menu = useRef<HTMLDivElement>(null);

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<{
      width: number | undefined;
      height: number | undefined;
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
    <div className="absolute z-50">
      <div
        style={{
          display: menuShown ? "flex" : "none",
          left: useWindowSize().width! / 2 - 100,
          top: useWindowSize().height! - 500,
        }}
        ref={menu}
        className="fixed flex flex-col gap-4 rounded-md border-2 border-teal-600 bg-teal-400 p-4"
      >
        {entries.map((entry, index) => (
          <a href={entry.link} key={index} onClick={() => setMenuShown(false)}>
            <p className="text-md bg-teal-900 font-bold text-white hover:bg-teal-200 hover:text-black">
              {entry.title}
            </p>
          </a>
        ))}
      </div>
      <div
        style={{
          left: useWindowSize().width! / 2 - 75,
          cursor: "pointer",
          backgroundColor: menuShown ? "#8b5cf6" : "#38bdf8",
        }}
        className="fixed bottom-4 flex w-[150px] justify-center rounded-full border-2 border-teal-600 bg-teal-400 px-8 py-4 text-xs font-bold text-black"
        onClick={() => {
          setMenuShown(!menuShown);
        }}
      >
        <p className="select-none">{menuShown ? "xxMENUxx" : "++MENU++"}</p>
      </div>
    </div>
  );
};

export default MenuButton;
