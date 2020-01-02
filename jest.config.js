module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  snapshotSerializers: ["enzyme-to-json/serializer", "jest-emotion"],
  setupFilesAfterEnv: ["./setup-enzyme.ts"]
};
