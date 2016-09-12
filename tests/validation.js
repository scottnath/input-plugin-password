import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'password',
    value: 'foo bar baz',
  },
  all: {
    password: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    password: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});
