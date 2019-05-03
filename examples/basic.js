
import {Grid} from '../';
import {columns, rows} from './data/customers.js';

export default () => {
    let obj = new Grid({rows, columns});
    return obj.el;
};