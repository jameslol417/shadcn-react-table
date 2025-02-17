import pkg from './package.json' assert { type: 'json' };
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';

export default [
  {
    external: [
      '@tanstack/match-sorter-utils',
      '@tanstack/react-table',
      '@tanstack/react-virtual',
      'react',
    ],
    input: './src/index.ts',
    output: [
      {
        file: `./${pkg.main}`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `./${pkg.module}`,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      typescript({
        rootDir: './src',
      }),
    ],
  },
  {
    input: './dist/types/index.d.ts',
    output: [{ file: `./${pkg.typings}`, format: 'esm' }],
    plugins: [
      del({
        hook: 'buildEnd',
        targets: ['dist/types'],
      }),
      dts(),
    ],
  },
];