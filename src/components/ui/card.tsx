import { JSX } from "solid-js";
import { cn } from "../../lib/utils";

type divProps = JSX.HTMLAttributes<HTMLDivElement>;

const Card = (props: divProps) => {
  return (
    <div class={cn("rounded-lg border bg-card text-card-foreground shadow-sm")}>
      {props.children}
    </div>
  );
};

const CardHeader = (props: divProps) => {
  return (
    <div class={cn("flex flex-col space-y-1.5 p-6")}>{props.children}</div>
  );
};

const CardTitle = (props: divProps) => {
  return (
    <h3
      class={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        props.class
      )}
    >
      {props.children}
    </h3>
  );
};

const CardDescription = (props: divProps) => {
  return (
    <p class={cn("text-sm text-muted-foreground", props.class)}>
      {props.children}
    </p>
  );
};

const CardContent = (props: divProps) => {
  return <div class={cn("p-6 pt-0", props.class)}>{props.children}</div>;
};

const CardFooter = (props: divProps) => {
  return (
    <div class={cn("flex items-center p-6 w-full pt-0", props.class)}>
      {props.children}
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
