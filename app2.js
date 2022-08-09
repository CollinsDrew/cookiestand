// 5 empty objects, names of locations

let London  = {};
let Norwich = {};
let Cardiff = {};
let York    = {};
let Bath    = {};

console.log(typeof(Norwich));

console.log(London);

// Add values to the properties
// Minimum number of customers
// Maximum number of customers
// Average amount of cookies sold per customer


//Cardiff properties & values
Cardiff.minCustomersVisited = 8;
Cardiff.maxCustomersVisited = 22;
Cardiff.avgCookiesSoldPerCustomer = 4;

console.log(Cardiff);

//London properties & values
London.minCustomersVisited = 23;
London.maxCustomersVisited = 108
London.avgCookiesSoldPerCustomer = 12

console.log(London);

//Norwich properties & values
Norwich.minCustomersVisited = 15;
Norwich.maxCustomersVisited = 56;
Norwich.avgCookiesSoldPerCustomer = 7;

console.log(Norwich);

//York properties & values
York.minCustomersVisited = 12;
York.maxCustomersVisited = 44;
York.avgCookiesSoldPerCustomer = 8;

console.log(York);

//Bath properties & values
Bath.minCustomersVisited = 7;
Bath.maxCustomersVisited = 38;
Bath.avgCookiesSoldPerCustomer = 10;

console.log(Bath);

// Location array
const locations = [London, Norwich, Cardiff, York, Bath];

console.log(locations);


// Method that generates a random number
// Norwich random number
Norwich.randomNumber = function() {
    const upper = 100;
    const lower = 10;
    const difference = upper - lower;

    return Math.floor(Math.random() * difference + lower);
}
console.log(Norwich.randomNumber());

//London random number
London.randomNumber = function() {
    const upper = 100;
    const lower = 10;
    const difference = upper - lower;

    return Math.floor(Math.random() * difference + lower);
}
console.log(London.randomNumber());

//Cardiff random number
Cardiff.randomNumber = function() {
    const upper = 100;
    const lower = 10;
    const difference = upper - lower;

    return Math.floor(Math.random() * difference + lower);
}
console.log(Cardiff.randomNumber());

//York random number
York.randomNumber = function() {
    const upper = 100;
    const lower = 10;
    const difference = upper - lower;

    return Math.floor(Math.random() * difference + lower);
}
console.log(York.randomNumber());

//Bath random number
Bath.randomNumber = function() {
    const upper = 100;
    const lower = 10;
    const difference = upper - lower;

    return Math.floor(Math.random() * difference + lower);
}
console.log(Bath.randomNumber());

//Random number for customers visited
//Norwich
Norwich.customersVisited = function() {
    return this.randomNumber();
}

console.log(Norwich.customersVisited());

//London
London.customersVisited = function() {
    return this.randomNumber();
}

console.log(London.customersVisited());

//Cardiff
Cardiff.customersVisited = function() {
    return this.randomNumber();
}

console.log(Cardiff.customersVisited())

//York
York.customersVisited = function() {
    return this.randomNumber();
}

console.log(York.customersVisited())

//Bath
Bath.customersVisited = function() {
    return this.randomNumber();
}

console.log(Bath.customersVisited())

//For loop to print all locations

//Parent element
    for( let i = 0; i < locations.length; i++) {
    console.log("locations " + i);

//child element
    for(let j = 8; j <= 16; j ++) {
        console.log("Time at " + j);
        const customers = locations[i].customersVisited();
        console.log("Customers Visted: " + customers);
        console.log("Total cookies sold: " + locations[i].avgCookiesSoldPerCustomer * customers);
      }    
}

