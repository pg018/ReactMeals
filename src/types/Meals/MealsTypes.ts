export type MealItemType = {
    mealId:string,
    mealName:string,
    mealDescription:string,
    mealPrice:number,
    restaurantName:string,
    rating:number
}

export class MealCartType  {
    mealId:string;
    mealName:string;
    mealPrice:number;
    totalQuantity:number;
    totalPrice:number;
    restaurantName:string;
    rating:number

    constructor(enteredID:string,enteredName:string,enteredPrice:number,enteredQuantity:number,enteredRestaurantName:string,enteredRating:number){
        this.mealId = enteredID;
        this.mealName = enteredName;
        this.mealPrice = enteredPrice;
        this.totalQuantity = enteredQuantity;
        this.restaurantName = enteredRestaurantName;
        this.rating = enteredRating
        this.totalPrice = this.mealPrice*this.totalQuantity
    }
}