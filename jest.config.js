module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    
    moduleNameMapper: {
        '\\.(css|sass)$': 'sass/tests/mocks/styleMock.js',
    },
}