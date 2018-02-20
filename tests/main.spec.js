var expect = require('chai').expect;

describe('Main', function () {

  var arr;

  // Roda uma vez antes de todos os blocos
  before(function () {

  });

  // Roda uma vez depois de todos os blocos
  after(function () {

  });

  // Roda toda vez antes de cada bloco
  beforeEach(function () {
    arr = [1, 2, 3]
  });

  // Roda toda vez depois de cada bloco
  afterEach(function () {

  });

  // testar tipos ou se existe (smoke test)
  it('should be a array', function(){
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove a value 3 when use pop in the array', function () {
    arr.pop();
    expect(arr).to.not.include(3);
  });


  it('should return true when pop 3 from the array', function () {
    expect(arr.pop() === 3).to.be.true;
  });


  it('shoud have a size of 2 when pop a value from the array', function () {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

});
