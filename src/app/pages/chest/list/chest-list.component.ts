import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers/index';
import { ChestAction } from '../../../actions/chest.action';
import { Chest } from '../../../models/chest.model';

@Component({
    selector: 'clash-royale-chest-list',
    templateUrl: './chest-list.component.html',
    styleUrls: ['./chest-list.component.css']
})
export class ChestListComponent implements OnInit {

    chests: any[];
    chest$: Observable<any>;
    //chestSubscription: Subscription;

    @Input() idArena: number;

    constructor(private store: Store<State>, private chestAction: ChestAction) {
        //this.chestSubscription = this.royaleService.getChests().subscribe(data => this.chests = data );
    }

    ngOnInit() {
        this.chestAction.getChests();
        this.chest$ = this.store.select( (state: State) => {
            if (this.idArena != undefined) {
                return state.chests.entities.filter( (chest: Chest) => chest.arena === this.idArena );
            }
            return state.chests.entities;
        } );
    }

    getImage(chestName) {
        return chestName.replace(/-\d$/, '');
    }

}
