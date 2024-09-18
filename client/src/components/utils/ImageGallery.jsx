// components/product/ImageGallery.jsx

import Image from "next/image";
import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg bg-[#F3F3F3] w-full md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] p-4 overflow-hidden">
        <Image
          src={selectedImage}
          width={500}
          height={500}
          alt="Product Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex gap-2 md:gap-3 mt-4 overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] overflow-hidden rounded-lg bg-[#F3F3F3]"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              width={70}
              height={70}
              alt={`Thumbnail ${index + 1}`}
              className="object-cover w-full h-full px-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
