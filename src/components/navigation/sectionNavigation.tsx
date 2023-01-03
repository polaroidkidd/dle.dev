import type { MouseEvent, TouchEvent } from "react";
import { useState } from "react";

export function SectionNavigation({
  sections,
}: {
  sections: Element[] | null;
}) {
  const [expanded, setExpanded] = useState(false);

  if (sections === null) {
    return null;
  }

  function scrollTo(
    event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ) {
    location.hash = "#" + event.currentTarget.id.replaceAll("button-", "");
  }

  function toggleVisibility(
    event: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ) {
    event.preventDefault();
    setExpanded((ps) => !ps);
  }

  return (
    <div className="fixed right-5 bottom-1/2 flex flex-col">
      {expanded ? (
        <>
          {sections.map((section) => {
            return (
              <button
                id={`button-${section.id}`}
                onClick={scrollTo}
                key={section.id}
                type="button"
                className="block border rounded bg-red-500 px-4 py-2 text-white "
              >
                {section.id
                  .replaceAll("-", " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            );
          })}

          <button
            onClick={toggleVisibility}
            className="block border rounded bg-red-500 px-4 py-2 text-white "
          >
            Collapse
          </button>
        </>
      ) : (
        <button
          onClick={toggleVisibility}
          className="block border rounded bg-red-500 px-4 py-2 text-white "
        >
          T.o.C.
        </button>
      )}
    </div>
  );
}
