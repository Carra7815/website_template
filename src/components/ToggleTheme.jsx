import React from "react";

import { Button } from "react-aria-components";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function ToggleTheme() {
  let [isDark, setDark] = React.useState(false);

  return (
    <Button
      aria-label="Icon only"
      onPress={() => setDark(document.documentElement.classList.toggle("dark"))}
      preventFocusOnPress
    >
      {isDark ? (
        <SunIcon className="nav-item h-5 w-5" />
      ) : (
        <MoonIcon className="nav-item h-5 w-5" />
      )}
    </Button>
  );
}

export default ToggleTheme;