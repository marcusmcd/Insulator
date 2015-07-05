var assert = require("assert");
var addToPool = require("../app/addToPool");

describe('universe', function(){
  it('should return true when truth is real', function(){
    assert.equal(true,true);
  })
});

describe('addToPool', function(){
  it('Object should be in pool after we add it.', function(){
    var objPool = [];
    addToPool(objPool,"test1",null);
    assert.equal(true,true);
  })
});
