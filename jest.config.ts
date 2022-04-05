//configure jest to typescript
module.exports = {
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/", "/lib/", "/src/"],
    globals: {
        "ts-jest": {
            tsConfig: "<rootDir>/tsconfig.json",
            diagnostics: false
        }
    }
};
