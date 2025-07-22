import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-black text-gray-400 text-center text-sm">
      © {new Date().getFullYear()} 智凯软件 ZKSoft. 保留所有权利。
    </footer>
  );
}
