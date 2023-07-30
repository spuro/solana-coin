import { Interview } from "./writings/Interview";

const Writings = () => {
  return (
    <div id="Writings">
      <h2 className="border-4 border-orange-500 bg-teal-900 text-center text-xl md:text-5xl">
        WRITINGS <span className="italic">Artism</span>
      </h2>
      <div className="gap-8 py-4">
        <Interview />
      </div>
    </div>
  );
};

export default Writings;
