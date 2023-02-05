import classNames from "classnames";
import type { ReactNode } from "react";
import React from "react";

type IFormat = "strong" | "italic" | "underline" | "del" | "small";
type IVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "code";
interface ITypoGraphyProps {
  children?: React.ReactNode;

  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

  /**
   * Set the text-align on the component.
   */
  align?: "inherit" | "left" | "center" | "right";

  noPadding?: boolean;

  format?: IFormat[];
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?:
    | "initial"
    | "primary"
    | "primary-dark"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "error"
    | "light"
    | "dark"
    | "yellow"
    | "white";

  /**
   * Controls the display type
   */
  display?: "initial" | "block" | "inline";

  /**
   * Applies the theme typography styles.
   */
  variant: IVariant;

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping?: { [key: string]: string };

  /**
   * If `true`, the text will have font-wight: bold.
   */
  bold?: boolean;

  /**
   * If `true`, the text will be truncated if longer then parent div
   */
  truncate?: boolean;
}

const defaultVariantMapping: Record<IVariant, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  code: "code",
};

const defaultProps: Partial<ITypoGraphyProps> = {
  align: "inherit",
  color: "initial",
  display: "initial",
  variant: "p",
  variantMapping: defaultVariantMapping,
  size: "md",
  noPadding: false,
};

export function Typography(
  props: ITypoGraphyProps & React.HTMLAttributes<HTMLElement>,
) {
  props = {
    ...defaultProps,
    ...props,
  };

  const className = classNames(
    // size
    {
      "text-xs": props.size === "xs",
      "text-sm": props.size === "sm",
      "text-base": props.size === "md",
      "text-lg": props.size === "lg",
      "text-xl": props.size === "xl",
      "text-4xl": props.size === "xxl",
    },
    // text-align
    {
      "text-center": props.align === "center",
      "text-left": props.align === "left",
      "text-right": props.align === "right",
    },
    // padding
    {
      "p-0": props.noPadding,
    },
  );

  const TagName = defaultVariantMapping[props.variant];

  if (props.variant === "code") {
    return (
      <div
        className={classNames(
          "flex",
          {
            "justify-center": props.align === "center",
          },
          {
            "justify-end": props.align === "right",
          },
        )}
      >
        <TagName className={className}>{props.children}</TagName>
      </div>
    );
  }
  return (
    <TagName className={className}>
      <FormatWrapper formats={props.format?.reverse()}>
        {props.children}
      </FormatWrapper>
    </TagName>
  );
}

type IFormatWrapper = {
  formats?: IFormat[];
  children: ReactNode;
};
function FormatWrapper({ formats, children }: IFormatWrapper) {
  if (formats === undefined || formats.length === 0) {
    return <>{children}</>;
  }

  const defaultFormatMapping: Record<IFormat, keyof JSX.IntrinsicElements> = {
    strong: "strong",
    italic: "i",
    del: "del",
    small: "small",
    underline: "u",
  };

  const TagName = defaultFormatMapping[formats[0]];

  return (
    <FormatWrapper formats={formats.slice(1)}>
      <TagName>{children}</TagName>
    </FormatWrapper>
  );
}

/*

    <b> - Bold text
    <strong> - Important text
    <i> - Italic text
    <em> - Emphasized text
    <mark> - Marked text
    <small> - Smaller text
    <del> - Deleted text
    <ins> - Inserted text
    <sub> - Subscript text
    <sup> - Superscript text

 */
// /*
// text-xs	font-size: 0.75rem; /* 12px */
// line-height: 1rem; /* 16px */
// text-sm	font-size: 0.875rem; /* 14px */
// line-height: 1.25rem; /* 20px */
// text-base	font-size: 1rem; /* 16px */
// line-height: 1.5rem; /* 24px */
// text-lg	font-size: 1.125rem; /* 18px */
// line-height: 1.75rem; /* 28px */
// text-xl	font-size: 1.25rem; /* 20px */
// line-height: 1.75rem; /* 28px */
// text-2xl	font-size: 1.5rem; /* 24px */
// line-height: 2rem; /* 32px */
// text-3xl	font-size: 1.875rem; /* 30px */
// line-height: 2.25rem; /* 36px */
// text-4xl	font-size: 2.25rem; /* 36px */
// line-height: 2.5rem; /* 40px */
// text-5xl	font-size: 3rem; /* 48px */
// line-height: 1;
// text-6xl	font-size: 3.75rem; /* 60px */
// line-height: 1;
// text-7xl	font-size: 4.5rem; /* 72px */
// line-height: 1;
// text-8xl	font-size: 6rem; /* 96px */
// line-height: 1;
// text-9xl	font-size: 8rem; /* 128px */
// line-height: 1;
//  */
