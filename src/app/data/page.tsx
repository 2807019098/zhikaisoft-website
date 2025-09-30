import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

interface DataItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export default async function DataPage() {
  const res = await fetch("http://localhost:3000/api/data", {
    cache: "no-store",
  });
  const items: DataItem[] = await res.json();
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="智慧数据"
        subtitle="卓越的交互体验 为更广阔的移动营销而生"
        bgImage="https://picsum.photos/seed/data/1200/320"
      />
      <main className="flex-1 w-full md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto py-16 px-3 sm:px-6 md:px-8 bg-white">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">智慧数据</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded mb-4"
              />
              <h2 className="text-2xl font-semibold text-cyan-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
