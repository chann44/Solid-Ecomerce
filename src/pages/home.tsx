import { For, Show, createResource } from "solid-js";
import { ShirtCard } from "../components/shirt-card";
import { ShirtType } from "../types/shirtCard";

async function fetchShirts(): Promise<ShirtType[]> {
  const res = await fetch("http://localhost:3000/products");
  return res.json();
}

function App() {
  const [shirts] = createResource(fetchShirts);
  return (
    <Show
      when={shirts()}
      fallback={
        <>
          <p>Loading...</p>
        </>
      }
    >
      <div class="grid grid-cols-4 gap-5 py-10">
        <For each={shirts()}>{(shirt) => <ShirtCard {...shirt} />}</For>
      </div>
    </Show>
  );
}

export default App;
