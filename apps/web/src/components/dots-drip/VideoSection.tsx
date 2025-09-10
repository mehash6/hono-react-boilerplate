import React from 'react';

const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export function VideoSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <video
          className="w-full h-auto rounded-lg shadow-lg"
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
