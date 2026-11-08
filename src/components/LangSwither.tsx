"use client";
import { useLocale } from "next-intl";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function LanguageSwitcher() {
  const locale = useLocale();

  function changeLang(lang: string) {
    if (lang === locale) return;

    document.cookie = `locale=${lang}; max-age=2592000; path=/; samesite=lax`;
    window.location.reload();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages size={18} className="text-normal" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="text-normal"
          onClick={() => changeLang("fa")}
        >
          دری
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-normal"
          onClick={() => changeLang("en")}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
