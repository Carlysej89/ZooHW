(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;

  window.zoo.Cat = class Cat extends Animal {
    constructor(name, dateOfBirth, methodOfTravel){
      super(name, dateOfBirth);
       this.species = Cat.toString();
       this.offSpring = 'kittens';
       this.methodOfTravel = methodOfTravel;

    }
    static toString(){
      return 'Cats are felines';
    }
    methodOfTravel(){
      return (speed*duration);
    }

  };
}());
