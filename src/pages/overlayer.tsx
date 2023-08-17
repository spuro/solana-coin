import React, { useState } from "react";
import FileUpload from "~/components/overlayer/FileDrop";
import ImagePreview from "~/components/overlayer/ImagePreview";
import OverlaySelection from "~/components/overlayer/OverlaySelection";
import ResultPreview from "~/components/overlayer/ResultPreview";
import localFont from "next/font/local";
import Head from "next/head";
import ImageCropper from "~/components/overlayer/ImageCropper";

const kabelFont = localFont({ src: "../../src/fonts/kabel_norm.ttf" });

export interface Overlay {
  src: string;
  name: string;
}

const overlays: Overlay[] = [
  {
    name: "Barbie",
    src: "/images/overlays/Barbie.png",
  },
  {
    name: "Allegiance",
    src: "/images/overlays/Allegiance.png",
  },
  {
    name: "Crash Title",
    src: "/images/overlays/Crash_Title.png",
  },
  {
    name: "Camera",
    src: "/images/overlays/Camera.png",
  },
  {
    name: "Momo",
    src: "/images/overlays/Momo.png",
  },
  {
    name: "Mao 888",
    src: "/images/overlays/Mao.png",
  },
];

const MyComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedOverlay, setSelectedOverlay] = useState<Overlay | null>(null);
  const [showPfp, setShowPfp] = useState<boolean>(false);
  const [cropperActive, setCropperActive] = useState<boolean>(false);

  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
  };

  const handleOverlaySelect = (overlay: Overlay) => {
    setSelectedOverlay(overlay);
  };

  return (
    <>
      <Head>
        <title>$SOLANA - pfp & meme overlayer</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <div
        style={{
          borderImage:
            "linear-gradient(90deg, rgba(252,159,203,1) 0%, rgba(248,176,73,1) 13%, rgba(248,176,73,1) 21%, rgba(254,231,242,1) 63%, rgba(249,82,160,1) 67%, rgba(197,8,73,1) 69%, rgba(180,62,133,1) 82%, rgba(248,176,73,1) 100%) 180 / 20px",
          background:
            "linear-gradient(90deg, #0e5a3a, #150924), linear-gradient(0deg, rgba(252,159,203,0.2) 0%, rgba(248,176,73,0.2) 13%, rgba(248,176,73,0.2) 21%, rgba(254,231,242,0.2) 63%, rgba(249,82,160,0.2) 67%, rgba(197,8,73,0.2) 69%, rgba(180,62,133,0.2) 82%, rgba(248,176,73,0.2) 100%)",
          backgroundBlendMode: "overlay",
        }}
        className={`flex min-h-screen w-full flex-col gap-4 p-4 pb-16 text-white lg:p-4 lg:pb-16 xl:p-4`}
      >
        <div
          style={{ display: cropperActive ? "block" : "none" }}
          className="fixed z-50 flex h-screen w-screen flex-col items-center justify-center"
        >
          <ImageCropper
            inputFile={file}
            onCropped={(_file: File | null) => setFile(_file)}
            setCropperActive={setCropperActive}
          />
        </div>
        <a
          className="bg-teal-500 px-4 py-2 italic text-white hover:bg-teal-700"
          href="/"
        >
          back home
        </a>
        <h1
          className={`max-w-full bg-gradient-to-r from-red-500 to-blue-500 font-mono text-lg font-bold shadow-lg shadow-green-300 hover:mix-blend-overlay md:text-4xl ${kabelFont.className} p-16 text-center`}
        >
          $SOLANA OVERLAYER
        </h1>

        <div className="flex w-full flex-row gap-4 px-16">
          <FileUpload onFileUpload={handleFileUpload} />
          <ImagePreview file={file} />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row">
          <ResultPreview
            file={file}
            overlay={selectedOverlay}
            showPfp={showPfp}
            setShowPfp={setShowPfp}
            setCropperActive={setCropperActive}
          />
          <OverlaySelection
            overlays={overlays}
            onOverlaySelect={handleOverlaySelect}
          />
        </div>
      </div>
    </>
  );
};

export default MyComponent;
