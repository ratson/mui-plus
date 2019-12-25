import webpack from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  config.module?.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          reportFiles: ['../**/src/**/*.{ts,tsx}']
        }
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ] as webpack.RuleSetUse
  })
  config.resolve?.extensions?.push('.ts', '.tsx')
  return config
}
