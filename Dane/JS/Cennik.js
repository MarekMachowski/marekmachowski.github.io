//program podaje nazwę i cenę dania z menu
const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") { //tylko nazwa
      return (this.meal = mealToCheck);
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") { //tylko liczba
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

menu._meal = "Klopsiki";
menu._price = 12.99;
console.log(menu._meal)
console.log(menu._price)
console.log(menu.todaysSpecial)

