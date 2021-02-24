let input = "As long as theres two people in this world; someone is gonna want someone dead"
let vowels = ["a", "A", "e", "E", "I", "i", "O", "o", "u", "U"]
let resultArray = []

for (var i = 0; i < input.length; i++)
{
  for (var j = 0; j < vowels.length; j++)
  {
    if (input[i] === vowels[j])
    {
      resultArray.push(input[i])
      console.log(input[i])
    }
  }
      if(input[i] === 'e' || input[i] === 'u')
      {
        resultArray.push(input[i])
      }
}
console.log(resultArray.join('').toUpperCase())