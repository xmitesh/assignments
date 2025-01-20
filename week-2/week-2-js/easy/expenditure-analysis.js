/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();
  transactions.forEach(element => {
    if (map.has(element.category)){
      let  val = map.get(element.category);
      val += element.price;
      map.set(element.category , val);
    }
    else{
      map.set(element.category , element.price);
    }
  });
  const result = Array.from(map,([key,value]) => ({
    category : key ,
    totalSpent : value 
  }))
  return result;
}

module.exports = calculateTotalSpentByCategory;


