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
      {
        label: "Blog",
        href: "#",
      },
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
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "#",
      },
      {
        label: "Documentation",
        href: "#",
      },
      {
        label: "Bug Bounty",
        href: "#",
      },
      {
        label: "Audits",
        href: "#",
      },
      {
        label: "Careers",
        href: "#",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "#",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "#",
      },
      {
        label: "Bahasa Indonesia",
        href: "#",
      },
      {
        label: "中文",
        href: "#",
      },
      {
        label: "Tiếng Việt",
        href: "#",
      },
      {
        label: "Italiano",
        href: "#",
      },
      {
        label: "русский",
        href: "#",
      },
      {
        label: "Türkiye",
        href: "#",
      },
      {
        label: "Português",
        href: "#",
      },
      {
        label: "Español",
        href: "#",
      },
      {
        label: "日本語",
        href: "#",
      },
      {
        label: "Français",
        href: "#",
      },
      {
        label: "Deutsch",
        href: "#",
      },
      {
        label: "Filipino",
        href: "#",
      },
      {
        label: "ქართული ენა",
        href: "#",
      },
      {
        label: "Announcements",
        href: "#",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "#",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "#",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "#",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "#",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "#",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
