import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function Banner({ title, subtitle, bgImage }: BannerProps) {
  return (
    <div
      className="w-full h-[220px] md:h-[320px] flex flex-col justify-center items-center relative overflow-hidden mb-8"
      style={{
        background: bgImage
          ? `url(${bgImage}) center/cover no-repeat`
          : "linear-gradient(90deg, #e3eafc 0%, #f7f7f7 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-[#063771] text-center drop-shadow-lg tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-[#0b5fa5] text-center max-w-2xl drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
