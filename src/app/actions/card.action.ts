/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { RoyaleService } from '../services/royale.service';

@Injectable({
    providedIn: 'root',
})
export class CardAction {

    constructor(private service: RoyaleService, private store: Store<State>) {}

    getCards() {
        this.service
            .getCards()
            .subscribe( data => {
                return this.store.dispatch({
                    type: 'SEARCH_CARDS',
                    payload: data
                });
            }, this.actionError );
    }

    private actionError(error) {
        console.error(error);
    }
}
