//-------------------- TEST DATA------------------------------

let mexican = [{id: 1,name: 'carnitas',price: 21},
              {id: 2,name: 'asada',price: 22}]

let american = [{id: 1,name: 'burgers',price: 21},
                {id: 2,name: 'pizza rolls',price: 22}]

//-----------------------------------------------------------


  
////////////////////////////////////   ----   MAP  ----   //////////////////////////////////////////


//-----   first try  ---------

// const getMe = (american,mexican) => {
//   const map = new Map();
//   for(let i = 0; i < mexican.length; i++) {
//     map.set(mexican[i],american[i]);
//   };
//   return map;
// };
// console.log(getMe(mexican,american))


//-------------------------------------------------------------------------------------------------
//           returns array of formatted strings[] (you choose what these look like)
//--------------------------------------------------------------------------------------------  


// const about = (foods) => {
//   return foods.map((param) => {
//     return `${param.name} is $ ${param.price}`
//   })

// };
// let foodA = about(american)
// let foodB = about(mexican)
// console.log(foodA,foodB)


//----------------------------This is the right answer ---------------------------------------

const foodToString = (food) => {
  return `${food.name} is $${food.price} and id is ${food.id}`
}
const about = (foods) => {
  return foods.map(foodToString)
};
console.log('about: return',about(mexican))
console.log('about: return', about(american))






//-------------------------------------------------------------------------------------
///                    Returns new array with food add
//-------------------------------------------------------------------------------------
//         first try 

// const addFood1 = (foods,food) => {
//   let newFood = [...foods,food]
//   return newFood  
//  }
// const newMFood = addFood1(mexican,{id: 3, name: 'taco', price: 5})
// const newAFood = addFood1(american,{id: 3, name: 'taco', price: 25})
// console.log('mexican', newMFood, 'american', newAFood)

// //---------------   the right answer  √  -------------------

const addFood1 = (foods,food) => {
  return [...foods,food]
}
console.log ('addfood1 return', addFood1(mexican, {id: 3, price: 20, name: 'tacos'}) )



// ---------------------------------------------------------------------------------
//                       Returns new array with food add
//----------------------------------------------------------------------------------
//         first try

// const addFood2 = (foods,id,name,price) => {
//   let newFood = [...foods,id,name,price]
//   return newFood 
// }
// const americanFood = addFood2(american,{id: 4,name: 'spinach',price: 3})
// const mexicanFood = addFood2(mexican,{id: 4,name: 'squid',price: 12})
// console.log('mexican', mexicanFood, 'american', americanFood)


//---------------------------------this bottom is the right one --------------------

const addFood2 = (foods,id,name,price) => {
return [...foods, {id:id, name:name, price:price}]
}
const newFood = addFood2(mexican,3,'burrito',10)
console.log(newFood)
  
console.log('addfood2: return',addFood2(mexican,3,'tacos',20))




///    MAP ///


//----------------------------------------------------------------------------------------------------
//         Returns new array with the price UPDATED with the id given
//---------------------------------------------------------------------------------------------------

//     first try

// const updateFood1=(foods, id, price)=>{
//   let updatedMyFood = foods.map((p) => {
//     if(p.id === id) {
//     return {...p, price: p.foods + 1}
//     }
//     return p
//   })
//   return updatedMyFood
// }

// const didI = updateFood1(mexican,1)
// console.log(didI)

//------------------------  bottom is right answer -----------------
//                      element, index, array
const updateFoodPrice = ( food,  id,  price) => {
  if(food.id === id) {
  return {...food, price: price}
  }
  return food
}
console.log(updateFoodPrice({id: 1,name: 'fish',price: 10},1,100))
console.log(updateFoodPrice({id: 0,name: 'pizza',price: 10},99,100))



//       NOW.......UPDATE MAP
//-----------------------------------------------------------------------------------------------
//               Returns new array with the food item updated with the id given
//-----------------------------------------------------------------------------------------------


const updateFood1 = (foods,id,price) => {
  //        x is the call back function
  return foods.map((x) => updateFoodPrice(x, id, price))
};
console.log('updateFood1: return',updateFood1(mexican, 1, 200))


// ------------- updating food2

const updateFood2 = (foods, id, food) => {
  return foods.map((foodElement)=>{
    if(foodElement.id === id) {
      return food
    }
    return foodElement
  })
};

console.log('updateFood2: return',updateFood2(mexican,1,{id: 12,name: 'changed',price: 123}))





// ///////////////////////////////////      ---   FILTER   ---    //////////////////////////////


//----------------------------------------------------------------------------------------
//                            Removes the food with the given the id
//--------------------------------------------------------------------------------------
//        first try

// const deleteFood1 = (foods,id) => {
//   let filterById = foods.filter((x) => {
//     if(x.id === id) {
//     return x.foods !== foods
//     }
//   })
//   return filterById

// }
//   console.log('delete food by ID', deleteFood1(mexican, 1))

//-----------------------------  The right answer   -----------------------

const idMatch = (food,id) => {
  
  return food.id !== id 

}
// console.log('idMatch: return', idMatch({id: 12,name: 'changed',price: 123},1,[]))
// console.log('idMatch: return', idMatch({id: 12,name: 'changed',price: 123},13,[]))



//-------------------------------------------------------------------------------------------
// //                    Removes the food with price over price given
//-----------------------------------------------------------------------------------------

const deleteFood1 = (foods,id) => {
  return foods.filter((food)=> idMatch(food, id))
};

console.log('deleteFood1: return',deleteFood1(mexican,1))




//---------------

const isOverPriced = (food,price) => food.price >= price
console.log('isOverPriced', isOverPriced({book:'dune', price:100}, 10))


//----------------


const deleteFood2 = (foods,price) => {
  return foods.filter((food) => { return isOverPriced(food,price)})
}
deleteFood2(mexican, 20)

console.log('deleteFood2(mexican, 20 )',deleteFood2(mexican, 20))





// const eatFood = mexican.map((mexican) => ({
//   food: mexican.name,
//   price: mexican.price,
// }));
// console.log(eatFood)
 
// const firstNames = mexican.map((mexican) => mexican.name.split('')[0]);
// console.log (firstNames)
