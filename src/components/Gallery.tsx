import Image from "next/image";

export interface Meme {
  author: string;
  credit?: string;
  fileName: string;
}

const images: Meme[] = [
  {
    author: "admin",
    fileName: "ad.jpg",
  },
  {
    author: "admin",
    fileName: "animu.jpg",
  },
  {
    author: "admin",
    fileName: "fishbowl.jpg",
  },
  {
    author: "admin",
    fileName: "logo.jpg",
  },
  {
    author: "admin",
    fileName: "friendship.jpg",
  },
  {
    author: "admin",
    fileName: "rushmoar.jpg",
  },
  {
    author: "admin",
    fileName: "wojak.jpg",
  },
  {
    author: "@GrahamKeithC",
    fileName: "GrahamKeithC_banner.jpeg",
    credit: "https://twitter.com/GrahamKeithC/status/1684835373363396608?s=20",
  },
  {
    author: "@Ch3l__",
    fileName: "@Ch3l__movieposter.jpeg",
    credit: "https://twitter.com/Ch3l__/status/1685050589586051072?s=20",
  },
  {
    author: "admin",
    fileName: "donBandicoot.jpeg",
  },
  {
    author: "admin",
    fileName: "rabbit.jpeg",
  },
  {
    author: "admin",
    fileName: "myStrangeAddiction.jpeg",
  },
  {
    author: "incredulicious",
    fileName: "Julian_poster.jpg",
    credit: "https://twitter.com/incredulicious",
  },
];

const Gallery = () => {
  return (
    <div className="w-full">
      <h2 className="border-4 border-orange-500 bg-teal-900 text-center text-xl md:text-5xl">
        meme <span className="italic">Gallery</span>
      </h2>
      <p className="pl-16">
        submit your trash by{" "}
        <a
          href="https://twitter.com/tickerSOL"
          className="text-red-300 hover:text-red-600"
        >
          tagging us on twitter
        </a>{" "}
        with your meme
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 ">
        {images.map((image, index) => (
          <div
            className="relative aspect-square h-max w-full overflow-hidden hover:z-50 hover:overflow-visible"
            key={index}
          >
            <Image
              src={`/images/gallery/${image.fileName}`}
              alt={`${image.fileName} by ${image.author}`}
              width={500}
              height={500}
              className="absolute left-0 top-0"
            />
            <div className="relative z-30 flex h-full w-full flex-col justify-between bg-black/80 p-4 opacity-0 hover:opacity-100">
              <p>{image.fileName}</p>
              <div className="space flex flex-col gap-2 bg-black/80">
                <a
                  href={`/images/gallery/${image.fileName}`}
                  target="_blank"
                  className="hover:text-red-500 hover:underline"
                >
                  download
                </a>
                {image.credit ? (
                  <a
                    href={image.credit ? image.credit : ""}
                    target="_blank"
                    className="hover:text-red-500 hover:underline"
                  >
                    source
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
