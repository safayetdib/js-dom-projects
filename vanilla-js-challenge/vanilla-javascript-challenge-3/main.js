import { peeps, comments } from './data.js';

// EASIER CHALLENGES (using the peeps array) //

// 1. Count the number of people in the people array.
const numberOfPeople = peeps.length;
console.log('numberOfPeople', numberOfPeople);

// 2. List full names of people in a new array.
const fullNames = peeps.map((p) => p.name.first + ' ' + p.name.last);
console.log('fullNames', fullNames);

// 3. Return “true” if everyone is older than 24.
const olderThan24 = (peeps) => {
	return peeps.every((p) => p.age > 24);
};
console.log('olderThan24', olderThan24(peeps));

// 4. Return “true” if at least one person is younger than 26.
const youngerThan24 = (peeps) => {
	return peeps.some((p) => p.age < 26);
};
console.log('youngerThan24', youngerThan24(peeps));

// 5. Return a new array called “young peeps” of all peeps less than 30.
const youngPeeps = [...peeps.filter((p) => p.age < 30)];
console.log('youngPeeps', youngPeeps);

// 6. Sort the peeps by age from oldest to youngest in an array called “sortedPeeps”.
const sortedPeeps = [...peeps.sort((a, b) => b.age - a.age)];
console.log('sortedPeeps', sortedPeeps);

// 7. Create a new array called “firstNamePeeps” with only the first names of the peeps.
const firstNamePeeps = peeps.map((p) => p.name.first);
console.log('firstNamePeeps', firstNamePeeps);

// HARDER CHALLENGES (using the comments object and peeps array) //

// 1. List all the comments in an array of strings called “commentsArray”
const commentsArray = Object.values(comments).map((comment) => comment.text);
console.log('commentsArray', commentsArray);

// 2. Return all comments with the word “love” in the comment in a new array called “loveComments”
const loveComments = commentsArray.filter((c) => c.includes('love'));
console.log('loveComments', loveComments);

// 3. List all the comments in an array of strings called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.
const sortedCommentsArray = Object.values(comments)
	.filter((c) => c.rating)
	.sort((a, b) => a.rating - b.rating)
	.map((c) => c.text);
console.log(sortedCommentsArray);

// 4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value.
const commentObj = Object.entries(comments).reduce(
	(acc, comment) => ({ ...acc, [comment[0]]: comment[1].text }),
	{}
);
console.log('commentObj', commentObj);

// 5. Return a new object called “groupedRatings” with the rating as a key and an array of comments with that rating as the value. Ignore comments without a rating.
const groupedRatings = Object.values(comments).reduce((acc, comment) => {
	if (!comment.rating) {
		return acc;
	}
	const key = comment.rating;
	const currentGroup = acc[key] || [];
	return { ...acc, [key]: [...currentGroup, comment] };
}, {});
console.log('groupedRatings', groupedRatings);

// 6. Return the average rating of all comments.
const averageRating =
	Object.values(comments).reduce((acc, comment) => {
		return (acc += comment.rating || 0);
	}, 0) / Object.values(comments).filter((c) => c.rating).length;
console.log('averageRating', averageRating);

// 7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a string key. The value of each object should be an array of comment objects by the person.
const groupedPeepComments = Object.values(comments).reduce((acc, comment) => {
	const peep = peeps.find((p) => p.id === comment.userId);
	const key = `${peep.name.first} ${peep.name.last}`;
	const currGroup = acc[key] || [];
	return { ...acc, [key]: [...currGroup, comment] };
});

console.log('groupedPeepComments', groupedPeepComments);

console.table(comments);
