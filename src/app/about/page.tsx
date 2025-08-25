import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

interface AboutItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export default async function AboutPage() {
  const res = await fetch("http://localhost:3000/api/about", {
    cache: "no-store",
  });
  const items: AboutItem[] = await res.json();
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="关于智开"
        subtitle="创新不是要改变世界，而是不再重复昨天"
        bgImage="https://picsum.photos/seed/about/1200/320"
      />
      <main className="flex-1 w-full max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">关于智开</h1>
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
