"use strict";
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "/wdyr",
    "react",
    "@types",
    "@components(.*)$",
    "@pages(.*)$",
    "@services(.*)$",
    "@public(.*)$",
    "<THIRD_PARTY_MODULES>",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
