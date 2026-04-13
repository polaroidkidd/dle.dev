/// <reference types="@sveltejs/enhanced-img/types" />

declare module '*.jpg?enhanced' {
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
