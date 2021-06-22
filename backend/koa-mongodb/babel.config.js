const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
];

const plugins = [
  [
    'babel-plugin-root-import',
    {
        rootPathSuffix: './src',
        rootPathPrefix: "~/",
    },
  ],
];

module.exports = { presets, plugins, };
