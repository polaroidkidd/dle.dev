import type { IBlogMetaData } from "@model/github";

export function sortBlogsByMostRecent(
  a: IBlogMetaData,
  z: IBlogMetaData,
): number {
  return Date.parse(z.publishedOn) - Date.parse(a.publishedOn);
}
