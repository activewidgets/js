
import {getQueriesForElement} from '@testing-library/dom';
import * as components from '@activewidgets/components';

Object.keys(components).forEach(name => {
    components[name].tag = 'ax-' + name.toLowerCase();
});


export function render(Component, props){

    let baseElement = document.body,
        container = baseElement.appendChild(document.createElement('div')),
        el = container.appendChild(document.createElement(Component.tag));

    components.mount(el, props);

    return {
        container,
        baseElement,
        ...getQueriesForElement(baseElement)
    }
};


export function cleanup(){
    // ????
    document.body.innerHTML = '';
};


if (typeof afterEach === 'function') {
    afterEach(cleanup);
}
