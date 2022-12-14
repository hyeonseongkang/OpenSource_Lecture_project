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
    "no-var": "off",
    "no-unused-vars": "off",
    "prefer-cons": "off",
    "no-undef": "off",
    "no-restricted-globals": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
    "prefer-destructuring": "off",
    "vars-on-top": "off",
    "no-case-declarations": "off",
    "import/order": "off",
    "no-loop-func": "off",
    "prefer-template": "off",
    "no-continue": "off",
  },
};
