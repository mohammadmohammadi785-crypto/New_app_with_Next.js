"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  function changeTheme(value: string) {
    setTheme(value);
    document.cookie = `theme=${value};max-age=2592000;path=/`;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {theme === "dark" ? (
          <Moon className="text-normal" size={18} />
        ) : theme === "light" ? (
          <Sun className="text-normal" size={18} />
        ) : (
          <SunMoon className="text-normal" size={18} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel className="text-normal">Theme</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem
          className="text-normal"
          onClick={() => changeTheme("dark")}
        >
          <div className="w-full flex justify-between">
            {t("theme.dark")}
            <Moon className="text-normal" size={18} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-normal"
          onClick={() => changeTheme("light")}
        >
          <div className="w-full flex justify-between">
            {t("theme.light")}
            <Sun className="text-normal" size={18} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-normal"
          onClick={() => changeTheme("system")}
        >
          <div className="w-full flex justify-between">
            {t("theme.system")}
            <SunMoon className="text-normal" size={18} />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
