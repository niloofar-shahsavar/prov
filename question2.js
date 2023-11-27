// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes


function filterWordsWithLetterA(words) {
  //Din kod här
  let myWords = [];
  for (let index = 0; index < words.length; index++) { 
  if (words[index].includes("a")) 
  {
    myWords.push(words[index]);
  }
return words.filter(word => word.includes("a"));;
}
}
console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]

