import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

interface ContactItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export default async function ContactPage() {
  const res = await fetch("http://localhost:3000/api/contact", {
    cache: "no-store",
  });
  const items: ContactItem[] = await res.json();
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="联系我们"
        subtitle="欢迎咨询合作，开启数字化新篇章"
        bgImage="https://picsum.photos/seed/contact/1200/320"
      />
      <main className="flex-1 w-full md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto py-16 px-3 sm:px-6 md:px-8 bg-white">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">联系我们</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 flex flex-col items-center"
            >
              <div className="mb-4 text-cyan-500 text-3xl">
                {item.icon === "location" && <span>📍</span>}
                {item.icon === "phone" && <span>📞</span>}
                {item.icon === "mail" && <span>✉️</span>}
              </div>
              <h2 className="text-xl font-semibold text-cyan-700 mb-2">
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
