// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
  let currNode = head;
  let tail = null;
  let prevNode = null;

  while (currNode !== null) {
    prevNode = new ListNode(currNode.val);
    prevNode.next = tail;
    tail = prevNode;
    currNode = currNode.next;
  }

  return prevNode;
};
