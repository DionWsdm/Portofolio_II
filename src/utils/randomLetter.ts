function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomLetter(): string {
  let result = ""
  while(result.length < 11)
  {
    result += String.fromCharCode(getRandomInt(65, 90))
    for (let i = 0; i < 4; i++)
    result += String.fromCharCode(getRandomInt(97, 122))
    result += " "
  }
  return result
}

console.log(randomLetter())
