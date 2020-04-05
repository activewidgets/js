
[Open fullscreen](/cdn-es5/) | [Source on github](https://github.com/activewidgets/js/tree/master/examples/cdn-es5) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/js/tree/master/examples/cdn-es5)

For quick prototyping you can use files on ActiveWidgets CDN:

```html
<script src="https://cdn.activewidgets.com/js"></script>
```

If you support ie11 you should also include Promise polyfill:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=Promise"></script>
```

With UMD package the component classes are at ActiveWidgets.JS namespace:

```js
var mount = ActiveWidgets.JS.mount;

var rows = [
    { framework: 'none', source: 'CDN', language: 'ES5'}
];

mount('ax-datagrid', {rows: rows});
```