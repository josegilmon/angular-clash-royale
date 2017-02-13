/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import * as arena from './arena.reducer';
import * as card from './card.reducer';
import * as chest from './chest.reducer';

import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';

export interface State {
    arenas: arena.IArenaState,
    cards: card.ICardState,
    chests: chest.IChestState
}

const reducers = {
    arenas: arena.reducer,
    cards: card.reducer,
    chests: chest.reducer,
    router: routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: State, action: any) {
    return developmentReducer(state, action);
}
