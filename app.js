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

// // * ===============================================
// // *                  KARAR YAPILARI
// // * ===============================================

// //**************** IF-ELSE *******************

// console.log("****** CONDITIONS *******");

// //? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
// //? yada 0 oldugunu tespit ederek yazdiriniz.

// const sayi = Number(prompt("Bir sayi giriniz:"));
// if (sayi > 0) {
//   console.log(`${sayi} pozitiftir.`);
// } else if (sayi == 0) {
//   console.log(`${sayi}'a esittir.`);
// } else {
//   console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);


// //? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
// //? yazdiriniz.

// const n1 = +prompt("sayi1")
// const n2 = +prompt("sayi2")
// const n3 = +prompt("sayi3")

// 1.yöntem

// if( n1>= n2 && n1 >= n3){
//     console.log(`${n1} en büyük sayıdır`);
// }
// else if( n2>= n1 && n2 >= n3){
//     console.log(`${n2} en büyük sayıdır`);
// }
// else if( n3 >= n2 && n3 >= n1){
//     console.log(`${n3} en büyük sayıdır`);
// }

// 2.yöntem

// let enbuyuk = n1;
// if (n2 >= enbuyuk) {
//     enbuyuk = n2;
// }

// if (n3 >= enbuyuk) {
//     enbuyuk = n3
// }

// console.log(`${enbuyuk} en büyüktür`);

// 2 sayı için 4 işlem yapabilen hesap makinesi yazınız ödev

// örnek kaldı geçti ternary kullanarak

// const not = +prompt("notunuzu giriniz");
// let sonuc = not >= 50 ? "gecti" : "kaldı"
// console.log(sonuc)

// 2.yöntem

// const not = +prompt("notunuzu giriniz");
// console.log(not >= 50 ? "gecti" : "kaldı");

const yas = 17;
const cinsiyet = "erkek";
const saglikli = true;

yas >= 18 && cinsiyet === "erkek" && saglikli

//! ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

console.log("----------------------------------");
console.log(" ***** Basit Hesap Makinasi ****** ");
console.log("----------------------------------");
const s1 = Number(prompt("1.Sayiyi Giriniz:"));
const islem = prompt("Islemi giriniz: +,-,*, /");
const s2 = +prompt("2.Sayiyi Giriniz:");
let netice = 0;
switch (islem) {
  case "+":
    netice = s1 + s2;
    break;
  case "-":
    netice = s1 - s2;
    break;
  case "*":
    netice = s1 * s2;
    break;
  case "/":
    netice = s1 / s2;
    break;
  default:
    alert("Yanlis islem girisi");
    break;
}
console.log(`${s1} ${islem} ${s2} = ${netice}`);

//! ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
//? Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//? Cuma -> Teamwork
//? Cumartesi ->  InClass + Workshop
//? Pazar -> Self-Study
//? Aksi takdirde -> Yanlis gun girildi.

const gun = prompt("Lutfen bir gun giriniz: ").toLowerCase();
switch (gun) {
  case "pazartesi":
  case "sali":
  case "carsamba":
  case "persembe":
    console.log("Inclass");
    break;
  case "cuma":
    console.log("Teamwork");
    break;
  case "cumartesi":
    console.log("Inclass ve workshop");
    break;
  case "pazar":
    console.log("Self study.");
    break;
  default:
    console.log("Yanlis gun girildi");
}

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.
const maas = Number(prompt("Maasinizi giriniz"));
const asgariUcret = 5500;
const zamliMaas = maas >= asgariUcret ? maas * 1.1 : maas * 1.5;
console.log("NORMAL MAAS:", maas, "ZAMLI MAAS:", Math.trunc(zamliMaas));

//!ODEV4: Kredi Risk Programı
//? Console’dan kişinin gelir ve gider miktarını alan
//? eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//? değilse Kredi Verilemez 🥺
//? şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gider = Number(prompt("Giderlerinizi giriniz"));
const gelir = Number(prompt("Gelirleriniz giriniz"));
const kredi = gelir - gider >= 5000 ? "KREDI ALABILIR 🤑" : " KREDI ALAMAZ 🥺";
console.log(kredi);



// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");

//? Ornek: 1 den n kadar sayiları toplayan kodu yaziniz.

const n = Number(prompt("Bir sayi girniz:"));

let toplam = 0;
for (let i = 1; i <= n; i++) {
  // toplam = toplam + i;
  toplam += i;
  console.log(toplam, i);
}

console.log("SONUC:", toplam);

//? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..

for (let i = 1; i <= 10; i++) {
  const rasgele = Math.round(Math.random() * 100);
  console.log(rasgele);
}

//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

const sayi = Number(prompt("Pozitif Bir sayi giriniz:"));
let asal = true;

if (sayi <= 1) {
  alert("Sayi 1'den buyuk olmalidir.");
} else {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      asal = false;
      break;
    }
  }

  const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
  console.log(`${sayi} ${sonuc}`);
}

// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let not = +prompt("Lutfen 0-100 arasinda bir not girniz.");

while (not < 0 || not > 100) {
  console.log("Not 0-100 arasinda olmalidir");
  not = prompt("Lutfen 0-100 arasinda bir not giriniz.");
}

console.log("Giridiginiz Not:", not);

