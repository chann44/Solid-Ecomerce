import banner from "../assets/banner.jpeg";
import { useCartContext } from "../providers/cartProvider";
import { ToggleDarkMode } from "./dark-mode-toggle";
import { A } from "@solidjs/router";

export function SiteBanner() {
  const { items } = useCartContext();

  const totalItems = () => {
    return items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  };
  return (
    <header class="w-full">
      <h1 class="text-xl font-bold text-center">Rajsthani Vibes</h1>
      <ToggleDarkMode />
      <div class="flex gap-4 items-center">
        <A href="/">Home</A>
        <A href="/about">About</A>
        <A href="/cart">Cart ( {totalItems()} )</A>
      </div>
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
