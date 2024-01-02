import { For } from "solid-js";
import { useCartContext } from "../providers/cartProvider";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Cart() {
  const { items, setItems } = useCartContext();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart</CardTitle>
      </CardHeader>
      <CardContent>
        <For each={items}>
          {(shirt) => (
            <div>
              <p>
                {shirt.title} : {shirt.price} x {shirt.quantity}
              </p>
            </div>
          )}
        </For>
      </CardContent>
    </Card>
  );
}
