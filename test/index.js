// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module/* , options */)
let {addLogging} = require('../my-sol-logging-espree');
const { assert } = require('chai');
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
});