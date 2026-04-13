/// <reference types="@sveltejs/enhanced-img/types" />

declare module '*.jpg?enhanced' {
  const value: string;
  export default value;
}

declare module '*.jpg?enhanced&w=220;352;704' {
  const value: string;
  export default value;
}

declare module '*.jpg?enhanced&w=240;384;768' {
  const value: string;
  export default value;
}

declare module '*.jpg?enhanced&w=256;416;832' {
  const value: string;
  export default value;
}

declare module '*.jpeg?enhanced' {
  const value: string;
  export default value;
}

declare module '*.png?enhanced' {
  const value: string;
  export default value;
}

declare module '*.webp?enhanced' {
  const value: string;
  export default value;
}

declare module '*.avif?enhanced' {
  const value: string;
  export default value;
}

declare module '*.svx' {
  import type { Component } from 'svelte';

  export const metadata: {
    title?: string;
    description?: string;
    publishedAt?: string;
    updatedAt?: string;
    author?: string;
  };

  const component: Component<Record<string, never>>;
  export default component;
}
