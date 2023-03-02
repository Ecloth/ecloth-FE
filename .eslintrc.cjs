module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  ignorePatterns: ["*.css"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/jsx-no-target-blank": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
