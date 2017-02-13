import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ArenaComponent } from './arena/arena.component';
import { CardComponent } from './card/card.component';
import { ChestComponent } from './chest/chest.component';

import { RoyaleService } from './services/royale.service';

import CONFIG from './config';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/index';

import { ArenaAction } from './actions/arena.action';
import { CardAction } from './actions/card.action';
import { ChestAction } from './actions/chest.action';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'arenas', component: ArenaComponent },
    { path: 'cards', component: CardComponent },
    { path: 'chests', component: ChestComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArenaComponent,
        CardComponent,
        ChestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot(),
        StoreModule.provideStore(reducer),
    ],
    providers: [
        RoyaleService,
        //{ provide: CONFIG.CLASH_ROYALE_API_URL, useValue: 'http://localhost:8085/api' },
        { provide: CONFIG.CLASH_ROYALE_API_URL, useValue: 'http://www.clashapi.xyz/api' },
        ArenaAction,
        CardAction,
        ChestAction
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
