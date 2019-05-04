
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

let globals = {
    'inferno': 'Inferno',
    'inferno-clone-vnode': 'Inferno',
    'inferno-create-element': 'Inferno',
    'inferno-hydrate': 'Inferno',
    '@activewidgets/frameworks/inferno': 'AX.frameworks.inferno',
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
        'inferno-hydrate',
        '@activewidgets/frameworks/inferno',
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