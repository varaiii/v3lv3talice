"use client";

import { track } from "@vercel/analytics";
import { ArrowUpRight, Heart } from "lucide-react";

type LinkItem = {
  title: string;
  description: string;
  href: string;
  icon: "telegram" | "instagram";
  featured?: boolean;
};

const links: LinkItem[] = [
  {
    title: "Private Community",
    description: "My private community",
    href: "https://t.me/v3lv3talice",
    icon: "telegram",
    featured: true,
  },
  {
    title: "Instagram",
    description: "Follow me on Instagram",
    href: "https://www.instagram.com/v3lv3t.angel/?hl=ru",
    icon: "instagram",
  },
];

function trackLinkClick(link: LinkItem) {
  if (link.icon === "telegram") {
    track("telegram_click");
  }

  if (link.icon === "instagram") {
    track("instagram_click");
  }
}

function LinkIcon({ name }: { name: LinkItem["icon"] }) {
  if (name === "telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon">
        <path d="M21 4.8 3.7 11.5c-1 .4-1 1.8.1 2.1l4.3 1.3 1.7 5c.3.9 1.5 1.1 2.1.4l2.4-2.8 4.4 3.2c.8.6 1.9.1 2.1-.9l2.9-13.3c.2-1.1-.8-2-1.8-1.6Z" />
        <path d="m8.3 14.8 10-6.3-7.5 8.3-.2 3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="brand-icon">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
}

function DecorativeInk() {
  return (
    <div className="decor-layer" aria-hidden="true">
      <svg className="branch branch-bamboo-top" viewBox="0 0 180 260" role="img">
        <path className="ink-stroke" d="M42 252 C64 190 74 126 66 18" />
        <path className="ink-stroke thin" d="M70 92 C102 76 126 54 146 28" />
        <path className="ink-stroke thin" d="M62 142 C34 126 20 104 14 82" />
        <path className="leaf" d="M72 82 C100 60 124 56 154 62 C126 82 101 92 72 82Z" />
        <path className="leaf" d="M56 132 C28 106 16 84 16 52 C40 72 58 94 56 132Z" />
        <path className="leaf" d="M74 164 C104 145 132 140 164 150 C134 169 104 176 74 164Z" />
      </svg>

      <svg className="branch branch-sakura" viewBox="0 0 240 180" role="img">
        <path className="ink-stroke" d="M228 22 C174 36 126 58 82 94 C56 116 34 138 10 160" />
        <path className="ink-stroke thin" d="M126 62 C130 36 140 18 156 6" />
        <path className="ink-stroke thin" d="M92 86 C84 58 72 38 54 24" />
        <g className="flower">
          <circle cx="154" cy="34" r="4" />
          <circle cx="164" cy="36" r="4" />
          <circle cx="158" cy="44" r="4" />
        </g>
        <g className="flower">
          <circle cx="74" cy="66" r="4" />
          <circle cx="84" cy="68" r="4" />
          <circle cx="78" cy="76" r="4" />
        </g>
        <g className="flower soft">
          <circle cx="42" cy="132" r="3.5" />
          <circle cx="51" cy="134" r="3.5" />
          <circle cx="46" cy="142" r="3.5" />
        </g>
      </svg>

      <svg className="branch branch-bamboo-bottom" viewBox="0 0 190 210" role="img">
        <path className="ink-stroke" d="M146 204 C128 154 120 92 126 16" />
        <path className="ink-stroke thin" d="M122 92 C92 78 68 58 46 32" />
        <path className="ink-stroke thin" d="M130 136 C158 122 172 102 180 78" />
        <path className="leaf" d="M120 86 C88 68 62 64 34 74 C62 92 92 98 120 86Z" />
        <path className="leaf" d="M136 132 C160 108 174 84 178 52 C154 70 136 94 136 132Z" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ink-stain stain-one" />
      <div className="ink-stain stain-two" />
      <div className="ink-stain stain-three" />
      <DecorativeInk />

      <div className="stamp" aria-hidden="true">
        愛・秘密
      </div>

      <section className="profile-card card" aria-label="Alice profile links">
        <div className="avatar">
          <img src="/avatar.jpg" alt="Alice" />
        </div>

        <div className="name-lockup logo-wrap">
          <h1 className="logo-title">ALICE</h1>
          <span className="name-star">✦</span>
          <span className="japanese-name" aria-label="Alice in Japanese">
            アリス
          </span>
        </div>

        <div className="divider" aria-hidden="true" />
        <p className="intro">welcome to my special place ✦</p>

        <div className="link-list">
          {links.map((link) => (
            <a
              className={link.featured ? "link-button featured" : "link-button"}
              href={link.href}
              key={link.title}
              onClick={() => trackLinkClick(link)}
            >
              <span className="link-icon" aria-hidden="true">
                <LinkIcon name={link.icon} />
              </span>
              <span className="link-copy">
                <span className="link-title">{link.title}</span>
                <span className="link-description">{link.description}</span>
              </span>
              <span className="link-mark" aria-hidden="true">
                ✦
              </span>
              <ArrowUpRight className="link-arrow" size={20} strokeWidth={2} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="footer-note">
          <span aria-hidden="true">✦</span>
          <Heart size={12} fill="currentColor" aria-hidden="true" />
        </p>
      </section>
    </main>
  );
}
