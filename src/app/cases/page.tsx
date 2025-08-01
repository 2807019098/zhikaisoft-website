"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
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

export default function CasesPage() {
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [selectedType, setSelectedType] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 获取案例数据
  useEffect(() => {
    const fetchCases = async () => {
      const res = await fetch("http://localhost:3000/api/cases", {
        cache: "no-store",
      });
      const data = await res.json();
      setCases(data);
    };
    fetchCases();
  }, []);

  // 根据选中的类型筛选案例
  const filteredCases = useMemo(() => {
    if (selectedType === 0) {
      return cases;
    }
    return cases.filter(item => item.type === selectedType);
  }, [cases, selectedType]);

  // 计算分页
  const totalPages = Math.ceil(filteredCases.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentCases = filteredCases.slice(startIndex, endIndex);

  // 处理类型切换
  const handleTypeChange = (type: number) => {
    setSelectedType(type);
    setCurrentPage(1); // 重置到第一页
    
    // 移动端自动滚动到选中的tab
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const button = container.querySelector(`[data-type="${type}"]`) as HTMLElement;
      if (button) {
        const containerWidth = container.offsetWidth;
        const buttonLeft = button.offsetLeft;
        const buttonWidth = button.offsetWidth;
        const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  // 处理分页
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="案例"
        subtitle="服务众多知名企业，助力业务升级"
        bgImage="https://picsum.photos/seed/cases/1200/320"
      />
      <main className="flex-1 w-full max-w-[1200px] mx-auto py-8 px-3 sm:px-6 md:px-8">
        {/* Tab切换 - 移动端支持滑动 */}
        <div className="mb-8">
          <div 
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {CASE_TYPE_LIST.map((type) => (
              <button
                key={type}
                data-type={type}
                onClick={() => handleTypeChange(type)}
                className={`px-6 py-3 rounded-[3px] text-[15px] font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                  selectedType === type
                    ? "bg-[#0b5fa5] text-white"
                    : "bg-white text-[#666] hover:bg-[#f5f5f5]"
                }`}
              >
                {CASE_TYPE_MAP[type]}
              </button>
            ))}
          </div>
        </div>

        {/* 案例列表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8">
          {currentCases.map((item) => (
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
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            {/* 上一页 */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-[3px] text-[14px] font-medium transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-[#666] hover:bg-[#f5f5f5]"
              }`}
            >
              上一页
            </button>

            {/* 页码 */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-[3px] text-[14px] font-medium transition-all duration-300 ${
                  currentPage === page
                    ? "bg-[#0b5fa5] text-white"
                    : "bg-white text-[#666] hover:bg-[#f5f5f5]"
                }`}
              >
                {page}
              </button>
            ))}

            {/* 下一页 */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-[3px] text-[14px] font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-[#666] hover:bg-[#f5f5f5]"
              }`}
            >
              下一页
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
