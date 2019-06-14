import express from 'express';
import subject from '../src/index';

const app = express();

describe('the module', () => {
  it('return an object', () => {
    expect(subject(app)).toEqual({});
  });
});
