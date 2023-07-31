import { useRef } from "react";

interface InfoPairProps {
  label: string;
  value: string;
  link?: string;
}
const InfoPair = ({ label, value, link }: InfoPairProps) => {
  return (
    <div className="flex flex-col items-center gap-0 rounded-md bg-black/80  px-8 py-4">
      <p className="text-sm font-light">{label}</p>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer" className="">
          <p className="cursor-pointer text-lg font-semibold underline hover:text-red-500">
            {value}
          </p>
        </a>
      ) : (
        <p className="text-lg font-semibold">{value}</p>
      )}
    </div>
  );
};

import Image from "next/image";
import { links, type Links, type Details } from "../details.ts";
import { DexScreenerLogo } from "./DexScreenerLogo.tsx";
export const InfoHeader = () => {
  const copyPopup = useRef<HTMLDivElement>(null);

  return (
    <div id="Info" className="flex flex-col">
      <div className="grid grid-cols-1 grid-rows-4 items-center justify-center gap-2 lg:grid-cols-2 lg:grid-rows-2">
        <InfoPair label="TICKER" value="$SOLANA" />
        <div
          onClick={() => {
            void navigator.clipboard.writeText(
              "0x3D806324b6Df5AF3c1a81aCbA14A8A62Fe6D643F"
            );
            copyPopup.current?.classList.remove("hidden");
            setTimeout(() => {
              copyPopup.current?.classList.add("hidden");
            }, 2000);
            return;
          }}
          className="relative"
        >
          <div
            ref={copyPopup}
            className="absolute flex hidden h-full w-full items-center justify-center rounded-lg bg-red-600/80"
          >
            copied!
          </div>
          <InfoPair
            label="CONTRACT"
            value="0x3D806324b6Df5AF3c1a81aCbA14A8A62Fe6D643F"
          />
        </div>
        <InfoPair
          label="SUPPLY"
          value="888,888,888,888,888"
          link={links.links.etherscanLink}
        />
        <InfoPair
          label="LP?"
          value="BURNED"
          link={
            "https://app.uncx.network/amm/uni-v2/pair/0x41F50f520f5095fC8403DF083285232B822611c3"
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center border-2 bg-fuchsia-500">
        <p className="mt-4 font-sans text-lg font-bold text-white">LINKS</p>
        <div className="flex flex-row items-center justify-center gap-4 rounded-lg bg-teal-400 p-2">
          <a href={links.links.telegramLink} target="_blank" rel="noreferrer">
            <Image
              src={"/images/telegramLogo.svg"}
              height={50}
              width={50}
              alt="telegram link"
            />
          </a>
          <a href={links.links.twitterLink} target="_blank" rel="noreferrer">
            <Image
              src={"/images/twitterLogo.svg"}
              height={50}
              width={50}
              alt="twitter link"
            />
          </a>
          <a href={links.links.etherscanLink} target="_blank" rel="noreferrer">
            <Image
              src={"/images/etherscanLogo.svg"}
              height={50}
              width={50}
              alt="etherscan link"
            />
          </a>
          <a href={links.links.uniswapLink} target="_blank" rel="noreferrer">
            <Image
              src={"/images/uniswapLogo.svg"}
              height={50}
              width={50}
              alt="uniswap pair link"
            />
          </a>
          <a href={links.links.dexToolsLink} target="_blank" rel="noreferrer">
            <Image
              src={"/images/dextoolsLogo.svg"}
              height={50}
              width={50}
              alt="dextools link"
            />
          </a>
          <a
            href={links.links.dexScreenerLink}
            target="_blank"
            rel="noreferrer"
          >
            <DexScreenerLogo />
          </a>
        </div>
      </div>
    </div>
  );
};
