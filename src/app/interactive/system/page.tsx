import Header from "@/components/Header";
import InteractiveSubMenu from "@/components/InteractiveSubMenu";

export default function SystemPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      <div className="pt-[72px] pb-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#063771] text-center pt-12 mb-6 tracking-wide">
            系统开发
          </h1>
          <InteractiveSubMenu active="system" />
          <div className="bg-white rounded-xl shadow p-8 mt-8">
            <h2 className="text-2xl font-semibold text-[#0b5fa5] mb-4">
              强大的定制化平台 企业未来的有力支持
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              支持PHP、JAVA、ASP.NET开发,独立研发并获得100%软件著作权的框架支持平台产品的需求定制、更新迭代、体验优化。
            </p>
            <img
              src="https://picsum.photos/seed/system/900/300"
              alt="系统开发主图"
              className="w-full rounded-lg object-cover mb-6"
            />
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  平台定制
                </div>
                <div className="text-gray-600 mb-2">高扩展性</div>
                <img
                  src="https://picsum.photos/seed/platform/200/120"
                  alt="平台定制"
                  className="mx-auto rounded"
                />
              </li>
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  框架研发
                </div>
                <div className="text-gray-600 mb-2">100%自主知识产权</div>
                <img
                  src="https://picsum.photos/seed/framework/200/120"
                  alt="框架研发"
                  className="mx-auto rounded"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
