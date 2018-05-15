
import { configure } from '@storybook/html';

function loadStories() {
    require('./demo.js');
    require('./e2e.js');
}

configure(loadStories, module);