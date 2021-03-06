import { expect } from 'chai';
import {sum, sub, mult, div} from '../src/calc.js';

//var expect = require('chai').expect;
//var calc = require('../src/calc.js');

describe('Calc', () => {

  describe('Smoke tests', () => {

    it('should existis the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a.function;
    });

    it('should existis the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a.function;
    });

    it('should existis the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a.function;
    });

    it('should existis the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a.function;
    });

  });

  describe('Sum', () => {

    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });

  });


  describe('Sub', () => {

    it('should return 4 when sub(6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when sub(6,10)', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });

  });


  describe('Mult', () => {

    it('should return 4 when mult(2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });

  });


  describe('Div', () => {

    it('should return 4 when div(8,2)', () => {
      expect(div(8, 2)).to.be.equal(4);
    });

    it('should return `Não é possível` when divide by 0', () => {
      expect(div(8, 0)).to.be.equal('Não é possível');
    });

  });

});
