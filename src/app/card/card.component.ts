import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../reducers/index';
import { CardAction } from '../actions/card.action';
import { Card } from '../models/card.model';

@Component({
    selector: 'clash-royale-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    cards: Card[];
    card$: Observable<any>;

    constructor(private store: Store<State>, private cardAction: CardAction) {
        //this.cardSubscription = this.royaleService.getCards().subscribe(data => this.cards = data );
    }

    ngOnInit() {
        this.cardAction.getCards();
        this.card$ = this.store.select( (state: State) => state.cards.entities );
    }

    cardClick(ev: Event) {
        debugger;
    }

}
