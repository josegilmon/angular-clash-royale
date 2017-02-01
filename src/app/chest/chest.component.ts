import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoyaleService } from '../services/royale.service';

@Component({
    selector: 'clash-royale-chest',
    templateUrl: './chest.component.html',
    styleUrls: ['./chest.component.css']
})
export class ChestComponent {

    chests: any[];
    chestSubscription: Subscription;

    constructor(private royaleService: RoyaleService) {
        this.chestSubscription = this.royaleService.getChests().subscribe(data => this.chests = data );
    }

}
