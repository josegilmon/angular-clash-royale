import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { ArenaAction } from '../../../actions/arena.action';
import { Router } from '@angular/router';

@Component({
    selector: 'app-clash-royale-arena-list',
    templateUrl: './arena-list.component.html',
    styleUrls: ['./arena-list.component.css']
})
export class ArenaListComponent implements OnInit {

    // arenas: Arena[];
    arena$: Observable<any>;

    constructor(private store: Store<State>, private arenaAction: ArenaAction, private router: Router) {
        // this.arenaSubscription = this.royaleService.getAll().subscribe( data => this.arenas = data );
    }

    ngOnInit() {
        this.arenaAction.getAll();
        this.arena$ = this.store.select( (state: State) => {
            return state.arenas.entities;
        });
    }

    arenaClick(idArena: string) {
        this.router.navigateByUrl(`arenas/${idArena}`);
    }
}
