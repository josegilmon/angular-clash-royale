/**
 * Created by Jose A. Gil on 21/02/2017.
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';

@Injectable()
export class CardSelector {

    constructor(private store: Store<State>) {}

    getArenaCards(idArena: number) {
        return this.store.select( state => state.cards.entities ).filter( (entities: any) => entities.filter( (card: any) => card && card.arena === idArena ) );
    }
}
