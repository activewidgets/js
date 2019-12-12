
import adapter from '@activewidgets/frameworks/js';
import * as sources from '@activewidgets/grid/js';
import * as metadata from '@activewidgets/grid/metadata';
import * as preact from 'preact';

export const {build, tags, h, DOMTemplate} = adapter(preact);
export const {Grid, Row, View, Scrollbars} = build(sources, metadata);

