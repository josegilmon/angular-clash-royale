import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { ChestAction } from '../actions/chest.action';

@Component({
    selector: 'clash-royale-chest',
    templateUrl: './chest.component.html',
    styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {

    chests: any[];
    chest$: Observable<any>;
    //chestSubscription: Subscription;

    constructor(private store: Store<State>, private chestAction: ChestAction) {
        //this.chestSubscription = this.royaleService.getChests().subscribe(data => this.chests = data );
    }

    ngOnInit() {
        this.chestAction.getChests();
        this.chest$ = this.store.select( (state: State) => state.chests.entities );
    }

}
