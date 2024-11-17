import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { BuyButton } from "./BuyButton";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price?: number;
  nowPrice: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  // {
  //   title: "Harvest 年度会员",
  //   popular: 0,
  //   nowPrice: 39.9,
  //   description: "快速将社交软件中的信息保存到 Notion",
  //   buttonText: "立刻购买",
  //   benefitList: ["每日可发送30条消息", "支持多种消息格式"],
  // },
  {
    title: "人生发展年度会员",
    popular: 1,
    price: 6980,
    nowPrice: 3980,
    description: "让我们用一套系统，重新定义你的下一个10年",
    buttonText: "立刻加入",
    benefitList: [
      "一年不少于 20 场直播",
      "人生发展体系录播课",
      "社群答疑交流，根据用户问题，随时直播加餐",
      "一个专享的知识库，永不解散",
      "15 个独创的各种人生一表模板，方便你一键部署",
      "三款自研 AI 工具 会员 一年使用权限",
      "独创Notion高级自动化模板（价值699元）",
    ],
  },
  // {
  //   title: "NotionNice Plus",
  //   popular: 0,
  //   nowPrice: 69,
  //   description: "轻松将 Notion 文章发布到微信公众号",
  //   buttonText: "立刻购买",
  //   benefitList: ["支持无限制图片上传", "文章封面AI生成（10次/月）"],
  // },
];

export const runtime = "edge";
export default function Home() {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-2xl font-bold text-center">
        {`95%的人在重复"朝九晚五"的奔忙，却错过了人生最关键的积累`}
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        让我们用一套系统，重新定义你的下一个10年
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div></div>
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={cn(
              "max-w-md flex-1",
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            )}
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div className="flex items-center space-x-2">
                {pricing.price && (
                  <span className="text-xl text-muted-foreground line-through">
                    ¥{pricing.price}
                  </span>
                )}
                <span className="text-3xl font-bold">¥{pricing.nowPrice}</span>
                <span className="text-muted-foreground"> /年</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <BuyButton price={pricing.nowPrice}>
                {pricing.buttonText}
              </BuyButton>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
        <div></div>
      </div>
    </section>
  );
}
