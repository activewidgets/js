
import {Component, render, hydrate} from 'inferno';
import {createElement as h} from 'inferno-create-element';
import {ReactBuilder} from '@activewidgets/frameworks';
import {grid, row} from '@activewidgets/grid';

const build = ReactBuilder.init(h, Component);

export const Template = ReactBuilder.Template;

export const Grid = build(grid);
export const Row = build(row);

export const components = {Grid, Row};

export default {Template, components, Grid, Row};

export const createElement = h;

Grid.prototype.mount = function(selector){

    var obj = this,
        target = typeof selector == 'string' ? document.querySelector(selector) : selector,
        container = document.createElement('div'),
        placeholder = document.createElement('div');

    if (!target){
        target = document.createElement('div');
    }

    if (target.parentNode){
        target.parentNode.replaceChild(placeholder, target);
    }

    container.appendChild(target);

    class Proxy extends Component {
        constructor(props){
            super(props);
            return obj;
        }
    }

    function swap(ref){
        if (ref) {
            target = container.firstChild;

            if (placeholder.parentNode){
                placeholder.parentNode.replaceChild(target, placeholder);
            }

            container.appendChild(placeholder);
        }
        else {
            target.parentNode.replaceChild(placeholder, target);
            container.appendChild(target);
        }
    }

    hydrate(h(Proxy, {ref:swap}), container);

    this.$ROOT = container;

    return target;
};


Grid.prototype.unmount = function(){
    render(null, this.$ROOT);
    this.$ROOT = null;
};
