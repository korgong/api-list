module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    setupFilesAfterEnv: ['./jest.setup.js'], // or ['<rootDir>/jest.setup.js']
};
