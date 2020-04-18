const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._couses.appetizers;
  },
  set appetizers(appetizersIn) {
    this._courses.appizers.push(appetizersIn);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainsIn) {
    this._courses.mains.push(mainsIn);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertsIn) {
    this._courses.desserts.push(dessertsIn);
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      courseName: this.courseName,
      dishName: this.dishName,
      dishPrice: this.dishPrice
    };
    this._courses[courseName].push(dish);
    this._courses[dishName].push(dish);
    this._courses[dishPrice].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. This price is $${totalPrice}.`;
  },
};

console.dir(menu);

menu.addDishToCourse('Good Course', 'Good Dish', 8000);