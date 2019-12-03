
import * as preact from 'preact';
import framework from '@activewidgets/frameworks/js';
import * as pkg from '@activewidgets/grid';

const {build, tags, h} = framework(preact);

export const {Grid, Row, View, Scrollbars} = build(pkg);
export {tags, h};

