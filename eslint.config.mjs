// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  pluginJs.configs.recommended, // Apply ESLint's recommended JavaScript rules
  {
    languageOptions: {
      globals: globals.browser, // Define browser global variables
    },
    plugins: {
      prettier: prettierPlugin, // Register Prettier plugin
    },
    rules: {
      "no-unused-vars": "off",
      "no-console": "warn", // Warn when using console.log
      "no-debugger": "error", // Disallow the use of debugger
      "no-var": "error", // Require let or const instead of var
      "prefer-const": "error", // Suggest using const if a variable is never reassigned
      eqeqeq: "error", // Require the use of === and !==
      curly: "error", // Enforce consistent brace style for all control statements
      quotes: ["error", "double"], // Enforce the use of single quotes
      semi: ["error", "always"], // Enforce semicolons at the end of statements
      "prefer-template": "error", // Enforce using template literals instead of string concatenation
      indent: ["error", "tab"], // Enforce tab-based indentation
      "linebreak-style": ["error", "unix"], // Enforce Unix line endings
      "no-multi-spaces": "error", // Disallow multiple spaces
      "no-trailing-spaces": "error", // Disallow trailing whitespace at the end of lines
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas where valid in ES5
      "object-curly-spacing": ["error", "always"], // Enforce consistent spacing inside braces
      "arrow-parens": ["error", "always"], // Require parentheses around arrow function arguments
      "no-unused-expressions": "warn", // Disallow unused expressions
      "no-multiple-empty-lines": ["error", { max: 1 }], // Disallow multiple empty lines
      "consistent-return": "error", // Require return statements to either always or never specify values
      "no-shadow": "error", // Disallow variable declarations from shadowing variables declared in the outer scope
      "prettier/prettier": "error", // Enforce Prettier formatting rules as ESLint errors
    },
  },
  prettierConfig, // Integrate Prettier's configuration to disable conflicting ESLint rules
];
