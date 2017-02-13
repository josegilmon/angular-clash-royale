/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Card } from '../models/card.model';

export interface ICardState {
    entities: Card[];
}

const initialState: ICardState = {
    entities: null
};

export function reducer(state = initialState, action): ICardState {
    switch (action.type) {
        case 'SEARCH_CARDS':
            return Object.assign({}, state, {
                entities: action.payload
            });
        default:
            return state;
    }
}
