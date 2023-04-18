//You manage a grocery store and need to keep track of the inventory of various items. 
//You will use arrays to store the data and various functions to manipulate and analyze the data. 
//Question 1
//Create an array containing the names of all items in the inventory maximum of 10.
const inventory=["bananas","kiwi","tomatoes","potatoes","strawberry","onions","cabbages","plums","spinach","mangoes"]

console.log(inventory)



//Question2
//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let stock_quantities=[50,60,200,600,100,50,40,20,30,40]

console.log(stock_quantities)



//QUESTION3
//Write a function to add a new item to the inventory, updating both arrays.
function Add(item,stock){

    
    inventory.push(item);
    stock_quantities.push(stock);
}

Add("Carrot", 2);
console.log(inventory);
console.log(stock_quantities);



//question4
//Write a function to update the stock quantity of an existing item.
function updateStock(names, Quantity) {
  let index = inventory.indexOf(names);
  if (index !== -1) {
    stock_quantities[index] = Quantity;
    console.log("Updated stock of " + names + " to " + Quantity);
  } else {
    console.log(names + " not found in inventory!");
  }
}

updateStock("spinach",25)






//question5
//Write a function to calculate the total number of items in the inventory.
function totalItems() {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
      total += stock_quantities[i];
    }
    console.log("Total number of items in inventory: " + total);
  }
  
totalItems()

//question 6
//Write a function to find the item with the lowest stock quantity.
function lowest() {
  let minIndex = 0;
  for (let i = 1; i < stock_quantities.length; i++) {
    if (stock_quantities[i] < stock_quantities[minIndex]) {
      minIndex = i;
    }
  }
  console.log("Item with lowest stock: " + inventory[minIndex] + " with quantity " + stock_quantities[minIndex]);
}
lowest()
