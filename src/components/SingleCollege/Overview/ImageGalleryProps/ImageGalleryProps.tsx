import Image from "next/image";
import React from "react";

interface ImageGalleryProps {
  images: any[];
  title: string;
  subtitle: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  title,
  subtitle,
}) => {
  const categories = [
    "Hostels",
    "Library",
    "Academic Buildings",
    "Extra curriculars",
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-1">{title}</h1>
      <p className="text-gray-600 mb-4">{subtitle}</p>

      <div className="flex flex-wrap gap-4 mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full min-w-max"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        <div className="col-span-2 md:row-span-2">
          <Image
            src={images[0]}
            alt="Main gallery image"
            className="w-full h-full rounded-lg"
            width={800}
            height={500}
            layout="responsive"
          />
        </div>
        {images?.slice(1, 5)?.map((image: any, index: any) => (
          <div key={index} className={index === 3 ? "relative" : ""}>
            <Image
              src={image}
              alt={`Gallery image ${index + 2}`}
              className="w-full h-full rounded-lg"
              width={200}
              height={200}
              layout="responsive"
            />
            {index === 3 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg cursor-pointer">
                <span className="text-white text-lg font-semibold">
                  See more
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
