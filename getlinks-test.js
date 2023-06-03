// Candidate Name : Muhammad Ibrahim
// "Kindly ask candidates to write code as the initial screening question to change this array
// ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"]
// to be “BUILD THE NEXT ERA OF SOFTWARE DEVELOPMENT” as a string in the simplest way in Javascript"


const array = ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"];
const result = array.join(' ').replace(/\$/g, '').toUpperCase();
console.log(result);