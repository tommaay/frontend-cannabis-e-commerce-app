export const formatPrice = price => {
    const p = (price / 100).toFixed(2);

    return `$${p}`;
};
