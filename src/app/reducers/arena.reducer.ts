/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Arena } from '../models/arena.model';

export interface IArenaState {
    entities: Arena[];
}

const initialState: IArenaState = {
    entities: null
};

export function reducer(state = initialState, action): IArenaState {
    switch (action.type) {
        case 'SEARCH_ARENAS':
            return Object.assign({}, state, {
                entities: action.payload
            });
        default:
            return state;
    }
}
