const { defaults } = require('jest-config')

module.exports = {
  moduleFileExtensions: ['ts', 'tsx', ...defaults.moduleFileExtensions],
  transform: {
    '\\.jsx?$': 'babel-jest',
    '\\.tsx?$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json'
    }
  },
  moduleNameMapper: {
    '@mui-plus/(.*)$': '<rootDir>/packages/$1'
  }
}
