import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "../ui/code";
import type { BundledLanguage, BundledTheme } from "shiki";

// Default export
const meta: Meta<typeof Code> = {
  title: "Components/Code",
  component: Code,
  tags: ["autodocs"],
  argTypes: {
    lang: {
      control: "select",
      options: ['javascript',
        'typescript',
        'jsx',
        'tsx',
        'bash',
        'python',
        'docker',
        'dockerfile',
        'yaml',
        'cmd',
        'xml',
        'html',
        'json',
        'css',
        'scss'
      ] satisfies BundledLanguage[],
    },
    theme: {
      control: "select",
      options: ["github-dark", "github-light"] satisfies BundledTheme[],
    },
    lineNumbers: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

// Default story
export const Default: Story = {
  render: (args) => (
    <div className=" mt-10">
      <Code {...args} />
    </div>
  ),
  args: {
    label: <>code.tsx <span className='text-neutral-400'>(typescript)</span></>,
    code: `import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";
import { codeToHtml } from "shiki";
import './code.css'
import { Copy } from "lucide-react";
import { Button } from "./button";

type CodeProps = {
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

export const Code: React.FC<CodeProps> = ({
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
}) => {
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
          showTopbar && 'pt-9',
          lineNumbers && "showLines",
          className,
        )}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
  </div>
  );
};
`,
    lang: "javascript",
    theme: "github-dark",
    lineNumbers: true,
    className: "text-xs [&>pre]:max-h-64",
    onCopied: (v) => { alert("copied"); console.log(v) }
  },
};

// Multiple themes
export const Themes: Story = {
  render: (args) => (
    <div className="space-y-6 mt-10">
      {["github-dark", "github-light"].map((theme) => (
        <div key={theme}>
          <h4 className="font-semibold mb-2">{theme}</h4>
          <Code {...args} theme={theme as ("github-dark" | "github-light")} />
        </div>
      ))}
    </div>
  ),
  args: {
    code: `console.log("theme test");`,
    lang: "javascript",
    lineNumbers: true,
  },
};

// Without line numbers
export const NoLineNumbers: Story = {
  args: {
    code: `console.log("no lines");`,
    lang: "javascript",
    theme: "github-dark",
    lineNumbers: false,
  },
};
