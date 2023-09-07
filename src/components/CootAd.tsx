import Image from "next/image";
import { links } from "~/details";

const CootAd = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Image
        src="/images/cootExample.png"
        width={200}
        height={200}
        alt="coot example"
      />
      <div className="flex h-[200px] flex-col items-center justify-center gap-2 border-2 border-red-500 bg-black/10">
        <b className="text-xl">MINT A COOT NOW</b>
        <a href={links.links.scatterLink}>
          <i className="rounded-lg bg-teal-200 p-2 text-black hover:bg-teal-50">
            mint here
          </i>
        </a>
        <p className="underline">FREE MINTS FOR $SOLANA HOLDERS</p>
        <p>REMILIO/YAYO/MILADY/SPROTO FREE MINTS</p>
        <p>0.02E or 100b $SOLANA</p>
        <a href={links.links.scatterLink}>
          <i className="rounded-lg bg-teal-200 p-2 text-black hover:bg-teal-50">
            are you stupid??
          </i>
        </a>
      </div>
    </div>
  );
};

export default CootAd;
