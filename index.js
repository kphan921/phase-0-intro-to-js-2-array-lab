// Write your solution here!
var cats = [];
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    var newArr = [...cats];
    newArr.push(name);
    return newArr;
}

function prependCat(name) {
    var newArr = [...cats];
    newArr.unshift(name);
    return newArr;
}

function removeLastCat() {
    var newCats = [...cats];
    newCats.pop();
    return newCats;
}

function removeFirstCat() {
    var newCats = [...cats];
    newCats.shift();
    return newCats;
}