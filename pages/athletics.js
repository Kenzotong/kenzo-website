// pages/athletics.js
import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import cloudinary from '../lib/cloudinary';

export async function getServerSideProps() {
  try {
    // Fetch images tagged "Kenzo-Athletics"
    const result = await cloudinary.api.resources_by_tag('Kenzo-Athletics', {
      max_results: 30,
      type: 'upload',
    });

    const photos = result.resources.map(resource => {
      const baseUrl = resource.secure_url || resource.url;
      const optimized_url = baseUrl.includes('/image/upload/')
        ? baseUrl.replace(
            '/image/upload/',
            '/image/upload/f_auto,q_auto,w_auto,dpr_auto/'
          )
        : baseUrl;
      return {
        public_id:    resource.public_id,
        secure_url:   baseUrl,
        optimized_url,
      };
    });

    return { props: { photos } };
  } catch (error) {
    console.error('Error fetching Athletics images:', error);
    return { props: { photos: [] } };
  }
}

export default function AthleticsPage({ photos }) {
  return <PhotoGallery photos={photos} />;
}