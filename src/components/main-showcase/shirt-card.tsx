import mainShirt from "../../assets/main-shirt.jpg";
import { Button } from "../ui/button";

export function ShirtCard() {
  return (
    <div class="relative">
      <img src={mainShirt} class="h-80" alt="" />
      <div class="h-11 border rounded-full py-3 pl-6 pr-2 flex gap-2 items-center absolute bottom-4 left-4 bg-accent">
        <p class="text-xl font-bold">cat on cat</p>
        <Button class="h-8 rounded-full px-6 text-base">$2000</Button>
      </div>
    </div>
  );
}
