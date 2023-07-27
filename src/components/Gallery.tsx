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
];

const Gallery = () => {
  return (
    <div className="w-full">
      <h2 className="border-4 border-orange-500 bg-teal-900 text-center text-xl md:text-5xl">
        meme <span className="italic">Gallery</span>
      </h2>
      <p className="pl-16">
        submit your trash by{" "}
        <a href="" className="text-red-300 hover:text-red-600">
          tagging us on twitter
        </a>{" "}
        with your meme
      </p>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div className="h-max w-full" key={index}>
            <Image
              src={`/images/gallery/${image.fileName}`}
              alt={`${image.fileName} by ${image.author}`}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
