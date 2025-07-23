"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// @ts-ignore
import { AnimatePresence, motion } from "framer-motion";
// @ts-ignore
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  useEffect(() => {
    NProgress.start();
    NProgress.set(0.4);
    const timer = setTimeout(() => {
      NProgress.done();
    }, 400);
    return () => clearTimeout(timer);
  }, [pathname]);
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
