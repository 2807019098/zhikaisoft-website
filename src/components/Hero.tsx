"use client";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-cyan-900 text-white relative overflow-hidden"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center drop-shadow-lg">
        引领未来的软件创新
      </h1>
      <p className="text-xl md:text-2xl mb-10 text-center max-w-2xl">
        专注于高端定制开发，助力企业数字化转型，赋能业务增长
      </p>
      <a
        href="#contact"
        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-200"
      >
        立即咨询
      </a>
    </section>
  );
}
