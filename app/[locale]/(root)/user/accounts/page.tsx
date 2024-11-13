"use client";

import { useTranslations } from "next-intl";
import { UserBox } from "@/components/UserBox";

export const runtime = "edge";

export default function Page() {
  const t = useTranslations("Accounts");

  return <UserBox title="Accounts">
    <p></p>
  </UserBox>;
}
