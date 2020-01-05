[![ActiveWidgets](http://www.activewidgets.com/include/logo/aw-logo-40.png?activewidgets/js)](http://www.activewidgets.com/)

## Get Started

A minimal example showing ActiveWidgets datagrid for JS

```js
import { Datagrid } from "@activewidgets/js";
import { columns, rows } from "./data.js";
import "./styles.css";

const obj = new Datagrid({
  columns,
  rows
});

obj.mount("#app");
```

[![Edit js-get-started](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/activewidgets/js/tree/master/examples/get-started)
