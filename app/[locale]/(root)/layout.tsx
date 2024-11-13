import { PropsWithChildren } from "react";
import { RootHeader } from "@/components/RootHeader";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh-cn">
      <body>
        <RootHeader shouldShowSignInButton />
        {children}
      </body>
    </html>
  );
}
