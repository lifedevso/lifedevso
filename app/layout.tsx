import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "人生发展体系",
  description:
    "借助人生发展体系，通过高效的工具和方法，实现全面的个人成长，提升生活的质量与深度。",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh-cn">
      <body>{children}</body>
    </html>
  );
}
