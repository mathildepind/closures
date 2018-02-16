const functions = require('../src/index.js');

test('double', function(){
  const expected = 10;
  const doubleCall = functions.double(5);
  const result = doubleCall();
  expect(result).toEqual(expected);
})

test('increase', function(){
  const expected = 17;
  const otherFunction = functions.increase(7);
  const result = otherFunction(10);
  expect(result).toEqual(expected);
})

test('mergeSort', function(){
  const expected = 67;
  const parentFunction = functions.mergeSort([33,25,24,8]);
  const result = parentFunction(67);
  expect(result).toEqual(expected);
})

test('total', function(){
  const expected = 327;
  const mainFunction = functions.total(7);
  const result = mainFunction([150,100,50,20]);
  expect(result).toEqual(expected);
})

test('gibberish', function(){
  const expected1 = ' hello';
  const expected2 = ' hello Kitty.';
  const mainFunction1 = functions.gibberish();
  const result1 = mainFunction1('hello');
  const result2 = mainFunction1(['K','i','t','t','y']);
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})

test('calculator', function(){
  const expected1 = 6;
  const expected2 = 8;
  const expected3 = 16;
  const expected4 = 19;
  const mainCalculator = functions.calculator();
  const result1 = mainCalculator(4,2,"+");
  const result2 = mainCalculator(4,2,"-");
  const result3 = mainCalculator(4,2,"*");
  const result4 = mainCalculator(9,3,"/");
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
  expect(result3).toEqual(expected3);
  expect(result4).toEqual(expected4);
})

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

let amendedPassengers = [{
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
},
{
  name: 'Oscar',
  amount: 15
}];

test('trainstation', function(){
  const expected1 = [{
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
  const expected2 = [{
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
    },
    {
      name: 'Oscar',
      amount: 15
    }];
  const { arrive, getPeople, pickRandomAmount, pickRandomPerson, giveMoney, trainArrives } = functions.trainstation();
  const resultGetPeople1 = getPeople();
  expect(expected1).toEqual(resultGetPeople1);
  arrive({name: 'Oscar',amount: 15});
  const resultGetPeople2 = getPeople();
  expect(expected2).toEqual(resultGetPeople2);
  const expectedGiveMoney = [{
    name: 'Bob',
    amount: 19,
  },
  {
    name: 'Dave',
    amount: 18
  },
  {
    name: 'Ellen',
    amount: 20
  },
  {
    name: 'Oscar',
    amount: 15
  }];
  giveMoney(6, 2);
  const resultGetPeopleAfterGivingMoney = getPeople();
  expect(expectedGiveMoney).toEqual(resultGetPeopleAfterGivingMoney);
  const expectedLeaving =[{name: 'Ellen',amount: 20}];
  const resultTrainLeaving = trainArrives();
  expect(expectedLeaving).toEqual(resultTrainLeaving);
})

test('dogHome',function(){
  const expected = { battersea:
   [ { name: 'pluto',
       breed: 'pointer',
       colour: 'yellow',
       location: 'battersea' },
     { name: 'king',
       breed: 'alsation',
       colour: 'black',
       location: 'battersea' } ],
  margate:
   [ { name: 'tracey',
       breed: 'mutt',
       colour: 'red',
       location: 'margate' } ] };
   const {houseDog,getDogsByLocation}=functions.dogHome();
   const result = houseDog({name:"king", breed: "alsation", colour: "black", location: "battersea"});
   expect(expected).toEqual(result);
   const expected2 = [ { name: 'pluto',
    breed: 'pointer',
    colour: 'yellow',
    location: 'battersea' },
  { name: 'king',
    breed: 'alsation',
    colour: 'black',
    location: 'battersea' } ];
    const result2 = getDogsByLocation('battersea');
    expect(expected2).toEqual(result2);
})
