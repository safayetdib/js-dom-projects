// BEGINNER CHALLENGES (unless otherwise stated, use the names array in all challenge points)
const names = ['Derek', 'Joe', 'Anna', 'Coen', 'Chris', 'Macey', 'Ella'];

// 1. Add a name to the beginning of the names array
names.unshift('Paul');

// 2. Add a name to the end of the names array
names.push('David');

// 3. Remove the name you added to the beginning of the names array
names.shift();

// 4. Remove the name you added to the end of the names array (return the name to an original)
names.pop();

// 5. Create a new array called "lowercasedNames" with each name lowercased
// let lowercasedNames = [];
// names.forEach((name) => lowercasedNames.push(name.toLowerCase()));
const lowercasedNames = [...names.map((name) => name.toLowerCase())];
console.log('lowercasedNames', lowercasedNames);

// 6. Sort the names array alphabetically
names.sort();

// 7. Find the index of "Chris"
const chrisIndex = names.indexOf('Chris');
console.log('chrisIndex', chrisIndex);

// 8. Create a new array called "afterChris" with all names after "Chris" in the names array
const afterChris = names.slice(chrisIndex + 1);
console.log('afterChris', afterChris);

// 9. Alter the original array to only contain the names before "Chris"
names.splice(chrisIndex);

// 10. Return "true" if the names array contains "Chris" and "false" if it does not (hint: it should be false now)
const containsChris = names.includes('Chris');
console.log('containsChris', containsChris);

console.log(names);

// INTERMEDIATE CHALLENGES (unless otherwise stated, use the peeps array in all challenge points)
const peeps = [
	{
		id: 1,
		name: 'Chris',
		age: 24,
		favoriteNumbers: [1, 4, 8, 12, 32],
	},
	{
		id: 2,
		name: 'Terrance',
		age: 37,
		favoriteNumbers: [2, 8, 9],
	},
	{
		id: 3,
		name: 'Megan',
		age: 22,
		favoriteNumbers: [23, 14],
	},
	{
		id: 4,
		name: 'Juan',
		age: 18,
		favoriteNumbers: [23, 14, 2],
	},
	{
		id: 5,
		name: 'Tina',
		age: 42,
		favoriteNumbers: [12, 9, 1, 4, 18],
	},
	{
		id: 6,
		name: 'Lin',
		age: 24,
		favoriteNumbers: [3, 9],
	},
];

// 1. Add a boolean property "isAwesome" for each peep and set it to "true" if the person has at least 3 favorite numbers (or false if not).
peeps.forEach((peep) => {
	peep.isAwesome = peep.favoriteNumbers.length >= 3;
});

// 2. Return a new array called "youngPeeps" with peeps 25 or younger.
const youngPeeps = peeps.filter((peep) => peep.age <= 25);
console.log('youngPeeps', youngPeeps);

// 3. Sort the favoriteNumbers property from least to greatest for each peep in the peeps array
peeps.forEach((peep) => peep.favoriteNumbers.sort((a, b) => a - b));

// 4. Return "true" if every person has an age below 50 and "false" if not.
const ageBelow50 = peeps.every((p) => p.age < 50);
console.log('ageBelow50', ageBelow50);

// 5. Create a function called "findPeep" that returns the peep for an ID passed in and returns "not found" if the peep does not exist. Call it for an id that exists and one that does not.
const findPeep = (id) => {
	const peepById = peeps.find((p) => p.id === id);
	return peepById ? peepById : 'not found';
};
console.log('findPeep', findPeep(1), findPeep(9));

// 6. Create a new array called "reversedPeeps" with the peeps array order reversed
const reversedPeeps = [...peeps].reverse();
console.log('reversedPeeps', reversedPeeps);

// 7. Add an additional property on each peep object called favoriteNumbersSum with a single number value which equals the total of all their favorite numbers.
peeps.forEach((p) => {
	p.favoriteNumbersSum = p.favoriteNumbers.reduce((a, b) => a + b, 0);
});

// 8. Create a new array called "numberOnePeeps" with all people that include a favorite number of "1". Include only their names and ids in the new array.
const numberOnePeeps = peeps
	.filter((p) => p.favoriteNumbers.includes(1))
	.map((p) => {
		return {
			id: p.id,
			name: p.name,
		};
	});
console.log('numberOnePeeps', numberOnePeeps);

// 9. Combine all peeps from the numberOnePeeps (#8 above) which are also in the youngPeeps (#2 above) array into a new array called "freshPeeps". Include peeps with unique ids only from the youngPeeps array.
const freshPeeps = [...numberOnePeeps];
youngPeeps.forEach((yp) => {
	if (!freshPeeps.find((fp) => fp.id === yp.id)) {
		freshPeeps.push(yp);
	}
});

console.log('freshPeeps', freshPeeps);

// 10. Return a single value representing the total of all favoriteNumbers for anyone with the isAwesome property set to "true" (HINT: should be 159).
const totalOfFavNums = peeps
	.filter((p) => p.isAwesome)
	.reduce((a, b) => a + b.favoriteNumbersSum, 0);

console.log('totalOfFavNums', totalOfFavNums);

console.table(peeps);
