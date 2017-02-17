import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers/index';
import { ArenaAction } from '../../../actions/arena.action';
import { Arena } from '../../../models/arena.model';

@Component({
    selector: 'clash-royale-arena-detail',
    templateUrl: './arena-detail.component.html',
    styleUrls: ['./arena-detail.component.css']
})
export class ArenaDetailComponent implements OnInit {

    arenas: Arena[];
    arena$: Observable<any>;

    constructor(private store: Store<State>, private arenaAction: ArenaAction) {
        //this.arenaSubscription = this.royaleService.getArenas().subscribe( data => this.arenas = data );
    }

    ngOnInit() {
        //this.arenaAction.getArenas();
        //this.arena$ = this.store.select( (state: State) => state.arenas.entities );
    }

    arenaClick(idArena: string) {
        //debugger;
    }
}
