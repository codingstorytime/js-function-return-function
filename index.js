import './style';
// Setup Jasmine testing
import {jasMineBootstrap} from './src/moya/global-jasmine-setup';

/**
 * moyarich (moyarich.com | codingstorytime.com)
 * https://www.facebook.com/codingstorytime/
 * https://www.facebook.com/moyarich
 * 
 */

function house(sandwiches){
  function dogHouse(){
    let dogEat = sandwiches / 2;
    return dogEat;
  }
  return dogHouse;
}

var dogHouse = house(4);
var checkDogHouse = dogHouse();
console.log(checkDogHouse); //expected output 2



//--------------------------------------------------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
function createMultiplier(multiplier){

  /*
   This is a function expression created with the arrow syntax
   this function is returned by the createMultiplier() function.
   This function is a child of the createMultiplier function so it will have access to the "multiplier" variable.
   */
  return (x) => {
    return x * multiplier
  }
}

var double    = createMultiplier(2)
var triple    = createMultiplier(3)
var quadruple = createMultiplier(4)

console.log(double(3)) // expected output 6
console.log(triple(3)) // expected output 9
console.log(quadruple(3)) // expected output 12     


//----------------------------------------------------------------------
//-------Rewrite Above Function using bind -----------------------------

function multiplier(multiplier,value){
  return multiplier * value;
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)

console.log(doublerWithBind(3)) // expected output 6 
console.log(triplerWithBind(3)) // expected output 9

/*
Complete the exercise !!!

write a function called quadrupleWithBind() to quadruple a number
IE: 3 + 3 + 3 + 3 = 12   or 3 * 4 = 12
Make sure to use the JavaScript Bind() function

Function.prototype.bind()

*/




//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//DO NOT EDIT BELOW THIS LINE 
//
//- Jasmine code testing
//-------------------------------------------------------------------------------------------



//----------------------------------------

describe('2. Create function', function() {
	it('a function named quadrupleWithBind should be created', function() {
	    expect(typeof quadrupleWithBind).not.toBe('undefined')
	});
});





describe('()', () => {

  it('verify the result of the JavaScript bind Function', () => {

    // Act
    const y = quadrupleWithBind(3);

    // Assert
    expect(y).toBe(12);
  });
});

//-----------------------------------------------------
//-----------------------------------------------------
//---Load jasmine test--------------------------------- 
jasMineBootstrap();
//-----------------------------------------------------


