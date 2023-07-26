// b1
function reverseString(str) {
    var charArray = str.split('');
    var reversedArray = charArray.reverse();
    var reversedStr = reversedArray.join('');
    return reversedStr;
}
  
var originalString = "Hello, world!";
var reversedString = reverseString(originalString);
console.log(reversedString);

// b2
function removeDuplicates(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  var numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
  var uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers);
// b3
function findMostFrequentElement(arr) {
    var frequencyCounter = {};
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
      if (frequencyCounter[element]) {
        frequencyCounter[element]++;
      } else {
        frequencyCounter[element] = 1;
      }
    }
    var mostFrequentElement;
    var maxFrequency = 0;
  
    for (var key in frequencyCounter) {
      if (frequencyCounter[key] > maxFrequency) {
        maxFrequency = frequencyCounter[key];
        mostFrequentElement = key;
      }
    }
    return {
      element: mostFrequentElement,
      frequency: maxFrequency
    };
}
var numbers = [1, 2, 3, 2, 4, 2, 5, 2, 6, 2];
var result = findMostFrequentElement(numbers);
console.log("Phần tử xuất hiện nhiều nhất:", result.element);
console.log("Số lần xuất hiện:", result.frequency);


