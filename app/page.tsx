import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import { EmailForm } from "./email-form";

interface ItemData {
  href: string;
  name: string;
  description: string;
  inProgress?: boolean;
}

const items: ItemData[] = [
  {
    href: "https://abstract.ac",
    name: "abstract.ac",
    description: "Portfolios for creatives",
    inProgress: true,
  },
  {
    href: "https://designbooks.org",
    name: "designbooks.org",
    description: "A collection of the best books on design",
  },
  {
    href: "https://designforai.org",
    name: "designforai.org",
    description: "The UI and UX of AI design",
    inProgress: true,
  },
  {
    href: "https://designengineer.fyi",
    name: "designengineer.fyi",
    description: "Resources and inspiration for Design Engineers",
  },
  {
    href: "https://github.com/brijr/craft",
    name: "brijr/craft",
    description: "Technical design system for React",
  },
  {
    href: "https://components.bridger.to",
    name: "brijr/components",
    description: "Collection of components for building websites",
  },
  {
    href: "https://youtube.com/@bridgertower",
    name: "youtube.com/@bridgertower",
    description: "Design tutorials and videos",
  },
  {
    href: "https://x.com/wipdes",
    name: "x.com/wipdes",
    description: "Follow WIP Design on X",
  },
  {
    href: "https://bsky.app/profile/wipdes.com",
    name: "bsky.app/profile/wipdes.com",
    description: "Follow WIP Design on Bluesky",
  },
  {
    href: "https://www.instagram.com/wip_des",
    name: "instagram.com/wip_des",
    description: "Follow WIP Design on Instragram",
  },
];

export default function Home() {
  return (
    <Main>
      <Animate>
        <Image
          src={Logo}
          alt="WIP Design Logo"
          width={64}
          height={35.8}
          className="-ml-1"
        />
        <div></div>
        <h1>
          <span className="font-semibold">WIP Design</span>, tools and resources
          for designers.
        </h1>
        <Description />
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
        <div className="my-8">
          <EmailForm label="Subscribe to WIP Design" />
        </div>
        <p className="text-muted-foreground text-xs">
          © WIP & <a href="https://bridger.to">Bridger Tower</a>. All Rights
          Reserved
        </p>
      </Animate>
    </Main>
  );
}

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-6 md:py-24 md:px-12 grid max-w-2xl mx-auto gap-4">
      {children}
    </main>
  );
}

function Animate({ children }: { children: React.ReactNode }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <section
          key={index}
          className="fade-in-up"
          style={{ animationDelay: `${index * 0.25}s` }}
        >
          {child}
        </section>
      ))}
    </>
  );
}

function Item({ name, description, inProgress = false, href }: ItemData) {
  const ItemContent = () => (
    <>
      <div>
        <h4 className="text-sm">{name}</h4>
        <p className="text-muted-foreground text-xs font-light">
          {description}
        </p>
      </div>

      {inProgress && (
        <p className="text-muted-foreground text-xs border h-fit w-fit py-px bg-muted rounded-sm px-1">
          In Progress
        </p>
      )}
    </>
  );

  return (
    <Link
      className="border rounded-sm transition-all bg-secondary/50 hover:bg-secondary/20 grid grid-cols-[1fr_auto] gap-4 p-2 hover:-mt-1 hover:mb-1"
      href={href}
    >
      <ItemContent />
    </Link>
  );
}

const Description = () => {
  return (
    <h2 className="text-muted-foreground mb-8">
      <em>Work in Progress</em>. A philosophy. A journey. Never settle. Always
      evolve. This is the designer&apos;s path. At{" "}
      <a className="inline-link" target="_blank" href="https://wip.ac">
        WIP
      </a>
      , we craft tools for the ever-evolving designer. Explore our curated
      collection—created by{" "}
      <a className="inline-link" target="_blank" href="https://bridger.to/x">
        Bridger Tower
      </a>
      , designed for you.
    </h2>
  );
};
