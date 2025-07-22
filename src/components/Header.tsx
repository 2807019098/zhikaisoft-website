"use client";
import React, { useState, MouseEvent } from "react";
import Link from "next/link";

const menu = [
  { name: "案例", href: "/cases" },
  { name: "互动开发", href: "/interactive" },
  { name: "数字营销", href: "/marketing" },
  { name: "智慧数据", href: "/data" },
  { name: "业务单元", href: "/business" },
  { name: "招募", href: "/join" },
  { name: "关于贝聿", href: "/about" },
  { name: "新闻动态", href: "/news" },
  { name: "联系我们", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
  };
  return (
    <header className="fixed w-full z-50 bg-white shadow-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold tracking-widest text-[#063771]">
          ZKSoft
        </div>
        <div className="flex items-center space-x-2 md:space-x-6">
          <div className="hidden md:flex space-x-2 md:space-x-6">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded transition font-semibold text-[#063771] hover:bg-[#063771] hover:text-white hover:shadow-md focus:bg-[#063771] focus:text-white"
                onClick={handleMenuClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-[#063771] focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="菜单"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path
                stroke="#063771"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* 移动端菜单 */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col py-2">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-3 text-[#063771] hover:bg-[#063771] hover:text-white font-semibold transition"
                onClick={handleMenuClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
