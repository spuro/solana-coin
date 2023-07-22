type InfoPairProps = {
  label: string;
  value: string;
};
const InfoPair = ({ label, value }: InfoPairProps) => {
  return (
    <div className="flex flex-col items-center gap-0 rounded-md bg-black/80  px-8 py-4">
      <p className="text-sm font-light">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
};

import { links, type Links, type Details } from "../details.ts";
export const InfoHeader = (_links: Links) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 grid-rows-4 items-center justify-center gap-2 lg:grid-cols-2 lg:grid-rows-2">
        <InfoPair label="TICKER" value="$SOLANA" />
        <InfoPair label="CONTRACT" value="0x1234567890987654321234567890" />
        <InfoPair label="SUPPLY" value="69,000,000" />
        <InfoPair label="LP?" value="IDK LOL" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="">Links:</p>
        <div className="flex flex-row items-center justify-center gap-4">
          <a href={_links.telegramLink} target="_blank" rel="noreferrer">
            <Image src={} height={70} width={70} alt="telegram" />
          </a>
          <div className="h-[50px] w-[50px] bg-red-500" />
          <div className="h-[50px] w-[50px] bg-red-500" />
          <div className="h-[50px] w-[50px] bg-red-500" />
          <div className="h-[50px] w-[50px] bg-red-500" />
        </div>
      </div>
    </div>
  );
};
