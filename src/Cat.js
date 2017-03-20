(function() {
  'use strict';

  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;

  window.zoo.Cat = class Cat extends Animal {
    constructor(name, dateOfBirth){
      super(name, dateOfBirth);
    }

  };

    let me = new window.zoo.Cat('lion', '4/22/1961');
    console.log(me.name, me.dateOfBirth);

}());
