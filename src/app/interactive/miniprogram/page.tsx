import Header from "@/components/Header";
import InteractiveSubMenu from "@/components/InteractiveSubMenu";

export default function MiniprogramPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      <div className="pt-[72px] pb-10">
        <div className="w-full max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#063771] text-center pt-12 mb-6 tracking-wide">
            小程序开发
          </h1>
          <InteractiveSubMenu active="miniprogram" />
          <div className="bg-white rounded-xl shadow p-8 mt-8">
            <h2 className="text-2xl font-semibold text-[#0b5fa5] mb-4">
              深度行业解决方案 助力企业获客盈收
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              小程序风口，掀起移动互联网流量风暴，智开科技开发完成多达100多个行业应用的小程序系统，全面支持微信小程序、支付宝小程序、百度小程序。
            </p>
            <img
              src="https://picsum.photos/seed/miniprogram/900/300"
              alt="小程序开发主图"
              className="w-full rounded-lg object-cover mb-6"
            />
            <ul className="grid md:grid-cols-3 gap-6">
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  微信小程序
                </div>
                <div className="text-gray-600 mb-2">全行业解决方案</div>
                <img
                  src="https://picsum.photos/seed/wxmini/200/120"
                  alt="微信小程序"
                  className="mx-auto rounded"
                />
              </li>
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  支付宝小程序
                </div>
                <div className="text-gray-600 mb-2">多平台兼容</div>
                <img
                  src="https://picsum.photos/seed/alipaymini/200/120"
                  alt="支付宝小程序"
                  className="mx-auto rounded"
                />
              </li>
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  百度小程序
                </div>
                <div className="text-gray-600 mb-2">智能流量入口</div>
                <img
                  src="https://picsum.photos/seed/baidumini/200/120"
                  alt="百度小程序"
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
