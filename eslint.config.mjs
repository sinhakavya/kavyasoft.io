import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Add our custom ignores
    ignores: [
      "src/generated/**",
      "node_modules/**",
      ".next/**"
    ]
  },
  {
    // Optional: Add specific rules you want to enforce
    rules: {
      "@typescript-eslint/no-unused-expressions": "off", // Disable if too noisy
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn"
    }
  }
];

export default eslintConfig;