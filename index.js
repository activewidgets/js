
import {Component} from 'inferno';
import {cloneVNode} from 'inferno-clone-vnode';
import {createElement} from 'inferno-create-element';
import {hydrate} from 'inferno-hydrate';
import framework from '@activewidgets/frameworks/inferno';
import {grid} from '@activewidgets/grid';


let {component} = framework({Component, createElement, cloneVNode});


function mount(source, props){

    let AxComponent = component(source),
        target = (typeof props.el == 'string') ? document.querySelector(props.el) : props.el,
        placeholder = document.createElement('div'),
        container = document.createElement('div'),
        instance;

    if (target) {
        target.parentNode.replaceChild(placeholder, target);
        container.appendChild(target);
    }

    class Proxy extends Component {
        constructor(...args){
            super();
            if (target) {
                placeholder.parentNode.replaceChild(target, placeholder);
            }
            instance = new AxComponent(...args);
            return instance;
        }
    }

    hydrate(createElement(Proxy, props), container);
    instance.el = target || container.firstChild;
    return instance;
};


export class Grid {
    constructor(props){
        return mount(grid, props);
    }
}
