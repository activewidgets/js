
import {getQueriesForElement} from '@testing-library/dom';

let mountedObjects = [];


export function render(Component, props){

    let obj = new Component(props),
        baseElement = document.body,
        container = baseElement.appendChild(document.createElement('div')),
        el = container.appendChild(document.createElement('div'));

    obj.mount(el);

    mountedObjects.push(obj);

    return {
        container,
        baseElement,
        unmount: () => obj.unmount(),
        ...getQueriesForElement(baseElement)
    }
};


export function cleanup(){
    mountedObjects.forEach(obj => obj.unmount());
    mountedObjects.splice(0);
};


if (typeof afterEach === 'function') {
    afterEach(cleanup);
}
