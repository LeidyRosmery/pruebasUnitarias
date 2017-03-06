var assert = require('assert');
var app = require('../app.js');

describe('Suma testing', function() {
  it('Al recibir dos números esos deben sumarse', function() {
    assert.equal(9,app.suma(4,5));
    assert.equal(-8,app.suma(-18,10));
    assert.equal(1234,app.suma(1000,234));
  });

  it('Al recibir dos strings numericos estos deben sumarse correctamente', function() {
    assert.equal(9,app.suma("4","5"));
    assert.equal(4,app.suma("2","2"));
    assert.equal(10,app.suma("5","5"));
  });

  it('Si no pasamos un parametro este debe ser considerado como 0', function() {
    assert.equal(5,app.suma(5));
    assert.equal(10,app.suma(10));
    assert.equal(10,app.suma(undefined,10));
  });

  it('En caso no tenga parametros devolver nulo',function() {
    assert.equal(null,app.suma());
  });

  it('En caso se ingresen parametros no numericos devolver nulo',function() {
    assert.equal(null,app.suma("a","b"));
  })
});
