function findShortestString(arr) {
  return arr.reduce((a,b) => a.length <= b.length ? a : b)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  const longInput = []

  for (let i = 0; i < 100; i++) {
    longInput.push(Math.random())
  }

  const startTime = Date.now()

  for (let i = 0; i < 1000; i++) {
    findShortestString(['cat', 'hi', 'dog', 'an'])
  }

  const aveTime = (Date.now() - startTime) / 1000

}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
