import { useParams } from "@solidjs/router";
import { ShirtType } from "../types/shirtCard";
import { Show, createResource } from "solid-js";

async function fetchShirt(id: string): Promise<ShirtType> {
  const res = await fetch(`http://localhost:3000/products/${id}`);
  return res.json();
}

export function Product() {
  const params = useParams();
  const [shirt] = createResource(params.id, fetchShirt);
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
        </div>
      </div>
    </Show>
  );
}
