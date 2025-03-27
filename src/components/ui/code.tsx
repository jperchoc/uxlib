import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import type { LanguageInput } from "shiki";
import "./code.css";
import { Copy } from "lucide-react";
import { Button } from "./button";
import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
import githubDark from "@shikijs/themes/github-dark";
import githubLight from "@shikijs/themes/github-light";

type Languages = 'javascript' |
  'typescript' |
  'jsx' |
  'tsx' |
  'bash' |
  'python' |
  'docker' |
  'dockerfile' |
  'yaml' |
  'cmd' |
  'xml' |
  'html' |
  'json' |
  'css' |
  'scss';

interface CodeProps {
  code: string;
  lang?: Languages;
  theme?: "github-dark" | "github-light";
  lineNumbers?: boolean;
  className?: string;
  showCopyButton?: boolean;
  label?: ReactNode;
  topbarClassName?: string;
  buttonClassName?: string;
  onCopied?: (value: string) => void;
}

const Code = ({
  code,
  lang = "javascript",
  theme = "github-dark",
  lineNumbers = false,
  label,
  showCopyButton = true,
  onCopied,
  topbarClassName,
  buttonClassName,
  className,
}: CodeProps) => {
  const [highlighted, setHighlighted] = useState<string>("");

  useEffect(() => {
    async function highlight() {
      const themeObj = theme === "github-light" ? githubLight : githubDark;

      const langImportMap = {
        javascript: () => import("@shikijs/langs/javascript"),
        typescript: () => import("@shikijs/langs/typescript"),
        jsx: () => import("@shikijs/langs/jsx"),
        tsx: () => import("@shikijs/langs/tsx"),
        bash: () => import("@shikijs/langs/bash"),
        python: () => import("@shikijs/langs/python"),
        docker: () => import("@shikijs/langs/docker"),
        dockerfile: () => import("@shikijs/langs/dockerfile"),
        yaml: () => import("@shikijs/langs/yaml"),
        cmd: () => import("@shikijs/langs/cmd"),
        xml: () => import("@shikijs/langs/xml"),
        html: () => import("@shikijs/langs/html"),
        json: () => import("@shikijs/langs/json"),
        css: () => import("@shikijs/langs/css"),
        scss: () => import("@shikijs/langs/scss"),
      } as Record<Languages, () => Promise<LanguageInput>>;

      const loadLang = langImportMap[lang] || langImportMap["javascript"];
      const langDef = await loadLang();

      const highlighter = await createHighlighterCore({
        themes: [themeObj],
        langs: [langDef],
        engine: createOnigurumaEngine(import('shiki/wasm'))
      });

      const html = highlighter.codeToHtml(code, {
        lang,
        theme: themeObj,
      });

      setHighlighted(html);
    }

    highlight();
  }, [code, lang, theme]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    onCopied?.(code);
  };

  const showTopbar = label || showCopyButton;

  return (
    <div className="relative border border-neutral-700  rounded-sm">
      {showTopbar && (
        <div
          className={cn(
            "absolute top-0 left-0",
            "flex justify-between items-center",
            "w-full p-2 py-2 z-10",
            "rounded-t-sm bg-neutral-700 text-neutral-200",
            topbarClassName
          )}
        >
          <span className="font-semibold text-sm">{label}</span>
          {showCopyButton && (
            <Button
              aria-label="Copy code"
              size="xs"
              variant="neutral"
              className={cn(
                "p-1 rounded-md bg-neutral-700 hover:bg-neutral-800",
                buttonClassName
              )}
              onClick={copyToClipboard}
              title="Copy code"
            >
              <Copy className="size-3" />
            </Button>
          )}
        </div>
      )}
      <div
        data-theme={theme}
        className={cn(
          "shiki",
          "rounded-b-sm",
          "[&>pre]:rounded-b-sm",
          "[&>pre]:overflow-x-auto",
          "[&>pre]:p-2",
          "overflow-auto",
          showTopbar && "pt-9",
          lineNumbers && "showLines",
          className
        )}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
};

Code.displayName = "Code";

export { Code };