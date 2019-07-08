import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import { CardAction } from '../../../actions/card.action';
import { Card } from '../../../models/card.model';
import { CardSelector } from '../../../selectors/card.selector';

@Component({
    selector: 'app-clash-royale-card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

    cards: Card[];
    card$: Observable<any>;

    @Input() idArena: number;

    constructor(private store: Store<State>, private cardAction: CardAction, private cardSelector: CardSelector) {
        // this.cardSubscription = this.royaleService.getCards().subscribe(data => this.cards = data );
    }

    ngOnInit() {
        this.cardAction.getCards();
        this.card$ = this.store.select( (state: State) => {
            if (this.idArena !== undefined) {
                return state.cards.entities.filter( (card: Card) => card.arena === this.idArena );
            }
            return state.cards.entities
        } );
    }

    cardClick(ev: Event) {
        debugger;
    }

}
