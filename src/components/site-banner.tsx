import banner from "../assets/banner.jpeg";
import { ToggleDarkMode } from "./dark-mode-toggle";

export function SiteBanner() {
  return (
    <header class="w-full">
      <h1 class="text-xl font-bold text-center">Rajsthani Vibes</h1>
      <ToggleDarkMode />
      <div class="w-full">
        <img
          src={banner}
          class="object-contain w-full h-20"
          alt="site Banner"
        />
      </div>
    </header>
  );
}
