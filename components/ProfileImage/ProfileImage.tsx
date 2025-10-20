'use client';

import { useState } from 'react';

export default function ProfileImage() {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl relative">
      <img 
        src={imageError 
          ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
          : '/images/Profile_image.jpeg'}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          objectPosition: 'center 20%', // Adjust this value to position the image vertically
        }}
        onError={handleImageError}
      />
    </div>
  );
}
