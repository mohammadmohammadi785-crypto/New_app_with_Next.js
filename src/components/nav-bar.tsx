import { Button } from "./ui/button";

import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Suspense } from "react";
import { Settings } from "lucide-react";

import Link from "next/link";
import LanguageSwitcher from "./LangSwither";
import ThemeSwitcher from "./ThemeSwither";

export default async function Navbar() {
  const t = await getTranslations("navbar");

  return (
    <nav className="w-full px-8 py-4 flex border-b border-b-gray-500 dark:border-b-gray-200 justify-between items-center">
      <div>
        <h1 className="border-none">{t("logo")}</h1>
      </div>
      <div className="flex gap-6">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <Button>
          <Link href="/signin" className="flex justify-between items-center">
            {t("btn_login")}
          </Link>
        </Button>
      </div>
    </nav>
  );
}
