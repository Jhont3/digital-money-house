export const getCreditCardType = (cardNumber: string): string => {
    if (/^4/.test(cardNumber)) return "Visa";
    if (/^5[1-5]/.test(cardNumber) || /^2(2[2-9][1-9]|[3-7][0-9]{2})/.test(cardNumber)) return "Mastercard";
    if (/^3[47]/.test(cardNumber)) return "American Express";
    return ""; 
};
