interface TebexPackage {
    id: number;
    name: string;
    description: string;
    image: string;
    type: string;
    category: {
        id: number;
        name: string;
    };
    base_price: number;
    sales_tax: number;
    total_price: number;
    currency: string;
    discount: {
        type: string;
        percentage: number;
        amount: number;
    } | null;
    disable_quantity: boolean;
    disable_gifting: boolean;
    expiration_date: string | null;
    created_at: string;
    updated_at: string;
    order: number;
}

interface TebexCategory {
    id: number;
    name: string;
    packages: TebexPackage[];
}

// Transform package data for the store
export function transformPackageData(pkg: TebexPackage) {
    return {
        name: pkg.name,
        description: pkg.description,
        image: pkg.image || '/path/to/default/image.webp',
        price: {
            original: pkg.base_price,
            current: pkg.total_price,
            currency: pkg.currency
        },
        perks: extractPerksFromDescription(pkg.description),
        color: getCategoryColor(pkg.category.name),
        border: getCategoryBorder(pkg.category.name),
        tag: pkg.discount ? 'SALE' : undefined,
        background: pkg.discount ? 'bg-red-500' : undefined,
        tebexId: pkg.id,
        order: pkg.order
    };
}

export function extractPerksFromDescription(description: string): string[] {
    // You'll need to implement this based on your description format
    // For example, if perks are bullet points:
    return description
        .split('\n')
        .filter(line => line.trim().startsWith('•'))
        .map(line => line.trim().replace('•', '').trim());
}

export function getCategoryColor(categoryName: string): string {
    const colors = {
        'Lord': 'text-[#85cb5d]',
        'Baron': 'text-[#77a6ee]',
        'Duke': 'text-[#dea95d]',
        'Land Grant': 'text-[#cf6364]'
    };
    return colors[categoryName] || 'text-gray-200';
}

export function getCategoryBorder(categoryName: string): string {
    const borders = {
        'Lord': 'border-[#85cb5d]',
        'Baron': 'border-[#77a6ee]',
        'Duke': 'border-[#dea95d]',
        'Land Grant': 'border-[#cf6364] border-8'
    };
    return borders[categoryName] || 'border-gray-200';
}

export const tebexApi = {
    async getStoreData() {
        try {
            const token = import.meta.env.PUBLIC_TEBEX_TOKEN;
            if (!token) {
                throw new Error('Tebex token not configured');
            }

            const response = await fetch(
                `https://headless.tebex.io/api/accounts/${token}/categories?includePackages=1`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.data as TebexCategory[];
        } catch (error) {
            console.error('Failed to fetch store data:', error);
            return [];
        }
    }
};
