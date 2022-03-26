import { User } from "./user";

export class Order {
    orderNumber!:number    
    amount!: number
    shippingAddress!: string
    paymentType!:string
    nameOnCard!:string
    cardNumber!: string
    expiration!: string
    cvv!:number

}
