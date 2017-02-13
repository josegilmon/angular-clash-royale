/**
 * Created by Jose A. Gil on 03/02/2017.
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { RoyaleService } from '../services/royale.service';

@Injectable()
export class RoyaleAction {

    constructor(private service: RoyaleService, private store: Store<State>) {}

    getArenas() {
        this.getResources('getArenas', 'ARENAS_SEARCH');
    }

    getCards() {
        this.getResources('getCards', 'CARDS_SEARCH');
    }

    getChests() {
        this.getResources('getChests', 'CHESTS_SEARCH');
    }

    getPlayers() {
        this.getResources('getPlayers', 'PLAYERS_SEARCH');
    }

    private getResources(serviceName: string, type: string) {

        this.service[serviceName]()
            .subscribe( data => {
                return this.store.dispatch({
                    type,
                    payload: data
                });
            }, RoyaleAction.actionError );
    }

    static actionError(error) {
        console.error(error);
    }
}
