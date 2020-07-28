class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocaiton() {
    return !!this.homeLocation;
  }

  getDescription() {
    let description = super.getDescription()
    if(this.hasHomeLocaiton()) {
      description += `I am visiting from ${this.homeLocation}`
    }
    return description;
  }
}


const me = new Traveller('Andrew Mead', 26, 'chicago');
console.log(me.getDescription());

const other = new Traveller();
console.log(other.getDescription());
