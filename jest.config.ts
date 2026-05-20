import type { Config } from "jest";
import nextJest from "next/jest.js";

// Next.js 앱 디렉토리를 지정하여 next/jest 설정 생성
const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // 각 테스트 파일 실행 전 jest-dom 매처 설정
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

export default createJestConfig(config);
