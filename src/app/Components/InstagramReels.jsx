"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Send, Pause, Play, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Draggable } from 'gsap/dist/Draggable';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

const InstagramReels = () => {
  const containerRef = useRef(null);
  const reelsRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoScrollRef = useRef(null);
  const [loadError, setLoadError] = useState({});

  const reelsData = [
    { id: 1, link: 'https://www.instagram.com/reel/DBeKE-Qs8d6/?utm_source=ig_web_copy_link', likes: '1.2k', comments: '234' },
    { id: 2, link: 'https://www.instagram.com/reel/DBWoZ2WshKP/?utm_source=ig_web_copy_link', likes: '3.4k', comments: '567' },
    { id: 3, link: 'https://www.instagram.com/reel/DBO-HQ4MrHk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '5.6k', comments: '890' },
    { id: 4, link: 'https://www.instagram.com/reel/C--m_ZoProW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '7.8k', comments: '123' },
    { id: 5, link: 'https://www.instagram.com/reel/C-2dIzXIAbZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '9.0k', comments: '456' },
    { id: 6, link: 'https://www.instagram.com/reel/C19peaPuGAc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '2.3k', comments: '789' },
    { id: 7, link: 'https://www.instagram.com/reel/DBeKE-Qs8d6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '1.2k', comments: '234' },
    { id: 8, link: 'https://www.instagram.com/reel/DBWoZ2WshKP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '3.4k', comments: '567' },
    { id: 9, link: 'https://www.instagram.com/reel/DBO-HQ4MrHk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '5.6k', comments: '890' },
    { id: 10, link: 'https://www.instagram.com/reel/C--m_ZoProW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '7.8k', comments: '123' },
    { id: 11, link: 'https://www.instagram.com/reel/C-2dIzXIAbZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '9.0k', comments: '456' },
    { id: 12, link: 'https://www.instagram.com/reel/C19peaPuGAc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', likes: '2.3k', comments: '789' },
    // Other reels...
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reels = reelsRef.current;
    if (!reels) return;

    const numReels = reelsData.length;
    const reelWidth = 324; // 300px + 24px gap
    const totalWidth = reelWidth * numReels;
    const containerWidth = containerRef.current?.offsetWidth || 0;

    // Reset transform before starting animations
    gsap.set(reels, { x: 0 });

    // Only set up animations if there's enough content to scroll
    if (totalWidth > containerWidth) {
      // Set up simple automatic scrolling
      autoScrollRef.current = gsap.to(reels, {
        x: () => -(totalWidth - containerWidth + 48),
        ease: "linear",
        duration: numReels * 10, // Slower scrolling for a more relaxed feel
        repeat: -1,
        paused: !isPlaying,
      });

      // Set up manual dragging
      const draggable = Draggable.create(reels, {
        type: "x",
        inertia: true,
        bounds: {
          minX: -(totalWidth - containerWidth + 48),
          maxX: 0,
        },
        onDrag: function() {
          if (autoScrollRef.current) {
            autoScrollRef.current.pause();
          }
        },
        onDragEnd: function() {
          if (isPlaying && autoScrollRef.current) {
            autoScrollRef.current.play();
          }
        },
      })[0];

      // Simple fade-in animation for reels
      gsap.from(reels.children, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      });

      // Clean up
      return () => {
        if (autoScrollRef.current) {
          autoScrollRef.current.kill();
        }
        if (draggable) {
          draggable.kill();
        }
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [isPlaying, reelsData.length]);

  useEffect(() => {
    if (autoScrollRef.current) {
      if (isPlaying) {
        autoScrollRef.current.play();
      } else {
        autoScrollRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReelError = (id) => {
    setLoadError(prev => ({ ...prev, [id]: true }));
  };

  const retryLoad = (id) => {
    setLoadError(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div className="relative font-Outfit w-full py-8" ref={containerRef}>
      <div className="flex justify-between items-center mb-6 px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Instagram Reels
        </h2>
        <button
          onClick={togglePlayPause}
          className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
      </div>
      <div className="relative overflow-hidden">
        <div 
          ref={reelsRef} 
          className="flex space-x-6 px-4 md:px-6 lg:px-8 touch-pan-y cursor-grab active:cursor-grabbing"
          style={{ willChange: 'transform' }}
        >
          {reelsData.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-[300px] h-[533px] relative group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-black overflow-hidden"
            >
              {loadError[reel.id] ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
                  <p className="mb-4">Failed to load reel</p>
                  <button
                    onClick={() => retryLoad(reel.id)}
                    className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Retry</span>
                  </button>
                </div>
              ) : (
                <iframe
                  src={`https://www.instagram.com/reel/${reel.link.split('/').pop()}/embed/`}
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                  loading="lazy"
                  title={`Instagram Reel ${reel.id}`}
                  onError={() => handleReelError(reel.id)}
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-pink-500 transition-colors" aria-label={`Like - ${reel.likes} likes`}>
                      <Heart className="w-6 h-6" />
                      <span>{reel.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors" aria-label={`Comment - ${reel.comments} comments`}>
                      <MessageCircle className="w-6 h-6" />
                      <span>{reel.comments}</span>
                    </button>
                  </div>
                  <button className="hover:text-blue-500 transition-colors" aria-label="Share">
                    <Send className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramReels;
