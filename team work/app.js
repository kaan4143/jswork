// You get an array of numbers, return the sum of all of the positives ones. // Example [1,-4,7,12] => 1 + 7 + 12 = 20



// const arr = [1, -4, 7, 12];
// function positiveSum(arr) {
//   const reducer = (accumulator, current) => accumulator + (current > 0 ? current : 0); return arr.reduce(reducer, 0);

// }
// console.log(positiveSum(arr));

//for döngüsü ile yaparsak//


// const arr = [1, -4, 7, 12];
// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) sum += arr[i];
//   }
//   return sum;
// }
// console.log(positiveSum(arr));



//for eachla yaparsak

// const arr = [1, -4, 7, 12];
// function positiveSum(arr) {
//   let sum = 0;
//   arr.forEach((num) => num > 0 && (sum += num));
//   return sum;
// }
// console.log(positiveSum(arr));

----------------------------------------------------------------------------------------------------------------------------------------------------

//muratın sorusu:

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


// let kelime = "abcdefg";
// console.log(kelime);
// let hesapla = (string) => {
//   let i = 0;
//   let yenidizi = [];
//   if (string.length % 2 !== 0) {
//     string = string + "_";
//   }
//   while (i < string.length) {
//     yenidizi.push(string[i] + string[i + 1]);
//     i = i + 2;
//   }
//   console.log(`${yenidizi}`);
// };
// hesapla(kelime);





const twoPair = (str) => {
  let arr = str.split("");
  console.log(arr);
  let pair = "";
  let result = [];
  str.length % 2 != 0 && arr.push("_");
  for (let i = 0; i < arr.length; i += 2) {
    pair = arr[i] + arr[i + 1];
    result.push(pair);
  }
  return result;
};
console.log(twoPair("abcde"));