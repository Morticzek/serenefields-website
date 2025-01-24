import React from 'react';

interface ProductDescriptionProps {
    description: string;
}

const formatDescription = (htmlString: string) => {
    const sanitized = htmlString.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    return {
        __html: sanitized
    };
};

const ProductDescription: React.FC<ProductDescriptionProps> = ({ description }) => {
    return (
        <div
            dangerouslySetInnerHTML={formatDescription(description)}
            className="prose prose-invert max-w-none text-xl"
        />
    );
};

export default ProductDescription;
