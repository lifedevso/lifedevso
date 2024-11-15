import { PropsWithChildren } from "react";
import Link from "next/link";
import { RootHeader } from "@/components/RootHeader";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh-cn">
      <body>
        <RootHeader shouldShowSignInButton />
        {children}
        <footer className="bg-background border-t">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 text-center md:text-left px-8">
                <p className="uppercase mb-6 font-bold">人生发展体系</p>
                <div className="flex flex-col">
                  以「产」为核心的人生发展体系。
                  <br />
                  个人发展，一年顶十年。
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center md:text-left px-8">
                <p className="uppercase mb-6 font-bold">产品</p>
                <ul className="mb-4">
                  <li className="mt-2">
                    <Link
                      href="https://notion-nice.com/"
                      target="_blank"
                      className="hover:underline text-gray-600 hover:text-gray-800"
                    >
                      Notion Nice 一键排版
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="https://harvest.prius.ai/"
                      target="_blank"
                      className="hover:underline text-gray-600 hover:text-gray-800"
                    >
                      Harvest 收藏助手
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/3 text-center md:text-left px-8">
                <p className="uppercase mb-6 font-bold">服务</p>
                <ul className="mb-4">
                  <li className="mt-2">
                    <Link
                      target="_blank"
                      href="https://lifedevso.notion.site/13e6b503659380738c37dfbec8574ee9"
                      className="hover:underline text-gray-600 hover:text-gray-800"
                    >
                      合约条款及细则
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-xs text-gray-400">
              <p>Copyright © 2024 人生发展体系. All Rights Reserved.</p>
              <p>香港知行教育科技有限公司</p>
              <p className="flex gap-1 items-center">
                深圳知行合一教育科技有限公司
                <span>|</span>
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  粤ICP备2024292309号-2
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
