import Image from "next/image";

export const Confession = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center text-3xl font-bold underline">
        What is an underdog?
      </h3>
      <p className="text-center font-semibold">I&apos;ll tell you what.</p>
      <p className="px-8 md:px-16 lg:px-32">
        <br /> An undervalued horse in a race, a david versus goliath, a cent to
        a dollar, a means to an end. <br />A vessel to transport you from the
        bottom of the valley to the top of the peak.
        <br />
        <br />
        What we&apos;re offering isn&apos;t just a token, its a mirror from the
        future. It&apos;s your golden ticket. <br />
        We&apos;ve collected every entity the bankers are betting against and we
        are going to propel them through the glass ceiling, what we see from
        there only God knows. <br /> <br />
        The ticker is $SOLANA, the network is ethereum, the dividends are
        boundless.
      </p>
      <Image
        src={"/images/floatTicker.gif"}
        width={250}
        height={100}
        alt=""
        quality={50}
      />
    </div>
  );
};
