import React from "react";

const services = [
  { title: "定制软件开发", desc: "Web、移动端、小程序等多平台高端定制开发。" },
  {
    title: "企业数字化转型",
    desc: "为企业量身打造数字化解决方案，提升核心竞争力。",
  },
  {
    title: "系统集成与运维",
    desc: "系统集成、数据迁移、云服务及后期运维保障。",
  },
  { title: "UI/UX设计", desc: "专业设计团队，打造极致用户体验。" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
          我们的服务
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-800 rounded-xl p-8 shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                {s.title}
              </h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
