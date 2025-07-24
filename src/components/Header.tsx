"use client";
import React, { useState, MouseEvent } from "react";
import Link from "next/link";

const menu = [
  { name: "案例", href: "/cases" },
  {
    name: "互动开发",
    href: "/interactive",
    children: [
      { name: "网站建设", href: "/interactive/web" },
      { name: "APP开发", href: "/interactive/app" },
      { name: "微信应用开发", href: "/interactive/wechat" },
      { name: "系统开发", href: "/interactive/system" },
      { name: "小程序开发", href: "/interactive/miniprogram" },
    ],
  },
  { name: "数字营销", href: "/marketing" },
  { name: "智慧数据", href: "/data" },
  { name: "业务单元", href: "/business" },
  { name: "招募", href: "/join" },
  { name: "关于智开", href: "/about" },
  { name: "新闻动态", href: "/news" },
  { name: "联系我们", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<null | string>(null);
  const handleMenuClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    setSubmenu(null);
  };
  return (
    <header className="fixed w-full z-50 bg-white border-b border-gray-100">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-3 sm:px-6 md:px-8 h-[60px]">
        <Link
          href="/"
          className="text-[22px] font-bold tracking-widest text-[#063771] select-none"
          style={{ letterSpacing: "2px" }}
        >
          ZKSoft
        </Link>
        <div className="flex items-center">
          {/* 桌面端菜单 */}
          <div className="hidden lg:flex space-x-1 xl:space-x-2">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 xl:px-4 py-1 text-[15px] font-medium text-[#222] hover:text-[#0b5fa5] transition border-none bg-transparent"
                onClick={handleMenuClick}
                style={{ lineHeight: "60px" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* 汉堡按钮 */}
          <button
            className="lg:hidden text-[#063771] focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="菜单"
          >
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
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
        <>
          {/* 遮罩层 */}
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
            onClick={() => {
              setOpen(false);
              setSubmenu(null);
            }}
          />
          {/* 一级菜单侧边栏 */}
          <div
            className="lg:hidden fixed top-0 left-auto right-0 h-full w-[75vw] max-w-xs bg-white z-50 shadow-xl flex flex-col animate-slide-in"
            style={{ minWidth: 240 }}
          >
            <button
              className="absolute top-5 right-5 text-2xl text-[#063771] focus:outline-none"
              onClick={() => {
                setOpen(false);
                setSubmenu(null);
              }}
              aria-label="关闭菜单"
            >
              ×
            </button>
            <nav className="flex flex-col mt-16 px-6 space-y-2">
              {menu.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <button
                      className="w-full flex items-center justify-between text-[16px] font-medium text-[#063771] hover:text-[#0b5fa5] py-3 border-b border-gray-100 text-left transition"
                      onClick={() => setSubmenu(item.name)}
                    >
                      <span>{item.name}</span>
                      <span className="text-lg">&gt;</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-[16px] font-medium text-[#063771] hover:text-[#0b5fa5] py-3 border-b border-gray-100 text-left transition"
                      onClick={handleMenuClick}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
          {/* 二级菜单侧边栏，覆盖在一级菜单右侧 */}
          <div
            className={`lg:hidden fixed top-0 right-0 h-full w-[75vw] max-w-xs bg-white z-[60] shadow-xl flex flex-col transition-transform duration-300 ${
              submenu ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ minWidth: 240 }}
          >
            <button
              className="absolute top-5 left-5 text-2xl text-[#063771] focus:outline-none"
              onClick={() => setSubmenu(null)}
              aria-label="返回主菜单"
            >
              &#8592;
            </button>
            <nav className="flex flex-col mt-16 px-6 space-y-2">
              <div className="text-lg font-bold text-[#063771] mb-4">
                互动开发
              </div>
              {menu
                .find((m) => m.name === submenu)
                ?.children?.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block text-[16px] font-medium text-[#063771] hover:text-[#0b5fa5] py-3 border-b border-gray-100 text-left transition"
                    onClick={handleMenuClick}
                  >
                    {sub.name}
                  </Link>
                ))}
            </nav>
          </div>
          <style jsx global>{`
            @keyframes slide-in {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
            .animate-slide-in {
              animation: slide-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .translate-x-full {
              transform: translateX(100%);
            }
            .translate-x-0 {
              transform: translateX(0);
            }
          `}</style>
        </>
      )}
    </header>
  );
}
