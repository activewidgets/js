
[Open fullscreen](https://js.activewidgets.com/hello-world/) | [Source on github](https://github.com/activewidgets/js/tree/master/examples/hello-world) | [Edit on stackblitz](https://stackblitz.com/github/activewidgets/js/tree/master/examples/hello-world?file=src/index.js)

This is a small example to get started with ActiveWidgets datagrid.

First, import the mount function:

```js
import { mount } from "@activewidgets/js";
```

Then initialize or load the data array:

```js
let rows = [
    { message: 'Hello, World!' }
];
```

Finally, create the component and assign the data:

```js
mount('ax-datagrid', {rows});
```

Thats all! 

Read more:

 - [Javascript Datagrid - Get started](https://activewidgets.com/guide/env/js/)