import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render as baseRender } from "@testing-library/react";
import type { ReactElement } from "react";
import React from "react";
import { MockedProvider } from "@apollo/client/testing";

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function AllTheProviders({ children }) {
  return (
    <>
      <MockedProvider mocks={[]} addTypename={false}>
        {children}
      </MockedProvider>
    </>
  );
}

function render(ui: ReactElement, options?: Omit<RenderOptions, "queries">) {
  return baseRender(ui, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    wrapper: AllTheProviders,
    ...options,
  }) as RenderResult;
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
