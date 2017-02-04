import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArenaAction } from '../actions/arena.action';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';

@Component({
    selector: 'clash-royale-arena',
    templateUrl: './arena.component.html',
    styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

    arenas: any[];
    arena$: Observable<any>;

    constructor(private store: Store<State>, private arenaAction: ArenaAction) {
        //this.arenaSubscription = this.royaleService.getArenas().subscribe( data => this.arenas = data );
    }

    ngOnInit() {
        this.arenaAction.getArenas();
        this.arena$ = this.store.select( (state: State) => state.arenas.entities );
    }
}
