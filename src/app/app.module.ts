import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArenaComponent } from './shared/arena/arena.component';
import { ArenaListComponent } from './pages/arena/list/arena-list.component';
import { ArenaDetailComponent } from './pages/arena/detail/arena-detail.component';
import { CardListComponent } from './pages/card/list/card-list.component';
import { ChestListComponent } from './pages/chest/list/chest-list.component';

import { reducer } from './reducers/index';

import { ArenaAction } from './actions/arena.action';
import { CardAction } from './actions/card.action';
import { ChestAction } from './actions/chest.action';

import { RoyaleService } from './services/royale.service';

import CONFIG from './config';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'arenas', component: ArenaListComponent },
    { path: 'arenas/:idName', component: ArenaDetailComponent },
    { path: 'cards', component: CardListComponent },
    { path: 'chests', component: ChestListComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ArenaComponent,
        ArenaListComponent,
        ArenaDetailComponent,
        CardListComponent,
        ChestListComponent
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
        { provide: CONFIG.CLASH_ROYALE_API_URL, useValue: 'https://www.clashapi.xyz/api' },
        ArenaAction,
        CardAction,
        ChestAction
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
