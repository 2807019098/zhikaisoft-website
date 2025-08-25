"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Banner from "@/components/Banner";
import { cases, CaseType, TechTag, type CaseItem } from "@/mock/cases";

// 新增类型枚举
const CASE_TYPE_MAP: { [key: number]: string } = {
  0: "全部",
  [CaseType.Website]: "网站建设",
  [CaseType.Ecommerce]: "电商平台",
  [CaseType.BackendSystem]: "后台管理系统",
  [CaseType.MobileApp]: "移动端应用",
  [CaseType.DataVisualization]: "数据可视化",
  [CaseType.Other]: "其他",
};

const TECH_TAG_MAP: { [key: number]: string } = {
  [TechTag.Frontend]: "Web前端",
  [TechTag.SystemDev]: "系统开发",
  [TechTag.DesktopApp]: "窗体应用",
  [TechTag.MiniProgram]: "小程序开发",
  [TechTag.NativeApp]: "原生App",
  [TechTag.HybridApp]: "混合App",
  [TechTag.ApiDev]: "接口开发",
};

const CASE_TYPE_LIST = [
  0,
  CaseType.Website,
  CaseType.Ecommerce,
  CaseType.BackendSystem,
  CaseType.MobileApp,
  CaseType.DataVisualization,
  CaseType.Other,
];

const PAGE_SIZE = 9;

// 获取图片完整URL
const getImgUrl = (path: string) => {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  const prefix = process.env.NEXT_PUBLIC_IMG_DOMAIN || "";
  return prefix + path;
};

export default function CasesPage() {
  const [selectedType, setSelectedType] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 根据选中的类型筛选案例
  const filteredCases = useMemo(() => {
    if (selectedType === 0) {
      return cases;
    }
    return cases.filter((item) => item.type === selectedType);
  }, [selectedType]);

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
      const button = container.querySelector(
        `[data-type="${type}"]`
      ) as HTMLElement;
      if (button) {
        const containerWidth = container.offsetWidth;
        const buttonLeft = button.offsetLeft;
        const buttonWidth = button.offsetWidth;
        const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  // 处理分页
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 获取技术标签显示文本
  const getTechTagsText = (tags: TechTag[]) => {
    return tags.map((tag) => TECH_TAG_MAP[tag]).join("、");
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <Header />
      <Banner
        title="案例"
        subtitle="服务众多知名企业，助力业务升级"
        bgImage="https://picsum.photos/seed/cases/1200/320"
        breadcrumbs={[{ name: "首页", href: "/" }, { name: "案例" }]}
      />
      <main className="flex-1 w-full max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto py-8 px-3 sm:px-6 md:px-8">
        {/* Tab切换 - 移动端支持滑动 */}
        <div className="mb-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {CASE_TYPE_LIST.map((type) => (
              <button
                key={type}
                data-type={type}
                onClick={() => handleTypeChange(type)}
                className={`px-6 py-3 cursor-pointer rounded-[3px] text-[15px] font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 mb-8">
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
                  {CASE_TYPE_MAP[item.type]} · {getTechTagsText(item.tags)}
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
              className={`px-3 py-2 cursor-pointer rounded-[3px] text-[14px] font-medium transition-all duration-300 ${
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
                className={`px-3 py-2 cursor-pointer rounded-[3px] text-[14px] font-medium transition-all duration-300 ${
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
              className={`px-3 py-2 cursor-pointer rounded-[3px] text-[14px] font-medium transition-all duration-300 ${
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
