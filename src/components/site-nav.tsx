import { A } from "@solidjs/router";
import { siteRoutes } from "../config/site";
import { For } from "solid-js";

const navLinks = [
  {
    label: "All",
    href: siteRoutes.All,
  },
  {
    label: "shirts",
    href: siteRoutes.Shirts,
  },
  {
    label: "stickers",
    href: siteRoutes.Stickers,
  },
];

export function SiteNav() {
  return (
    <nav class="flex  gap-4 items-center">
      <For each={navLinks}>
        {(navLink) => <NavItem href={navLink.href} label={navLink.label} />}
      </For>
    </nav>
  );
}

interface NavItemProps {
  label: string;
  href: string;
}

export function NavItem(props: NavItemProps) {
  return (
    <A
      class="text-foreground opacity-60 hover:opacity-100 font-medium"
      href={props.href}
    >
      {props.label}
    </A>
  );
}
