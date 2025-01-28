// utils/packageValidator.ts
async function checkPackageOwnership(packageId: number, username: string) {
    try {
        const response = await fetch(
            `https://headless.tebex.io/api/accounts/${import.meta.env.PUBLIC_TEBEX_TOKEN}/baskets`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    complete_url: window.location.origin,
                    cancel_url: window.location.origin
                })
            }
        );

        if (response.ok) {
            const basketData = await response.json();
            // Check if package is available in the basket
            const packagesResponse = await fetch(
                `https://headless.tebex.io/api/accounts/${import.meta.env.PUBLIC_TEBEX_TOKEN}/packages?basketIdent=${basketData.basket.ident}`
            );
            const packagesData = await packagesResponse.json();
            return !packagesData.data.some((pkg: any) => pkg.id === packageId);
        }
        return false;
    } catch (error) {
        console.error('Error checking package ownership:', error);
        return false;
    }
}
