/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { RoyaleService } from '../services/royale.service';

@Injectable()
export class ArenaAction {

    constructor(private service: RoyaleService, private store: Store<State>) {}

    getArenas() {
        this.service
            .getArenas()
            .subscribe( arenas => {
                return this.store.dispatch({
                    type: 'SEARCH_ARENAS',
                    payload: arenas
                });
            }, this.actionError );
    }

    static actionError(error) {
        console.error(error);
    }
}
