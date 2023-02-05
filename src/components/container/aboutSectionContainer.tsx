import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";
import classNames from "classnames";
import { IconChevron } from "@icons/IconChevron";

type IAboutSectionContainer = {
  children: ReactNode;
  sectionTitle?: string;
  isCollapsable?: boolean;
  isInitiallyCollapsed?: boolean;
};

export function AboutSectionContainer({
  children,
  sectionTitle,
  isCollapsable = true,
  isInitiallyCollapsed = false,
}: IAboutSectionContainer) {
  const [isCollapsed, setIsCollapsed] = useState(isInitiallyCollapsed);

  function toggleVisibility(event: MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsCollapsed((ps) => !ps);
  }

  return (
    <section>
      <div
        className={classNames(
          "cursor-pointer",
          "flex",
          "relative",
          "justify-center",
          {
            "border-b border-red-300": isCollapsable,
          },
        )}
        onClick={toggleVisibility}
      >
        <SectionTitle title={sectionTitle} />
        <ExpandCollapseSectionButton
          isCollapsable={isCollapsable}
          isCollapsed={isCollapsed}
        />
      </div>
      <div className={classNames({ hidden: isCollapsed })}>{children}</div>
    </section>
  );
}

type IExpandCollapseSectionButton = {
  isCollapsable: boolean;
  isCollapsed: boolean;
};

function ExpandCollapseSectionButton({
  isCollapsable,
  isCollapsed,
}: IExpandCollapseSectionButton) {
  if (!isCollapsable) {
    return null;
  }

  return (
    <div
      className={classNames(
        "transition-all tracking-tighter absolute right-0 top-1/2 -translate-y-1/2  text-4xl",
        {
          "rotate-180": !isCollapsed,
        },
      )}
    >
      <IconChevron width={25} />
    </div>
  );
}

function SectionTitle({ title }: { title?: string }) {
  return title ? (
    <h2
      className="pl-2 text-center text-2xl"
      id={title?.toLowerCase().replaceAll(" ", "-")}
    >
      {title}
    </h2>
  ) : null;
}
