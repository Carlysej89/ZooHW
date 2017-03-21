(function() {
  'use strict';
 window.zoo = window.zoo || {};
 let Animal = window.zoo.Animal;

 window.zoo.Giraffe = class Giraffe extends Animal {
   constructor(name, dateOfBirth, height){
     super(name, dateOfBirth);
      this.height = height;
   }
 };


}());
