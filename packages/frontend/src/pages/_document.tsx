import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-neutral-50 dark:bg-neutral-900 transition-colors overflow-x-hidden ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
