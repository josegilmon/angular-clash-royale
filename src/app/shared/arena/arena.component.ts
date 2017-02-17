import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Arena } from '../../models/arena.model';

@Component({
    selector: 'clash-royale-arena',
    templateUrl: './arena.component.html',
    styleUrls: ['./arena.component.css']
})
export class ArenaComponent {

    @Input() arena: Arena;
    @Output() onClick: EventEmitter<any> = new EventEmitter();

    constructor() { }

    openArena(idName) {
        this.onClick.emit(idName);
    }

}
