// 1ci tapsiriq   1 dən 100'ə qədər sadecə cüt ədədləri çapa verin.


for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
    console.log(i);
    }
    }
    
    
    // 2ci tapsiriq     number type'lı bir dəyişən daxil edin.
    // Verilən rəqəmin tək və ya cüt olduğunu console'a çıxaran proqram tərtib edin.
    
    
    
    let reqem = +prompt(
        "Tek reqemdir yoxsa cut?"
      );
      if (reqem % 2 == 0) {
        console.log("Cut");
      } else {
        console.log("Tek");
      }
    
    
    //   3cu tapsiriq  Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
    
    let eded = +prompt(" ededin bolenleri tapmaq");
    for (let i = 0; i < eded; i++) {
      if (eded % i == 0) {
        console.log(i);
      }
    }


    
    // 6ci tapsiriq   Üçbücağın 3 tərəfi verilib.
    // Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.

let birinciTeref = +prompt("1ci Terefi yazin");
let ikinciTeref = +prompt("2ci Terefi yazin");
let ucuncuTeref = +prompt("3cu terefi yazin");
if (birinciTeref == ikinciTeref && ikinciTeref == ucuncuTeref) {
  console.log("Beraberterefli ucbucaq");
} else {
  console.log("Beraberterefli ucbucaq deyil");
}



// 7ci tapsiriq    Üçbücağın 3 tərəfi verilib.
// Onların bərabəryanlı üçbucaq olduğunu təyin edən proqram tərtib edin.

let birinciteref = +prompt("Birinci terefi daxil edin");
let ikinciteref = +prompt("İkinci terefi daxil edin");
let ucuncuteref = +prompt("Ucuncu terefi daxil edin");
if (
  birinciteref == ikinciteref || ikinciteref == ucuncuteref ||
   ucuncuteref == birinciteref)
 {
  console.log("beraberyanlidir");
} else {
  console.log("Beraberyanli deyil");
}


// tapsirq 10       3 rəqəmli hər hansı bir ədəd verilib.
// Həmin ədədin rəqəmlərindən ibarət olan max və min ədədlərini tapın


let number = +prompt("3 reqemli eded yazin");
let numbers = [];

if (number >= 100 && number <= 999) {
  while (number > 0) {
    let num = number % 10;
  }
} else {
  console.log("sehfdir");
}


