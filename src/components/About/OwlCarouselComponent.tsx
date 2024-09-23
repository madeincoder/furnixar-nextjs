'use client';
import Image from 'next/image';
import aboutBannerOne from '../../../public/images/about/about-banner-01.jpg';
import aboutBannerTwo from '../../../public/images/about/about-banner-02.jpg';
import aboutBannerThree from '../../../public/images/about/about-banner-03.jpg';
import dynamic from 'next/dynamic';
import { useEffect, useState, useRef, useMemo } from 'react';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const OwlCarouselComponent = () => {
  const [isMounted, setIsMounted] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Memoize the banners array
  const banners = useMemo(() => [aboutBannerOne, aboutBannerTwo, aboutBannerThree], []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && carouselRef.current) {
      // Function to apply background images to dots
      const applyDotBackgrounds = () => {
        const dots = document.querySelectorAll('.owl-dot');
        if (dots.length > 0) {
          dots.forEach((dot, index) => {
            const slideImage = banners[index]; // Get the respective banner image
            if (slideImage) {
              (dot as HTMLElement).style.backgroundImage = `url(${slideImage.src})`;
              (dot as HTMLElement).style.backgroundSize = 'cover';
              (dot as HTMLElement).style.backgroundPosition = 'center';
            }
          });
        } else {
          setTimeout(applyDotBackgrounds, 200);
        }
      };

      applyDotBackgrounds();
    }
  }, [isMounted, banners]);

  if (!isMounted) {
    return null;
  }

  return (
    <div ref={carouselRef}>
      <OwlCarousel
        className="about-slider owl-carousel"
        dots={true}
        loop={true}
        items={1}
        margin={0}
        autoplay={false}
      >
        {banners.map((banner, index) => (
          <div key={index}>
            <Image
              className="object-cover w-full"
              src={banner}
              width={500}
              height={500}
              alt={`about-banner-${index}`}
            />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default OwlCarouselComponent;
