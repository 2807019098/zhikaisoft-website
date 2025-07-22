"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ContactItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export default function ContactPage() {
  const [items, setItems] = useState<ContactItem[]>([]);

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="min-h-screen bg-cyan-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-cyan-700 mb-8">联系我们</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
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
