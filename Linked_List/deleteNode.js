// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/

/* 
 * Definition for singly-linked list.
 * 
 *  function ListNode(val) {
 *    this.val = val;
 *    this.next = null;
 *  }
*/

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
