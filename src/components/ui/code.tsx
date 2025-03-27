import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";
import { codeToHtml } from "shiki";
import './code.css'
import { Copy } from "lucide-react";
import { Button } from "./button";

interface CodeProps {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  lineNumbers?: boolean;
  className?: string;
  showCopyButton?: boolean;
  label?: ReactNode
  topbarClassName?: string;
  buttonClassName?: string;
  onCopied?: (value: string) => void;
};

const Code = ({
  code,
  lang = "javascript",
  theme = "dracula",
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
      const html = await codeToHtml(code, {
        lang,
        theme,
      });
      setHighlighted(html);
    }

    highlight();
  }, [code, lang, theme]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    if (onCopied) {
      onCopied(code);
    }
  };

  const showTopbar = label || showCopyButton;

  return (
    <div className="relative mt-10">
      {showTopbar && <div className={cn(
        "absolute top-0 left-0 ",
        "flex justify-between items-center",
        "w-full p-2 py-2 z-10",
        "rounded-t-sm",
        "",
        "bg-neutral-700 text-neutral-200", topbarClassName)}>
        <span className="font-semibold text-sm">{label}</span>
        { showCopyButton && (<Button 
          size={"xs"}
          variant={"neutral"}
          className={cn("p-1 rounded-md bg-neutral-700 hover:bg-neutral-800", buttonClassName)}
          onClick={copyToClipboard}
          title="Copy code"
        >
          <Copy className="size-3" />
        </Button>)
      }
      </div>
      }
      <div
        data-theme={theme}
        className={cn(
          'shiki',
          'rounded-b-sm',
          "[&>pre]:rounded-b-sm",
          "[&>pre]:overflow-x-auto",
          "[&>pre]:p-2",
          "overflow-auto",
          showTopbar && 'pt-9',
          lineNumbers && "showLines",
          className,
        )}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
  </div>
  );
};
Code.displayName = "Code";

export { Code }
