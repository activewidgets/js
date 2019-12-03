
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

let globals = {
    'preact': 'preact',
    '@activewidgets/frameworks/js': 'ActiveWidgets.frameworks.js',
    '@activewidgets/grid': 'ActiveWidgets.components'
};

export default {
    input: 'index.js',
    output: [
        {file: 'dist/ax-js.js', format: 'umd', sourcemap: true, name: 'ActiveWidgets.JS', extend: true, globals},
        {file: 'dist/ax-js.esm.js', format: 'esm', sourcemap: true}
    ],
    external: [
        'preact',
        '@activewidgets/frameworks/js',
        '@activewidgets/grid'
    ],
    plugins: [
        resolve(),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [["@babel/env", {modules: false}]]
        })
    ]
};