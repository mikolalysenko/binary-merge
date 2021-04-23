"use strict"

function intersect(a, b, compare, joinf, result) {
  var a_ptr = 0
    , b_ptr = 0
    , r_ptr = 0
  if(!result) {
    result = new Array(Math.max(a.length, b.length))
  }
  while(a_ptr < a.length && b_ptr < b.length) {
    if(compare(b[b_ptr], a[a_ptr]) < 0) {
      b_ptr++
    } else if(compare(a[a_ptr], b[b_ptr]) < 0) {
      a_ptr++
    } else {
      result[r_ptr++] = joinf ? joinf(a[a_ptr], b[b_ptr]) : a[a_ptr]
      a_ptr++
      b_ptr++
    }
  }
  result.length = r_ptr
  return result
}

module.exports = intersect
