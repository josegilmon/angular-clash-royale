
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs';

import CONFIG from '../config';

@Injectable()
export class RoyaleService {

    constructor(@Inject(CONFIG.CLASH_ROYALE_API_URL) private apiUrl: string, private http: Http) {

    }

    getArenas(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.ROUTES.ARENAS}`).map( (data: Response) => data.json() );
    }

    getCards(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.ROUTES.CARDS}`).map( (data: Response) => data.json() );
    }

    getChests(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.ROUTES.CHESTS}`).map( (data: Response) => data.json() );
    }

    getPlayers(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}${CONFIG.ROUTES.PLAYERS}`).map( (data: Response) => data.json() );
    }
}
