"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ExternalLink } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  headingLevel?: "h2" | "h3";
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  links,
  className,
  headingLevel = "h3",
}: Props) {
  return (
    <>
      <Card
        className={cn(
          "group relative flex h-full flex-col overflow-hidden border border-border/60 bg-card/40 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border hover:bg-card/80 hover:shadow-xl",
          className
        )}
      >
        {image && (
        <Link
          href={href || "#"}
          aria-label={`${title} - open project`}
          className="block cursor-pointer relative overflow-hidden"
        >
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="h-44 w-full overflow-hidden object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )}
        </Link>
        )}
        <CardHeader className="px-4 pt-4">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <CardTitle as={headingLevel} className="text-base font-semibold">{title}</CardTitle>
              {href && (
                <ExternalLink className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </div>
            <time className="font-sans text-xs text-muted-foreground">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-4">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1 max-w-full overflow-hidden">
              {tags?.map((tag) => (
                <Badge
                  className="px-1.5 py-0.5 text-[10px] whitespace-nowrap"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-4 pb-4">
          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank" className="inline-flex min-h-6 items-center">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
        <BorderBeam
          duration={4}
          size={300}
          reverse
          className="from-transparent via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </Card>
    </>
  );
}
