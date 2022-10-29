import type {
  ImageFragment,
  RichTextFragment,
  SectionTitleFragment,
  SlideShowFragment,
  TextFragment,
} from "@types";
import {
  DynamicImage,
  DynamicRichText,
  DynamicSectionTitle,
  DynamicSlideShow,
  DynamicText,
} from "@components";

export type IDynamicZone =
  | [SectionTitleFragment | TextFragment | SlideShowFragment | RichTextFragment | ImageFragment]
  | null;

export type IDynamicComponent =
  | SectionTitleFragment
  | TextFragment
  | SlideShowFragment
  | RichTextFragment
  | ImageFragment;

export function isImage(component: IDynamicComponent): component is ImageFragment {
  return component.__typename === "ComponentDynamicImage";
}

export function isText(component: IDynamicComponent): component is TextFragment {
  return component.__typename === "ComponentDynamicText";
}
export function isRichText(component: IDynamicComponent): component is RichTextFragment {
  return component.__typename === "ComponentDynamicRichText";
}
export function isSectionTitle(component: IDynamicComponent): component is SectionTitleFragment {
  return component.__typename === "ComponentDynamicSectionTitle";
}
export function isSlideshow(component: IDynamicComponent): component is SlideShowFragment {
  return component.__typename === "ComponentDynamicSlideshow";
}

const componentFilterMap = {
  ComponentDynamicImage: isImage,
  ComponentDynamicText: isText,
  ComponentDynamicRichText: isRichText,
  ComponentDynamicSectionTitle: isSectionTitle,
  ComponentDynamicSlideshow: isSlideshow,
};

type dynamicComponentType =
  | "ComponentDynamicImage"
  | "ComponentDynamicText"
  | "ComponentDynamicRichText"
  | "ComponentDynamicSectionTitle"
  | "ComponentDynamicSlideshow";

export function filterDynamicComponentsByType<T>(
  componentType: dynamicComponentType,
  zone: IDynamicZone,
) {
  return zone?.filter(componentFilterMap[componentType]) as T[];
}

export function DynamicZone({ zone }: { zone: IDynamicZone }) {
  if (!zone) {
    return null;
  }

  return (
    <>
      {zone.map((component) => {
        switch (component.__typename) {
          case "ComponentDynamicText":
            return <DynamicText text={component.text} />;
          case "ComponentDynamicRichText":
            return <DynamicRichText richText={component.richText} />;
          case "ComponentDynamicSectionTitle":
            return (
              <DynamicSectionTitle
                chapterTitle={component.chapterTitle}
                chapterNumber={component.chapterNumber}
              />
            );
          case "ComponentDynamicSlideshow":
            return <DynamicSlideShow slideShow={component.slideShow} />;
          case "ComponentDynamicImage":
            return <DynamicImage image={component.image} />;
          default:
            return null;
        }
      })}
    </>
  );
}
