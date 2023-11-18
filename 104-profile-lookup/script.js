// We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

// Setup

const contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"],
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"],
	},
];

function lookUpProfile(name, prop) {
	// A function named lookUpProfile is defined, taking two parameters: name and prop.
	for (let i = 0; i < contacts.length; i++) {
		// A for loop is used to iterate through each contact in the contacts array.
		if (contacts[i].firstName === name) {
			// Check if the current contact's firstName property matches the provided name.
			if (contacts[i].hasOwnProperty(prop)) {
				// Check if the current contact has the provided property (prop).
				return contacts[i][prop];
				// If the property exists, return its value.
			} else {
				return "No such property";
				// If the property does not exist, return a string indicating so.
			}
		}
	}
	return "No such contact";
	// If no contact has the provided name, return a string indicating that there is no such contact.
}

console.log(lookUpProfile("Akira", "likes"));
