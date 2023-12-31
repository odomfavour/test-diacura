import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-teal-500" : "bg-teal-700"}
          relative inline-flex h-[28px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </>
  );
}
