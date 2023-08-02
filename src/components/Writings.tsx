import { Interview } from "./writings/Interview";
import Schizo888 from "./writings/Schizo888";

const Writings = () => {
  return (
    <div id="Writings">
      <h2 className="border-4 border-orange-500 bg-teal-900 text-center text-xl md:text-5xl">
        WRITINGS <span className="italic">Artism</span>
      </h2>
      <div className="flex flex-col gap-8 py-4">
        <Interview />
        <Schizo888 />
        <div className="bg-orange-200 p-2 text-center text-black">
          <p>
            HAVE YOU WRITTEN SOMETHING THAT WOULD MAKE SENSE EXISTING HERE?
            <br />
            SEND THE FULL TEXT TO:
          </p>
          <p
            onClick={() => {
              void navigator.clipboard.writeText(
                "tickersolanawritings@proton.me"
              );
              alert("Copied to clipboard!");
            }}
            className="cursor-pointer bg-orange-300 hover:text-red-800"
          >
            tickersolanawritings@proton.me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Writings;
