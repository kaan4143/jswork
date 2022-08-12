// var x = 10;
// console.log(x);
// {

// var x = 3;
// console.log(x)
// }

// console.log(x);

// let x = 10;
// console.log(x);
// {

// let x = 3;
// console.log(x);
// }

// console.log(x);

// const x = 3.14;
// console.log(x);
// {
//    const x = 7;
//     console.log(x);
// }


// let x = 5;
// console.log(`xin değeri: ${x}`);

// let x = 5;
// console.log(`xin değeri ${typeof x}`);

// let x = "a";
// console.log(`xin değeri ${typeof x}`);

// let x = "a";
// console.log("xin değeri" + typeof x);

// let x = 5;
// let y = 8;
// console.log(`x büyüktür y den ${x>y}`);

// let x = 5;
// let y = 8;
// console.log(`x büyüktür y den ${typeof (x>y)}`);

// let x = 5;
// console.log(x);
// x=null;
// console.log(x);

// let x = 5;
// let y = 6;
// console.log(`x artı y eşittir; ${x+y}`);
// y = null;
// console.log(`x artı y eşittir; ${x+y}`);

// (symbol ile biginit incelenecek)

// let x = +prompt("bir sayı giriniz");
// console.log(x);
// console.log(`girilen sayının data tipi ${typeof x}`);

// let x = prompt("bir sayı giriniz");
// console.log(x);
// console.log(`girilen sayının data tipi ${typeof x}`);

// let x = 5;
// let y = 3;
// x *= y;
// console.log(x);

// let a = 10;
// let b = a++;
// console.log(`a nın değeri ${a} bnin değeri ${b}`);

// let a = 10;
// let b = ++a;
// console.log(`a nın değeri ${a} bnin değeri ${b}`);

// let a = 3;
// let b = "3";
// console.log(`a ve b bir birine tip ve sayı olarak eşit değil doğru mu ${a!==b}`);

// let a = 3;
// let b = "3";
// console.log(`a ve b bir birine tip ve sayı olarak eşit mi ${a===b}`);

// let x = 5;
// let y = 3;
// console.log(`girilen ifade ${x>4 && y>2}`);


// let x = 5;
// let y = 3;
// console.log(`girilen ifade ${x>4 || y>4}`);

// let x = 5;
// let y = 3;
// console.log(`girilen ifade ${x>8 || y>4}`);

// let x = 5;
// let y = 3;
// console.log(`girilen ifade ${!(x==y)}`);

// let a = null;
// let b = "kaan";
// let c = 42;
// console.log(`atanan değer ${a ?? b}`)

// let a = null;
// let b = "kaan";
// let c = 42;
// let sonuç = c ?? b
// console.log(sonuç);

// kullanıcıdan 2 kenar değeri girildiğinde dikdörtgenin 
// alanını hesaplayan programı yazdırın

// let x = +prompt("birinci kenarı giriniz");
// let y = +prompt("ikinci kenarı giriniz");
// let alan = x*y;
// console.log(`dikdörtgenin alanı ${alan}`);

// celsius değeri girildiğinde fahrenait değerini 
// hesaplayan programı yazınız

// let celsius = +prompt("celsius değeri giriniz");
// let fahrenait = (9*celsius+(32*5)/5);
// console.log(`fahrenait karşılığı ${fahrenait}`);

// kullanıcıdan kenarları istenen üçgenin alanını hesaplat

// let a = +prompt("birinci kenarı giriniz");
// let b = +prompt("birinci kenarı giriniz");
// let c = +prompt("birinci kenarı giriniz");
// const alfa = (a+b+c)/2;
// const alan = Math.sqrt(alfa*((alfa-a)*(alfa-b)*(alfa-c)));
// console.log(alan);

// girilen 3 tane 2 basamaklı sayının en az 2 tanesinin 
// birler basamağının aynı olması durumunu 
// karşılaştıran programı yazınız?

// let a = +prompt("brinci 2 basamaklı sayıyı giriniz");
// let b = +prompt("ikinci 2 basamaklı sayıyı giriniz");
// let c = +prompt("üçüncü 2 basamaklı sayıyı giriniz");

// let sonuç = a%10 === b%10 || a%10 === c%10 || b%10 === c%10;
// console.log(`girilen üç sayıdan en az iki tanesinin  1. basamklarının eşit olma durumu ${sonuç}`)
