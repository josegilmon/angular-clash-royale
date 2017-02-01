import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoyaleService } from '../services/royale.service';

@Component({
    selector: 'clash-royale-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    cards: any[];
    cardSubscription: Subscription;

    constructor(private royaleService: RoyaleService) {
        this.cardSubscription = this.royaleService.getCards().subscribe(data => this.cards = data );
    }

}
