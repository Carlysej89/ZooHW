(function() {
  'use strict';
    window.zoo = window.zoo || {};

  let Animal = new window.zoo.Animal;
  let Giraffe = new window.zoo.Giraffe;
  let Cat = new window.zoo.Cat;

  let Larry  = new Cat('Larry the Cat', new Date('4/22/1961'), scientificName());
    console.log(Larry.ageInYears());
    larry.changeName('Brian');
    larry.age();

  let Geoffory = new Giraffe('Geffory the Giraffe', new Date('12/2/2002'), scientificName());
    console.log(Geoffory.ageInYears());
    Geoffory.changeName('Chris');
    Geoffory.age();

    try{
      let new = new Animal();
    } catch(err) {
      if(err instanceof TypeError){
        console.log(err);
      } else {
        throw err;
      }
    }


}());
