import Image from "next/image";

import sha256 from "crypto-js/sha256";

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
    fileName: "incredulicious_poster.jpg",
    credit: "https://twitter.com/incredulicious",
  },
  {
    author: "@GrahamKeithC",
    fileName: "GrahamKeithC_DeathOfSOLANA.jpg",
    credit: "https://twitter.com/GrahamKeithC",
  },
  {
    author: "A",
    fileName: "A_pinkCrash.jpg",
  },
  {
    author: "0xzordan",
    fileName: "0xzordan_nitro.jpeg",
    credit: "https://twitter.com/0xzordan/status/1685287718190743552",
  },
  {
    author: "incredulicious",
    fileName: "incredulicious_GetInBitch.jpeg",
    credit: "https://twitter.com/incredulicious/status/1685470568617816064/",
  },
  {
    author: "cambussyius",
    fileName: "cambussyius_Comparison.jpeg",
    credit: "https://twitter.com/cambussyius/status/1685472337955606528?s=20",
  },
  {
    author: "cambussyius",
    fileName: "cambussyius_bestTech.jpeg",
    credit: "https://twitter.com/cambussyius",
  },
  {
    author: "cambussyius",
    fileName: "cambussyius_bondage.jpeg",
    credit: "https://twitter.com/cambussyius",
  },
  {
    author: "cambussyius",
    fileName: "cambussyius_eef.jpg",
    credit: "https://twitter.com/cambussyius",
  },
  {
    author: "cambussyius",
    fileName: "cambussyius_solanaSisters.jpg",
    credit: "https://twitter.com/cambussyius",
  },
  {
    author: "@Ch3l__",
    fileName: "@Ch3l__collage.jpg",
    credit: "https://twitter.com/Ch3l__/",
  },
  {
    author: "nikolaynft",
    fileName: "nikolaynft_videogame.jpeg",
    credit: "https://twitter.com/nikolaynft/status/1685626826238963712",
  },
  {
    author: "cambussyius",
    fileName: "cambussyius_barbieGun.jpeg",
    credit: "https://twitter.com/cambussyius",
  },
  {
    author: "lessbelief",
    fileName: "lessbelief_theWorldIsYours.jpeg",
    credit: "https://twitter.com/lessbelief/status/1685927172706643969",
  },
];

const Gallery = () => {
  return (
    <div id="Gallery" className="w-full">
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
            style={{
              borderColor: `#${sha256(image.author).toString().slice(0, 6)}`,
            }}
            className="relative aspect-square h-max w-full overflow-hidden border-4 hover:z-40 hover:overflow-visible"
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
              <div className="space ga2p-2 flex flex-col bg-black/80">
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
