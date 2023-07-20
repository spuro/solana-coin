export const InfoHeader = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      <p>
        CONTRACT:{" "}
        <span className="font-bold">0x1234567890987654321234567890</span>
      </p>
      <p>
        TICKER: <span className="font-bold">$SOLANA</span>
      </p>
      <p className="-mb-4">Links:</p>
      <div className="flex flex-row gap-4">
        <div className="h-[50px] w-[50px] bg-red-500" />
        <div className="h-[50px] w-[50px] bg-red-500" />
        <div className="h-[50px] w-[50px] bg-red-500" />
        <div className="h-[50px] w-[50px] bg-red-500" />
        <div className="h-[50px] w-[50px] bg-red-500" />
      </div>
    </div>
  );
};
