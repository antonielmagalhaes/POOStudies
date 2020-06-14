# What is

Is a programming parading centered around objects rather than functions 

> There are several languages that supports object oriented programming


- C#
- Java
- Ruby
- Python 
- JavaScript
- ...

Object oriented programming is absolutely necessary if you want to be a seriously developer you need to understand OOP (Object-oriented Programming).

# OOP Principles

Before object-oriented programming we have procedural programming, that divide the program into a set of functions, these functions operate on the data. This part of program is very simple and straightforward. But, as your program grow the number of functions grow, and then there functions for all the place, that paradigm programming __exists a lot of interdependence of code__. Object-oriented Programming came to solve this problem, OOP combine a group of variables and functions into a unity.


__4 Pillars of Object-oriented Programming__

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

## Benefits of OOP

> ***Encapsulation*** = Reduce complexity + increase reusability 
>
>***Abastraction*** = Reduce complexity + isolate impact of changes 
>
>***Inheritance*** = Eliminate redundant code
>
>***Polymorphism*** = Refactor ugly switch/case statements 
 
--------------------------------------

## Encapsulation
 
 
	let baseSalary = 30.000
	let overtime = 10
	let rate = 20
	
	function getWage(baseSalary, overtime, rate){
		return baseSalary + (overtime, rate)
	}
	
	ler employee = {
		baseSalary: 30.000,
		overtime: 10,
		rate: 20,
		getWage: function() {
			retun this.baseSalary + (this.overtime * this.rate)
		}
	};
	employee.getWage()

We have in the example above a function getWage with 3 parameters, and a class with 3 proprieties and 1 method with no one parameters. The best options is the second, where the method don't have any parameters because the propitiates is in the same context, **in a capsule**.

> The best functions are thos with no parameters!


## Abstraction

We can hide some of the proprieties and methods from the outside and it give us a couple of benefits: 

- Simpler Interface 
- Reduce the impact of Change
- inheritance

-----------------------------------------------------

# Practice

JavaScript is all about objects before learn OOP firstly have a good understand of objects. In this section i gonna cover some fundamentals concepts arround objects. 

- Creating Objects 
- Factories and Constructors 
- Primitives and Reference Types
- Working with properties
- Private Properties
- Getters / Setters


### Objects Literals 
### Factories 
### Constructors  
23:27: Constructor Property
25:53: Functions are Objects
### Value vs Reference Types


In javascript we have two categories of types 

Values Types (Primitives) vs References types

***Value Types*** 

- number 
- String
- Boolean
- Symbol
- Undefined 
- nulll

***References Types***

- Object 
- Function == Object
- Array == Object

**Conclusion** 

**Primitives** are copied by their value <br/>
**Objects** are copied by their reference 

-----------------------------

# Adding/Removing Properties 


## Enumerating Properties

## Abstraction

Abstraction means: hide the details, show the essential

