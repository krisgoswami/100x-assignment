/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const transactions = [
  {
    itemName: "Basics of JS",
    category: "Books",
    price: 499,
  },
  {
    itemName: "The Martian",
    category: "Books",
    price: 599,
  },
  {
    itemName: "iPad",
    category: "Electronics",
    price: 79999,
  },
  {
    itemName: "Eggs",
    category: "Groceries",
    price: 150,
  },
];

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  //iterate over transactions
  for (let transaction of transactions) {
    const { category, price } = transaction; //-----code below is an alternate to this code
    // const category = transaction;
    // const price = transaction;

    //if category exists, add the price
    if (categoryMap.hasOwnProperty(category)) {
      categoryMap[category] += price;
    } else {
      categoryMap[category] = price;
    }
  }

  //converting to array of objects

  const result = [];
  for (let category in categoryMap) {
    result.push({
      [category]: categoryMap[category],
    });
  }
  return result;
}

// module.exports = calculateTotalSpentByCategory;
const totalspent = calculateTotalSpentByCategory(transactions);
console.log(totalspent);
module.exports = calculateTotalSpentByCategory;
