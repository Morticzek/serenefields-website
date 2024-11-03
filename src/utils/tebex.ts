import { TebexHeadless } from 'tebex_headless';

if (!import.meta.env.TEBEX_WEBSTORE_ID) {
    throw new Error('TEBEX_WEBSTORE_ID is not defined');
}

export const tebexClient = new TebexHeadless(import.meta.env.TEBEX_WEBSTORE_ID);
