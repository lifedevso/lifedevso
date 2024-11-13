import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookTypeIcon,
  HeadsetIcon,
  ImageUpIcon,
  PaletteIcon,
  PanelsTopLeftIcon,
  WorkflowIcon,
} from "lucide-react";

const url = "https://github.com/lifedevso/lifedevso/issues";

export const runtime = 'edge';
export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-sky-50 to-white dark:from-sky-950 dark:to-black relative">
        <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0 grayscale"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
              启航你的人生发展之旅
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              借助人生发展体系，通过高效的工具和方法，实现全面的个人成长，提升生活的质量与深度。
            </p>
            <div className="flex flex-row justify-center gap-4">
              <Link target="_blank" href={url}>
                <Button>联系我们</Button>
              </Link>
            </div>
          </div>
          <Image
            width={2076}
            height={1080}
            alt="人生发展体系"
            src="/imgs/hero/1.jpeg"
            className="mt-8 max-w-full md:max-w-5xl mx-auto rounded-md shadow-2xl border sm:mt-12 block dark:hidden"
          />
        </div>
      </div>
      <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="my-4 flex flex-col gap-8">
          <div className="my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="order-1 md:order-1">
              <Image
                width={800}
                height={600}
                alt="人生发展体系"
                className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10"
                src="/imgs/sections/01.png"
              />
            </div>
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                什么是人生发展体系
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                人生发展体系是一个以产为核心的全方位个人发展工具，旨在帮助用户在生活中实现各方面的积累与成长。
              </p>
              <div className="mt-4">
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      全面的成长平台
                    </p>
                    <p className="text-md text-muted-foreground">
                      通过系统化的方式促进用户全面成长，涵盖职业、家庭和个人目标。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      量身定制的方案
                    </p>
                    <p className="text-md text-muted-foreground">
                      根据个人需求提供定制化的发展方案，确保每个用户都有所收获。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      一对一服务
                    </p>
                    <p className="text-md text-muted-foreground">
                      提供一对一的专业指导，确保每个用户都能得到个性化的帮助和支持。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                为什么选择人生发展体系
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                人生发展体系帮助你在纷繁复杂的生活中找到发展的方向，提供有效的工具与资源。
              </p>
              <div className="mt-4">
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      科学的方法
                    </p>
                    <p className="text-md text-muted-foreground">
                      运用科学的心理学与发展理论，提供可靠的成长方法。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      持续的支持
                    </p>
                    <p className="text-md text-muted-foreground">
                      提供持续的支持与指导，帮助用户克服成长中的挑战。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">定期更新</p>
                    <p className="text-md text-muted-foreground">
                      始终保持内容的新鲜度，定期更新资源，确保用户跟上发展的潮流。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image
                width={800}
                height={600}
                alt="人生发展体系"
                className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10"
                src="/imgs/sections/02.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            人生发展体系的核心功能
          </h2>
          <div className="mt-4 text-sm font-semibold tracking-wide"></div>
          <p className="mt-6 text-lg leading-8 text-muted-foreground"></p>
        </div>
        <div className="mt-8 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <BookTypeIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">个性化发展计划</h3>
              <p className="text-gray-600">
                根据用户的背景、目标和需求，制定个性化的成长计划。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <WorkflowIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">持续成长反馈</h3>
              <p className="text-gray-600">
                为用户提供实时反馈，帮助他们不断调整方向和策略。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <PaletteIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">多元化资源库</h3>
              <p className="text-gray-600">
                涵盖大量书籍、视频和文章，满足不同知识需求。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <PanelsTopLeftIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">社区支持</h3>
              <p className="text-gray-600">
                建立用户社区，彼此分享经验和鼓励，增强成长的动力。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <ImageUpIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">专家指导</h3>
              <p className="text-gray-600">
                提供专业人士的定期讲座和在线咨询，助力用户进一步成长。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <HeadsetIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">智能数据分析</h3>
              <p className="text-gray-600">
                运用数据分析技术，帮助用户了解自身成长的进展与瓶颈。
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-gradient-to-t from-sky-200 to-white dark:from-sky-950 relative">
        <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat inset-0 top-0 bottom-0 left-0 right-0 grayscale bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              迫不及待想开始吗？
            </h2>
            <p className="mt-6 text-xl leading-8 opacity-90 text-muted-foreground">
              立即联系我们，开启你的个人成长之旅。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link target="_blank" href={url}>
                <Button>联系我们</Button>
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75 text-muted-foreground"></p>
          </div>
        </div>
      </section>
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 text-center md:text-left px-8">
              <p className="uppercase mb-6 font-bold">人生发展体系</p>
              <div className="flex flex-col">
                人生发展体系致力于通过高效方式推动个人成长与发展，助力每个人实现自我价值。
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
                    href="https://life-nice.notion.site/8a1563fb3a854d0c9a802e513869b52e"
                    className="hover:underline text-gray-600 hover:text-gray-800"
                  >
                    隐私政策
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    target="_blank"
                    href="https://life-nice.notion.site/29e3bcd8d3c643f89bba309f84927650"
                    className="hover:underline text-gray-600 hover:text-gray-800"
                  >
                    服务条款
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-xs text-gray-400">
            <p >Copyright © 2024 人生发展体系. All Rights Reserved.</p>
            <p >香港知行教育科技有限公司</p>
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
    </>
  );
}
