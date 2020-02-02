/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { mount } from "@activewidgets/js";
import './styles.css';


const rows = [
    { message: 'Hello, World!' }
];


mount('ax-datagrid', {rows});