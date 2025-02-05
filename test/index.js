let {addLogging} = require('../src/my-sol-logging-espree');
let chai = require('chai');
let should = chai.should();


describe('#addLogging', function() {
  it('adds console.log', function() {
    const input = `
    const hacky = () => {
      let hack = 3;
      return 'hacky string';
    }
    `;
    const expected = `const hacky = () => {
    console.log(\`Entering <anonymous function>() at line 2\`);
    let hack = 3;
    return 'hacky string';
};`
    addLogging(input).should.equal(expected);
  });

  it('NO adds console.log with parameter and hacky with function other ', function() {
    const input = `
    const other = () => {
      let hack = 3;
      return 'hacky string';
    }
    `;
    const expected = `const hacky = () => {
    console.log(\`Entering <anonymous function>() at line 2\`);
    let hack = 3;
    return 'hacky string';
};`
    addLogging(input, 'hacky').should.not.equal(expected);
  });
});