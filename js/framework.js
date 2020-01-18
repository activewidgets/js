
import adapter from '@activewidgets/frameworks/js';
import * as preact from 'preact';
import htm from 'htm';

export const {h, build, mount} = adapter(preact);
export const tpl = htm.bind(h);
