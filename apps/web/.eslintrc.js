const path = require("path");

const javascript = {
  files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
  extends: [
    "standard",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort", "tailwindcss"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  settings: {
    tailwindcss: {
      callees: ["cx"],
    },
  },
};

const typescript = {
  files: ["*.ts", "*.tsx"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  extends: ["standard-with-typescript", "prettier"],
  rules: {
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-types": "off",
    "key-spacing": "off",
    "@typescript-eslint/key-spacing": "off",
  },
};

const react = {
  files: ["*.jsx", "*.tsx"],
  extends: ["standard-jsx", "standard-react", "prettier"],
  rules: {
    /* This rule is way too restrictive and breaks on HOCs and forwarded refs */
    "react/display-name": "off",
    /* Not needed since React 17 */
    "react/react-in-jsx-scope": "off",
  },
};

module.exports = {
  root: true,
  overrides: [javascript, typescript, react],
  rules: {
    /* appDir */
    "@next/next/no-html-link-for-pages": [
      "error",
      path.join(__dirname, "./src/app"),
    ],
  },
};
