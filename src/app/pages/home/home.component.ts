import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    cards: Object[] = [
        {
            title: 'Arenas',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            route: '/arenas'
        },
        {
            title: 'Cards',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            route: '/cards'
        },
        {
            title: 'Chests',
            text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            route: '/chests'
        }
    ];

}
