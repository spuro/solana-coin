import Image from "next/image";

const OverlayerPrompt = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="w-full bg-orange-200 text-xl font-bold text-black">
        CHECK OUT OUR NEW OVERLAYER!
        <br />
        IT&apos;S LITERALLY MAGIC!
      </h3>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 ">
          <p className="italic">turn this..</p>
          <Image
            src="/images/overlayer_before.png"
            width={200}
            height={200}
            alt="after"
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="italic">into this!</p>
          <Image
            src="/images/overlayer_after.png"
            width={200}
            height={200}
            alt="after"
          />
        </div>
      </div>
      <a href="/overlayer">
        <button className="bg-teal-600 px-4 py-2 italic text-white hover:bg-teal-800">
          Try now!
        </button>
      </a>
    </div>
  );
};

export default OverlayerPrompt;
