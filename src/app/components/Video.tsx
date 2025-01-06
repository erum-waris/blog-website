'use client';

import { usePathname } from 'next/navigation';

const VideoBackground = () => {
  const pathname = usePathname();

  // Adjust the condition to show the video on specific pages or dynamic routes
  const isVideoPage = 
    pathname === '/' || 
    pathname.startsWith('/blogs') || // Includes dynamic blog routes like `/blogs/[id]`
    pathname === '/about' || 
    pathname === '/contact';

  if (!isVideoPage) return null;

  return (
    <video
      autoPlay
      loop
      muted
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/video/hero-video.mp4" type="video/mp4" />
      
    </video>
  );
};

export default VideoBackground;
