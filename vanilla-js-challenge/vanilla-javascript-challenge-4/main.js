// DOCS: https://dummyjson.com/docs/
const BASEURL = 'https://dummyjson.com';

// use the /products endpoint for #1–4

// 1. Create a fetch function called "customFetch" that hits the "https://dummyjson.com/products" endpoint and console logs and returns the data.
// const customFetch = async () => {
// 	const res = await fetch('https://dummyjson.com/products');
// 	const json = await res.json();
// 	console.log('customFetch', json);
// 	return json;
// };

// customFetch();

// 2. Update the "customFetch" function to take in a endpoint and handle errors (including a wrong endpoint)
const customFetch = async (endpoint, options) => {
	try {
		const res = await fetch(`${BASEURL}/${endpoint}`, { ...options });
		if (!res.ok) {
			throw new Error(`${res.status}: ${res.statusText}`);
		}
		const data = await res.json();
		console.log('customFetch', data);
		return data;
	} catch (err) {
		console.error(err.message);
	}
};

// customFetch('products');

// 3. Create a function called "getProducts" that returns all the products in an array. Then list all the products in the DOM in an unordered list.

const createListItem = (item) => `<li>${item}</li>`;
const getProducts = async () => {
	const data = await customFetch('products');
	const titles = data.products.map((product) => product.title);
	const listItems = titles.map((item) => createListItem(item)).join('');
	return document.body.insertAdjacentHTML(
		'afterbegin',
		`<ul>${listItems}</ul>`
	);
};

getProducts();

// 4. Update the "customFetch" function to handle a delete, add, or update a request.
/*
- Use the updated function to update and then delete a product by it’s ID. (FYI, "https://dummyjson.com/products/1" will access the product with the id of 1)
- Use the updated function to POST a new product to the list of products. (FYI, "https://dummyjson.com/products/add" will allow POST requests)
*/

// customFetch('product/1', {
// 	method: 'DELETE',
// });
// customFetch('product/1', {
// 	method: 'PUT',
// 	body: JSON.stringify({ title: 'UPDATED' }),
// 	headers: { 'Content-Type': 'application/json' },
// });
// customFetch('product/add', {
// 	method: 'POST',
// 	body: JSON.stringify({ title: 'News Post!' }),
// 	headers: { 'Content-Type': 'application/json' },
// });

// use the /users, /posts/, and /comments endpoints for #5–7
// 5. Create a function called "getFilteredUsers" that console logs and returns all the users who are 21 years old in a new array of objects in the following structure:
/*
[
  {
    name: "John Doe", (containing first and last name)
    age: 21,
    email: "email@email.com",
  },
  ...
]
See help documentation for help at https://dummyjson.com/docs/users. You can use the "customFetch" function you created earlier.
*/

const getFilteredUsers = async (key, val) => {
	const data = await customFetch(`users/filter?key=${key}&value=${val}`);
	const filteredUsers = data.users.map((user) => ({
		name: `${user.firstName} ${user.lastName}`,
		age: user.age,
		email: user.email,
	}));
	console.log('getFilteredUsers', filteredUsers);

	return filteredUsers;
};

// getFilteredUsers('age', '21');

// 6. Alter the getFilteredUsers function to return all filtered users in an object with the id as the key and the user object as the value. (See help documentation for help at https://dummyjson.com/docs/users)
const customAllUserData = async () => {
	const data = await customFetch(`users`);
	const usersData = data.users.reduce((acc, user) => {
		acc[user.id] = { ...user };
		return acc;
	}, {});

	console.log(usersData);
	return usersData;
};

// customAllUserData();

// 7. Create a new function called "getCommentsOnUsersPosts" that takes in a user id and returns all comments on any post by that user in an array of objects. Each object should contain two properties, postTitle and comments. Comments should contain the userID of the commentor and the text. Bonus points for filtering out posts without comments. Sample below:

/*

[
  {
    postTitle: "Post Title",
    comments: [
      {
      userId: 1,
      text: "Comment Text"
      },
      {
      userId: 2,
      text: "Comment Again"
      }
    ]
  },
  ...
]

See https://dummyjson.com/docs/users, https://dummyjson.com/docs/posts, and https://dummyjson.com/docs/comments for help.
*/

const getCommentsOnUsersPosts = async (id) => {
	const allPostsByUser = await customFetch(`users/${id}/posts`);
	const allComments = await Promise.all(
		allPostsByUser.posts.map(async (post) => {
			const postComments = await customFetch(`posts/${post.id}/comments`);
			if (postComments.total === 0) {
				return;
			}
			const comments = postComments.comments.map((c) => ({
				userId: c.user.id,
				text: c.body,
			}));
			return {
				postTitle: post.title,
				comments,
			};
		})
	);

	console.log(
		'allPostsByUser',
		allComments.filter((c) => c)
	);
	return allComments.filter((c) => c);
};

getCommentsOnUsersPosts(5);
