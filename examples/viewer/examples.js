
import hello_world from '../hello-world/README.md';
import get_started from '../get-started/README.md';
import cdn_es5 from '../cdn-es5/README.md';


export const Local = {
    'Hello, World!': {path: 'hello-world', readme: hello_world},
    'CDN links': {path: 'cdn-es5', readme: cdn_es5},
    'Get started': {path: 'get-started', readme: get_started}
};


export * from '@activewidgets/datagrid/examples';

