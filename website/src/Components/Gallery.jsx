import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Gallery.css';

const galleryData = {
  category1: {
    title: 'Category 1',
    images: [
      { src: '/images/cat1-img1.jpg', alt: 'Image 1' },
      { src: '/images/cat1-img2.jpg', alt: 'Image 2' },
    ],
  },
  category2: {
    title: 'Category 2',
    images: [
      { src: '/images/cat2-img1.jpg', alt: 'Image 1' },
      { src: '/images/cat2-img2.jpg', alt: 'Image 2' },
    ],
  },
};

const Gallery = () => {
  const { category } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Adjusted the way category is used to access galleryData
  const galleryInfo = category && galleryData[category] ? galleryData[category] : null;

  if (!galleryInfo) {
    return <div className="text-center text-2xl mt-10">Category not found</div>;
  }

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1); // Reset zoom on image click
  };

  const handleZoom = (increment) => {
    setZoomLevel((prev) => Math.max(1, prev + increment));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center mb-8">{galleryInfo.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryInfo.images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleImageClick(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <button
                onClick={() => handleZoom(0.2)}
                className="bg-gray-700 text-white px-4 py-2 rounded-md mr-2"
              >
                Zoom In
              </button>
              <button
                onClick={() => handleZoom(-0.2)}
                className="bg-gray-700 text-white px-4 py-2 rounded-md"
              >
                Zoom Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
