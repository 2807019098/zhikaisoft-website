"use client";
import React from "react";
import { heroBanners } from "@/mock/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { getImgUrl } from "@/utils/getImgUrl";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[220px] sm:min-h-[320px] md:min-h-[480px] lg:min-h-[600px] flex items-center justify-center overflow-hidden pt-0 sm:pt-0">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, type: "progressbar" }}
        loop
        className="w-full h-full custom-swiper-progressbar"
      >
        {heroBanners.map((slide, i) => (
          <SwiperSlide key={slide.img}>
            <div className="absolute inset-0 w-full h-full">
              <img
                src={getImgUrl(slide.img)}
                alt={slide.title}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b" />
            </div>
            <div className="relative z-10 w-full max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto px-4 flex flex-col items-center justify-center text-center min-h-[320px] md:min-h-[480px] lg:min-h-[600px]">
              <h1 className="text-2xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-base md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                {slide.desc}
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-200"
              >
                立即咨询
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .custom-swiper-progressbar .swiper-pagination-progressbar {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
          width: 160px;
          height: 6px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          overflow: hidden;
          z-index: 30;
          top: unset;
        }
        .custom-swiper-progressbar .swiper-pagination-progressbar-fill {
          background: linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%);
          border-radius: 6px;
          height: 100%;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}
