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
      </div>
    </div>
  );
};

export default Writings;
