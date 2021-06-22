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
    '@babel/preset-react',
  ],
  [
    '@babel/preset-flow',
  ],
];

const plugins = [
  [
    'babel-plugin-root-import',
    {
      rootPathSuffix: './src/script',
      rootPathPrefix: "~/",
    },
  ],
  [
    '@babel/plugin-transform-regenerator',
  ],
];

module.exports = { presets, plugins };
