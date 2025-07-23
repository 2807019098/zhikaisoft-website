import React from "react";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      <Banner
        title="我们的服务"
        subtitle="高端定制开发、数字化转型、系统集成、UI/UX设计"
        bgImage="https://picsum.photos/seed/services/1200/320"
      />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
