(function() {
  'use strict';
 window.zoo = window.zoo || {};
 let Animal = window.zoo.Animal;

 window.zoo.Giraffe = class Giraffe extends Animal {
   constructor(name, dateOfBirth, height){
     super(name, dateOfBirth);
      this.species = Giraffe.toString();
      this.offSpring = 'calf';
      this.methodOfTravel = methodOfTravel;
   }
   static toString(){
     return 'Giraffe is a Giraffa';
   }
   methodOfTravel(duration){
     return (speed * duration);
   }
 };


}());
