import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { caseDetails } from "@/mock/caseDetails";
import { notFound } from "next/navigation";
import React from "react";
import BannerParallax from "@/components/BannerParallax";
import { getImgUrl } from "@/utils/getImgUrl";

interface CaseDetailProps {
  params: Promise<{ id: string }>;
}

export default async function CaseDetail({ params }: CaseDetailProps) {
  const { id } = await params;
  const detail = caseDetails.find((item) => item.id === id);
  if (!detail) return notFound();

  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col">
      <Header />
      {/* 顶部Banner全宽 */}
      <div className="w-full">
        <BannerParallax
          cover={detail.cover}
          title={detail.title}
          breadcrumbs={[
            { name: "首页", href: "/" },
            { name: "案例", href: "/cases" },
            { name: detail.title },
          ]}
        />
      </div>
      {/* 中间内容区 */}
      <main className="flex-1 max-w-[1200px] mx-auto bg-white rounded-[3px] p-0 mt-12 mb-12 w-full">
        <section className="flex flex-col md:flex-row gap-12 px-3 sm:px-6 md:px-8 pt-10 pb-10">
          {/* 左侧简介 */}
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-[#222] mb-2">项目简介</h2>
            <div className="w-12 h-1 bg-[#0b5fa5] rounded mb-6" />
            <div className="text-lg text-[#666] leading-7 mb-6">
              {detail.summary}
            </div>
            <div className="text-[#444] leading-8 text-[17px]">
              {detail.description}
            </div>
          </div>
          {/* 右侧Service区 */}
          {detail.services && detail.services.length > 0 && (
            <div className="w-full md:w-[45%] flex-shrink-0 md:pl-8 md:border-l md:border-[#eee] mt-8 md:mt-0">
              <h3 className="text-lg font-semibold text-[#222] mb-3">
                服务内容
              </h3>
              <ul className="space-y-2">
                {detail.services.map((srv) => (
                  <li
                    key={srv}
                    className="text-[#666] text-base font-medium pl-2 list-disc list-inside"
                  >
                    {srv}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
      {/* 下方大图区 */}
      {detail.images && detail.images.length > 0 && (
        <section className="bg-[#f7f7f7] w-full">
          <div className="max-w-[1200px] mx-auto flex flex-col w-full">
            {detail.images.map((img, idx) => (
              <div
                key={img}
                className="rounded-[3px] overflow-hidden border border-[#eee] bg-white"
              >
                <img
                  src={getImgUrl(img)}
                  alt={detail.title + "设计图" + (idx + 1)}
                  className="w-full h-auto object-cover rounded-[3px]"
                />
              </div>
            ))}
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}
