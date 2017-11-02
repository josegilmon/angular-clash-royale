
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs';
import { Observable } from 'rxjs';

import CONFIG from '../config';

@Injectable()
export class RoyaleService {

    constructor(@Inject(CONFIG.CLASH_ROYALE_API_URL) private apiUrl: string, private http: HttpClient) {

    }

    getArena(idName: string): Observable<Object> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.ARENAS}/${idName}`);
    }

    getArenas(): Observable<Object> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.ARENAS}`);
    }

    getCards(): Observable<Object> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.CARDS}`);
    }

    getChests(): Observable<Object> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.CHESTS}`);
    }

    getPlayers(): Observable<Object> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.PLAYERS}`);
    }
}
