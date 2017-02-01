/**
 * Created by jagil on 26/01/2017.
 */

import { OpaqueToken } from '@angular/core';

const CLASH_ROYALE_API_URL = new OpaqueToken('CLASH_ROYALE_API_URL');

const ROUTES = {
    ARENAS: '/arenas',
    CARDS: '/cards',
    CHESTS: '/chests',
    PLAYERS: '/players'
};

export default {
    CLASH_ROYALE_API_URL,
    ROUTES
};
