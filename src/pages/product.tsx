import { useParams } from "@solidjs/router";
import { ShirtType } from "../types/shirtCard";
import { Show, createResource } from "solid-js";
import { Button } from "../ui/button";
import { useCartContext } from "../providers/cartProvider";

async function fetchShirt(id: string): Promise<ShirtType> {
  const res = await fetch(`http://localhost:3000/products/${id}`);
  return res.json();
}

export function Product() {
  const params = useParams();
  const [shirt] = createResource(params.id, fetchShirt);
  const { items, setItems } = useCartContext();

  function addToCart() {
    const exists = items.find((p) => p.id === shirt()?.id);
    if (exists) {
      setItems(
        (p) => p.id === shirt()?.id,
        "quantity",
        (q) => q + 1
      );
    }

    if (!exists && shirt()) {
      setItems([...items, { ...shirt(), quantity: 1 }]);
    }
  }

  return (
    <Show when={shirt()} fallback={<p>Loading...</p>}>
      <div class="py-10 grid grid-cols-5 gap-4">
        <div class="h-full col-span-2">
          <img src={shirt()?.img} alt="" />
        </div>
        <div class="col-span-3 flex flex-col gap-y-3">
          <h2 class="text-3xl font-bold">{shirt()?.title}</h2>
          <p>{shirt()?.description}</p>
          <p class="text-xl font-bold"> only ${shirt()?.price}</p>
          <Button onClick={addToCart}>Add to Cart</Button>
        </div>
      </div>
    </Show>
  );
}
