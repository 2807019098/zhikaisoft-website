"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const subMenus = [
  { key: "", label: "互动开发", href: "/interactive" },
  { key: "miniprogram", label: "小程序开发", href: "/interactive/miniprogram" },
  { key: "app", label: "APP开发", href: "/interactive/app" },
  { key: "web", label: "网站开发", href: "/interactive/web" },
  { key: "system", label: "系统开发", href: "/interactive/system" },
  { key: "wechat", label: "微信应用开发", href: "/interactive/wechat" },
];

export default function InteractiveSubMenu({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 判断当前高亮
  const getActive = (href: string) => pathname === href;

  return (
    <nav className="w-full mb-6">
      {/* PC横向菜单 */}
      <div className="hidden md:flex justify-center gap-2">
        {subMenus.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 text-base ${
              getActive(item.href)
                ? "bg-[#0b5fa5] text-white border-[#0b5fa5]"
                : "bg-white text-[#0b5fa5] border-[#e0eaf2] hover:bg-[#f0f6fa]"
            } `}
          >
            {item.label}
          </Link>
        ))}
      </div>
      {/* 移动端折叠菜单 */}
      <div className="md:hidden w-full">
        <button
          className="w-full flex justify-between items-center px-4 py-3 bg-white border border-[#e0eaf2] rounded-full text-[#0b5fa5] font-semibold text-base focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          <span>
            {subMenus.find((item) => getActive(item.href))?.label || "互动开发"}
          </span>
          <svg
            className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="#0b5fa5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {open && (
          <div className="mt-2 bg-white border border-[#e0eaf2] rounded-xl shadow-lg overflow-hidden">
            {subMenus.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block px-6 py-3 text-base font-semibold ${
                  getActive(item.href)
                    ? "bg-[#0b5fa5] text-white"
                    : "text-[#0b5fa5] hover:bg-[#f0f6fa]"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
