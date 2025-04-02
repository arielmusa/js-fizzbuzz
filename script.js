/* Scrivi un programma che stampi i numeri da 1 a 100,
- per i multipli di 3 stampi "Fizz" al posto del numero
- per i multipli di 5 stampi "Buzz" al posto del numero
- per i multipli di 3 e di 5 stampi "FizzBuzz" al posto del numero */

/* for (i = 1; i <= 100; i++) {
  if (i % 3 !== 0) console.log(i);
  if (i % 5 !== 0) console.log(i);
  if (i % 3 === 0) console.log("Fizz");
  if (i % 5 === 0) console.log("Buzz");
  if (i % 3 && i % 5 === 0) console.log("FizzBuzz");
} */

const multThree = "Fizz";
const multFive = "Buzz";
const multThreeFive = "FizzBuzz";

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log(multThreeFive);
  else if (i % 5 === 0) console.log(multFive);
  else if (i % 3 === 0) console.log(multThree);
  else console.log(i);
}
