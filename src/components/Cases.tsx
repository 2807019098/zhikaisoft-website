import React from "react";

const cases = [
  { name: "A科技集团", desc: "为A集团打造智能办公平台，实现业务流程自动化。" },
  { name: "B医疗", desc: "为B医疗开发远程医疗系统，提升服务效率。" },
  { name: "C电商平台", desc: "为C电商平台提供高并发订单处理系统。" },
];

export default function Cases() {
  return (
    <section id="cases" className="py-20 bg-gray-900 text-white">
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
          成功案例
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.name}
              className="bg-gray-800 rounded-xl p-6 transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 text-cyan-300">
                {c.name}
              </h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
