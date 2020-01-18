
import {getQueriesForElement} from '@testing-library/dom';
import {mount} from '@activewidgets/components';

let refs = [];

export function render(component, props){

    let baseElement = document.body,
        container = baseElement.appendChild(document.createElement('div')),
        el = container.appendChild(document.createElement(component));

    refs.push(mount(el, props));

    return {
        container,
        baseElement,
        ...getQueriesForElement(baseElement)
    }
};


export function cleanup(){
    refs.forEach(r => r.destroy());
    refs = [];
    document.body.innerHTML = '';
};


if (typeof afterEach === 'function') {
    afterEach(cleanup);
}
