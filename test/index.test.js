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
