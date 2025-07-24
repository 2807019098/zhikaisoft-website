import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-cyan-900 via-gray-900 to-black text-white"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">
          联系我们
        </h2>
        <form className="bg-gray-800 rounded-xl p-8 space-y-6">
          <div>
            <label className="block mb-2 text-cyan-300">姓名</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="请输入您的姓名"
            />
          </div>
          <div>
            <label className="block mb-2 text-cyan-300">邮箱</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="请输入您的邮箱"
            />
          </div>
          <div>
            <label className="block mb-2 text-cyan-300">留言</label>
            <textarea
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              rows={4}
              placeholder="请输入您的需求或问题"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 rounded text-lg font-semibold transition-all duration-200"
          >
            发送
          </button>
        </form>
        <div className="mt-8 text-center text-gray-300">
          <div>邮箱：contact@zksoft.com</div>
          <div>电话：400-123-4567</div>
        </div>
      </div>
    </section>
  );
}
