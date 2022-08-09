let Seattle = {};
let Tokyo = {};
let Dubai = {};
let Paris = {};
let Lima = {};

const locations = [Seattle, Tokyo, Dubai, Paris, Lima];

Seattle.minCustomer = 23
Seattle.maxCustomer = 65
Seattle.avgPerCustomer = (Seattle.minCustomer + Seattle.maxCustomer)/2;

//console.log(Seattle);

Tokyo.minCustomer = 3
Tokyo.maxCustomer = 24
Tokyo.avgPerCustomer = (Tokyo.minCustomer + Tokyo.maxCustomer)/2;

//console.log(Tokyo);

Dubai.minCustomer = 11
Dubai.maxCustomer = 38
Dubai.avgPerCustomer = (Dubai.minCustomer + Dubai.maxCustomer)/2;

//console.log(Dubai);

Paris.minCustomer = 20
Paris.maxCustomer = 38
Paris.avgPerCustomer = (Paris.minCustomer + Paris.maxCustomer)/2;

//console.log(Paris);

Lima.minCustomer = 2
Lima.maxCustomer = 16
Lima.avgPerCustomer = (Lima.minCustomer + Lima.maxCustomer)/2;

//console.log(Lima);

console.log(locations);

Seattle.randomNumber = function() {
    const upper = this.maxCustomer;
    const lower = this.minCustomer;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;
}

console.log(Seattle.randomNumber());

Tokyo.randomNumber = function() {
    const upper = this.maxCustomer;
    const lower = this.minCustomer;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;
}

console.log(Tokyo.randomNumber());

Dubai.randomNumber = function() {
    const upper = this.maxCustomer;
    const lower = this.minCustomer;
    
    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;
}

console.log(Dubai.randomNumber());

Paris.randomNumber = function() {
    const upper = this.maxCustomer;
    const lower = this.minCustomer;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;
}

console.log(Paris.randomNumber());

Lima.randomNumber = function() {
    const upper = this.maxCustomer;
    const lower = this.minCustomer;
    
    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;
}

console.log(Lima.randomNumber());

    const upper = this.maxCustomer;
    const lower = this.minCustomer;

    const delta = upper - lower;
    const randomCustomers = Math.floor(Math.random() * delta) + lower;



Seattle.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgPerCustomer = this.avgPerCustomer;
    return customers * avgPerCustomer;
}

console.log("Cookies sold in Seattle:" + Seattle.cookiesSold());

Tokyo.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgPerCustomer = this.avgPerCustomer;
    return customers * avgPerCustomer;
}

console.log("Cookies sold in Tokyo:" + Tokyo.cookiesSold());

Dubai.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgPerCustomer = this.avgPerCustomer;
    return customers * avgPerCustomer;
}

console.log("Cookies sold in Dubai:" + Dubai.cookiesSold());

Paris.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgPerCustomer = this.avgPerCustomer;
    return customers * avgPerCustomer;
}

console.log("Cookies sold in Paris:" + Paris.cookiesSold());

Lima.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgPerCustomer = this.avgPerCustomer;
    return customers * avgPerCustomer;
}

console.log("Cookies sold in Lima:" + Lima.cookiesSold());
