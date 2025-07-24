"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { getImgUrl } from "@/utils/getImgUrl";

interface BannerParallaxProps {
  cover: string;
  title: string;
  breadcrumbs: { name: string; href?: string }[];
}

export default function BannerParallax({
  cover,
  title,
  breadcrumbs,
}: BannerParallaxProps) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const banner = bannerRef.current;
      if (!banner) return;
      const scrollY = window.scrollY;
      banner.style.backgroundPosition = `center ${scrollY * 0.4}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative w-screen h-[200px] md:h-[480px] flex items-end left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      style={{
        background: `url(${getImgUrl(cover)}) center/cover no-repeat`,
        backgroundPosition: "center 0px",
        transition: "background-position 0.2s",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex items-center gap-2 text-white text-sm md:text-base px-6 pb-6 select-none">
        {breadcrumbs.map((bc, i) =>
          bc.href ? (
            <React.Fragment key={bc.name}>
              <Link href={bc.href} className="hover:underline opacity-80">
                {bc.name}
              </Link>
              {i < breadcrumbs.length - 1 && (
                <span className="opacity-60">/</span>
              )}
            </React.Fragment>
          ) : (
            <span key={bc.name} className="font-medium opacity-100">
              {bc.name}
            </span>
          )
        )}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-white text-2xl md:text-4xl font-normal drop-shadow-lg mb-2 text-center tracking-wide">
          {title}
        </h1>
      </div>
    </div>
  );
}
