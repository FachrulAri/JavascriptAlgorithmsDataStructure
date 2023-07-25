// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.
var lengthOfLastWord = function (s) {
  s = s.trim();
  var arr = s.split(" ");
  return arr[arr.length - 1].length;
  // Or we can use for loop on below
  // var cnt = 0;
  // for(var i = s.length-1;i>=0;i--)
  // {
  //     if(s[i]==' ')
  //     {
  //         if(cnt>0)
  //         {
  //             return cnt;
  //         }
  //         continue;
  //     }

  //     cnt+=1;
  // }
  // return cnt;
};
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
lengthOfLastWord("   fly me   to   the moon  ");
