/**
 * @param {int} magicNumber
 * @param {int[]} numbers
 * @return {boolean}
 */

function arithmeticBoggle(magicNumber, numbers) {
  // Fill in the code here

  if (
    (magicNumber === 0 && numbers.length === 0) ||
    (magicNumber === numbers[0] && numbers.length === 1)
  ) {
    return true;
  } else {
    let queue = [numbers[0]];
    for (let i = 0; i < numbers.length - 1; i++) {
      queue.forEach(el => {
        queue.push(el + numbers[i + 1]);
        queue.push(el - numbers[i + 1]);
      });

      queue.shift();
    }

    return queue.includes(magicNumber);
  }
}

// Don't edit the line below
exports.arithmeticBoggle = arithmeticBoggle;
