// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/
var isValidSudoku = function(board) {
  let subBoxesArr = new Array(9).fill([]);
  let colArr = [];
  let rowArr = [];
  for (let i = 0; i < board.length; i++) {
    colArr = board.map(row => row[i]);
    if (hasDup(colArr)) {
      return false;
    } else {
      colArr = [];
    }

    for (let j = 0; j < board.length; j++) {
      rowArr.push(board[i][j]);
      let subBoxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      subBoxesArr[subBoxesArr] = board[i][j];
      if (hasDup(subBoxesArr[subBoxIdx])) {
        return false;
      }
    }

    if (hasDup(rowArr)) {
      return false;
    } else {
      rowArr = [];
    }
  }

  return true;
};

// helper function to check if an array has a duplicate
var hasDup = function(arr) {
  let counterHash;

  counterHash = arr.reduce((acc, el) => {
    acc[el] && el !== "." ? (acc[el] += 1) : (acc[el] = 1);
    return acc;
  }, {});

  if (Object.values(counterHash).some(el => el > 1)) {
    return true;
  } else {
    return false;
  }
};

// [0][0], [2][2], [3][3], [5][5], [6][6] [8][8]
// [3][3], [5][5]
// [6][6], [8][8]
