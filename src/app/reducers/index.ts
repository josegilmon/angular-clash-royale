/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import * as arena from './arena.reducer';
import * as card from './card.reducer';
import * as chest from './chest.reducer';


import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface State {
    arenas: arena.IArenaState,
    cards: card.ICardState,
    chests: chest.IChestState
}

const reducersMap = {
    arenas: arena.reducer,
    cards: card.reducer,
    chests: chest.reducer,
    router: fromRouter.routerReducer
};

export const reducers: ActionReducerMap<State> = reducersMap;
