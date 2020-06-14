/*EXERCISE*/
class Sw {
    constructor() {
        this.duration = 0;
        this.state = "stoped";
    }
    start = function () {
        if (this.state === "started")
            throw new Error("Stopwatch is alredy started");

        let startTime = new Date();
        this.startTime = startTime.getTime();
        this.state = "started";
        console.log("Procedure complete");
    };
    stop = function () {
        if (this.state === "stoped")
            throw new Error("Stopwatch was not started");
        let endTime = new Date();
        this.duration = (endTime.getTime() - this.startTime) / 1000;
        this.state = "stoped";
        console.log("Procedure complete");
    };
    reset = function () {
        this.duration = 0;
        this.state = "stoped";
    };
}
sw = new Sw();

// Objects Literals
// const circle = {
//     radius: 1,
//     locatiom: {
//         x: 1,
//         y: 1,
//     },
//     draw: function () {
//         console.log("Draw");
//     },
// };
// circle.draw();

// FACTORIES
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log("Draw");
//         },
//     };
// }
// const circle = createCircle(1);
// circle.draw();

// CONSTRUCTORS
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log(this.radius);
//     };
// }

// const another = new Circle(1); // ==== Circle.call({}, 1)
// another.draw();

// Falotu o constructors property // functions are objects

// Value vs Reference Types
// let x = 10;
// let y = x;

// x = 20;

// Adding/Removing Properties
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log(this.radius);
//     };
// }
// const circle = new Circle(10);
// circle.location = { x: 1 };
// circle["location"] = { x: 2 };
// delete circle["location"];

// Enumerating Properties
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log(this.radius);
//     };
// }

// const circle = new Circle(10);
// // Enumarete all keys
// for (let key in circle) {
//     if (typeof circle[key] !== "function") {
//         console.log(key, circle[key]);
//     }
// }
// // Show all keys and return in a array
// const keys = Object.keys(circle);
// console.log(keys);
// // Check if one key is in a object
// if ("radius" in circle)
//     console.log("Circulo tem uma propriedade chamda radius");

// Abstracttion

// function Circle(radius) {
//     this.radius = radius;
//     this.defaultLocation = { x: 0, y: 0 };
//     this.computeOptimumLocation = function () {
//         // ...
//     };

//     this.draw = function () {
//         this.computeOptimumLocation();
//         console.log(this.radius);
//     };
// }

// const circle = new Circle(10);

// Private Properties and Methods
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0 };
//     let computeOptimumLocation = function (factor) {
//         // ...
//     };

//     this.draw = function () {
//         computeOptimumLocation  (0.1);
//         console.log(this.radius);
//     };
// }
// const circle = new Circle(10);

// Getters and Setters ==== Não peguei direito não
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0 };

//     this.getDefalutLocation = function () {
//         return defaultLocation;
//     };

//     this.draw = function () {
//         console.log(this.radius);
//     };

//     Object.defineProperty(this, "defaultLocation", {
//         get: function () {
//             return defaultLocation;
//         },
//     });
// }
// const circle = new Circle(10);
// circle.draw();
