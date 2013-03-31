var merge = require("../merge2.js")

require("tap").test("binary-merge", function(t) {

  t.equals(merge([], []).join(), [].join())
  t.equals(merge([1,2], []).join(), [1,2].join())
  t.equals(merge([], [1]).join(), [1].join())
  t.equals(merge([1,3,7], [2,4,6]).join(), [1,2,3,4,6,7].join())


  t.end()
})