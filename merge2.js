"use strict"

function merge(a, b, compare, result, dedup=false) {
  var a_ptr = 0
    , b_ptr = 0
    , r_ptr = 0
  if(!result) {
    result = new Array(a.length + b.length)
  }
  while(a_ptr < a.length && b_ptr < b.length) {
    if(compare(b[b_ptr], a[a_ptr]) < 0) {
      result[r_ptr++] = b[b_ptr++]
    } else if(!dedup || compare(a[a_ptr], b[b_ptr]) < 0) {
      result[r_ptr++] = a[a_ptr++]
    } else {
      result[r_ptr++] = a[a_ptr++]
      b_ptr++
    }
  }
  while(a_ptr < a.length) {
    result[r_ptr++] = a[a_ptr++]
  }
  while(b_ptr < b.length) {
    result[r_ptr++] = b[b_ptr++]
  }
  if (dedup) result.length = r_ptr
  return result
}

module.exports = merge
