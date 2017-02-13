/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Chest } from '../models/chest.model';

export interface IChestState {
    entities: Chest[];
}

const initialState: IChestState = {
    entities: null
};

export function reducer(state = initialState, action): IChestState {
    switch (action.type) {
        case 'SEARCH_CHESTS':
            return Object.assign({}, state, {
                entities: action.payload
            });
        default:
            return state;
    }
}
