
function formatCurrency(amount, currencyCode, locale) {
    let flag = '';
    if(amount/1000000000 > 1) {
        amount = amount/1000000000;
        flag = 'B';
    }
    if(amount/1000000 > 1) {
        amount = amount/1000000;
        flag = 'M';
    }
    const currencyFormatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
    });

    return `${currencyFormatter.format(amount)}${flag}`;
}

function formatInteractions(count) {
    if(count/1000 > 1) {
        return `${count/1000}K`
    }
    if(count/1000000 > 1) {
        return `${count/1000000}M`
    }
    return count;
}

export {
    formatCurrency,
    formatInteractions
}