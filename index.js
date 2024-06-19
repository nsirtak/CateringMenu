/*****************************************/
/******* GRADED ASSIGNMENT #2 PREP *******/
/************* CATERING MENU *************/
/************ by Carrie Jones ************/
/*****************************************/

/*  
  This is the SOLUTION code. 

 	Tutorial Recording:
		https://youtu.be/tbLMj7h9Ghk

 	Guide:
		https://youtu.be/q82j9SrBkRk

	Starter code:
		https://replit.com/@CarolineRose/CateringMenu-StarterCode

  Find more examples and practice problems here: 
 		https://carolista.github.io/student-resources/
*/

/*
	The goal of this exercise is to learn how to break down a program into small, achievable parts and think through what order things should be in and how it should all fit together. 

	See instructions.txt for requirements.
*/

/*
	The goal of this exercise is to learn how to break down a program into small, achievable parts and think through what order things should be in and how it should all fit together. 
*/


/** IMPORTS **/

// TODO: Import library for getting user input
const input = require('readline-sync');


/** DATA **/

// CUISINE OBJECTS

let italian = {
	name: "Italian",
	pricePerPlate: [20, 47, 78],
	beverages: ["Soda", "Wine", "Champagne"],
	appetizers: ["Bruschetta", "Antipasto Kabobs"],
	bread: "Focaccia",
	salad: "Sicilian",
	entrees: ["Spaghetti Bolognese", "Chicken Fettucine Alfredo"],
	sides: ["Green beans", "Stuffed Artichokes"],
	desserts: ["Spumoni", "Cannoli", "Tiramisu"]
};
let french = {
	name: "French",
	pricePerPlate: [24, 61, 99],
	beverages: ["Soda", "Wine", "Champagne"],
	appetizers: ["Green Olive Tapenade", "Charcuterie Board"],
	bread: "Ficelle",
	salad: "Salade Lyonnaise",
	entrees: ["Chicken Marsala", "Filet Mignon"],
	sides: ["Potato Gratin", "Ratatouille"],
	desserts: ["Macarons", "Chocolate Mousse", "Creme Brulee"]
};
let mexican = {
	name: "Mexican",
	pricePerPlate: [19, 42, 69],
	beverages: ["Soda", "Beer", "Wine"],
	appetizers: ["Nacho Bar", "Empanadas"],
	bread: "Bolillo",
	salad: "Chopped Cilantro Lime",
	entrees: ["Chicken Fajitas", "Mole Poblano"],
	sides: ["Fiesta Rice", "Street Corn"],
	desserts: ["Chocolate Churros", "Tres Leches Cake", "Sopapilla Cheesecake"]
};

// TODO: Collect all cuisine objects in an array
let allCuisines = [italian, french, mexican];

// WAIT! We have one more new cuisine we want to offer our clients, but the data has not been structured the same way. We can write a function later to transform this data and then add the new object to the allCuisines array before running the rest of the program.

let thaiMenuItems = [
	{
		type: "name",
		item: "Thai"
	},
	{
		type: "pricePerPlate",
		item: [22, 50, 81]
	},
	{
		type: "beverages",
		item: ["Soda", "Beer", "Wine"]
	},
	{
		type: "appetizers",
		item: ["Corn Fritters", "Spring Rolls"]
	},
	{
		type: "bread",
		item: "Roti"
	},
	{
		type: "salad",
		item: "Glass Noodle"
	},
	{
		type: "entrees",
		item: ["Red Curry Chicken", "Sweet Chili Salmon"]
	},
	{
		type: "sides",
		item: ["Pad Thai", "Chicken Satay"]
	},
	{
		type: "desserts",
		item: ["Coconut Ice Cream", "Mango Sticky Rice", "Pumpkin & Coconut Custard"]
	}
]

// BUDGET OBJECTS

// TODO: Create objects for each of the packages with name and getMenu properties (getMenu will actually reference a function, making it a method)
let budget = { name: "Budget", getMenu: getBudgetMenu };
let classic = { name: "Classic", getMenu: getClassicMenu };
let deluxe = { name: "Deluxe", getMenu: getDeluxeMenu };

