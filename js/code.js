 
const car = {
  model: "BMV2110",
  year: "2015",
  color: "white",
}
car.color = "green";
car.type = "electric";
car.signal = function () {
 alert ('fa1 fa! fa!');
}
car.signal();



//2
 let sum = 0;
 const salaries = {
   frontend: 12000,
   backend: 10000,
   designer: 8000,
   manager: 15000,
   total() {
     for (const key in salaries) {
       if (+salaries[key]) {
         sum += salaries[key];
       }
     }
     return sum;
   }
 }
 alert(salaries.total());

 


// 3, 4
function Computer (brand, system, cost){
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case 'string':
        return  this.brand;
      case 'number':
        return this.cost;
      case 'default':
        return this.brand  + ' ' + this.system + ' ' + this.cost + '//' ;
    }
  }
}
let dell  = new Computer ('Dell', 'windows', '800');
let apple = new Computer ('Apple', 'MAC OS', '1700');
console.log (String(dell));
console.log (+apple);
console.log ( dell + apple);



