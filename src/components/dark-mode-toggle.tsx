import { createSignal } from "solid-js";
import { Button } from "../ui/button";
import { BiRegularSun, BiRegularMoon } from "solid-icons/bi";

export function ToggleDarkMode() {
  const [darkMode, setDarkMode] = createSignal(false);

  return (
    <Button
      variant={"ghost"}
      onClick={() => {
        if (darkMode()) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }

        setDarkMode(!darkMode());
      }}
    >
      {darkMode() ? <BiRegularSun /> : <BiRegularMoon />}
    </Button>
  );
}
