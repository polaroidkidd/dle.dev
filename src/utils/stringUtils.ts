export function stripMdFromMarkdownFilename(value: string): string {
	return value.replace(/\.md/g, "");
}

export function capitalize(value: string): string {
	return value.charAt(0).toUpperCase() + value.slice(1);
}
