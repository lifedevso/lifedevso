import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description?: string;
  socialNetworks: string[];
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/imgs/founder/1.png",
    name: "欢喜",
    position: "人生发展体系创始人 / 见感思行提出者",
    description:
      "我就想一步一脚印，解决自己问题的同时，也帮其他人解决相似问题，人生发展过程中，",
    socialNetworks: [],
  },
  {
    imageUrl: "/imgs/founder/2.png",
    name: "艾木",
    position: "人生发展体系合伙人",
    description:
      "我就想一步一脚印，解决自己问题的同时，也帮其他人解决相似问题，人生发展过程中，",
    socialNetworks: ["https://x.com/wille_42"],
  },
  {
    imageUrl: "/imgs/founder/3.png",
    name: "大胜",
    position: "人生发展体系合伙人",
    description:
      "我就想一步一脚印，解决自己问题的同时，也帮其他人解决相似问题，人生发展过程中，",
    socialNetworks: [
      "https://x.com/artoodetooHQ",
      "https://www.youtube.com/@artoodetooHQ",
    ],
  },
];

export const Team = () => {
  return (
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            人生共同发展
          </h2>
          <div className="mt-4 text-sm font-semibold tracking-wide"></div>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
          {teamList.map(
            ({
              imageUrl,
              name,
              position,
              description,
              socialNetworks,
            }: TeamProps) => (
              <Card
                key={name}
                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
              >
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <Avatar className="absolute -top-12 w-24 h-24">
                    <AvatarImage src={imageUrl} />
                    <AvatarFallback>{name.slice(-4)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                  <p>{description}</p>
                </CardContent>

                <CardFooter className="space-x-2">
                  {socialNetworks.map((url) => (
                    <SocialIcon
                      key={url}
                      url={url}
                      className="cursor-pointer hover:opacity-80"
                      style={{ height: 36, width: 36 }}
                    />
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};
