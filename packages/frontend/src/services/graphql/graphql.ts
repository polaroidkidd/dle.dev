import { IMAGE, RICH_TEXT, SECTION_TITLE, SEO, SLIDE_SHOW, TEXT } from "./fragments";
import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query Articles {
    articles {
      data {
        attributes {
          tags {
            data {
              id
              attributes {
                tag
                articles {
                  data {
                    attributes {
                      title
                      seo {
                        canonicalURL
                      }
                    }
                  }
                }
                updatedAt
                publishedAt
              }
            }
          }
          title
          publishedAt
          dynamic {
            ...image
            ...richText
            ...slideShow
            ...text
            ...sectionTitle
          }
          seo {
            ...seo
          }
        }
      }
    }
  }
  ${IMAGE}
  ${RICH_TEXT}
  ${SLIDE_SHOW}
  ${TEXT}
  ${SECTION_TITLE}
  ${SEO}
`;

export const GET_HOME = gql`
  query Home {
    home {
      data {
        attributes {
          title
          publishedAt
          updatedAt
          seo {
            ...seo
          }
          tagLines {
            ...text
          }
          dynamic {
            ...text
            ...image
          }
        }
      }
    }
  }
  ${TEXT}
  ${IMAGE}
  ${SEO}
`;
