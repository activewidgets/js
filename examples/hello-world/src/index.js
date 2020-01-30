
import { mount} from "@activewidgets/js";
import './styles.css';


const rows = [
    { message: 'Hello, World!' }
];


mount('ax-datagrid', {rows});