const assert = require('assert');
const { getAnimal } = require('../src/index');

describe('Showing name of one animal', function() {
  describe('#getAnimal()', function() {
    it('should return animal kangaroo', function() {
      assert.strictEqual(getAnimal(), 'Kangaroo');
    });
  });
});
