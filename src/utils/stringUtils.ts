export function stripMdFromMarkdownFilename(value: string): string {
	return value.replace(/\.md/g, '');
}

export function capitalize(value: string): string {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

export function simpleHash(str: string) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash &= hash; // Convert to 32bit integer
	}
	return new Uint32Array([hash])[0].toString(36);
}
