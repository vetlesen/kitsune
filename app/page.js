"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

// Example component that changes images on click
const ImageSwitcher = () => {
  // Array of image URLs
  const imagesWithCaptions = [
    { url: "/img/img1.jpg", caption: "Anton Schjøths gate 12" },
    { url: "/img/img2.jpg", caption: "Anton Schjøths gate 12" },
    { url: "/img/img3.jpg", caption: "Hytte Steinsfjorden" },
    { url: "/img/img4.jpg", caption: "Kildeveien 12" },
    { url: "/img/img5.jpg", caption: "Anton Schjøths gate 12" },
    { url: "/img/img6.jpg", caption: "Anton Schjøths gate 12" },
    { url: "/img/img7.jpg", caption: "Thurmanns gate" },
    { url: "/img/img8.jpg", caption: "Thurmanns gate" },
    { url: "/img/img9.jpg", caption: "Veksthusfløtten 30" },
    { url: "/img/img10.jpg", caption: "Hytte Steinsfjorden" },
    { url: "/img/img11.jpg", caption: "Ås Hageby" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const switchImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesWithCaptions.length); // Loop back to the first image after the last
  };

  return (
    <figure className="cursor-pointer" onClick={switchImage}>
      <Image
        alt={imagesWithCaptions[currentIndex].caption} // Use the caption as alt text
        className="object-cover"
        height={600}
        width={500}
        src={imagesWithCaptions[currentIndex].url} // Display the current image
        style={{
          display: "block",
        }}
      />
      <figcaption className="text-sm flex justify-between">
        {imagesWithCaptions[currentIndex].caption}{" "}
        <span>
          {currentIndex + 1}/{imagesWithCaptions.length}
        </span>
      </figcaption>
      {/* Display the caption */}
    </figure>
  );
};

export default function Home() {
  return (
    <main className="flex flex-row  justify-between h-[100vh]	flex--flow w-full">
      <div className="flex flex-col stagger justify-between p-4">
        <p>KITSUNE ARKITEKTER</p>
        <div className="flex flex-col stagger pt-6 text-sm">
          <Link
            className="hover:underline"
            href="mailto:katrine@kitsunearkitekter.no "
          >
            katrine@kitsunearkitekter.no
          </Link>
          <Link
            className="hover:underline"
            href="https://www.google.com/maps/place/Stensgata+2,+0358+Oslo/data=!4m2!3m1!1s0x46416e761589f2ab:0x2dae784d0dbbc9e0?sa=X&ved=2ahUKEwiMzZySu8mEAxWVEhAIHcWkCxYQ8gF6BAgTEAA"
            target="_blank"
          >
            stensgata 2, 0358 Oslo
          </Link>
          <p>+47 23 23 38 70</p>

          <Link
            className="hover:underline"
            href="https://www.instagram.com/kitsune.arkitekter/"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
      <div className="p-4">
        <ImageSwitcher />
      </div>
    </main>
  );
}
