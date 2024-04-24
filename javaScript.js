//onReady function wired up
document.addEventListener("DOMContentLoaded", onReady, false);

const cart = [];
const budget = 100.00;

function onReady(){
    console.log('DOM is ready');
}

//form submit function
function submitForm(event){
    //we have to ask the form not to reload the page
    event.preventDefault();

    //grab references to the two inputs from the DOM
    const itemNameElement = document.getElementById("item-name");
    const itemPriceElement = document.getElementById("item-price");


    //build a new object with values from the user
    const newItem = {
        name: itemNameElement.value,
        price: itemPriceElement.value,
    }

    console.log(newItem);
    
    //push our new item to the global array
    cart.push(newItem);
}

//form submit function

//TODO:
//Function to calculate the remaining budget
//Function to render the shopping list to the DOM
//Function to render the calculated remaining budget to the DOM