// TODO: Collect all package objects in an array
let allPackages = [budget, classic, deluxe];


/** MINOR FUNCTIONS **/

// TODO: Write a function to transform the new cuisine into the same format as the other cuisines
function getNewCuisine(arrOfObjects) {
	// Create a new object that looks like the other cuisines' objects
	let cuisineObject = {}; // empty for now
	// Since we are being given an array of individual objects, we will use a regular for loop to iterate through
	for (let i=0; i < arrOfObjects.length; i++) {
		// Identify data needed from small object in array
		let currentObject = arrOfObjects[i];
		let newKey = currentObject.type;
		let newValue = currentObject.item;
		// Add these to the new cuisine object as a key-value pair
		cuisineObject[newKey] = newValue;
	}
	// Return new object so it can be added to the array of cuisines
	return cuisineObject;
}

// TODO: Write a function to ask the customer for the number of guests they expect, and validate their input
function getGuests() {
	// Ask once
	let guests = input.question("\nWe can cater for as few as 20 people or as many as 400. How many guests are you expecting? ");
	// Validate and keep asking until they get it right
	while (guests < 20 || guests > 400 || isNaN(guests)) {
		guests = input.question("\nSorry, the number of guests must be 20-400 people. Please try again: ");
	}
	return guests;
}

// TODO: Write a function to display all package options and get the customer's choice, and validate their input
function getPackageIndex() {
	numOptions = allPackages.length;
	// Build list to display for user 
	let options = "";
	for (let i=0; i < numOptions; i++) {
		options += `\n\t${i+1} - ${allPackages[i].name}`;
	}
	// Ask once and display options
	console.log("\nWhich catering package would you like?");
	console.log(options);
	let packageIndex = input.question("\nYour choice: ");
	// Validate and keep asking until they get it right
	while (packageIndex < 1 || packageIndex > numOptions || isNaN(packageIndex)) {
		packageIndex = input.question(`\nInvalid entry. Your choice (1-${numOptions}): `);
		// I chose not to repeat listing the options themselves here, but you could
	}
	return packageIndex - 1;
}

// TODO: Write a function to display all cuisine options and get the customer's choice, and validate their input
function getCuisineIndex() {
	console.log("\nWhich cuisine would you like?");
	numOptions = allCuisines.length;
	// build list to display for user
	let options = ""
	for (let i=0; i < numOptions; i++) {
		options += `\n\t${i+1} - ${allCuisines[i].name}`;
	}
	console.log(options);
	let cuisineIndex = input.question("\nYour choice: ");
	// validate user input
	while (cuisineIndex < 1 || cuisineIndex > numOptions || isNaN(cuisineIndex)) {
		cuisineIndex = input.question(`\nInvalid entry. Your choice (1-${numOptions}): `);
	}
	return cuisineIndex - 1;
}

// TODO: Write a function to create a string that displays the menu portion for a BUDGET package, using the cuisine index to pull the right items - then set the name of this function as the value for getMenu in the budget package object
function getBudgetMenu(cuisineIndex) {
	// Retrieve specific cuisine object
	let cuisine = allCuisines[cuisineIndex];
	// Form string for middle part of estimate
	let menu = `
	MENU
	--------------------------------------------
	Beverage: ${cuisine.beverages[0]}
	Bread: ${cuisine.bread}
	Entree: ${cuisine.entrees[0]}
	Side: ${cuisine.sides[0]}
	Dessert: ${cuisine.desserts[0]}
	-------------------------------------------
	`;
	return menu;
}

// TODO: Write a function to create a string that displays the menu portion for a CLASSIC package, using the cuisine index to pull the right items - then set the name of this function as the value for getMenu in the classic package object
function getClassicMenu(cuisineIndex) {
	// Retrieve specific cuisine object
	let cuisine = allCuisines[cuisineIndex];
	// Form string for middle part of estimate
	let menu = `
	MENU
	--------------------------------------------
	Beverages: ${cuisine.beverages[0]} and ${cuisine.beverages[1]}
	Appetizer: ${cuisine.appetizers[0]}
	Bread: ${cuisine.bread}
	Salad: ${cuisine.salad}
	Entree: ${cuisine.entrees[1]}
	Sides: ${cuisine.sides[0]} and ${cuisine.sides[1]}
	Desserts: ${cuisine.desserts[0]} and ${cuisine.desserts[1]}
	--------------------------------------------
	`;
	return menu;
}

