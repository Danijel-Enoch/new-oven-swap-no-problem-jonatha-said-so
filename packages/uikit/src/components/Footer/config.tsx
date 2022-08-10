import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "#",
      },
      // {
      //   label: "Blog",
      //   href: "#",
      // },
      {
        label: "Community",
        href: "#",
      },
      {
        label: "Oven",
        href: "#",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "#",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "#",
      },
      {
        label: "Troubleshooting",
        href: "#",
      },
      {
        label: "Guides",
        href: "#",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/OvenSwapInfo",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href:"https://t.me/ovenswapinfo",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
