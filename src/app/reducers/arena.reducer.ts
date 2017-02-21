/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Arena } from '../models/arena.model';

export interface IArenaState {
    entities: Arena[];
    arena: Arena;
}

const initialState: IArenaState = {
    entities: null,
    arena: null
};

export function reducer(state = initialState, action): IArenaState {
    switch (action.type) {
        case 'GET_ARENAS':
            return Object.assign({}, state, {
                entities: action.payload
            });
        case 'GET_ARENA':
            return Object.assign({}, state, {
                arena: action.payload
            });
        default:
            return state;
    }
}
