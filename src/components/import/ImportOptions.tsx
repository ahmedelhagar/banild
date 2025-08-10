"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/lib/useDarkMode";
import { useLanguage } from "@/lib/useLanguage";
import { Github, Figma, Heart, Bolt, ChevronRight } from "lucide-react";

interface ImportOption {
  id: "github" | "figma" | "lovable" | "bolt";
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  href: string;
  icon: React.ReactNode;
}

function ImportOptionRow({ option }: { option: ImportOption }) {
  const { isDarkMode } = useDarkMode();
  const { isRTL } = useLanguage();

  return (
    <Link href={option.href} className="w-full">
      <div
        className={cn(
          "w-full rounded-xl border transition-colors duration-200",
          "flex items-center gap-4 px-5 py-4",
          isDarkMode
            ? "bg-darkmode-secondary border-darkmode-primary hover:bg-darkmode-primary"
            : "bg-lightmode-primary border-lightmode-tertiary hover:bg-lightmode-secondary"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center rounded-md w-9 h-9",
            isDarkMode
              ? "bg-darkmode-tertiary text-darkmode-primarytxt"
              : "bg-lightmode-secondary text-lightmode-primarytxt"
          )}
        >
          {option.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div
            className={cn(
              "font-semibold",
              isDarkMode ? "text-darkmode-primarytxt" : "text-lightmode-primarytxt"
            )}
          >
            {isRTL ? option.titleAr : option.titleEn}
          </div>
          <div
            className={cn(
              "text-sm truncate",
              isDarkMode ? "text-darkmode-secondarytxt" : "text-lightmode-secondarytxt"
            )}
          >
            {isRTL ? option.descriptionAr : option.descriptionEn}
          </div>
        </div>

        <ChevronRight
          className={cn(
            "w-5 h-5 flex-shrink-0",
            isDarkMode ? "text-darkmode-secondarytxt" : "text-lightmode-secondarytxt"
          )}
        />
      </div>
    </Link>
  );
}

export default function ImportOptions() {
  const { isRTL } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const options: ImportOption[] = [
    {
      id: "github",
      titleEn: "GitHub",
      titleAr: "GitHub",
      descriptionEn:
        "Import a repository or existing app. Agent support may be limited.",
      descriptionAr:
        "استورد مستودعًا أو تطبيقًا موجودًا. قد يكون دعم الوكيل محدودًا.",
      href: "/app/import/github",
      icon: <Github className="w-5 h-5" />,
    },
    {
      id: "figma",
      titleEn: "Figma Design",
      titleAr: "تصاميم Figma",
      descriptionEn: "Convert your designs into live Apps using the Agent.",
      descriptionAr: "حوّل تصميماتك إلى تطبيقات حية باستخدام الوكيل.",
      href: "/app/import/figma",
      icon: <Figma className="w-5 h-5" />,
    },
    {
      id: "lovable",
      titleEn: "Lovable",
      titleAr: "Lovable",
      descriptionEn: "Migrate your site to make it production‑ready.",
      descriptionAr: "انقل موقعك ليصبح جاهزًا للإنتاج.",
      href: "/app/import/lovable",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: "bolt",
      titleEn: "Bolt",
      titleAr: "Bolt",
      descriptionEn: "Migrate your prototype to make it production‑ready.",
      descriptionAr: "انقل النموذج الأولي ليصبح جاهزًا للإنتاج.",
      href: "/app/import/bolt",
      icon: <Bolt className="w-5 h-5" />,
    },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-10")}>
      <div className="mb-6 md:mb-8">
        <h1
          className={cn(
            "text-2xl md:text-3xl font-bold",
            isDarkMode ? "text-darkmode-primarytxt" : "text-lightmode-primarytxt"
          )}
        >
          {isRTL ? "الاستيراد إلى Banild" : "Import to Banild"}
        </h1>
        <p
          className={cn(
            "mt-2 text-sm md:text-base",
            isDarkMode ? "text-darkmode-secondarytxt" : "text-lightmode-secondarytxt"
          )}
        >
          {isRTL
            ? "انقل البيانات والكود والتصاميم من تطبيقات أخرى إلى Banild"
            : "Migrate data, code, and designs from other apps into Banild"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:gap-4">
        {options.map((opt) => (
          <ImportOptionRow key={opt.id} option={opt} />
        ))}
      </div>
    </div>
  );
}


