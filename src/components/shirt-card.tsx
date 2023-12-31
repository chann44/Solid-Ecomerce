import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ShirtCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dust Painted Shirt</CardTitle>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores in
        porro voluptatum autem? Hic tempora sapiente veritatis unde debitis
        ducimus!
      </CardContent>
      <CardFooter class="border-green-50">
        <Button
          onClick={() => {
            console.log("hello from click");
          }}
          class="bg-green-500 w-full"
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
