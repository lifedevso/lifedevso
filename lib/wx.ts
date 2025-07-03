import { WEB_URL } from "./constant";

const APPID = "wxae60dbd6c186d1ba";

export function genAuthUrl(state: string) {
  const authUrl = new URL(
    "https://open.weixin.qq.com/connect/oauth2/authorize"
  );
  authUrl.searchParams.set("appid", APPID);
  authUrl.searchParams.set("redirect_uri", `${WEB_URL}/api/authorize`);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", "snsapi_userinfo");
  authUrl.searchParams.set("state", state);

  const url = authUrl.toString() + "#wechat_redirect";
  console.log("genAuthUrl", url);
  return url;
}

export function isWechat() {
  return /MicroMessenger/i.test(window.navigator.userAgent);
}
