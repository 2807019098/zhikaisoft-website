import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Banner from "@/components/Banner";

// 新增类型枚举
const CASE_TYPE_MAP: { [key: number]: string } = {
  0: "全部",
  1: "H5",
  2: "网站建设",
  3: "微信开发",
  4: "APP开发",
  5: "系统开发",
};
const CASE_TYPE_LIST = [0, 1, 2, 3, 4, 5];

interface CaseItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  link: string;
  type: number;
}

const PAGE_SIZE = 9;

// 获取图片完整URL
const getImgUrl = (path: string) => {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  const prefix = process.env.NEXT_PUBLIC_IMG_DOMAIN || "";
  return prefix + path;
};

export default async function CasesPage() {
  const res = await fetch("http://localhost:3000/api/cases", {
    cache: "no-store",
  });
  const cases: CaseItem[] = await res.json();
  // 默认展示全部案例（如需筛选/分页可用客户端组件实现）
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="案例"
        subtitle="服务众多知名企业，助力业务升级"
        bgImage="https://picsum.photos/seed/cases/1200/320"
      />
      <main className="flex-1 w-full max-w-[1200px] mx-auto py-8 px-3 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {cases.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="block bg-white rounded-[3px] transition flex flex-col w-full overflow-hidden group cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <div className="relative w-full overflow-hidden cursor-pointer">
                <img
                  src={getImgUrl(item.image)}
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-base font-medium tracking-wider">
                    查看项目
                  </span>
                </div>
              </div>
              <div className="px-4 pt-4 pb-0 flex-1 flex flex-col">
                <h2 className="text-[20px] font-normal text-[#222] leading-tight mb-1 w-full text-left">
                  {item.title}
                </h2>
                <p className="text-[14px] text-[#888] font-normal leading-[1.7] w-full text-left mb-5">
                  {CASE_TYPE_MAP[item.type]}
                </p>
                {/* 分割线 */}
                <div className="w-full h-px bg-[#eee] mt-2 mb-0" />
                <div className="mt-auto flex items-center justify-between w-full px-1 py-3 bg-white font-medium transition ml-0 group items-center">
                  <span className="pl-1 text-[15px] text-[#888] group-hover:text-[#222]">
                    Details
                  </span>
                  <span className="flex-1" />
                  <img
                    src="/assets/images/ico_01.png"
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* 分页控件 */}
        {/* totalPages and pagination logic removed as per edit hint */}
      </main>
      <Footer />
    </div>
  );
}
