
import {storiesOf} from '@storybook/html';
import {Grid} from '../';
import basic from '../examples/basic.js';

storiesOf('Demo', module)

    .add('datagrid', basic)

    .add('button', () => (
        'Hello'
    ));
