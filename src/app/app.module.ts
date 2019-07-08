import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ArenaComponent } from './shared/arena/arena.component';
import { ArenaListComponent } from './pages/arena/list/arena-list.component';
import { ArenaDetailComponent } from './pages/arena/detail/arena-detail.component';
import { CardListComponent } from './pages/card/list/card-list.component';
import { ChestListComponent } from './pages/chest/list/chest-list.component';

import { reducers } from './reducers/index';

import { ArenaAction } from './actions/arena.action';
import { CardAction } from './actions/card.action';
import { ChestAction } from './actions/chest.action';

import { RoyaleService } from './services/royale.service';

import CONFIG from './config';
import { CardSelector } from './selectors/card.selector';

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
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(reducers, { runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true }}),
        StoreDevtoolsModule.instrument({ maxAge: 25 }),
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule
    ],
    providers: [
        RoyaleService,
        //{ provide: CONFIG.CLASH_ROYALE_API_URL, useValue: 'http://localhost:8085/api' },
        { provide: CONFIG.CLASH_ROYALE_API_URL, useValue: 'http://www.clashapi.xyz/api' },
        ArenaAction,
        CardAction,
        CardSelector,
        ChestAction
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
