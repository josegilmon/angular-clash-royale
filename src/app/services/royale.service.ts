
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs';
import { Observable } from 'rxjs';

import CONFIG from '../config';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RoyaleService {

    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {
    }

    getArena(idName: string): Observable<object> {
        return this.http.get(`${this.baseUrl}${CONFIG.API_PATHS.ARENAS}/${idName}`);
    }

    getArenas(): Observable<object> {
        return this.http.get(`${this.baseUrl}${CONFIG.API_PATHS.ARENAS}`);
    }

    getCards(): Observable<object> {
        return this.http.get(`${this.baseUrl}${CONFIG.API_PATHS.CARDS}`);
    }

    getChests(): Observable<object> {
        return this.http.get(`${this.baseUrl}${CONFIG.API_PATHS.CHESTS}`);
    }

    getPlayers(): Observable<object> {
        return this.http.get(`${this.baseUrl}${CONFIG.API_PATHS.PLAYERS}`);
    }
}
