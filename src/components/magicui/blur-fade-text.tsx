import { cn } from "@/lib/utils";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: { hidden: { y: number }; visible: { y: number } };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
  eager?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function BlurFadeText({ text, className, as: Wrapper = "div" }: BlurFadeTextProps) {
  return <Wrapper className={cn("hero-rise", className)}>{text}</Wrapper>;
}
