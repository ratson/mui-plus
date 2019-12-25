/// <reference path="../../../node_modules/@types/webpack-env/index.d.ts" />
import 'storybook-chromatic'
import { addParameters, configure } from '@storybook/react'

addParameters({
  options: {
    name: 'ratson/mui-plus',
    url: 'https://github.com/ratson/mui-plus',
    hierarchySeparator: '/' as any,
    showAddonPanel: false
  }
})

// Automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/)
const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
