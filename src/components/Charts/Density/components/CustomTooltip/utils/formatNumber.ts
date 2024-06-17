type FormatReturnType = undefined | string;

const genMinAmount = (decimals: number) => {
    if (decimals < 1) return 1;
    return Number(`0.${''.padEnd(decimals - 1, '0')}1`);
};

export const formatNumber = (num?: number, decimals = 4): FormatReturnType => {
    let value: FormatReturnType;
    const minAmount = genMinAmount(decimals);
    if (typeof num === 'number' && !Number.isNaN(num)) {
        if (!!num && num < minAmount) {
            value = `<${minAmount}`;
        } else {
            value = new Intl.NumberFormat('en-US', {
                style: 'decimal',
                maximumFractionDigits: decimals,
                minimumFractionDigits: 0,
            }).format(num);
        }
    }
    return value;
};
