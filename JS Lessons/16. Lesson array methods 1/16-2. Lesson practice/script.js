let randomArr = [11, "cat", true, 4, "mouse", 5, 9, 5, 76, false];

function getArrayByData(array, dataType) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === dataType) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(getArrayByData(randomArr, "number"));
console.log(getArrayByData(randomArr, "boolean"));
