"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import InteractiveSubMenu from "@/components/InteractiveSubMenu";
import Banner from "@/components/Banner";

interface InteractiveItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  category: string;
}

const tabs = [
  { key: "web", label: "网站建设" },
  { key: "app", label: "APP开发" },
  { key: "wechat", label: "微信应用开发" },
  { key: "system", label: "系统开发" },
];

export default function InteractivePage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      <Banner
        title="互动开发"
        subtitle="专注企业个性化定制开发 以实力为专业注解"
        bgImage="https://picsum.photos/seed/interactive/1200/320"
      />
      <div className="max-w-5xl mx-auto">
        <InteractiveSubMenu active="" />
        <div className="bg-white rounded-xl shadow p-8 mt-8">
          <p className="text-lg text-gray-700 mb-4">
            我们为企业提供小程序开发、APP开发、网站开发、系统开发、微信应用开发等全方位互动开发服务，助力企业数字化转型升级。
          </p>
          <img
            src="https://picsum.photos/seed/interactive-main/900/300"
            alt="互动开发主图"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