// if (not < 0 || not > 100) {
//   alert("Not 0-100 arasinda olmalidir");
// }

// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");

console.log("****** DO-WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz.

let not1;
do {
  not1 = +prompt("Lutfen 0-100 arasinda bir not girniz.");
  if (not1 < 0 || not1 > 100) {
    console.log("Not 0-100 arasinda olmaldir.");
    alert("Not 0-100 arasinda olmaldir.");
  }
} while (not1 < 0 || not1 > 100);

console.log("Giridiginiz Not:", not1);
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy

// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNC DECLARATION ******");

//* ORNEK:
//************************************************/
yazdir();

//! Fonksiyonun tanimlanmasi (declaration)
function yazdir() {
  console.log("merhaba");
}

yazdir(); //! invoke, call, cagirma
yazdir();

//* ORNEK2:
//*************************************************/

function selamla(ad, soyAd = "") {
  console.log(`Merhaba ${ad} ${soyAd}`);
}

selamla("Can", "Yilmaz");
selamla("Canan", "Ozturk");
selamla("Ayse");
selamla("John");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK3:
//***************************************************/

function yasHesapla(isim, dogumTarihi) {
  // const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
  // const sonuc = `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
  // return sonuc;
  return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
}

const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Veli Canan", 1980));

//* ORNEK4:
//*****************************************************/

function tekCift(sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
}

console.log(tekCift(5));
console.log(tekCift(2));

//* ORNEK4:
//*****************************************************/
const n = +prompt("Bir sayi giriniz:");
console.log(tekCift(n));

// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

console.log("******** 2- EXPRESSION*******");

//* ORNEK:
//***************************************************/
// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

//! Cannot access 'tekCift1' before initialization  at
// console.log(tekCift1(9));

//! Funct Expression yontemi ile tanimlama
const tekCift1 = function (sayi) {
  return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
};

console.log(tekCift1(5));

//* ORNEK: 3 sayinin en büyüğünü bulan fonks.
//******************************************************/

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log(Number.MIN_VALUE);
// console.log("Girilen sayilarin en buyugu:", buyukBul(n1, n2, n3));
console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9, -1));
console.log("Girilen sayilarin en buyugu:", buyukBul(-8, -9));

console.log("Girilen sayilarin en buyugu:", buyukBul(9, 10));

//* ORNEK: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//**************************************************/
const topla = function (s1, s2) {
  return s1 + s2;
};

const cikar = function (s1, s2) {
  return s1 - s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    default:
      break;
  }
  console.log("SONUC:", sonuc);
  return sonuc;
};

hesapla(3, 5, "+");
console.log(hesapla(4, 3, "/"));

// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

// console.log("**** ARROW ******");

// //* ORNEK: Silindir Hacmi
// //************************************************/

// const r = Number(prompt("yaricap giriniz:"));
// const h = Number(prompt("yukseklik giriniz:"));

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// // console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toExponential()}`);
// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);

// //* ORNEK: Yas hesapla
// //************************************************/

// const tarih = Number(prompt("Dogum Tarihini giriniz:"));

// //! Arrow Func yontemi ile tanimlama
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// //* alternatif
// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// // console.log("YASINIZ:" + yasHesapla(tarih));
// console.log("YASINIZ:" + yasHesaplaKisa(tarih));

// //?-----------------------------------------

// // console.log("YASINIZ:" + yasHesapla2(tarih));
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

// //! Func Expression yontemi ile tanimlama
// const yasHesapla2 = function (tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };
// //?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla3(tarih));

// //! Func Declaration yontemi ile tanimlama
// function yasHesapla3(tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// }
// //?-----------------------------------------

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

let stringResult = "1,1";
// f(n) = f(n-1) + f(n-2)
const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;

  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    stringResult += "," + fib2;
  }

  return fib2;
};

const n = +prompt("n terimini giriniz:");
if (n <= 0) {
  console.log("Lutfen 0 dan buyuk bir sayi giriniz.");
} else {
  console.log(`FIBO(${n})= ${fibo(n)}`);
  console.log(stringResult);
}

// ? =================================================
// ?           FONKSİYONLAR - RECURSIVE
// ? ================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
//* Özellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alınabilir.

//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamini
//* hesaplayarak yazdiran fonksiyonu recursive olarak kodlayiniz.

console.log("****** 2 - RECURSION ********");

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
//! f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const n = +prompt("n terimini giriniz:");
console.log(`FIBO(${n})= ${fibo(n)}`);

// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
console.log("******* 3 - SCOPE ********");

let sayi1 = 5; //! Global Scope
console.log(sayi1); //! 5

const fonks1 = function () {
  sayi1 = 22;
  console.log(sayi1); //! 22
};
fonks1();

console.log(++sayi1); //! 23
console.log(sayi1); //!23

//? --------------------------------------
const sayi2 = 7; //! Global scope
console.log(sayi2); //! 7

const fonks2 = () => {
  const sayi2 = 11; //! Function-scope
  console.log(sayi2); //! 11
};

fonks2();
console.log(sayi2); //!7

if (sayi2 === 8) {
  let sonuc = "Merhaba";
} else {
  sonuc = "Nasilsin"; //! Hoisting oluyor, yani degisken global hale geliyor.
  // console.log(sonuc);
}

console.log(sonuc);