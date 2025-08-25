import Header from "@/components/Header";
import InteractiveSubMenu from "@/components/InteractiveSubMenu";

export default function WechatPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />
      <div className="pt-[72px] pb-10">
        <div className="w-full max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#063771] text-center pt-12 mb-6 tracking-wide">
            微信应用开发
          </h1>
          <InteractiveSubMenu active="wechat" />
          <div className="bg-white rounded-xl shadow p-8 mt-8">
            <h2 className="text-2xl font-semibold text-[#0b5fa5] mb-4">
              十余年建站经验 以实力为专业注解
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              智开科技网站建设综合服务，包括企事业数字门户建设、互联网金融平台建设、营销型网站建设等。
            </p>
            <img
              src="https://picsum.photos/seed/wechat/900/300"
              alt="微信应用开发主图"
              className="w-full rounded-lg object-cover mb-6"
            />
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  公众号开发
                </div>
                <div className="text-gray-600 mb-2">内容精度高</div>
                <img
                  src="https://picsum.photos/seed/gzh/200/120"
                  alt="公众号开发"
                  className="mx-auto rounded"
                />
              </li>
              <li className="bg-[#f0f6fa] rounded-lg p-6 text-center">
                <div className="text-xl font-bold text-[#0b5fa5] mb-2">
                  微信小程序
                </div>
                <div className="text-gray-600 mb-2">多平台兼容</div>
                <img
                  src="https://picsum.photos/seed/wxminiprogram/200/120"
                  alt="微信小程序"
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
