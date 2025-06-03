import { Callout } from "@/components/mdx/Callout";
import { CodeBlock } from "@/components/mdx/CodeBlock";
import { YouTubeEmbed } from "@/components/mdx/YouTubeEmbed";
import { Image } from "@/components/mdx/Image";

export const MDXComponents = {
  Callout,
  CodeBlock,
  YouTubeEmbed,
  img: Image, // replaces native <img> tag with styled component
};
