var assert = require("assert");
var pool = require("../app/addToPool");

describe('universe', function(){
  it('should return true when truth is real', function(){
    assert.equal(true,true);
  })
});

describe('addToPool', function(){
  it('Object should be in pool after we add it.', function(){
    var objPool = [];
    pool.addToPool(objPool,"test1",null);
    assert.strictEqual(objPool[0].name,"test1");
  })
});

describe('addToPool', function(){
  it('Object should have an ID after we add it.', function(){
    var objPool = [];
    pool.addToPool(objPool,"test1",null);
    assert.strictEqual(objPool[0].id,1);
  })
});
