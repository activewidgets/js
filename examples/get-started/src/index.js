
import { Datagrid } from "@activewidgets/js";
import { columns, rows } from "./data.js";
import "./styles.css";

const obj = new Datagrid({
  columns,
  rows
});

obj.mount("#app");
