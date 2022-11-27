export function stripMdFromMarkdownFilename(value: string): string {
  return value.replace(/\.md/g, "");
}
