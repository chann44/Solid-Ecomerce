import { A } from "@solidjs/router";
import { ShirtType } from "../types/shirtCard";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ShirtCard(props: ShirtType) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
        <img src={props.img} alt="shirt image" />
        <p>
          Price: <span class="text-xl font-bold">$ {props.price}</span>
        </p>
      </CardContent>
      <CardFooter class="border-green-50">
        <A href={`/product/${props.id}`} class="bg-sky-500 w-full">
          Buy Now
        </A>
      </CardFooter>
    </Card>
  );
}