// TODO: Write a function to create a string that displays the menu portion for a DELUXE package, using the cuisine index to pull the right items - then set the name of this function as the value for getMenu in the deluxe package object
function getDeluxeMenu(cuisineIndex) {
	// Retrieve specific cuisine object
	let cuisine = allCuisines[cuisineIndex];
	// Form string for middle part of estimate
	let menu = `
	MENU
	--------------------------------------------
	Beverages: ${cuisine.beverages[0]}, ${cuisine.beverages[1]}, and ${cuisine.beverages[2]}
	Appetizers: ${cuisine.appetizers[0]} and ${cuisine.appetizers[1]}
	Bread: ${cuisine.bread}
	Salad: ${cuisine.salad}
	Entrees: ${cuisine.entrees[0]} and ${cuisine.entrees[1]}
	Sides: ${cuisine.sides[0]} and ${cuisine.sides[1]}
	Desserts: ${cuisine.desserts[0]}, ${cuisine.desserts[1]}, and ${cuisine.desserts[2]}
	--------------------------------------------
	`;
	return menu;
}

// TODO: Write function to build entire estimate
function getEstimate(name, numGuests, packageIndex, cuisineIndex) {
	// Create first part of estimate
	let estimateTop = `
	******************************************** 
	****    Carrie's Catering - Estimate    **** 
	********************************************
	
	Customer: ${name}
	Number of Guests: ${numGuests}

	Package: ${allPackages[packageIndex].name}
	Cuisine: ${allCuisines[cuisineIndex].name}
	`;

	// Use packageIndex & cuisineIndex to call the correct method from allPackages and get the specific menu for the right cuisine 
	let menu = allPackages[packageIndex].getMenu(cuisineIndex);

	// Store price per plate in a variable (you'll use it twice, so simplifying is good)
	let pricePerPlate = allCuisines[cuisineIndex].pricePerPlate[packageIndex];

	// Create last part of estimate
	let estimateBottom = `
	Cost per plate: $${pricePerPlate}
	Total estimate for event: $${pricePerPlate * numGuests}

	Any questions about your estimate? 
	Call Darcy at 314-555-4928.

	******************************************** 
	`;
	return estimateTop + menu + estimateBottom;
}


/** MAIN FUNCTION **/

// TODO: Write one final function to put it all together in sequence, and implement a while loop to ask the user if they want to create another estimate once you have their name and number of guests
function runProgram() {

	// Handle any new data needed before interacting with user
	let newCuisine = getNewCuisine(thaiMenuItems);
	allCuisines.push(newCuisine);

	// Intro
	console.log(`Welcome! We are glad you are considering our catering services for your special event. We offer multiple cuisines and have different packages to fit any budget. We are happy to provide you with an estimate -- our gourmet meal selections are sure to make your event memorable. Let's get started!\n`);

	// Ask for name and number of guests only once
	let name = input.question("Please enter your first and last name:\n");
	let numGuests = getGuests();

	// Loop to provide estimates for any combination of packages and cuisines
	let wantsEstimate = "Y";
	while (wantsEstimate === "Y") {
		// Get package index number
		let packageIndex = getPackageIndex();
		// Get cuisine index number
		let cuisineIndex= getCuisineIndex();
		// Build estimate
		let estimate = getEstimate(name, numGuests, packageIndex, cuisineIndex);
		// Print estimate for user
		console.log(estimate);
		// Ask if they want another estimate
		wantsEstimate = input.question("\nDo you want to get another estimate? (Y/N): ").toUpperCase();
	}

	// Final message if they respond with something other than "Y"
	console.log("\nThank you for stopping by!");
}

// TODO: Call main program to run code above
runProgram();