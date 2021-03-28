let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);



let arrKey = [...shoppingList.keys()];
let arrValue = [...shoppingList.values()];

for (let col of shoppingList.entries()) {
    arrKey.push(col[0]);
    arrValue.push(col[1]);
}

for (let arrKey of shoppingList.keys()){
    console.log(`groceries: ${arrKey}`);
}

for (let arrValue of shoppingList.values()){
    console.log(`amount: ${arrValue}`);
}

for (let col of shoppingList) {
    console.log(col)
}

module.exports = {
    shoppingList,
    arrKey,
    arrValue
}
