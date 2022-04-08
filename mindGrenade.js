const num1 = 5;
const num2 = 10;

function addValues () {
    console.log(`The sum is ${num1+num2}`);
}

addValues();

//when we export a function which is being executed in some other module, we inherently invoke it
// we dont have to seperately invoke it into the module requirung it
// require would invke it automatically
