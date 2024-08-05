const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this.meal = mealToCheck);
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this.price = priceToCheck);
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Todays Special is ${this._meal} for ${this._price}!`
    }
    else {return `Meal or price was not set correctly!`}
  },
};

menu._meal = "Dupa W  ołowa";
menu._price = 99.99;

console.log(menu._meal)
console.log(menu._price)
console.log(menu.todaysSpecial)

