import { JSX } from "solid-js";
import { SiteBanner } from "../components/site-banner";
import { SiteHeader } from "../components/site-header";

interface props extends JSX.HTMLAttributes<HTMLDivElement> {}

export function AppLayout(props: props) {
  return (
    <div class="container">
      <SiteHeader />
      {props.children}
    </div>
  );
}
