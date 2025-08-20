// components/PhotoGallery.js
import React from 'react';

const PhotoGallery = ({ photos }) => {
  if (!photos || photos.length === 0) {
    return <div className="text-center p-10">No photos found.</div>;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {photos.map(photo => (
          <div
            key={photo.public_id}
            className="overflow-hidden shadow-md transition-shadow duration-300 ease-in-out"
          >
            <img
              src={photo.optimized_url || photo.secure_url}
              alt={photo.public_id}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out animate-fadeIn"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;