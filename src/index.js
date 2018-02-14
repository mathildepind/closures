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
    switch(operator){
      case "+":
        total = num1 + num2;
        break;
      case "-":
        total = num1 - num2;
        break;
      case "*":
        total = num1 * num2;
        break;
      case "/":
        total = num1 / num2;
        break;
      default:
      console.log("no idea what you are doing")
    }

  }
}
