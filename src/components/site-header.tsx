import { CartDrawer } from "./cart-drawer";
import { ToggleDarkMode } from "./dark-mode-toggle";
import { SiteHeaderSearch } from "./site-header-search";
import { SiteNav } from "./site-nav";
import { SiteLogo } from "./ui/site-logo";

export function SiteHeader() {
  return (
    <header class="flex justify-between items-center h-20">
      <div class="flex gap-4 items-center">
        <SiteLogo />
        <SiteNav />
      </div>
      <SiteHeaderSearch />
      <div class="flex items-start gap-2">
        <CartDrawer />
        <ToggleDarkMode />
      </div>
    </header>
  );
}
