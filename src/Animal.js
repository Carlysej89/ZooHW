(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    constructor(name, dateOfBirth) {
      this.name = name;
      this.dateOfBirth = dateOfBirth;

    }
    changeName(newName){
      this.name = newName;
    }

  };

}());
