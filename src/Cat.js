(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;

  window.zoo.Cat = class Cat extends Animal {
    constructor(name, dateOfBirth, height){
      super(name, dateOfBirth);
       this.height = height;
       this.legs = 4;
       
    }

  };



}());
