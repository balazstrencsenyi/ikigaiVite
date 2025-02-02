module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true, // Enable Node.js globals
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // Ignore dist and existing ESLint configs
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX syntax
    },
    ecmaVersion: 12, // ECMAScript 2021
    sourceType: "module", // Enable ES modules
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  plugins: ["react", "react-refresh"], // Add plugins for React and React Refresh
  rules: {
    // Rules for React
    "react/jsx-no-target-blank": "off", // Disable warnings for target="_blank"
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Custom rules
  },
};
