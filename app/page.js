"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

// Example component that changes images on click
const ImageSwitcher = () => {
  // Array of image URLs
  const images = ["/img/img1.jpg", "/img/img2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const switchImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image after the last
  };

  return (
    <figure className="">
      <Image
        onClick={switchImage} // Switch image on click
        alt="Kitsune Arkitekter"
        className="object-cover"
        height={200}
        width={400}
        src={images[currentIndex]} // Display the current image
        style={{
          display: "block",
        }}
      />
    </figure>
  );
};

export default function Home() {
  return (
    <main className="flex flex-row  justify-between h-[100vh]	flex--flow w-full">
      <div className="flex flex-col stagger justify-between p-4">
        <p>KITSUNE ARKITEKTER</p>
        <div className="flex flex-col stagger">
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
            href="https://www.instagram.com/steinhalvorsenarkitekter/"
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
