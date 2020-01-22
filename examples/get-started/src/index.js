
import { mount } from "@activewidgets/js";
import { columns, rows } from "./data.js";
import "./styles.css";

mount('ax-datagrid', {columns, rows});