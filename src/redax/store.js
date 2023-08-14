import { createStore } from 'redux';
import { rootReduser } from './reduser';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

export const store = createStore(rootReduser, enhancer);
