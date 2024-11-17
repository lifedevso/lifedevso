import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BlendIcon,
  Layers2Icon,
  WaypointsIcon,
  WorkflowIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Team } from "@/components/Team";
import { Section1, Section2 } from "@/components/Sections";

const url = "/buy";

const userCommitList = [
  {
    name: "龙目鱼",
    avatar: "/imgs/user/1.png",
    profession: "自由职业者",
    content: `我一直想写本《人生指南》的书给我女儿，也就是要把我在职业发展、财富、健康、婚姻、人脉、学习、教育，技能、经验教训和思考总结出来，是对我前半生的复盘。

只是我的是文字版，没有欢喜这样的体系和工具。参加了人生发展体系后，很是感慨，说实话，要是我二三十岁时有这套体系，我应该比现在的我强大许多。

所以，我给我女儿最宝贵的一条经验就是，**早早立下目标，做好知识管理，总结方法论，不断优化，沉淀与迭代。越往上走，能越轻松，反而越能解决更多问题，她比她的父辈一定强大许多！**

对“产”的理解，在我以前的概念里，“我”就是个工具人，不是生产资料，但在欢喜的“产”的概念里，**“我”也是生产资料，是属于“我的”生产资料，既然是生产资料，就可以有产出，这个“产”是属于自己的，不再是老板或者企业的。**

如果我早有这样的概念，我还在职场的时候，就应该早作准备，为自己积累“产”的能力，尤其是小产和中产的能力。而不是活在我有能力管理一家大公司的“大产”的虚幻里，因为那是依附在一家大公司的平台上的，离开这个大平台，我们这些所谓的高管什么都不是！

欢喜的课给我一个很大的提醒和非常棒的工具，使我未来的人生也可以数字化。我们在企业里运营的各种基于数据的各种分析、科学决策，预测，数字人，以及项目管理，评价体系等，在我们自我己的人生里，为什么就不能用呢？

**我们同样可以把我们的时间银行，身体健康、心里健康、财富投资、教育、旅程、价值观等等全部数字化，人生一切皆可数字化！借鉴欢喜的各种一表，然后做行动的项目管理！**

还是点要赞和感谢欢喜老师，我大大小小也买了十几门课，有的听了开头就没再听下去了，有的学了一半就放弃了，唯有“人生发展训练营”这门课，我从头到尾听完了，而且还不止一遍。**是我参加的所以课里面我认最有价值的一门课。**

不但授人以鱼，还受人以渔。不但站在人生发展这个高度，还珠联玉串般地一件件落地。
`,
  },
  {
    name: "Wong Chion",
    profession: "学生",
    avatar: "/imgs/user/2.png",
    content: `这个课程有一个核心理念，是以产为核心。要求凡事要有结果，但这个结果它不一定是终局的，不一定是马上能转化的，但强调要有沉淀。这种沉淀呢，更像是把生活的营养可视化，就像一片土地，让生活里的种子慢慢发芽、成长、结果，我们只需要耐心灌溉。

把不同职业的人，看作是不同思维模型，于是不同的人都各有特点。而不同场景下，同一个人也可以有不同的思考模型，这一点比较有意思。`,
  },
  {
    name: "黎盼",
    profession: "创业者",
    avatar: "/imgs/user/3.png",
    content: `在人生发展训练营中，欢喜老师进一步强调了出作品的重要性，**”产为核心，人生发展“贯穿始终**。

我们读完书提炼出可以复用的卡片，写出一片读书笔记、文章，是小产；将知识结合自身经验，提炼出可以复用的模型，比如针对一个具体问题，提出解决方案，比如开发一门课，写一本书，做一个项目等；成为某一方面的专家，获得财富提升，向他人传递爱，向子嗣传递优良家风，实现幸福人生，是为大产。

学会了一套非常丝滑的创作流。

构建一次，复利一生。从信息收集，到消化吸收，变成一张张卡片，串联到各个项目、模型，到创造作品，古典风格调整美化，格式调整，一键发表，非常流畅。

`,
  },
  {
    name: "Dr·Liang",
    profession: "教育工作者",
    avatar: "/imgs/user/4.png",
    content: `人生发展体系就像一辆劳斯莱斯，带给我不一样的体验。现在，我的人生真正化繁为简成为了一张“表”。

之前以大象为基础构建的人生一表，总是会陷入工具操作上的怪圈，有些时候操作的效率并不是特别高。

而现在notion配合各种AI工具，再加上一些项目管理模型，让我的工作和生活更有效率。notion作为顶在最前面的“门面”，具有极简的界面和超级丝滑流畅的操作感受，最重要的它还能更好的跨平台。
`,
  },
  {
    name: "龙猫",
    profession: "学生",
    avatar: "/imgs/user/5.png",
    content: `## 收获1: 节省时间，获取优质信息

主要是省时间，自己本身在时间管理和知识管理上，一直在尝试与摸索。如果不断摸索下去，可能也能发展出适合自己的一套方法。但是，现在可以看看别人的成功经验，借鉴别人的优势。能够让自己少走很多弯路。只有优质的信息，才能建立优质的模型。而这种训练营就是一种优质信息的来源。

## 收获2: 将AI与知识管理结合起来

AI对于知识工作者是个非常好的助手。自己也在用，但是，如何用好AI使其对自己的工作带来实质性的帮助，成功案例其实不是太多。但是通过这次训练营，观摩了AI agent实际应用的成功案例，对自己其他工作都带来了些启发。

## 收获3: 这个训练营的主题是人生发展体系，不是notion，不是AI。

所以人生发展提示是真正的内核。对于有上进心的人，都会思考成功的方法，以及努力地去争取。肯定不少有对自己人生进行反思与复盘。这次训练营，里面潜移默化地谈到了方法论，以及对世界积极乐观的态度与观点，恰好与我自己长期思考的结论不谋而合。人生是一个抽象的话题，但是在这里具象化了，具象成了几张表。人生的关键点真的就是这几件数的清的事情，生活不再迷茫。

这次训练营的质量比之前的课程要高出了很多很多。能感觉到欢喜老师的用心。能够遇到欢喜这样，能倾囊相授的好老师，不容易。
`,
  },
];

