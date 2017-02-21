import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    arena: Arena;
    arena$: Observable<any>;

    constructor(private store: Store<State>, private arenaAction: ArenaAction, private route: ActivatedRoute) {
        //this.arenaSubscription = this.royaleService.getAll().subscribe( data => this.arenas = data );
    }

    ngOnInit() {
        this.route.params.subscribe( (params: any) => params.idName && this.arenaAction.get(params.idName) );
        this.arena$ = this.store.select( (state: State) => state.arenas.arena );
        this.arena$.subscribe( data => this.arena = data );
    }

    arenaClick(idArena: string) {
        //debugger;
    }
}
