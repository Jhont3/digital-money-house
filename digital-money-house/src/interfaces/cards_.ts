export interface CardData{
    id: number;
    account_id: number;
    number_id: number;
    first_last_name: string;
    cod: number;
    expiration_date: string;
}

export interface CardForm {
    fullCardNumber: string;
    firstAndSecondName: string;
    expirationDate: string;
    securityCode: string;
}

export interface CreditCardSubmit {
    number_id: number;
    first_last_name:  string;
    expiration_date:  string;
    cod: number;
}
