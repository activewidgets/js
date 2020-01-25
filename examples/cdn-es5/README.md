
Loading ActiveWidgets from CDN, with _old style_ javascript...

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link href="styles.css" rel="stylesheet" />
    <link href="https://cdn.activewidgets.com/js/3/ax.css" rel="stylesheet" />
    <script src="https://cdn.activewidgets.com/js/3/ax.js"></script>
    <script src="data.js"></script>
</head>
<body>
    <div id="app">Loading...</div>
    <script>

        var obj = new ActiveWidgets.JS.Datagrid({
            columns: columns,
            rows: rows
        });

        obj.mount("#app");

    </script>
</body>
</html>
```

[![Edit js-get-started](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/activewidgets/js/tree/master/examples/cdn-es5)
