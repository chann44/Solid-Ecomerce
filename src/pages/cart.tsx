import { For } from "solid-js";
import { useCartContext } from "../providers/cartProvider";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export function Cart() {
  const { items } = useCartContext();

  const totalAmount = () =>
    items.reduce((acc, p) => {
      return acc + p.quantity * p.price;
    }, 0);

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
      <CardFooter>
        <h2 class="text-2xl font-bold">Total : {totalAmount()} </h2>
      </CardFooter>
    </Card>
  );
}
