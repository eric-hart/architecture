const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
  [
    '@babel/preset-flow',
  ],
  [
    '@babel/preset-react',
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
