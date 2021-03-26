let shopingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);



let arrKey = [...shopingList.keys()];
let arrValue = [...shopingList.values()];

for (let arrKey of shopingList.keys()){
    console.log(`groceries: ${arrKey}`);
}

for (let arrValue of shopingList.values()){
    console.log(`amount: ${arrValue}`);
}

for (let col of shopingList) {
    console.log(col)
}

module.exports = {
    shopingList,
    arrKey,
    arrValue
}