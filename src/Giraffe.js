(function() {
  'use strict';
 window.zoo = window.zoo || {};
 let Animal = window.zoo.Animal;

 window.zoo.Giraffe = class Giraffe extends Animal {
   constructor(name, dateOfBirth){
     super(name, dateOfBirth);

   }
 };
 let me = new window.zoo.Giraffe('Geffory the Giraffe', new Date('12/2/2002', scientificName()));

 console.log(me.name, me.dateOfBirth, me.ageInYears());

}());
