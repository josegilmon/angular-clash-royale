import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoyaleService } from '../services/royale.service';

@Component({
    selector: 'clash-royale-arena',
    templateUrl: './arena.component.html',
    styleUrls: ['./arena.component.css']
})
export class ArenaComponent {

    arenas: any[];
    arenaSubscription: Subscription;

    constructor(private royaleService: RoyaleService) {
        this.arenaSubscription = this.royaleService.getArenas().subscribe( data => this.arenas = data );
    }
}
