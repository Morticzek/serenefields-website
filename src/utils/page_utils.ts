export const isStorePage = () => {
    if (typeof window !== 'undefined') {
        return window.location.pathname === '/store';
    }
    return false;
};