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
    "prettier/prettier": "error",
    "no-var": "warn",
    "no-unused-vars": "off",
    "prefer-cons": "off",
    "no-restricted-globals": "off",
  },
};
