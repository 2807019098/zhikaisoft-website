import Header from "@/components/Header";
import { caseDetails } from "@/mock/caseDetails";
import { notFound } from "next/navigation";

interface CaseDetailProps {
  params: { id: string };
}

export default function CaseDetail({ params }: CaseDetailProps) {
  const detail = caseDetails.find((item) => item.id === params.id);
  if (!detail) return notFound();

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      {/* 头图+遮罩+标题 */}
      <div className="relative w-full h-[380px] md:h-[480px] top-[72px]">
        <img
          src={detail.cover}
          alt={detail.title + "头图"}
          className="w-full h-full object-cover object-center select-none"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-4 text-center tracking-wide"
            style={{ letterSpacing: "2px" }}
          >
            {detail.title}
          </h1>
          <div className="w-16 h-1 bg-white rounded" />
        </div>
      </div>
      {/* 内容区 */}
      <main className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-lg p-0 relative z-10 -mt-24 pb-16">
        {/* 项目简介 */}
        <section className="px-10 pt-10">
          <h2 className="text-2xl font-bold text-[#222] mb-2">项目简介</h2>
          <div className="w-12 h-1 bg-[#0b5fa5] rounded mb-6" />
          <div className="text-lg text-[#666] leading-7 mb-6">
            {detail.summary}
          </div>
        </section>
        {/* Service横向标签 */}
        {detail.services && detail.services.length > 0 && (
          <section className="px-10 mb-8">
            <div className="flex flex-wrap gap-3">
              {detail.services.map((srv) => (
                <span
                  key={srv}
                  className="inline-block bg-[#f0f6fa] text-[#0b5fa5] px-5 py-2 rounded-full text-base font-medium border border-[#e0eaf2]"
                >
                  {srv}
                </span>
              ))}
            </div>
          </section>
        )}
        {/* 分割线 */}
        <div className="w-full h-[1px] bg-[#eaeaea] mb-8" />
        {/* 正文介绍 */}
        <section className="px-10 mb-10">
          <div className="text-[#444] leading-8 text-[17px]">
            {detail.description}
          </div>
        </section>
        {/* 项目设计图片展示 */}
        {detail.images && detail.images.length > 0 && (
          <section className="px-10">
            <h2 className="text-xl font-semibold text-[#0b5fa5] mb-3">
              项目设计
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detail.images.map((img, idx) => (
                <div
                  key={img}
                  className="rounded-lg overflow-hidden border border-[#eee] bg-[#fafbfc]"
                >
                  <img
                    src={img}
                    alt={detail.title + "设计图" + (idx + 1)}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
