//console.log("classes and constructors");


function locationsClass(name,min,max,avg){

    this.name                       = name;
    this.minCustomersVisited        = min;
    this.maxCustomersVisited        = max;
    this.avgCookiesSoldPerCustomer  = avg;
    this.randomNumber = function(){
        const upper = 100;
        const lower = 10;
        const difference = upper - lower;

        return Math.floor(Math.random() * difference + lower);
    }
    this.customersVisited = function(){
        return this.randomNumber();
    }
    this.cookiesSold = function(){
        return this.customersVisited * this.avgCookiesSoldPerCustomer;
    }
}

let London  = new locationsClass("London",22,98, 12);
let Norwich = new locationsClass("Norwich",15,78,10);
let Cardiff = new locationsClass("Cardiff",14,60,8);
let York    = new locationsClass("York",26,72,19);
let Bath    = new locationsClass("Bath",8,51,17);

const locations = [London, Norwich, Cardiff, York, Bath];

for (let i = 0; i < locations.length;i++){
    console.log(locations[i].name);
for (let j = 7; j < 17;j++){
    console.log("Customers visited at ");
    console.log(j + ":00");
    console.log("was")
    console.log(locations[i].customersVisited());
    }
} 

