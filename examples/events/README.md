
[Open fullscreen](/events/) | [Source on github](https://github.com/activewidgets/js/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/github/activewidgets/js/tree/master/examples/events)

The datagrid emits composite [mouse](https://activewidgets.com/api/datagrid/mouse-event/) event 
which makes it easier to find the elements affected by the user action -

```js
function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}


mount('ax-datagrid', {columns, rows, onMouse});
```

Read more:

- [Javascript Datagrid - Get started](https://activewidgets.com/guide/env/js/#user-events)
- [API - mouse event](https://activewidgets.com/api/datagrid/mouse-event/)