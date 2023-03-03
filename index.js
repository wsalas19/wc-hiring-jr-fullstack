/*
Jr Fullstack Developer Test - Webcat

Welcome to the Technical test for Jr Fullstack Developer

We hope that everything is fully clear and understandable.
However, if you have any questions, please send us an email
to support@webcat.app with the subject "Jr Fullstack Test Questions"
*/

import $t from "./libs/test.js";

/*
1. Data manipulation:
  1. Transform the source data to the target data.
  2. Return the target data.

  Source data:
    You can inspect the source data at /libs/1-source-data.js
  Target Data:
    {
      balance: 1606400,
      income: 3900000,
      expenses: 2293600,
      byCategories: {
        Restaurants: -43600,
        Income: 3900000,
        Groceries: -250000,
        Rent: -2000000
      }
    }

  Hint: Use native array methods as well as
    Lodash(https://lodash.com/docs) modules.
*/
import _ from "lodash";
const source = $t.source(1);
$t.answer(1, async () => {
	// Your code goes here

	let balance = 0;
	let income = 0;
	let expenses = 0;
	let byCategories = {};

	source.forEach((transaction) => {
		if (transaction.type === "income") {
			balance += transaction.amount;
			income += transaction.amount;
		} else {
			balance -= transaction.amount;
			expenses += transaction.amount;
		}

		// Add to byCategories object
		if (!byCategories[transaction.category]) {
			byCategories[transaction.category] = 0;
		}

		if (transaction.type === "income") {
			byCategories[transaction.category] += transaction.amount;
		} else {
			byCategories[transaction.category] -= transaction.amount;
		}
	});
	const targetData = {
		balance,
		income,
		expenses,
		byCategories,
	};
	return targetData;
});

/*
2. Asynchronous programming: 
  1. First get the list of ids from the async function $source.getIds()
  2. Then, for every id call the async function $source.getText(id) to get its text
  3. Finally, return the list of resulting texts as an array.
    
*/
const $source = $t.source(2);
$t.answer(2, async () => {
	// Your code goes here:
	// 1. Get ids: $source.getIds()
	// 2. Get text for every id: $source.getText(id)
	// 3. Return array of texts
	let id = await $source.getIds();

	let texts = await Promise.all(
		id.map(async (index) => {
			return await $source.getText(index);
		})
	);

	return texts;
});
