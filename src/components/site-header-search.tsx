import { BsSearch } from "solid-icons/bs";

export function SiteHeaderSearch() {
  return (
    <div class="border rounded-md w-full max-w-md  h-8 flex items-center gap-2 px-3">
      <input
        type="text"
        class="w-full bg-transparent h-8 focus-within:outline-none focus:outline-none focus-within:border-none  focus:border-none  rounded-md placeholder:text-muted-foreground"
        placeholder="Search for anything..."
      />
      <BsSearch class="text-muted-foreground" />
    </div>
  );
}
