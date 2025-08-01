import React from "react";
import Link from "next/link";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbs?: Array<{ name: string; href?: string }>;
}

export default function Banner({
  title,
  subtitle,
  bgImage,
  breadcrumbs,
}: BannerProps) {
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

      {/* 面包屑导航 */}
      {breadcrumbs && (
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-white text-sm md:text-base">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {item.href ? (
                <Link href={item.href} className="hover:underline opacity-80">
                  {item.name}
                </Link>
              ) : (
                <span className="font-medium opacity-100">{item.name}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="opacity-60">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
