exports.addToPool = function (objPool,name,parent) {
  obj = {name: name, parent: parent, id: null};
  obj.id = objPool.length + 1;
  objPool.push(obj);
  return objPool;
};
