(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
     /**
      * this function will be creating an Animal
      * @param {String} name name of the Animal
      * @return {Date}  dateOfBirth date the animal was created
      */
    constructor(name, dateOfBirth) {
      this.name = name;
      if (!(dateOfBirth instanceof Date)){
        dateOfBirth = new Date();
      }
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
