import pfp from "../../assets/pfp.svg";

export function SiteLogo() {
  return (
    <div class="h-8 w-8 rounded-md border">
      <img src={pfp} class="object-cover" />
    </div>
  );
}
