import { JSX } from "solid-js";
import { SiteBanner } from "../components/site-banner";

interface props extends JSX.HTMLAttributes<HTMLDivElement> {}

export function AppLayout(props: props) {
  return (
    <div class="container">
      <SiteBanner />
      {props.children}
    </div>
  );
}
