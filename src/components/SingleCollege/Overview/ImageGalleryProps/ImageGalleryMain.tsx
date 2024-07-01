import type { NextPage } from "next";
import ImageGallery from "./ImageGalleryProps";
import ImageGall from "@/assets/images/Rectangle 716.png";

const images = [ImageGall, ImageGall, ImageGall, ImageGall, ImageGall];

const ImageGalleryMain: NextPage = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <ImageGallery
        images={images}
        title="Manipal University Jaipur Gallery"
        subtitle="View photos and videos of campus life, hostels, cafeteria, and library."
      />
    </div>
  );
};

export default ImageGalleryMain;
