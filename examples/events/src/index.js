
import { mount } from "@activewidgets/js";
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}


mount('ax-datagrid', {columns, rows, onMouse});