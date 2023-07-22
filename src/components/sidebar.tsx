import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-center  bg-gradient-to-tr from-[#9945FF] to-[#14F195] lg:relative lg:h-full lg:items-start">
      <div className="fixed flex flex-row items-stretch justify-center gap-5 lg:h-screen lg:flex-col lg:justify-center">
        <img
          src="/images/S.gif"
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="S"
        />
        <img
          src="/images/O.gif"
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="O"
        />
        <img
          src="/images/L.gif"
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="L"
        />
        <img
          src="/images/A.gif"
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="A"
        />
        <img
          src="/images/N.gif"
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="N"
        />
        <img
          src="/images/A.gif"
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="A"
        />
      </div>
    </div>
  );
};
