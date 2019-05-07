
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

let globals = {
    'inferno': 'Inferno',
    'inferno-clone-vnode': 'Inferno',
    'inferno-create-element': 'Inferno',
    '@activewidgets/frameworks/html': 'AX.frameworks.html',
    '@activewidgets/grid': 'AX.components'
};

export default {
    input: 'index.js',
    output: [
        {file: 'dist/ax-html.js', format: 'umd', sourcemap: true, name: 'AX.HTML', extend: true, globals},
        {file: 'dist/ax-html.esm.js', format: 'esm', sourcemap: true}
    ],
    external: [
        'inferno',
        'inferno-clone-vnode',
        'inferno-create-element',
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