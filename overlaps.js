"use strict"

function overlaps(a, b, compare) {
  var a_ptr = 0
    , b_ptr = 0
  while(a_ptr < a.length && b_ptr < b.length) {
    if(compare(b[b_ptr], a[a_ptr]) < 0) {
      b_ptr++
    } else if(compare(a[a_ptr], b[b_ptr]) < 0) {
      a_ptr++
    } else {
      return true
    }
  }
  return false
}

module.exports = overlaps
