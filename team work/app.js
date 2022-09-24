// You get an array of numbers, return the sum of all of the positives ones. // Example [1,-4,7,12] => 1 + 7 + 12 = 20


// for dögüsü ile çözüm

// const arr = [1, -4, 7, 12];

// function positiveSum(arr)  {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) sum += arr[i]
//   }
//   return sum;
// }
// console.log(positiveSum(arr));

// for each metodu

// const arr = [1, -4, 7, 12];

// function positiveSum(arr) {

//   let sum = 0;
//   arr.forEach((num) => num > 0 && (sum += num) );
//   return sum;
// }

// console.log(positiveSum(arr));



// const arr = [1, -4, 7, 12];

// function positiveSum(arr) {

// const reducer = (accuumulator, current) => accuumulator + (current > 0 ? current : 0); return arr.reduce(reducer,0)
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





// const twoPair = (str) => {
//   let arr = str.split("");
//   console.log(arr);
//   let pair = "";
//   let result = [];
//   str.length % 2 != 0 && arr.push("_");
//   for (let i = 0; i < arr.length; i += 2) {
//     pair = arr[i] + arr[i + 1];
//     result.push(pair);
//   }
//   return result;
// };
// console.log(twoPair("abcde")); //


public class PrintDiamond {
    public static void main(String[] args) {
        System.out.print("Enter the number: ");
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        num--;
        for (int i = num; i > 0; --i) {
            //Insert spaces in order to center the diamond
            for (int n = 0; n < i; ++n) {
                System.out.print("  ");
            }
            System.out.print(" *");
            for (int n = i; n < num; ++n) {
                System.out.print(" + ");
                System.out.print(" ");
            }//Ending bracket of nested for-loop
            System.out.println();
        }//Ending bracket of for loop
        //Print out a diamond shape based on user input
        for (int i = 0; i <= num; ++i) {//<= to print the last asterisk
            //Insert spaces in order to center the diamond
            for (int n = 0; n < i; ++n) {
                System.out.print("  ");
            }
            System.out.print(" *");
            for (int n = i; n < num; ++n) {
                System.out.print(" + ");
                System.out.print(" ");
            }//Ending bracket of nested for-loop
            System.out.println();
        }//Ending bracket of for loop
    }
}