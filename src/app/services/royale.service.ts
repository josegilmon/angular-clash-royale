
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs';

import CONFIG from '../config';

@Injectable()
export class RoyaleService {

    constructor(@Inject(CONFIG.CLASH_ROYALE_API_URL) private apiUrl: string, private http: Http) {

    }

    getArena(idName: string): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.ARENAS}/${idName}`).map( (data: Response) => data.json() );
    }

    getArenas(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.ARENAS}`).map( (data: Response) => data.json() );
    }

    getCards(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.CARDS}`).map( (data: Response) => data.json() );
    }

    getChests(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.CHESTS}`).map( (data: Response) => data.json() );
    }

    getPlayers(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.API_PATHS.PLAYERS}`).map( (data: Response) => data.json() );
    }
}
