import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

interface MarketingItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export default async function MarketingPage() {
  const res = await fetch("http://localhost:3000/api/marketing", {
    cache: "no-store",
  });
  const items: MarketingItem[] = await res.json();
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="数字营销"
        subtitle="洞悉市场趋势演变 让传播回归社会"
        bgImage="https://picsum.photos/seed/marketing/1200/320"
      />
      <main className="flex-1 w-full max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">数字营销</h1>
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
