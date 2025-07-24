import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./", // ruta de tu proyecto
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // Alias de paths de tsconfig (ajusta según tu proyecto)
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    // ts‑jest para .ts / .tsx
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  // Evita transformaciones innecesarias de node_modules de Next 15
  transformIgnorePatterns: [
    "/node_modules/(?!(react-dom|react|next)/)", // adapta según avisos de consola
  ],
};

export default createJestConfig(customJestConfig);
