import Header from "@/components/Header";
import InteractiveSubMenu from "@/components/InteractiveSubMenu";

export default function AppPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      <div className="pt-[72px] pb-10">
        <div className="w-full max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#063771] text-center pt-12 mb-6 tracking-wide">
            APP开发
          </h1>
          <InteractiveSubMenu active="app" />
          <div className="bg-white rounded-xl shadow p-8 mt-8">
            <h2 className="text-2xl font-semibold text-[#0b5fa5] mb-4">
              卓越的交互体验 为更广阔的移动营销而生
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              智开科技APP开发为传统企业转型升级，提供个性化的移动应用定制开发服务、商业模式咨询、用户体验设计、交互设计，移动应用技术研发和推广运营服务。
            </p>
            <img
              src="https://picsum.photos/seed/app/900/300"
              alt="APP开发主图"
              className="w-full rounded-lg object-cover mb-6"
            />
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  iOS/Android开发
                </div>
                <div className="text-gray-600 mb-2">原生/混合开发</div>
                <img
                  src="https://picsum.photos/seed/iosandroid/200/120"
                  alt="iOS/Android开发"
                  className="mx-auto rounded"
                />
              </li>
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  移动UI/UX设计
                </div>
                <div className="text-gray-600 mb-2">高端定制体验</div>
                <img
                  src="https://picsum.photos/seed/appui/200/120"
                  alt="移动UI/UX设计"
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
