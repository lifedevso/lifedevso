import createMiddleware from "next-intl/middleware";
import {
  defaultLocale,
  localeItems,
  localePrefix,
  locales,
} from "@/i18n/routing";
import { auth } from "./auth";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/user")) {
    const session = await auth();
    if (!session?.user) {
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  }

  if (request.nextUrl.pathname.startsWith("/login")) {
    const session = await auth();
    if (session?.user) {
      return NextResponse.redirect(new URL("/user/accounts", request.url));
    }
  }

  const acceptLanguage = request.headers.get("accept-language");
  const userAgent = request.headers.get("user-agent")?.toLowerCase();

  let default_locale: string = "";

  if (userAgent?.includes("weixin")) {
    default_locale = "zh-cn";
  } else {
    default_locale =
      localeItems.find((v) => acceptLanguage?.includes(v.iso))?.code ||
      defaultLocale;
  }

  return createMiddleware({
    locales,
    localePrefix,
    defaultLocale: default_locale,
    localeDetection: false,
  })(request);
}

export const config = {
  // Include all paths that should be internationalized,
  // including the "api" folder, and excluding "_next" folder
  // and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!_next|.*\\..*|api/.*).*)"],
};

// export const runtime = "experimental-edge";
