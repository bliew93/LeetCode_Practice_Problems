// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  let checkNNodes = ".next".repeat(n);
  let currNode = head;
  let prevNode;

  if (n === 1 && currNode.next === null) {
    head = null;
  } else {
    while (currNode !== null) {
      if (eval(`currNode${checkNNodes}`) === null) {
        if (currNode.next === null) {
          prevNode.next = null;
        } else {
          deleteNode(currNode);
        }
        break;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }

  return head;
};

// helper node functions
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var setNodes = function(arr) {
  let head = new ListNode(arr[0]);
  let currNode = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    currNode.next = newNode;
    currNode = newNode;
  }

  return head;
};

var deleteNode = function(node) {
  if (node.next !== null) {
    node.val = node.next.val;
    node.next = node.next.next;
  } else {
    node = null;
  }
};
