import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

interface NewsItem {
  id: string;
  title: string;
  desc: string;
  date: string;
  image: string;
  link: string;
}

const PAGE_SIZE = 9;

export default async function NewsPage() {
  const res = await fetch("http://localhost:3000/api/news", {
    cache: "no-store",
  });
  const news: NewsItem[] = await res.json();
  // 默认展示全部新闻（如需分页/搜索可用客户端组件实现）
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="新闻动态"
        subtitle="让价值共享 记录企业发展脚步"
        bgImage="https://picsum.photos/seed/news/1200/320"
      />
      <main className="flex-1 w-full md:max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] mx-auto py-16 px-3 sm:px-6 md:px-8 bg-white">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">新闻动态</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl transition p-6 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-semibold text-cyan-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 text-center mb-4">{item.desc}</p>
              <span className="text-gray-400 text-xs mt-auto">{item.date}</span>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
