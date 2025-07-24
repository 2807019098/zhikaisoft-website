import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function Banner({ title, subtitle, bgImage }: BannerProps) {
  return (
    <div
      className="w-full h-[220px] md:h-[320px] flex flex-col justify-center items-center relative overflow-hidden mb-8 mt-[60px] md:mt-0"
      style={{
        background: bgImage
          ? `url(${bgImage}) center/cover no-repeat`
          : "linear-gradient(90deg, #e3eafc 0%, #f7f7f7 100%)",
      }}
    >
      <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-white">{subtitle}</p>}
    </div>
  );
}
