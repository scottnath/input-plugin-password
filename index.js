'use strict';

/**
 * Password Input Plugin
 *
 *
 * A simple input plugin for a password field
 */
const validation = require('./lib/validation.js');

/**
 * Single Password Input Plugin
 * @module passwordInputPlugin
 */
module.exports = {
  name: 'Password',
  description: 'A simple input plugin for a password field',
  validation: {
    passwordValidation: validation,
  },
  inputs: {
    password: {
      validation: {
        function: 'passwordValidation',
        on: 'blur',
      },
      label: 'Please type your password',
      placeholder: '',
      type: 'password',
    },
  },
  html: '<label for="{{password.id}}">{{password.label}}</label><input type="{{password.type}}" id="{{password.id}}" name="{{password.name}}" value="{{password.value}}" placeholder="{{password.placeholder}}" />',
};
