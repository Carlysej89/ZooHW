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
    ageInYears(){
      let currentDate = new Date();
      return currentDate.getFullYear() - this.dateOfBirth.getFullYear();
    }
    static scientificName(){
      return 'Panthera Leo, Giraffa';
    }
  };

}());
