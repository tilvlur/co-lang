import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.min.js',
        format: 'esm',
        plugins: [terser()],
      },
    ],
    plugins: [
      resolve({
        moduleDirectories: ['node_modules'],
      }),
      typescript({
        exclude: ['**/__tests__', '**/*.test.ts'],
      }),
    ],
    external: ['antlr4', 'fast-deep-equal'],
  },
];

export default config;
