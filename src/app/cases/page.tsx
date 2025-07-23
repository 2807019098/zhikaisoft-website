"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Banner from "@/components/Banner";

interface CaseItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  link: string;
}

const PAGE_SIZE = 9;

export default function CasesPage() {
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("/api/cases")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  const filtered = cases.filter(
    (item) => item.title.includes(search) || item.desc.includes(search)
  );
  const total = filtered.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="案例"
        subtitle="服务众多知名企业，助力业务升级"
        bgImage="https://picsum.photos/seed/cases/1200/320"
      />
      <main className="flex-1 w-full py-8 px-6 md:max-w-6xl md:mx-auto md:py-16">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">案例</h1>
        <div className="mb-6 flex items-center justify-between">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="搜索案例关键词..."
            className="px-4 py-2 border border-cyan-200 rounded w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <span className="text-gray-500 text-sm">共 {total} 条</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {paged.map((item) => (
            <div
              key={item.id}
              className="block bg-white rounded-xl shadow hover:shadow-lg transition p-2 sm:p-4 md:p-6 flex flex-col items-center w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[160px] h-32 object-cover rounded mb-4 md:w-32"
              />
              <h2 className="text-xl font-semibold text-cyan-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 text-center mb-4">{item.desc}</p>
              <Link
                href={`/cases/${item.id}`}
                className="mt-auto px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
              >
                查看详情
              </Link>
            </div>
          ))}
        </div>
        {/* 分页控件 */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded border font-semibold transition-all duration-200 ${
                  page === i + 1
                    ? "bg-cyan-500 text-white border-cyan-500"
                    : "bg-white text-cyan-700 border-cyan-200 hover:bg-cyan-100"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
