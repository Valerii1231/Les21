"use strict";

var car = {
  model: "BMV2110",
  year: "2015",
  color: "white"
};
car.color = "green";
car.type = "electric";

car.signal = function () {
  alert('fa1 fa! fa!');
};

car.signal(); //2

var sum = 0;
var salaries = {
  frontend: 12000,
  backend: 10000,
  designer: 8000,
  manager: 15000,
  total: function total() {
    for (var key in salaries) {
      if (+salaries[key]) {
        sum += salaries[key];
      }
    }

    return sum;
  }
};
alert(salaries.total()); // 3, 4

function Computer(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;

  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case 'string':
        return this.brand;

      case 'number':
        return this.cost;

      case 'default':
        return this.brand + ' ' + this.system + ' ' + this.cost + '//';
    }
  };
}

var dell = new Computer('Dell', 'windows', '800');
var apple = new Computer('Apple', 'MAC OS', '1700');
console.log(String(dell));
console.log(+apple);
console.log(dell + apple);