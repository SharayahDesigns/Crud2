// TEST DATA

let mexican = [{id: 1,name: 'carnitas',price: 21},
              {id: 2,name: 'asada',price: 22}]

let american = [{id: 1,name: 'burgers',price: 21},
                {id: 2,name: 'pizza rolls',price: 22}]


  


//MAP

///////////////// foods:[{id:number,name:string, price:number},...]


const getMe = (american,mexican) => {
  const map = new Map();
  for(let i = 0; i < mexican.length; i++) {
    map.set(mexican[i],american[i]);
  };
  return map;
};
console.log(getMe(mexican,american))



////////////////// returns array of formatted strings[] (you choose what these look like)

const about = (foods) => {
  return foods.map((param) => {
    return `${param.name} is $ ${param.price}`
  })

};
let foodA = about(american)
let foodB = about(mexican)
console.log(foodA, foodB)

////////////////////////////////////////////////////////// [...]




//// foods:[{id:number,name:string, price:number},...]

//// food: {id:number,name:string, price:number}

//////////////////////////////////////// returns new array with food add
//---------------------------------------------------------------

const addFood1 = (foods,food) => {
  let newFood = [...foods,food]
  return newFood  
 }
const newMFood = addFood1(mexican,{id: 3, name: 'taco', price: 5})
const newAFood = addFood1(american,{id: 3, name: 'taco', price: 25})
console.log('mexican', newMFood, 'american', newAFood)

//----------------------------------------------------------------
///////////////////////////////////////// [...]

// // foods:[{id:number,name:string, price:number},...]

// // id:number,

// // name:string, 

// // price:number}

// ////////////////////////////////////////// returns new array with food add

// const addFood2 = (foods,id,name,price) => {
//   let newFood = [...foods,id,name,price]
//   return newFood 
// }
// const americanFood = addFood2(american,{id: 4,name: 'spinach',price: 3})
// const mexicanFood = addFood2(mexican,{id: 4,name: 'squid',price: 12})
// console.log('mexican', mexicanFood, 'american', americanFood)

//---------------------------------this bottom is the right one --------------------

const addFood2 = (foods,id,name,price) => {
return [...foods, {id, name, price}]
}
const newFood = addFood2(mexican,3,'burrito',10)
console.log(newFood)
  


//////////////////////////////////////////////// //MAP

// // foods:[{id:number,name:string, price:number},...]

// // id:number,

// // price:number}

// ///////////////////////////////////////////////// returns new array with the price updated with the id given

const updateFood1=(foods, id, price)=>{
  let updatedMyFood = foods.map((p) => {
    if(p.id === id) {
    return {...p, price: p.foods + 1}
    }
    return p
  })
  return updatedMyFood
}

const didI = updateFood1(mexican,1)
console.log(didI)

// //MAP

// // foods:[{id:number,name:string, price:number},...]

// // id:number,

// // food:{id:number,name:string, price:number}}

// /// returns new array with the food item updated with the id given

// const updateFood1=(foods, id, food)=>{



//  }



// /////////////////////////////////// FILTER    //////////////////////////////

// // foods:[{id:number,name:string, price:number},...]

// // id:number,

// // removes the food with the given the id

const deleteFood1 = (foods,id)=>{




}



// // FILTER

// // foods:[{id:number,name:string, price:number},...]

// // price:number,

// // removes the food with price over price given

// const deleteFood2 = (foods,price)=>{



// }
