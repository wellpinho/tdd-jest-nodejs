# tdd-jest-nodejs
Development with tests using Jest with Nodejs

## packages
``` npm i -D typescript @types/node ```
``` npm i -D jest @types/jest ts-jest```

## config jest
1. ``` jest --init ```
2. y
3. node
4. y
5. Automatically set n

## config the jest.config.js
1. collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
2. testEnvironment: 'node',
3. transform: {
     '.+\\.ts$': 'ts-jest
4. },
5. roots: ['<rootDir>/src'],

## eslint
```
npm install --save-dev eslint@7 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@4 eslint-config-standard-with-typescript
```

## git comands
attach a commit to the last one without a comment
``` git commit -m --amend --no-edit ```