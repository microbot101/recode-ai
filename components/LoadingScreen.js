// components/Loading.js
import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

const Loading = () => {
  return (
    <div className="loading-overlay">
      <Image 
        src="/loading.gif"
        alt="Loading"
        width={200} // You can adjust the size as needed
        height={200}
      />
    </div>
  );
};

export default Loading;
