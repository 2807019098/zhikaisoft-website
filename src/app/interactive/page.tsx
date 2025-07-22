"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  const [items, setItems] = useState<InteractiveItem[]>([]);
  const [activeTab, setActiveTab] = useState("web");

  useEffect(() => {
    fetch("/api/interactive")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filtered = items.filter((item) => item.category === activeTab);

  return (
    <div className="min-h-screen bg-cyan-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">互动开发</h1>
        <div className="flex space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-cyan-500 text-white border-cyan-500"
                  : "bg-white text-cyan-700 border-cyan-200 hover:bg-cyan-100"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
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