export const runtime = "edge";
export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-sky-50 to-white dark:from-sky-950 dark:to-black relative">
        <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0 grayscale"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
              以「产」为核心的人生发展体系。
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              个人发展，一年顶十年。
            </p>
            <div className="flex flex-row justify-center gap-4">
              <Link href={url}>
                <Button>立刻加入</Button>
              </Link>
            </div>
          </div>
          <Section1 className="mt-8 max-w-full md:max-w-5xl mx-auto rounded-md shadow-2xl border sm:mt-12 bg-gray-800" />
        </div>
      </div>

      <div className="bg-gradient-to-t py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            独创四大价值
          </h2>
          <div className="mt-4 text-sm font-semibold tracking-wide"></div>
          <p className="mt-6 text-lg leading-8 text-muted-foreground"></p>
        </div>
        <div className="mt-8 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <Layers2Icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">一生积累，一页之简</h3>
              <p className="text-gray-600">
                用一页 Notion
                可视化你的人生，知识管理、事业、财富、家庭，全维度积累一目了然
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <WorkflowIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">日记生产线</h3>
              <p className="text-gray-600">
                将一天当中碎片化信息，通过结构化关联，分配到不同的分支产品线加工，让零散积累，变成系统的人生资产。
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <BlendIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">见感思行模型</h3>
              <p className="text-gray-600">
                体系构建：以筑产来促进人生发展，独创一套
                <b>见感（信息）-思（模型）-行动系统。</b>
              </p>
            </div>
            <div className="text-left p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="mb-4 text-primary-500">
                <WaypointsIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">流程自动化</h3>
              <p className="text-gray-600">
                团队全球首创，用 Notion
                高级自动化功能，将信息收集自动化、内容创作自动化、任务自动化等融入到一天日记中，用见感思行提示词，实现当天日记自动化。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="my-4 flex flex-col gap-8">
          <div className="my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="order-1 md:order-1">
              <Section2 className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10 bg-gray-800" />
            </div>
            <div className="order-2 md:order-2">
              <h2 className="text-3xl font-bold tracking-tight text-primary">
                独创三大AI效率工具，提升10倍生产力
              </h2>
              <div className="mt-4">
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      Notion收藏助手
                    </p>
                    <p className="text-md text-muted-foreground">
                      将微信信息一键保存到 Notion 数据库。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      Shining 文字可视化
                    </p>
                    <p className="text-md text-muted-foreground">
                      将文字转化成简洁、美观的图片，可以做封面、文章、书籍插图和
                      PPT，极大提升效率。
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"></span>
                  <div className="space-y-1">
                    <p className="text-md font-medium leading-none">
                      Notion Nice 排版
                    </p>
                    <p className="text-md text-muted-foreground">
                      将 Notion 中写完的文章，一键排版发布到微信公号等平台。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center my-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              学员好评
            </h2>
            <div className="mt-4 text-sm font-semibold tracking-wide"></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {userCommitList.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm my-4"
              >
                <div className="p-6 pt-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <blockquote className="line-clamp-3 cursor-pointer">
                        {item.content}
                      </blockquote>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{item.name}</DialogTitle>
                      </DialogHeader>

                      <blockquote className="max-h-[80vh] overflow-y-auto whitespace-pre-line">
                        {item.content}
                      </blockquote>
                    </DialogContent>
                  </Dialog>

                  <div className="mt-6 flex items-center gap-x-4">
                    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <Image
                        width={40}
                        height={40}
                        className="aspect-square"
                        src={item.avatar}
                        alt={item.name}
                      />
                    </span>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-zinc-600">{item.profession}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Team />
      <section className="bg-gradient-to-t from-sky-200 to-white dark:from-sky-950 relative">
        <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat inset-0 top-0 bottom-0 left-0 right-0 grayscale bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight">
              {`95%的人在重复"朝九晚五"的奔忙，却错过了人生最关键的积累`}
            </h2>
            <p className="mt-6 text-xl leading-8 opacity-90 text-muted-foreground">
              让我们用一套系统，重新定义你的下一个10年
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={url}>
                <Button>立刻加入</Button>
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-75 text-muted-foreground"></p>
          </div>
        </div>
      </section>
    </>
  );
}
