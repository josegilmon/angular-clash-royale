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

    getAll() {
        this.service
            .getArenas()
            .subscribe( data => {
                return this.store.dispatch({
                    type: 'GET_ARENAS',
                    payload: data
                });
            }, this.actionError );
    }

    get(idName: string) {
        this.service
            .getArena(idName)
            .subscribe( data => {
                return this.store.dispatch({
                    type: 'GET_ARENA',
                    payload: data
                });
            }, this.actionError );
    }

    private actionError(error) {
        console.error(error);
    }
}
