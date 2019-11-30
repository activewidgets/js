
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

let globals = {
    'preact': 'preact',
    '@activewidgets/frameworks/html': 'ActiveWidgets.frameworks.html',
    '@activewidgets/grid': 'ActiveWidgets.components'
};

export default {
    input: 'index.js',
    output: [
        {file: 'dist/ax-html.js', format: 'umd', sourcemap: true, name: 'ActiveWidgets.HTML', extend: true, globals},
        {file: 'dist/ax-html.esm.js', format: 'esm', sourcemap: true}
    ],
    external: [
        'preact',
        '@activewidgets/frameworks/html',
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