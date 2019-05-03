
import { configure } from '@storybook/html';
import '../css';

function loadStories() {
    require('./demo.js');
    require('./e2e.js');
}

configure(loadStories, module);