import { ShirtCard } from "./shirt-card";

export function MainShowcase() {
  return (
    <section class="grid grid-cols-4 gap-5">
      <ShirtCard />
      <ShirtCard />
      <ShirtCard />
      <ShirtCard />
      <ShirtCard />
    </section>
  );
}
