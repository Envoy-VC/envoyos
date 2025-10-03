/** biome-ignore-all lint/correctness/useUniqueElementIds: safe */

import Link from "next/link";

import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  RssIcon,
  SendIcon,
  TwitterIcon,
} from "lucide-react";

const footerItems = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#articles",
    title: "Articles",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

const socials = [
  {
    href: "https://github.com/envoy-vc",
    icon: GithubIcon,
    id: "github",
  },
  {
    href: "https://twitter.com/Envoy_1084",
    icon: TwitterIcon,
    id: "twitter",
  },
  {
    href: "https://www.linkedin.com/in/vedant-chainani",
    icon: LinkedinIcon,
    id: "linkedin",
  },
  {
    href: "https://t.me/envoy1084",
    icon: SendIcon,
    id: "telegram",
  },
  {
    href: "https://blog.envoy1084.xyz/",
    icon: RssIcon,
    id: "blog",
  },
];

export const Footer = () => {
  return (
    <footer className="mt-12 w-full bg-primary py-16" id="footer">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-start gap-8 md:flex-row">
          <div className="mx-auto font-formula text-4xl text-[#1C1C1C] uppercase tracking-wide md:mx-0 md:text-5xl">
            EnvoyOS
          </div>
          <div className="flex flex-row gap-4 md:flex-col md:px-8">
            {footerItems.map((item) => {
              return (
                <a
                  className="w-fit font-sans font-semibold text-[#1C1C1C] text-sm transition-all duration-200 ease-in-out hover:text-[#1C1C1C]/80 md:text-xl"
                  href={item.href}
                  key={item.title}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Link
            className="group flex flex-row items-center justify-center gap-1 rounded-sm bg-[#1c1c1c] px-4 py-2 font-formula text-3xl text-[#FFCCDE] uppercase tracking-wide"
            href="/contact"
          >
            <div className="pt-1">Get in Touch</div>
            <ArrowUpRightIcon
              className="group-hover:-translate-y-2 -translate-y-1 size-8 transition-all duration-200 ease-in group-hover:translate-x-1"
              strokeWidth={3}
            />
          </Link>
          <div className="flex flex-row items-center gap-4">
            {socials.map((social) => {
              return (
                <a href={social.href} key={social.id}>
                  <social.icon
                    className="size-6 text-[#1c1c1c]"
                    strokeWidth={2.5}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
