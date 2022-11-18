module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-var": "warn",
    "no-unused-vars": "off",
    "prefer-cons": "off",
    "no-undef": "off",
    "no-restricted-globals": "off",
    "prefer-destructuring": "off",
  },
};
