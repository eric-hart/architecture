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
];

module.exports = { presets, };
