/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import * as arena from './arena.reducer';

import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
    arenas: arena.IArenaState
}

const reducers = {
    arenas: arena.reducer,
    router: routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: State, action: any) {
    return developmentReducer(state, action);
}
