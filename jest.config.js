const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット
  dir: "./",
});

// Jestのカスタム設定を設置する場所
const customJestConfig = {
  // テストファイルのパターンを指定
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  // テスト環境を指定
  testEnvironment: "jest-environment-jsdom",
  // テスト前に実行するセットアップファイル
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // モジュール名のエイリアス設定
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  // テストから除外するディレクトリ
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  // トランスフォームの設定
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};

// createJestConfigを使用することによって、next/jestが提供する設定とユーザー定義の設定がマージされる
module.exports = createJestConfig(customJestConfig);
