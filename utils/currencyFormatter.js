export const currencyFormatter = (data) =>{
    const currency = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP",
    });

    return currency.format(data)
    
}