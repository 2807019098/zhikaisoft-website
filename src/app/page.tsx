import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

interface SectionPreviewProps {
  title: string;
  desc: string;
  href: string;
  bg: string;
}

function SectionPreview({ title, desc, href, bg }: SectionPreviewProps) {
  return (
    <section
      className={`min-h-[60vh] flex flex-col justify-center items-center ${bg} text-white transition-all duration-500`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        {title}
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-xl text-center opacity-80">
        {desc}
      </p>
      <Link
        href={href}
        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-200"
      >
        了解更多
      </Link>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      <main>
        <Hero />
        <SectionPreview
          title="关于我们"
          desc="智开软件，专注企业数字化，顶尖团队，创新驱动。"
          href="/about"
          bg="bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-950"
        />
        <SectionPreview
          title="我们的服务"
          desc="高端定制开发、数字化转型、系统集成、UI/UX设计。"
          href="/services"
          bg="bg-gradient-to-br from-cyan-900 via-gray-900 to-black"
        />
        <SectionPreview
          title="成功案例"
          desc="服务众多知名企业，助力业务升级。"
          href="/cases"
          bg="bg-gradient-to-br from-black via-gray-900 to-cyan-900"
        />
        <SectionPreview
          title="联系我们"
          desc="欢迎咨询合作，开启数字化新篇章。"
          href="/contact"
          bg="bg-gradient-to-br from-gray-900 via-cyan-900 to-black"
        />
      </main>
      <Footer />
    </div>
  );
}
