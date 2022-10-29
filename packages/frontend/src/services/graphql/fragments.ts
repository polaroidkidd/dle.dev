import { gql } from "@apollo/client";

export const IMAGE = gql`
  fragment image on ComponentDynamicImage {
    image {
      __typename
      data {
        attributes {
          hash
          name
          alternativeText
          caption
          width
          height
          url
          previewUrl
          ext
          mime
        }
      }
    }
  }
`;

export const RICH_TEXT = gql`
  fragment richText on ComponentDynamicRichText {
    id
    richText
  }
`;

export const SLIDE_SHOW = gql`
  fragment slideShow on ComponentDynamicSlideshow {
    slideShow {
      __typename
      data {
        attributes {
          hash
          name
          alternativeText
          caption
          width
          height
          previewUrl
          url
          ext
          mime
        }
      }
    }
  }
`;

export const TEXT = gql`
  fragment text on ComponentDynamicText {
    __typename
    text
  }
`;

export const SECTION_TITLE = gql`
  fragment sectionTitle on ComponentDynamicSectionTitle {
    __typename
    chapterTitle
    chapterNumber
  }
`;

export const SEO = gql`
  fragment seo on ComponentSharedSeo {
    canonicalURL
    id
    keywords
    metaDescription
    metaTitle
    metaRobots
    metaViewport
  }
`;
