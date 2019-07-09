// /<reference path="pages/arena/detail/arena-detail.component.ts"/>
/**
 * Created by jagil on 26/01/2017.
 */

import { InjectionToken } from '@angular/core';

const CLASH_ROYALE_API_URL = new InjectionToken('CLASH_ROYALE_API_URL');

const API_PATHS = {
    ARENAS: '/arenas',
    CARDS: '/cards',
    CHESTS: '/chests',
    PLAYERS: '/players'
};

export default {
    CLASH_ROYALE_API_URL,
    API_PATHS
};
