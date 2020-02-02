/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Viewer} from '@activewidgets/examples';
import {mount as _mount} from '@activewidgets/js';
import * as pages from './examples.js';
import readme from '../demo/README.md';
import logo from './js.svg';
import pkg from '../../package.json';


let framework = 'Javascript',
    container = document.getElementById('app');


function mount(component, props){

    let target = document.createElement(component);

    container.innerHTML = '';
    container.appendChild(target);

    _mount(target, props);
}


function clean(){
    container.innerHTML = '';
}


container.innerHTML = '';


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
