const {expect} = require('chai');
const {sum} = require('./helpers');

describe('Lesson 3.3', () => {
    it('sum is sum', ()=> {
        expect(sum(0)).to.equal(0);
    });
    it('sum 0 is 0', ()=> {
        expect(sum(0,0,0,0)).to.equal(0);
    });
});
