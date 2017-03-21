(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;

  window.zoo.Cat = class Cat extends Animal {
    constructor(name, dateOfBirth){
      super(name, dateOfBirth);
    }

  };

  let me = new window.zoo.Cat('Larry the lion', new Date('4/22/1961', scientificName()));

  console.log(me.name, me.dateOfBirth, me.ageInYears());

}());
