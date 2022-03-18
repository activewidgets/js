
[Open fullscreen](https://js.activewidgets.com/columns/) | [Source on github](https://github.com/activewidgets/js/tree/master/examples/columns) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/js/tree/master/examples/columns?file=src/index.js)

This example shows how to configure datagrid columns:

```js
import { mount } from "@activewidgets/js";
import { northwind } from "@activewidgets/examples/data";

const columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120},
  {header: 'City', field: 'city'},
  {header: 'Zip', field: 'postalCode', align: 'right'},
  {header: 'Phone', field: 'phone'},
  {header: 'Fax', field: 'fax'},
  {header: 'Country', field: 'country'}
];

const rows = northwind.customers;

mount('ax-datagrid', {columns, rows});
```

Assign an array of column descriptor objects to the [columns](https://activewidgets.com/api/datagrid/columns/) property.

Read more:

- [Javascript Datagrid - Get started](https://activewidgets.com/guide/env/js/#data-properties)
- [API - columns](https://activewidgets.com/api/datagrid/columns/)
- [API - rows](https://activewidgets.com/api/datagrid/rows/)