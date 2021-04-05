export interface Payment{
    id:number;
    carId:number;
    customerId:number;
    totalAmount:number;
    paymentDate?:Date;
    fullName?:string;
    cardNumber?:string;
    expiration?:string;
    cvv?:string;
    isSave:boolean;
}