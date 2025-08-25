import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
          关于我们
        </h2>
        <p className="text-lg mb-4">
          智开软件（ZKSoft）是一家专注于企业数字化解决方案的软件公司，拥有顶尖的技术团队和丰富的行业经验。我们致力于为客户提供高效、可靠、创新的软件产品和服务，助力企业实现数字化转型和业务升级。
        </p>
        <ul className="grid md:grid-cols-3 gap-6 mt-8">
          <li className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">
              专业团队
            </h3>
            <p>核心成员来自一线互联网公司，技术实力雄厚。</p>
          </li>
          <li className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">
              定制开发
            </h3>
            <p>根据客户需求量身打造专属解决方案，灵活高效。</p>
          </li>
          <li className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">
              全流程服务
            </h3>
            <p>从咨询、设计到开发、运维，提供一站式服务保障。</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
