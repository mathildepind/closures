function double(integer) {
  let number = integer;
  function innerDouble() {
    number = number*2
    return number;
  }
  return innerDouble;
}

exports.double = double;

function increase(newNum){
  let number = newNum;
  function innerIncrease(integer){
    number = number + integer;
    return number;
  }
  return innerIncrease;
}

exports.increase = increase;


function insert(array, number){
  for (let i=0; i < array.length; i++) {
    if (array[i] <= number) {
      array.splice(i, 0, number);
      return array;
    }
  }
}

function mergeSort(array){
  let newArray = array;
  function innerSort(number) {
    insert(newArray, number);
    return newArray[0];
  }
  return innerSort;
}

exports.mergeSort = mergeSort;


function reducer(array){
  let total =  array.reduce(function(acc,curr){
    return acc + curr;
  },0);
  return total;
}

function total(number){
  let storedValue = number;
  function innerTotal(numberArray){
   let arrayTotal = reducer(numberArray);
   storedValue = arrayTotal + storedValue;
   return storedValue;
  }
  return innerTotal;
}

exports.total = total;

function gibberish() {
  let emptyString = '';
  function innerGibberish(input){
    if (typeof input === 'string') {
      emptyString = emptyString.concat(' ', input);
    } else {
      let joinedArrayInput = input.join('');
      emptyString += ` ${joinedArrayInput}`;
      emptyString += '.';
    }
    return emptyString;
  }
  return innerGibberish;
}

exports.gibberish = gibberish;


function calculator(){
  let total=0;
  function calculate(num1,num2,operator){
    let innerTotal = 0
    switch(operator){
      case "+":
        innerTotal = num1 + num2;
        break;
      case "-":
        innerTotal = num1 - num2;
        break;
      case "*":
        innerTotal = num1 * num2;
        break;
      case "/":
        innerTotal = num1 / num2;
        break;
      default:
      console.log("no idea what you are doing")
    }
    total += innerTotal
    return total;
  }
  return calculate;
}

exports.calculator = calculator;


function randomAmount() {
  return Math.floor((Math.random() * 20) + 1);
}

function randomPerson(passengerArrayLength) {
  return Math.floor((Math.random() * passengerArrayLength) + 1);
}


function trainstation(){
  let passengers = [{
    name: 'Bob',
    amount: 19,
  },
  {
    name: 'Dave',
    amount: 18
  },
  {
    name: 'Ellen',
    amount: 14
  }];

  return {
    arrive : function(personObject) {
      passengers.push(personObject);
    },
    getPeople : function(){
      return passengers;
    },
    giveMoney : function(money,person){
      passengers[person].amount += money;
    },
    trainArrives : function(){
      let leavingPassengers = passengers.filter(passenger => passenger.amount >= 20);
      return leavingPassengers;
    }
  };
};

exports.trainstation = trainstation;

function dogHome(){
  let dogHomes = {
    battersea:[{
      name: "pluto",
      breed: "pointer",
      colour: "yellow",
      location: "battersea"
    }],
    margate:[{
      name: "tracey",
      breed: "mutt",
      colour: "red",
      location: "margate"
    }],
};
  return{
    houseDog : function(dogObj){
    let dogLocation = dogObj.location;
    if (dogHomes[dogLocation]){
      dogHomes[dogLocation].push(dogObj);
    }else{
      dogHomes[dogLocation] = [dogObj];
    }
    return dogHomes;
    },
    getDogsByLocation: function(location){
      return dogHomes[location];
    }
  };
}

exports.dogHome = dogHome;


function shop() {
  let revenue = 0;
  let soldItemsArray = [];
  let storage = {
    cucumber: {
      name: 'cucumber',
      price: 5,
      amount: 500,
    },
    gin : {
      name: 'gin',
      price: 20,
      amount: 200,
    },
    tonic : {
      name: 'tonic',
      price: 2.5,
      amount: 20,
    }
  };

  return {
    addStock : function(replenishArray) {
      replenishArray.forEach(function(item) {
        let name = item.name;
        if (storage[name]) {
          storage[name].amount += item.amount;
          if (storage[name].price !== item.price) {
            let newAveragePrice = (storage[name].price + item.price)/2;
            storage[name].price = newAveragePrice;
        }
        } else {
          storage[item.name] = item;
        }
        });
      return storage;
    },
    sellStock : function(order) {
      let soldItemsArray = [];
      order.forEach(function(item) {
        let name = item.name;
        let soldItem = {};
        if(storage[name]) {
          let initStockAmount = storage[name].amount;
          if (storage[name].amount > item.quantity) {
            storage[name].amount -= item.quantity;
            revenue += storage[name].price * item.quantity;
            soldItem.name = storage[name].name;
            soldItem.price = storage[name].price;
            soldItem.quantity = item.quantity;
          } else if (storage[name].amount < item.quantity) {
            storage[name].amount = 0;
            revenue += storage[name].price * initStockAmount;
            soldItem.name = storage[name].name;
            soldItem.price = storage[name].price;
            soldItem.quantity = initStockAmount;
          }
        }
        soldItemsArray.push(soldItem);
      });
      return soldItemsArray;
    },
    getRevenue : function() {
      return revenue;
    }
  };
}
