const sentence = "hello there from lighthouse labs";
let countTime = 1000;
let countIndex = 0;
for (const char of sentence) {
  countTime += 50;
  setTimeout(() => {
    countIndex++;
    // console.log(countIndex);
    countIndex === sentence.length
      ? console.log(char)
      : process.stdout.write(char);
  }, countTime);
}
