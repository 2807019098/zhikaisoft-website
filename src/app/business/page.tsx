import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

interface BusinessItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export default async function BusinessPage() {
  const res = await fetch("http://localhost:3000/api/business", {
    cache: "no-store",
  });
  const items: BusinessItem[] = await res.json();
  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col">
      <Header />
      <Banner
        title="业务单元"
        subtitle="为企业量身打造数字化解决方案，提升核心竞争力"
        bgImage="https://picsum.photos/seed/business/1200/320"
      />
      <main className="flex-1 w-full md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto py-16 px-3 sm:px-6 md:px-8 bg-white">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">业务单元</h1>
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
