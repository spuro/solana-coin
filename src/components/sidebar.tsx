import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="flex h-[80px] w-full items-center justify-center  bg-gradient-to-tr from-[#9945FF] to-[#14F195] lg:relative lg:h-full lg:items-start">
      <div className="fixed flex flex-row items-stretch justify-center gap-5 lg:h-screen lg:flex-col lg:justify-center">
        <Image
          src="/images/S.gif"
          width={50}
          height={50}
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="S"
        />
        <Image
          src="/images/O.gif"
          width={50}
          height={50}
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="O"
        />
        <Image
          src="/images/L.gif"
          width={50}
          height={50}
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="L"
        />
        <Image
          src="/images/A.gif"
          width={50}
          height={50}
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="A"
        />
        <Image
          src="/images/N.gif"
          width={50}
          height={50}
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="N"
        />
        <Image
          src="/images/A.gif"
          width={50}
          height={50}
          className="h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
          alt="A"
        />
      </div>
    </div>
  );
};
