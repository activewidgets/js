
[Open fullscreen](https://js.activewidgets.com/demo/) | [Source on github](https://github.com/activewidgets/js/tree/master/examples/demo) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/js/tree/master/examples/demo?file=src/index.js)

This is a simple demo showing some of the features of ActiveWidgets datagrid -

- Virtualized scrolling
- Fixed headers and columns
- Custom cell templates (slots with props)
- Dynamic styles
- Calculated values
- Multi-line/multi-value cells
- Cell images, icons, custom styles
- Rendering outside of cell/row boundaries
- International number/date formats
- Custom column types (presets)

[Javascript Datagrid - Get started](https://activewidgets.com/guide/env/js/)

### Virtualized scrolling

The datagrid implements virtualized scrolling - rendering only the visible rows and adding/removing extra rows on the fly 
while the content window shifts up/down. We use CSS transforms for the smooth and natural movement of the content layer. 
This way scrolling is GPU-accelerated and runs in a separate composer thread not affected by scripting
and rendering of the new rows.

The dataset in this example is not very big, however with virtualized scrolling the datagrid performance depends 
only on the window size and not the total number of rows, so the datagrid can easily handle millions of rows.

Virtualized scrolling is on by default.

### Fixed headers and columns

The headers section remains always visible - it does not move up/down with the regular rows. 
You can also make left and/or right columns 'fixed', so they remain always visible during horizontal scroll.

```js
const columns = [
    { header: 'Company', template: 'company', fixed: true },
    // ...
];
```

### Custom cell templates

One of the goals for the new component was to make it very easy to customize every part of the datagrid.
ActiveWidgets templates are standard ES6 [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates) - 
they work in any modern browser without compilation/build step and produce efficient render functions:

```js
import { tpl } from "@activewidgets/js";

export function company({data}){
    return tpl`<div>
        <div class="bold blue">${data.customerID}</div>
        <div class="small">${data.companyName}</div>
    </div>`;
}

export function address({data}){
    return tpl`<div>
        <div class="small">${data.address}</div>
        <div class="small">${data.postalCode} <span>${data.city}</span></div>
    </div>`;
}

export function country({text}){
    return tpl`<div><img src=${flags[text]}/>${text}</div>`;
}
```

Then we put them into templates property and use template names in column descriptor:

```js
import * as templates from './templates';

const columns = [
    { header: 'Company', template: 'company', fixed: true },
    { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
    { header: 'Address', template: 'address', key: 'address' },
    // ...
];

mount('ax-datagrid', {columns, rows, templates});
```

### Dynamic styles

You can access and modify a row model object via onRow event before render. Inspect the row data
and dynamically change the row style or the template or the individual cells (via cells object).

```js
function onRow(row){

    const {data, cells} = row;

    // dynamic row style
    if (data.country == 'France'){
        row.class = 'bg-green';
    }

    // dynamic cell styles
    if (data.city == 'London'){
        cells.address = {class: 'circle'};
    }

    if (data.contactTitle == 'Owner'){
        cells.contact = {class: 'star'};
    }
}
```

### Calculated values

You can also create new columns with dynamic/calculated data - just assign the value 
(or complete cell context, including template, style etc.) to the cells object matching the key (or field) in the column descriptor.

```js

const columns = [
    // ...
    { header: 'Last Order', type: 'money', field: 'amount' },
    { header: 'Order Date', type: 'date', field: 'date' }
];


function onRow(row){

    const {data, cells} = row;

    // calculated values
    cells.amount = 2000 * Math.random();
    cells.date = Date.now() - 500 * 86400000 * Math.random();
}
```

### Rendering outside of cell/row boundaries

The row and cell templates can have style overflow: visible - that allows doing many things beyond traditional datagrid capabilities,
like popups, overlays, gantt charts, schedulers etc.


Read more:

- [Javascript Datagrid - Get started](https://activewidgets.com/guide/env/js/)
- [API](https://activewidgets.com/api/)